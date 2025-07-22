import React, { useRef, useEffect } from "react"
import { ChatMessage } from "./chat-message"
import { MessageInput } from "./message-input"
import { TypingIndicator } from "./typing-indicator"
import { ScrollToBottom } from "./scroll-to-bottom"
import { cn } from "../../lib/utils"
import { Avatar, AvatarFallback } from "./avatar"
import { Bot } from "lucide-react"

const Chat = ({
    messages = [],
    input,
    handleInputChange,
    handleSubmit,
    isGenerating = false,
    stop,
    className,
    suggestions = [],
    append,
    onRegenerate,
    ...props
}) => {
    const messagesEndRef = useRef(null)
    const messagesContainerRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const lastMessage = messages[messages.length - 1]
    const isTyping = isGenerating && lastMessage?.role === "user"

    return (
        <div className={cn("flex flex-col h-full relative", className)} {...props}>
            {/* Messages Area */}
            <div
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-4"
            >
                {messages.length === 0 && suggestions.length > 0 && (
                    <div className="flex flex-col items-center justify-center h-full space-y-6">
                        <div className="text-center space-y-2">
                            <Avatar className="h-12 w-12 mx-auto">
                                <AvatarFallback className="bg-green-500 text-white">
                                    <Bot className="h-6 w-6" />
                                </AvatarFallback>
                            </Avatar>
                            <h2 className="text-2xl font-semibold">How can I help you today?</h2>
                            <p className="text-muted-foreground">Choose from the suggestions below or type your own message</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl">
                            {suggestions.map((suggestion, index) => (
                                <button
                                    key={index}
                                    onClick={() => append && append({ role: "user", content: suggestion })}
                                    className="p-4 text-left border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                    <span className="text-sm">{suggestion}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {messages.map((message, index) => (
                    <ChatMessage
                        key={message.id}
                        role={message.role}
                        content={message.content}
                        createdAt={message.createdAt}
                        showTimeStamp={false}
                        onRegenerate={message.role === 'assistant' && onRegenerate ? () => onRegenerate(index) : undefined}
                    />
                ))}

                {isTyping && (
                    <div className="flex items-start space-x-4">
                        <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-green-500 text-white">
                                <Bot className="h-4 w-4" />
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                            <TypingIndicator />
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Scroll to bottom button */}
            <ScrollToBottom messagesRef={messagesContainerRef} />

            {/* Input Area */}
            <div className="border-t border-border p-4">
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                    <MessageInput
                        value={input}
                        onChange={handleInputChange}
                        onSubmit={handleSubmit}
                        isGenerating={isGenerating}
                        stop={stop}
                        placeholder="Message ChatGPT..."
                    />
                </form>
            </div>
        </div>
    )
}

export { Chat }
