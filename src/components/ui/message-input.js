import React, { useRef, useEffect } from "react"
import { Button } from "./button"
import { cn } from "../../lib/utils"
import { Send, Square } from "lucide-react"

const MessageInput = React.forwardRef(({ 
  className, 
  value, 
  onChange, 
  onSubmit,
  isGenerating = false,
  stop,
  placeholder = "Type your message here...",
  ...props 
}, ref) => {
  const textareaRef = useRef()
  const actualRef = ref || textareaRef

  // Auto-resize textarea
  useEffect(() => {
    const textarea = actualRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`
    }
  }, [value, actualRef])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (onSubmit && value.trim()) {
        onSubmit(e)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit && value.trim()) {
      onSubmit(e)
    }
  }

  return (
    <div className={cn("relative flex items-end gap-2", className)}>
      <div className="flex-1 relative">
        <textarea
          ref={actualRef}
          className={cn(
            "flex min-h-[60px] max-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none pr-12",
            className
          )}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          disabled={isGenerating}
          {...props}
        />
      </div>
      <Button
        type="submit"
        size="icon"
        onClick={isGenerating ? stop : handleSubmit}
        disabled={!value?.trim() && !isGenerating}
        className={cn(
          "h-10 w-10 shrink-0",
          isGenerating ? "bg-red-500 hover:bg-red-600" : ""
        )}
      >
        {isGenerating ? (
          <Square className="h-4 w-4" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        <span className="sr-only">
          {isGenerating ? "Stop generating" : "Send message"}
        </span>
      </Button>
    </div>
  )
})

MessageInput.displayName = "MessageInput"

export { MessageInput }
