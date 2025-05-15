import { HTMLAttributes } from 'react'
import { Wine } from 'lucide-react'
import { cn } from '../../lib/utils'

interface AppLogoProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

export function AppLogo({ size = 24, className, ...props }: AppLogoProps) {
  return (
    <div className={cn('relative flex items-center justify-center', className)} {...props}>
      <Wine
        className="text-amber-500"
        size={size}
        strokeWidth={1.5}
      />
    </div>
  )
}
