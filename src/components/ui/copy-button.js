import React, { useState } from "react"
import { Button } from "./button"
import { Check, Copy } from "lucide-react"
import { cn } from "../../lib/utils"

const CopyButton = ({ content, className, ...props }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity", className)}
      onClick={handleCopy}
      {...props}
    >
      {copied ? (
        <Check className="h-3 w-3 text-green-600" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
      <span className="sr-only">
        {copied ? "Copied!" : "Copy response"}
      </span>
    </Button>
  )
}

export { CopyButton }
