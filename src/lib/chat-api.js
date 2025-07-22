import React from "react"

// Mock AI responses for demonstration
const getAIResponse = (userMessage) => {
  const message = userMessage.toLowerCase();
  
  // Simple keyword-based responses for better demo experience
  if (message.includes('react')) {
    return "React is a powerful JavaScript library for building user interfaces. Here are some key benefits:\n\n• **Component-based architecture** - Build encapsulated components that manage their own state\n• **Virtual DOM** - Efficient updates and rendering performance\n• **Unidirectional data flow** - Predictable state management\n• **Rich ecosystem** - Extensive library and tooling support\n• **Learning curve** - Gentle learning path with great documentation\n\nWould you like me to explain any of these concepts in more detail?";
  }
  
  if (message.includes('tailwind')) {
    return "Tailwind CSS is a utility-first CSS framework that greatly improves development workflow:\n\n## Key Benefits:\n\n1. **Utility-first approach** - No writing custom CSS\n2. **Rapid prototyping** - Build interfaces directly in markup\n3. **Consistent design system** - Predefined spacing, colors, typography\n4. **Mobile-first responsive design** - Built-in responsive utilities\n5. **Small production builds** - Only ship CSS you actually use\n\n```css\n<!-- Example: A responsive card -->\n<div class=\"bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto\">\n  <h2 class=\"text-xl font-bold mb-2\">Card Title</h2>\n  <p class=\"text-gray-600\">Card content...</p>\n</div>\n```\n\nTailwind makes styling fast and maintainable!";
  }
  
  if (message.includes('component') && message.includes('composition')) {
    return "Component composition is a fundamental React pattern that promotes reusability and maintainability:\n\n## What is Component Composition?\n\nComponent composition is the practice of building complex UIs by combining simpler, reusable components rather than using inheritance.\n\n## Benefits:\n\n• **Flexibility** - Mix and match components as needed\n• **Reusability** - Use components in multiple contexts\n• **Separation of concerns** - Each component has a single responsibility\n• **Easier testing** - Test components in isolation\n\n## Example:\n\n```jsx\n// Instead of one large component\n<UserProfile />\n\n// Use composition\n<Card>\n  <Avatar user={user} />\n  <UserInfo user={user} />\n  <ActionButtons user={user} />\n</Card>\n```\n\nThis approach makes your code more modular and easier to reason about!";
  }
  
  if (message.includes('ui design') || message.includes('modern ui')) {
    return "Modern UI design focuses on creating intuitive, accessible, and beautiful user experiences. Here are the key principles:\n\n## Core Principles:\n\n### 1. **Minimalism & Clean Design**\n- Remove unnecessary elements\n- Focus on content and functionality\n- Use whitespace effectively\n\n### 2. **Consistency**\n- Consistent typography, spacing, colors\n- Predictable interaction patterns\n- Design system approach\n\n### 3. **Accessibility First**\n- WCAG compliance\n- Keyboard navigation\n- Screen reader support\n- Color contrast ratios\n\n### 4. **Responsive Design**\n- Mobile-first approach\n- Flexible layouts\n- Touch-friendly interactions\n\n### 5. **Performance**\n- Fast loading times\n- Smooth animations\n- Optimized images and assets\n\n### 6. **User-Centered**\n- Clear navigation\n- Intuitive interactions\n- Helpful feedback and error states\n\nWould you like me to elaborate on any of these principles?";
  }
  
  // Default responses for other queries
  const defaultResponses = [
    "That's an interesting question! I'm a demo AI assistant built with React and shadcn/ui components. In a real implementation, I'd be powered by a language model like GPT-4.\n\nIs there something specific you'd like to know about web development, React, or UI design?",
    
    "I'm here to help! This interface is designed to mimic ChatGPT's user experience using modern web technologies:\n\n• **React** for the component architecture\n• **Tailwind CSS** for styling\n• **shadcn/ui** for beautiful, accessible components\n• **Framer Motion** for smooth animations\n\nWhat would you like to explore?",
    
    "Hello! I'm a demonstration of how to build a ChatGPT-like interface. Some features implemented:\n\n✅ **Real-time chat interface**\n✅ **Markdown rendering** for rich text\n✅ **Dark/light theme toggle**\n✅ **Responsive design**\n✅ **Conversation management**\n✅ **Copy message functionality**\n✅ **Typing indicators**\n\nFeel free to ask me about React, web development, or UI design!",
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};

export const mockChatAPI = {
  async sendMessage(message) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 2000))
    
    // Get contextual response based on user message
    const response = getAIResponse(message)
    
    return {
      id: Date.now().toString(),
      role: "assistant",
      content: response,
      createdAt: new Date(),
    }
  }
}

// Hook to manage conversations
export const useConversations = () => {
  const [conversations, setConversations] = React.useState([])
  
  const [currentConversation, setCurrentConversation] = React.useState(null)

  // Initialize with welcome conversation on first load
  React.useEffect(() => {
    if (conversations.length === 0) {
      const welcomeConversation = {
        id: "welcome",
        title: "Welcome to ChatGPT Clone",
        lastMessage: "Hello! How can I help you today?",
        messages: [
          {
            id: "welcome-1",
            role: "assistant",
            content: "Hello! I'm your AI assistant. This is a ChatGPT-like interface built with React and shadcn/ui.\n\nFeel free to ask me about:\n• **React development**\n• **Web technologies**\n• **UI/UX design**\n• **Anything else!**\n\nTry one of the suggestions below or type your own message. 👇",
            createdAt: new Date(),
          }
        ],
        createdAt: new Date(),
      }
      setConversations([welcomeConversation])
      setCurrentConversation(welcomeConversation)
    }
  }, [conversations.length])

  const createNewConversation = () => {
    const newConversation = {
      id: Date.now().toString(),
      title: "New Chat",
      lastMessage: "",
      messages: [],
      createdAt: new Date(),
    }
    setConversations(prev => [newConversation, ...prev])
    setCurrentConversation(newConversation)
    return newConversation
  }

  const updateConversation = (conversationId, updates) => {
    setConversations(prev => 
      prev.map(conv => 
        conv.id === conversationId 
          ? { ...conv, ...updates }
          : conv
      )
    )
    
    if (currentConversation?.id === conversationId) {
      setCurrentConversation(prev => ({ ...prev, ...updates }))
    }
  }

  const deleteConversation = (conversationId) => {
    setConversations(prev => prev.filter(conv => conv.id !== conversationId))
    
    if (currentConversation?.id === conversationId) {
      const remaining = conversations.filter(conv => conv.id !== conversationId)
      setCurrentConversation(remaining[0] || null)
    }
  }

  const selectConversation = (conversation) => {
    setCurrentConversation(conversation)
  }

  return {
    conversations,
    currentConversation,
    createNewConversation,
    updateConversation,
    deleteConversation,
    selectConversation,
  }
}
