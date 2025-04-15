import React, { useState } from 'react';
import { ChatBubbleOvalLeftEllipsisIcon, XMarkIcon } from '@heroicons/react/24/solid';

const predefinedQuestions = [
  "What is HyperScriber?",
  "How can I contact support?",
];

const predefinedAnswers: { [key: string]: string } = {
  "What is HyperScriber?": "HyperScriber is an AI-powered content creation agency providing services such as LinkedIn Ghostwriting, SEO Blog Articles, Website Copywriting, Ads Copywriting and more. We also provide custom solutions, get in touch for more.",
  "How can I contact support?": "You can contact support via email at support@hyperscriber.example",
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setSelectedQuestion(null);
  };

  const handleQuestionClick = (question: string) => {
    setSelectedQuestion(question);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-8 right-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-200 z-50 border-2 border-white/40 backdrop-blur md:block hidden"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-32 right-12 w-[32rem] max-w-[96vw] h-[38rem] bg-white/70 dark:bg-gray-900/70 rounded-2xl shadow-2xl border border-white/40 backdrop-blur-lg flex flex-col z-40 animate-fade-in md:flex hidden"
          style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)', backdropFilter: 'blur(12px)' }}
        >
          {/* Header */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl flex items-center gap-3 shadow-sm">
            {/* Logo/avatar */}
            <div className="bg-white/30 rounded-full p-1 flex items-center justify-center h-10 w-10 border border-white/40">
              <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-blue-100" />
            </div>
            <h3 className="font-bold text-lg flex-1 tracking-wide">HyperScriber Assistant</h3>
            <button onClick={toggleChat} className="text-white hover:text-blue-200 transition-colors duration-150">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
            {!selectedQuestion && (
              <div className="flex flex-col gap-2 animate-fade-in">
                <p className="text-sm font-medium text-blue-800 mb-2">Hi there! How can I help?</p>
                {predefinedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQuestionClick(q)}
                    className="w-full text-left px-4 py-2 rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 text-blue-800 font-medium border border-blue-200 shadow-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
            {selectedQuestion && (
              <div className="flex flex-col gap-3 animate-fade-in">
                {/* User's question bubble */}
                <div className="flex justify-end">
                  <div className="max-w-[70%] bg-gradient-to-br from-blue-600 to-blue-700 text-white px-4 py-2 rounded-2xl rounded-br-sm shadow-md text-sm">
                    {selectedQuestion}
                  </div>
                </div>
                {/* AI's answer bubble */}
                <div className="flex justify-start">
                  <div className="max-w-[80%] bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-2xl rounded-bl-sm border border-blue-100 shadow text-sm">
                    {predefinedAnswers[selectedQuestion]}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedQuestion(null)}
                  className="self-start mt-2 text-xs text-blue-600 hover:underline focus:outline-none"
                >
                  &larr; Back to questions
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-2 border-t border-white/30 text-center bg-white/20 rounded-b-2xl">
            <p className="text-xs text-blue-700 opacity-80">Powered by AI</p>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </>
  );
};

export default ChatBot;
