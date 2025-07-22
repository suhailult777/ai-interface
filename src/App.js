import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/theme-provider';
import { ThemeToggle } from './components/theme-toggle';
import { Chat } from './components/ui/chat';
import { Sidebar } from './components/ui/sidebar';
import { ExportButton } from './components/ui/export-button';
import { WelcomeScreen } from './components/ui/welcome-screen';
import { mockChatAPI, useConversations } from './lib/chat-api';
import { cn } from './lib/utils';
import './index.css';

function App() {
  const {
    conversations,
    currentConversation,
    createNewConversation,
    updateConversation,
    deleteConversation,
    selectConversation,
  } = useConversations();

  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl/Cmd + N for new chat
      if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        createNewConversation();
      }
      // Ctrl/Cmd + B to toggle sidebar
      if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        setSidebarCollapsed(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [createNewConversation]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isGenerating) return;

    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      createdAt: new Date(),
    };

    // Add user message to current conversation
    const updatedMessages = [...(currentConversation?.messages || []), userMessage];

    if (currentConversation) {
      updateConversation(currentConversation.id, {
        messages: updatedMessages,
        lastMessage: input,
        title: currentConversation.title === 'New Chat' ? input.slice(0, 30) + '...' : currentConversation.title,
      });
    }

    setInput('');
    setIsGenerating(true);

    try {
      // Get AI response
      const aiMessage = await mockChatAPI.sendMessage(input);

      // Add AI message to conversation
      const finalMessages = [...updatedMessages, aiMessage];

      if (currentConversation) {
        updateConversation(currentConversation.id, {
          messages: finalMessages,
        });
      }
    } catch (error) {
      console.error('Error getting AI response:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleNewChat = () => {
    createNewConversation();
  };

  const handleSelectConversation = (conversation) => {
    selectConversation(conversation);
  };

  const handleDeleteConversation = (conversationId) => {
    deleteConversation(conversationId);
  };

  const stop = () => {
    setIsGenerating(false);
  };

  const append = (message) => {
    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: message.content,
      createdAt: new Date(),
    };

    // Add user message to current conversation
    const updatedMessages = [...(currentConversation?.messages || []), userMessage];

    if (currentConversation) {
      updateConversation(currentConversation.id, {
        messages: updatedMessages,
        lastMessage: message.content,
        title: currentConversation.title === 'New Chat' ? message.content.slice(0, 30) + '...' : currentConversation.title,
      });
    }

    setIsGenerating(true);

    // Get AI response
    mockChatAPI.sendMessage(message.content).then(aiMessage => {
      const finalMessages = [...updatedMessages, aiMessage];

      if (currentConversation) {
        updateConversation(currentConversation.id, {
          messages: finalMessages,
        });
      }
      setIsGenerating(false);
    }).catch(error => {
      console.error('Error getting AI response:', error);
      setIsGenerating(false);
    });
  };

  const suggestions = [
    "What are the benefits of using React for web development?",
    "Explain the concept of component composition in React",
    "How does Tailwind CSS improve development workflow?",
    "What are the key features of modern UI design?",
  ];

  const handleRegenerate = (messageIndex) => {
    if (!currentConversation || !currentConversation.messages) return;

    const messages = currentConversation.messages;
    const userMessage = messages[messageIndex - 1]; // Get the user message before the AI message

    if (!userMessage || userMessage.role !== 'user') return;

    // Remove the AI message we're regenerating
    const updatedMessages = messages.slice(0, messageIndex);

    updateConversation(currentConversation.id, {
      messages: updatedMessages,
    });

    setIsGenerating(true);

    // Get new AI response
    mockChatAPI.sendMessage(userMessage.content).then(aiMessage => {
      const finalMessages = [...updatedMessages, aiMessage];

      updateConversation(currentConversation.id, {
        messages: finalMessages,
      });
      setIsGenerating(false);
    }).catch(error => {
      console.error('Error regenerating response:', error);
      setIsGenerating(false);
    });
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="chatgpt-clone-theme">
      <div className="flex h-screen bg-background text-foreground">
        {/* Sidebar */}
        <div className={cn(
          "transition-all duration-300 ease-in-out",
          sidebarCollapsed ? "w-0" : "w-80"
        )}>
          <Sidebar
            conversations={conversations}
            currentConversation={currentConversation}
            onNewChat={handleNewChat}
            onSelectConversation={handleSelectConversation}
            onDeleteConversation={handleDeleteConversation}
            className={cn(
              "h-full transition-opacity duration-300",
              sidebarCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
          />
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2 hover:bg-accent rounded-md transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <h1 className="text-lg font-semibold">
                {currentConversation?.title || 'ChatGPT Clone'}
              </h1>
              {isGenerating && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>AI is typing...</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              {currentConversation && (
                <ExportButton conversation={currentConversation} />
              )}
              <ThemeToggle />
            </div>
          </header>

          {/* Main Content */}
          {currentConversation ? (
            <Chat
              messages={currentConversation?.messages || []}
              input={input}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              isGenerating={isGenerating}
              stop={stop}
              suggestions={suggestions}
              append={append}
              onRegenerate={handleRegenerate}
              className="flex-1"
            />
          ) : (
            <WelcomeScreen className="flex-1" />
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;