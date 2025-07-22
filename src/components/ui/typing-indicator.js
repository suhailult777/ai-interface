import React from "react"
import { cn } from "../../lib/utils"

const TypingIndicator = ({ className, ...props }) => {
    return (
        <div className={cn("flex items-center space-x-1", className)} {...props}>
            <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-muted-foreground animate-typing-dot-bounce [animation-delay:0ms]" />
                <div className="h-2 w-2 rounded-full bg-muted-foreground animate-typing-dot-bounce [animation-delay:150ms]" />
                <div className="h-2 w-2 rounded-full bg-muted-foreground animate-typing-dot-bounce [animation-delay:300ms]" />
            </div>
        </div>
    )
}

export { TypingIndicator }
