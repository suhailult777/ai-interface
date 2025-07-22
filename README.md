# 🤖 ChatGPT Clone - AI Interface

A modern, feature-rich ChatGPT clone built with React, featuring a beautiful UI with dark/light themes, conversation management, message regeneration, search functionality, and export capabilities.

![ChatGPT Clone](https://img.shields.io/badge/React-18.3.1-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Node.js](https://img.shields.io/badge/Node.js-16%2B-brightgreen.svg)
![pnpm](https://img.shields.io/badge/pnpm-8%2B-orange.svg)

## ✨ Features

### 🎨 **Modern UI/UX**
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with smooth animations
- **Collapsible Sidebar**: Clean interface with expandable conversation history
- **Smooth Animations**: Framer Motion powered transitions and interactions

### 💬 **Advanced Chat Features**
- **Real-time Messaging**: Instant AI responses with typing indicators
- **Message Regeneration**: Regenerate AI responses with one click
- **Copy to Clipboard**: Easy copying of any message content
- **Markdown Rendering**: Full markdown support with syntax highlighting
- **Auto-resizing Input**: Dynamic textarea that grows with content

### 🔍 **Smart Management**
- **Conversation Search**: Find any conversation instantly
- **Conversation Export**: Download chat history as JSON files
- **Multiple Conversations**: Manage unlimited chat sessions
- **Auto-save**: All conversations are automatically saved

### ⌨️ **Keyboard Shortcuts**
- `Ctrl + N`: Start a new conversation
- `Ctrl + B`: Toggle sidebar visibility
- `Enter`: Send message (Shift + Enter for new line)

### 🎯 **Developer Features**
- **Component-based Architecture**: Modular, reusable components
- **TypeScript Ready**: Easy migration to TypeScript
- **ESLint Integration**: Code quality and consistency
- **Modern Build Tools**: Optimized for performance

## 🛠️ Prerequisites

Before setting up the project, ensure you have the following installed:

### **Required Software:**

1. **Node.js** (v16.0.0 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **pnpm** (v8.0.0 or higher) - **Required Package Manager**
   ```bash
   npm install -g pnpm
   # Verify installation
   pnpm --version
   ```

3. **Git** (for cloning the repository)
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

### **System Requirements:**
- **OS**: Windows 10/11, macOS 10.14+, or Linux
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 500MB free space
- **Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

## 🚀 Installation & Setup

### **Step 1: Clone the Repository**
```bash
# Clone the project
git clone https://github.com/suhailult777/ai-interface.git

# Navigate to project directory
cd ai-interface
```

### **Step 2: Install Dependencies**
```bash
# Install all project dependencies using pnpm
pnpm install

# This will install:
# - React 18.3.1 and React DOM
# - Tailwind CSS for styling
# - Radix UI components for accessibility
# - Lucide React for icons
# - Framer Motion for animations
# - React Markdown for message rendering
# - And all other required dependencies
```

### **Step 3: Environment Setup**
The project includes pre-configured environment files:

- `.env.local` - Local development settings
- `.pnpmrc` - pnpm configuration for React compatibility
- `.eslintrc.js` - ESLint configuration

**No additional environment setup required!**

### **Step 4: Start Development Server**
```bash
# Start the development server
pnpm start

# Alternative commands:
# npm start
# yarn start
```

The application will automatically open in your browser at:
- **Local**: http://localhost:3000
- **Network**: http://YOUR_IP:3000

If port 3000 is occupied, it will automatically use the next available port (3001, 3002, etc.)

## 📁 Project Structure

```
ai-interface/
├── public/                     # Static assets
│   ├── favicon.ico
│   ├── index.html             # Main HTML template
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json          # PWA manifest
│   └── robots.txt
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── theme-provider.js  # Dark/light theme context
│   │   ├── theme-toggle.js    # Theme switcher component
│   │   └── ui/               # UI component library
│   │       ├── avatar.js     # User/AI avatar component
│   │       ├── button.js     # Customizable button component
│   │       ├── chat.js       # Main chat interface
│   │       ├── chat-message.js # Individual message component
│   │       ├── copy-button.js # Copy to clipboard functionality
│   │       ├── export-button.js # Conversation export
│   │       ├── input.js      # Form input component
│   │       ├── message-input.js # Chat message input
│   │       ├── regenerate-button.js # Message regeneration
│   │       ├── scroll-to-bottom.js # Auto-scroll functionality
│   │       ├── sidebar.js    # Conversation sidebar
│   │       ├── skeleton.js   # Loading placeholders
│   │       ├── textarea.js   # Multi-line text input
│   │       ├── typing-indicator.js # AI typing animation
│   │       └── welcome-screen.js # Welcome page
│   ├── lib/                  # Utility libraries
│   │   ├── chat-api.js       # Mock AI API and conversation management
│   │   └── utils.js          # Utility functions (cn, etc.)
│   ├── App.js                # Main application component
│   ├── App.css               # Application-specific styles
│   ├── index.js              # React entry point
│   ├── index.css             # Global styles and Tailwind imports
│   └── normal.css            # CSS reset/normalize
├── .env.local                # Environment variables
├── .eslintrc.js              # ESLint configuration
├── .gitignore                # Git ignore rules
├── .pnpmrc                   # pnpm configuration
├── package.json              # Project dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── README.md                 # This file
└── tailwind.config.js        # Tailwind CSS configuration
```

## 🎮 Usage Guide

### **Starting a New Conversation**
1. Click the "New Chat" button in the sidebar
2. Or use the keyboard shortcut `Ctrl + N`
3. Type your message in the input field
4. Press `Enter` to send (or `Shift + Enter` for new line)

### **Managing Conversations**
- **Switch Conversations**: Click on any conversation in the sidebar
- **Delete Conversations**: Hover over a conversation and click the trash icon
- **Search Conversations**: Use the search bar at the top of the sidebar
- **Export Conversations**: Click the export button in the header

### **Message Features**
- **Copy Messages**: Hover over any AI message and click the copy icon
- **Regenerate Responses**: Click the regenerate button on AI messages
- **Markdown Support**: Messages support full markdown formatting

### **Theme & UI**
- **Toggle Theme**: Click the theme toggle button in the header
- **Collapse Sidebar**: Click the hamburger menu or use `Ctrl + B`
- **Responsive Design**: Interface adapts to screen size automatically

## 🔧 Development

### **Available Scripts**

#### **Development**
```bash
# Start development server with hot reload
pnpm start

# Run tests in watch mode
pnpm test

# Run tests with coverage
pnpm test -- --coverage
```

#### **Building**
```bash
# Create production build
pnpm build

# Analyze bundle size
pnpm build && npx serve -s build
```

#### **Code Quality**
```bash
# Run ESLint
npx eslint src/

# Fix ESLint issues automatically
npx eslint src/ --fix

# Format code with Prettier (if configured)
npx prettier --write src/
```

### **Key Technologies**

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI framework |
| **Tailwind CSS** | Latest | Utility-first styling |
| **Radix UI** | Latest | Accessible component primitives |
| **Framer Motion** | 12.23.6 | Animations and transitions |
| **Lucide React** | 0.525.0 | Beautiful icons |
| **React Markdown** | 10.1.0 | Markdown rendering |
| **Class Variance Authority** | 0.7.1 | Component variant management |

### **Component Architecture**

#### **Theme System**
```javascript
// Theme provider wraps the entire app
<ThemeProvider defaultTheme="dark" storageKey="chatgpt-clone-theme">
  <App />
</ThemeProvider>
```

#### **State Management**
- Uses React hooks (`useState`, `useEffect`, `useCallback`)
- Custom hooks for conversation management
- Local storage for persistence

#### **Styling Approach**
- **Tailwind CSS** for utility-first styling
- **CSS Variables** for theme switching
- **Responsive design** with mobile-first approach
- **Component variants** using `cva` (Class Variance Authority)

## 🐛 Troubleshooting

### **Common Issues & Solutions**

#### **Port Already in Use**
```bash
# If port 3000 is occupied, the app will automatically use the next available port
# You can also manually specify a port:
PORT=3003 pnpm start
```

#### **pnpm Installation Issues**
```bash
# Clear pnpm cache
pnpm store prune

# Reinstall dependencies
rm -rf node_modules
pnpm install
```

#### **ESLint Conflicts**
The project is pre-configured to handle ESLint conflicts with pnpm. If you encounter issues:

```bash
# The .env.local file contains:
ESLINT_NO_DEV_ERRORS=true
DISABLE_ESLINT_PLUGIN=true

# This prevents ESLint plugin conflicts during development
```

#### **Build Fails**
```bash
# Clear build cache
rm -rf build/

# Reinstall dependencies and rebuild
pnpm install
pnpm build
```

#### **Theme Not Persisting**
- Check browser local storage permissions
- Ensure `storageKey` in ThemeProvider is unique
- Clear browser data and refresh

### **Performance Optimization**

#### **Bundle Size**
```bash
# Analyze what's included in your bundle
npm install -g source-map-explorer
pnpm build
npx source-map-explorer 'build/static/js/*.js'
```

#### **Memory Usage**
- Conversations are stored in memory and local storage
- Large conversation histories may impact performance
- Consider implementing pagination for production use

## 🌐 Deployment

### **Build for Production**
```bash
# Create optimized production build
pnpm build

# The build folder contains:
# - Minified JavaScript and CSS
# - Optimized images and assets
# - Service worker for caching
```

### **Deployment Options**

#### **Vercel** (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect React and configure build settings
3. Deploy with zero configuration

#### **Netlify**
1. Drag and drop the `build` folder to Netlify
2. Or connect your GitHub repository for continuous deployment

#### **Traditional Hosting**
```bash
# Build the project
pnpm build

# Upload the build/ folder contents to your web server
# Ensure your server serves index.html for all routes (SPA)
```

#### **Docker**
```dockerfile
# Dockerfile example
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npx", "serve", "-s", "build"]
```

## 🤝 Contributing

### **How to Contribute**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `pnpm test`
5. Commit changes: `git commit -m 'Add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### **Development Guidelines**
- Follow existing code style and patterns
- Add tests for new features
- Update documentation for significant changes
- Use meaningful commit messages
- Keep components small and focused

### **Code Style**
- Use functional components with hooks
- Prefer arrow functions for inline functions
- Use TypeScript-style prop definitions in comments
- Follow Tailwind CSS utility-first approach

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** for inspiration from ChatGPT
- **Vercel** for Create React App and hosting
- **Tailwind Labs** for Tailwind CSS
- **Radix UI** for accessible components
- **Lucide** for beautiful icons

## 📞 Support

If you encounter any issues or have questions:

1. **Check this README** for common solutions
2. **Search existing issues** on GitHub
3. **Create a new issue** with detailed information
4. **Join the discussion** in GitHub Discussions

## 🔄 Updates

### **Latest Version: 1.0.0**
- ✅ Full ChatGPT UI clone
- ✅ Dark/light theme support
- ✅ Conversation management
- ✅ Message regeneration
- ✅ Export functionality
- ✅ Search capabilities
- ✅ Responsive design
- ✅ Keyboard shortcuts

---

**Happy Coding! 🚀**

*Built with ❤️ using React, Tailwind CSS, and modern web technologies.*

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
