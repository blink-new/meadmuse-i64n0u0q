import { useState, FormEvent } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

interface ChatInputProps {
  onSendMessage: (message: string) => void
  disabled?: boolean
}

export function ChatInput({ onSendMessage, disabled = false }: ChatInputProps) {
  const [input, setInput] = useState('')
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    if (input.trim() && !disabled) {
      onSendMessage(input)
      setInput('')
    }
  }
  
  // Handle Ctrl+Enter or Command+Enter to submit
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      handleSubmit(e)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="flex w-full items-end gap-2">
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask about mead recipes..."
        className="min-h-[60px] resize-none"
        disabled={disabled}
      />
      <Button 
        type="submit" 
        size="icon" 
        disabled={disabled || !input.trim()}
        className="h-[60px] w-[60px] shrink-0 rounded-xl bg-amber-500 hover:bg-amber-600"
      >
        <Send className="h-5 w-5" />
        <span className="sr-only">Send message</span>
      </Button>
    </form>
  )
}