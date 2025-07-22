import React from "react"
import { Avatar, AvatarFallback } from "./avatar"
import { CopyButton } from "./copy-button"
import { RegenerateButton } from "./regenerate-button"
import { cn } from "../../lib/utils"
import { Bot, User } from "lucide-react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const ChatMessage = ({ role, content, className, showTimeStamp, createdAt, onRegenerate, ...props }) => {
    const isUser = role === "user"

    return (
        <div
            className={cn(
                "group relative mb-4 flex items-start space-x-4",
                className
            )}
            {...props}
        >
            <Avatar className="h-8 w-8">
                {isUser ? (
                    <>
                        <AvatarFallback className="bg-blue-500 text-white">
                            <User className="h-4 w-4" />
                        </AvatarFallback>
                    </>
                ) : (
                    <>
                        <AvatarFallback className="bg-green-500 text-white">
                            <Bot className="h-4 w-4" />
                        </AvatarFallback>
                    </>
                )}
            </Avatar>
            <div className="flex-1 space-y-2 overflow-hidden">
                <div className="prose prose-sm max-w-none dark:prose-invert text-sm text-foreground">
                    {isUser ? (
                        <p className="text-sm text-foreground">{content}</p>
                    ) : (
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                p: ({ children }) => <p className="mb-2 last:mb-0 text-sm text-foreground">{children}</p>,
                                code: ({ node, inline, className, children, ...props }) => {
                                    if (inline) {
                                        return (
                                            <code
                                                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                                                {...props}
                                            >
                                                {children}
                                            </code>
                                        )
                                    }
                                    return (
                                        <pre className="overflow-x-auto rounded-lg bg-muted p-4">
                                            <code className="font-mono text-sm" {...props}>
                                                {children}
                                            </code>
                                        </pre>
                                    )
                                },
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    )}
                </div>
                {showTimeStamp && createdAt && (
                    <p className="text-xs text-muted-foreground">
                        {createdAt.toLocaleTimeString()}
                    </p>
                )}
            </div>

            {/* Action buttons - only show for assistant messages */}
            {!isUser && (
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <CopyButton content={content} />
                    {onRegenerate && <RegenerateButton onRegenerate={onRegenerate} />}
                </div>
            )}
        </div>
    )
}

export { ChatMessage }
