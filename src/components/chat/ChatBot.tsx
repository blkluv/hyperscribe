import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Trash2, Save, LucideLoader, ArrowUp } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Local storage key for saving chat history
const CHAT_HISTORY_KEY = 'hyperscriber-chat-history';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [currentStreamedMessage, setCurrentStreamedMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem(CHAT_HISTORY_KEY);
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        if (Array.isArray(parsedMessages)) {
          setMessages(parsedMessages);
        }
      } catch (e) {
        console.error('Failed to parse saved messages:', e);
        // Clear corrupted data
        localStorage.removeItem(CHAT_HISTORY_KEY);
      }
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  // Scroll to bottom of messages whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, currentStreamedMessage]);

  // Focus input when opening the chat
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStreamedResponse = async (reader: ReadableStreamDefaultReader<Uint8Array>) => {
    setIsStreaming(true);
    setCurrentStreamedMessage('');
    let fullResponse = '';

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        // Convert the Uint8Array to a string
        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split('\n').filter(line => line.trim() !== '');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') {
              break;
            }

            try {
              const parsedData = JSON.parse(data);
              if (parsedData.choices && parsedData.choices[0].delta.content) {
                const content = parsedData.choices[0].delta.content;
                fullResponse += content;
                setCurrentStreamedMessage(prev => prev + content);
              }
            } catch (err) {
              console.error('Error parsing streaming data:', err);
            }
          }
        }
      }
    } catch (error) {
      console.error('Error reading stream:', error);
      toast({
        title: "Streaming Error",
        description: "Failed to stream the response. Please try again.",
        variant: "destructive"
      });
    } finally {
      // Add the complete streamed message to the messages array
      if (fullResponse) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: fullResponse
        }]);
      }
      setIsStreaming(false);
      setCurrentStreamedMessage('');
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || isStreaming) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Get the session asynchronously first
      const { data: sessionData } = await supabase.auth.getSession();
      const accessToken = sessionData?.session?.access_token || '';
      
      const response = await fetch('https://bkdjrpuqyafnqaoobcky.functions.supabase.co/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          message: input,
          previousMessages: messages,
          stream: true,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get a response');
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      if (reader) {
        await handleStreamedResponse(reader);
      } else {
        throw new Error('Failed to get stream reader');
      }
    } catch (error) {
      console.error('Chat error:', error);
      setIsLoading(false);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to get a response. Please try again.",
        variant: "destructive"
      });
    }
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem(CHAT_HISTORY_KEY);
    toast({
      title: "Chat Cleared",
      description: "Your conversation history has been cleared.",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            size="icon" 
            className="h-12 w-12 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
            onClick={() => setIsOpen(true)}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[90vw] sm:w-[400px] p-0 bg-background/95 backdrop-blur-sm border-l border-blue-200/20">
          <div className="flex flex-col h-[100vh]">
            <div className="p-4 border-b border-blue-200/20 bg-gradient-to-r from-blue-600/10 to-blue-500/10 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gradient">Chat with HyperScriber AI</h2>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="absolute right-0 top-[60px] bg-background shadow-md rounded-md p-2 border border-blue-200/20">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearChat}
                    className="flex items-center gap-2 text-red-500 hover:text-red-600 hover:bg-red-100/10 w-full justify-start"
                  >
                    <Trash2 className="h-4 w-4" /> Clear Chat
                  </Button>
                </CollapsibleContent>
              </Collapsible>
            </div>
            
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.length === 0 && (
                  <div className="flex justify-center items-center h-32 text-muted-foreground">
                    <div className="text-center">
                      <p>How can I help with your writing today?</p>
                      <p className="text-sm mt-2">Ask me anything about content creation, editing, or improving your writing style.</p>
                    </div>
                  </div>
                )}
                
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md'
                          : 'bg-gray-100 dark:bg-gray-800 shadow-sm'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                
                {isStreaming && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-800 max-w-[80%] rounded-lg p-3 shadow-sm">
                      {currentStreamedMessage || (
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {isLoading && !isStreaming && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-800 max-w-[80%] rounded-lg p-3 shadow-sm">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <form onSubmit={handleSubmit} className="p-4 border-t border-blue-200/20 bg-gradient-to-r from-blue-600/5 to-blue-500/5">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border-blue-200/20 focus-visible:ring-blue-500"
                  disabled={isLoading || isStreaming}
                />
                <Button 
                  type="submit" 
                  disabled={isLoading || isStreaming || !input.trim()}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
                >
                  {isLoading || isStreaming ? (
                    <LucideLoader className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ChatBot;
