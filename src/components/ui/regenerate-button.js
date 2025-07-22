import React from "react"
import { Button } from "./button"
import { RotateCcw } from "lucide-react"
import { cn } from "../../lib/utils"

const RegenerateButton = ({ onRegenerate, className, ...props }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity", className)}
      onClick={onRegenerate}
      {...props}
    >
      <RotateCcw className="h-3 w-3" />
      <span className="sr-only">Regenerate response</span>
    </Button>
  )
}

export { RegenerateButton }
