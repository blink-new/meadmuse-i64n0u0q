import { Message } from '@/types'
import { cn } from '@/lib/utils'
import { User, Bot } from 'lucide-react'
import { ReactNode } from 'react'

interface ChatMessageProps {
  message: Message
  children?: ReactNode
}

export function ChatMessage({ message, children }: ChatMessageProps) {
  const isUser = message.role === 'user'
  
  return (
    <div
      className={cn(
        'flex w-full gap-4 p-4',
        isUser ? 'bg-slate-50' : 'bg-white'
      )}
    >
      <div
        className={cn(
          'flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md',
          isUser ? 'bg-slate-200' : 'bg-amber-100'
        )}
      >
        {isUser ? (
          <User className="h-5 w-5 text-slate-600" />
        ) : (
          <Bot className="h-5 w-5 text-amber-600" />
        )}
      </div>
      <div className="flex-1 space-y-2">
        <div className="prose prose-slate max-w-none">
          {message.content}
        </div>
        {children}
      </div>
    </div>
  )
}