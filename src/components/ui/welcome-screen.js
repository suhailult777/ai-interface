import React from "react"
import { Avatar, AvatarFallback } from "./avatar"
import { Bot, MessageSquare, Download, Settings } from "lucide-react"
import { cn } from "../../lib/utils"

const WelcomeScreen = ({ className, ...props }) => {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Have natural, flowing conversations with advanced AI"
    },
    {
      icon: Download,
      title: "Export Chats",
      description: "Save and export your conversations for later reference"
    },
    {
      icon: Settings,
      title: "Customizable",
      description: "Dark/light theme and personalized experience"
    }
  ]

  return (
    <div className={cn("flex flex-col items-center justify-center h-full space-y-8 p-8", className)} {...props}>
      <div className="text-center space-y-4">
        <Avatar className="h-16 w-16 mx-auto">
          <AvatarFallback className="bg-green-500 text-white">
            <Bot className="h-8 w-8" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">Welcome to ChatGPT Clone</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Start a new conversation to begin chatting with AI
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl</kbd>
              <span>+</span>
              <kbd className="px-2 py-1 bg-muted rounded text-xs">N</kbd>
              <span>New Chat</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl</kbd>
              <span>+</span>
              <kbd className="px-2 py-1 bg-muted rounded text-xs">B</kbd>
              <span>Toggle Sidebar</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
          >
            <feature.icon className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export { WelcomeScreen }
