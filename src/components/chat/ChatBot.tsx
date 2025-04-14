
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Trash2, ArrowUp, HelpCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { DialogTitle } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// Local storage key for saving chat history
const CHAT_HISTORY_KEY = 'hyperscriber-chat-history';

// Sample questions to help users get started
const SAMPLE_QUESTIONS = [
  "What services do you offer?",
  "How much do your services cost?",
  "What is your turnaround time?",
  "Do you offer revisions?",
  "How does the process work?",
  "What makes you different from other agencies?"
];

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
      // Get user session for authentication
      const sessionResponse = await supabase.auth.getSession();
      // For development purposes, we'll proceed even without authentication
      // In production, you'd want to validate this and handle accordingly
      const accessToken = sessionResponse?.data?.session?.access_token || 'anonymous-token';
      
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
        // Check if this is a non-streamed predefined response
        const responseData = await response.json();
        if (responseData.isPredefinded) {
          // Handle predefined answer
          setMessages(prev => [...prev, {
            role: 'assistant',
            content: responseData.response
          }]);
          setIsLoading(false);
          return;
        }
        
        throw new Error(responseData.error || 'Failed to get a response');
      }

      // Check if this is a non-streamed predefined response
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        if (data.isPredefinded) {
          // Handle predefined answer
          setMessages(prev => [...prev, {
            role: 'assistant',
            content: data.response
          }]);
          setIsLoading(false);
          return;
        }
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
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm sorry, I encountered an error while processing your request. Please try again or contact our support team for assistance."
      }]);
      
      toast({
        title: "Chat Error",
        description: error instanceof Error ? error.message : "Failed to get a response. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleQuickQuestion = (question: string) => {
    if (isLoading || isStreaming) return;
    setInput(question);
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
          {/* Hidden DialogTitle for accessibility */}
          <DialogTitle className="sr-only">Chat with HyperScriber AI</DialogTitle>
          
          <div className="flex flex-col h-[100vh]">
            <div className="p-4 border-b border-blue-200/20 bg-gradient-to-r from-blue-600/10 to-blue-500/10 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gradient">Chat with HyperScriber AI</h2>
              <div className="flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium">Need help?</h4>
                      <p className="text-sm text-muted-foreground">
                        Try asking one of these questions:
                      </p>
                      <div className="grid gap-2 pt-2">
                        {SAMPLE_QUESTIONS.map((question, index) => (
                          <Button 
                            key={index} 
                            variant="outline" 
                            size="sm"
                            className="justify-start text-left h-auto whitespace-normal"
                            onClick={() => handleQuickQuestion(question)}
                          >
                            {question}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
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
            </div>
            
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.length === 0 && (
                  <div className="flex flex-col justify-center items-center h-32 text-muted-foreground">
                    <div className="text-center">
                      <p>How can I help with your content needs today?</p>
                      <p className="text-sm mt-2">Ask me anything about our services, pricing, or content creation process.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-6">
                      {SAMPLE_QUESTIONS.slice(0, 4).map((question, index) => (
                        <Button 
                          key={index} 
                          variant="outline" 
                          size="sm"
                          className="justify-start text-left h-auto py-2 whitespace-normal"
                          onClick={() => handleQuickQuestion(question)}
                        >
                          {question}
                        </Button>
                      ))}
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
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
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
