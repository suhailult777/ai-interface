import React, { useState, useEffect } from "react"
import { Button } from "./button"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"

const ScrollToBottom = ({ messagesRef, className }) => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const container = messagesRef.current
    if (!container) return

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container
      const isScrolledUp = scrollHeight - scrollTop - clientHeight > 100
      setShowButton(isScrolledUp)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [messagesRef])

  const scrollToBottom = () => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: 'smooth'
    })
  }

  if (!showButton) return null

  return (
    <Button
      onClick={scrollToBottom}
      size="icon"
      className={cn(
        "fixed bottom-20 right-6 z-10 rounded-full shadow-lg",
        className
      )}
      variant="secondary"
    >
      <ChevronDown className="h-4 w-4" />
      <span className="sr-only">Scroll to bottom</span>
    </Button>
  )
}

export { ScrollToBottom }
