import { useEffect, useRef } from 'react'
import { Message } from '@/types'
import { ChatMessage } from './ChatMessage'
import { themeColors } from '@/lib/theme'

interface ChatConversationProps {
  messages: Message[]
}

export function ChatConversation({ messages }: ChatConversationProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  
  return (
    <div className="flex flex-col">
      {/* Show welcome message if no messages */}
      {messages.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center p-8 text-center">
          <div className="mb-4 rounded-full bg-amber-100 p-3">
            <div className="rounded-full bg-amber-400 p-3 text-white">
              🍯
            </div>
          </div>
          <h2 className="mb-2 text-2xl font-semibold" style={{ color: themeColors.amber[700] }}>
            Welcome to MeadMuse
          </h2>
          <p className="max-w-md text-slate-600">
            Your AI brewing assistant for discovering and creating mead recipes. Ask anything about mead making, explore recipes, or create your own!
          </p>
        </div>
      ) : (
        <>
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </>
      )}
      <div ref={messagesEndRef} />
    </div>
  )
}