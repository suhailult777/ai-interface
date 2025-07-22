import React, { useState } from "react"
import { Button } from "./button"
import { Input } from "./input"
import { cn } from "../../lib/utils"
import { Plus, MessageSquare, Trash2, Edit3, Search } from "lucide-react"

const Sidebar = ({ className, conversations = [], currentConversation, onNewChat, onSelectConversation, onDeleteConversation, ...props }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredConversations = conversations.filter(conversation =>
    conversation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conversation.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={cn("flex flex-col h-full bg-card border-r border-border", className)} {...props}>
      {/* Header */}
      <div className="p-4 border-b border-border">
        <Button 
          onClick={onNewChat}
          className="w-full justify-start gap-2"
          variant="outline"
        >
          <Plus className="h-4 w-4" />
          New Chat
        </Button>
        
        {/* Search Input */}
        <div className="mt-3 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto p-2">
        {filteredConversations.length === 0 && searchTerm ? (
          <div className="text-center text-muted-foreground text-sm py-8">
            No conversations found for "{searchTerm}"
          </div>
        ) : (
          filteredConversations.map((conversation) => (
          <div
            key={conversation.id}
            className={cn(
              "group relative flex items-center rounded-lg p-3 mb-1 cursor-pointer transition-colors hover:bg-accent",
              currentConversation?.id === conversation.id && "bg-accent"
            )}
            onClick={() => onSelectConversation && onSelectConversation(conversation)}
          >
            <MessageSquare className="h-4 w-4 mr-3 text-muted-foreground" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                {conversation.title || "New Chat"}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {conversation.lastMessage || "No messages yet"}
              </p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              <Button
                size="icon"
                variant="ghost"
                className="h-6 w-6"
                onClick={(e) => {
                  e.stopPropagation()
                  // Handle edit conversation title
                }}
              >
                <Edit3 className="h-3 w-3" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-6 w-6 text-destructive hover:text-destructive"
                onClick={(e) => {
                  e.stopPropagation()
                  onDeleteConversation && onDeleteConversation(conversation.id)
                }}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground text-center">
          ChatGPT Clone
        </div>
      </div>
    </div>
  )
}

export { Sidebar }
