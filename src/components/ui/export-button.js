import React from "react"
import { Button } from "./button"
import { Download } from "lucide-react"

const ExportButton = ({ conversation, className, ...props }) => {
  const handleExport = () => {
    if (!conversation || !conversation.messages) {
      return
    }

    const exportData = {
      title: conversation.title,
      createdAt: conversation.createdAt,
      messages: conversation.messages.map(msg => ({
        role: msg.role,
        content: msg.content,
        createdAt: msg.createdAt
      }))
    }

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json'
    })
    
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${conversation.title || 'conversation'}-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleExport}
      className={className}
      {...props}
    >
      <Download className="h-4 w-4 mr-2" />
      Export
    </Button>
  )
}

export { ExportButton }
