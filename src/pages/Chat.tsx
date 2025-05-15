import { useState } from 'react'
import { ChatConversation } from '@/components/chat/ChatConversation'
import { ChatInput } from '@/components/chat/ChatInput'
import { RecipeCard } from '@/components/recipe/RecipeCard'
import { ABVCalculator } from '@/components/tools/ABVCalculator'
import { mockMessages, mockRecipes } from '@/data/mockData'
import { Message } from '@/types'
import { ChatMessage } from '@/components/chat/ChatMessage'

// Simple UUID generator function
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>(mockMessages)
  const [isTyping, setIsTyping] = useState(false)
  
  const sendMessage = (content: string) => {
    const newMessage: Message = {
      id: generateId(),
      role: 'user',
      content,
      timestamp: Date.now()
    }
    
    setMessages((prev) => [...prev, newMessage])
    simulateResponse()
  }
  
  const simulateResponse = () => {
    setIsTyping(true)
    
    // Simulate API call delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: generateId(),
        role: 'assistant',
        content: 'Here are some berry mead recipes that can be ready in about 3 months:',
        timestamp: Date.now()
      }
      
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }
  
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto">
        <ChatConversation messages={messages} />
        
        {/* Recipe cards shown after assistant message */}
        {messages.length > 0 && messages[messages.length - 1].role === 'assistant' && messages.length >= 3 && (
          <ChatMessage
            message={{
              id: 'recipe-cards',
              role: 'assistant',
              content: '',
              timestamp: Date.now()
            }}
          >
            <div className="mt-4 space-y-4">
              {mockRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </ChatMessage>
        )}
        
        {/* Show ABV Calculator as a tool */}
        {messages.length > 0 && messages[messages.length - 1].role === 'assistant' && messages.length === 5 && (
          <ChatMessage
            message={{
              id: 'abv-calculator',
              role: 'assistant',
              content: 'You mentioned wanting to calculate the ABV for your recipe. Here\'s a handy calculator:',
              timestamp: Date.now()
            }}
          >
            <div className="mt-4 max-w-md">
              <ABVCalculator />
            </div>
          </ChatMessage>
        )}
        
        {/* Typing indicator */}
        {isTyping && (
          <div className="flex w-full gap-4 p-4">
            <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md bg-amber-100">
              <span className="h-5 w-5 text-amber-600">🤔</span>
            </div>
            <div className="flex items-center">
              <div className="flex gap-1">
                <div className="h-2 w-2 animate-bounce rounded-full bg-amber-300" style={{ animationDelay: '0ms' }}></div>
                <div className="h-2 w-2 animate-bounce rounded-full bg-amber-400" style={{ animationDelay: '150ms' }}></div>
                <div className="h-2 w-2 animate-bounce rounded-full bg-amber-500" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="border-t bg-white p-4">
        <ChatInput onSendMessage={sendMessage} disabled={isTyping} />
      </div>
    </div>
  )
}