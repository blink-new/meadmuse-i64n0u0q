import { useState } from 'react'
import { Recipe } from '@/types'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Star, ChevronDown, ChevronUp, Save, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { expertise } from '@/lib/theme'

interface RecipeCardProps {
  recipe: Recipe
  expanded?: boolean
  onToggleExpand?: () => void
}

export function RecipeCard({ recipe, expanded = false, onToggleExpand }: RecipeCardProps) {
  const [isExpanded, setIsExpanded] = useState(expanded)
  
  const handleToggle = () => {
    setIsExpanded(!isExpanded)
    onToggleExpand?.()
  }
  
  // Get the color for difficulty badge
  const getDifficultyColor = (level: string) => {
    switch(level) {
      case 'beginner': return expertise.beginner
      case 'intermediate': return expertise.intermediate
      case 'advanced': return expertise.advanced
      default: return '#64748B' // slate-500
    }
  }
  
  return (
    <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all">
      {/* Collapsed View */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-georgia text-xl font-semibold">{recipe.name}</h3>
          <Button variant="ghost" size="icon">
            <Save className="h-5 w-5" />
            <span className="sr-only">Save recipe</span>
          </Button>
        </div>
        
        <div className="mt-1 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < Math.floor(recipe.rating) 
                  ? "fill-amber-400 text-amber-400" 
                  : i < recipe.rating 
                    ? "fill-amber-400/50 text-amber-400" 
                    : "fill-slate-200 text-slate-200"
              )}
            />
          ))}
          <span className="ml-1 text-sm text-slate-500">
            ({recipe.rating.toFixed(1)}/5) | {recipe.reviewCount} {recipe.reviewCount === 1 ? 'Review' : 'Reviews'}
          </span>
        </div>
        
        <p className="mt-2 text-slate-600">{recipe.description}</p>
        
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant="outline" className="text-slate-700">ABV: {recipe.abv}%</Badge>
          <Badge variant="outline" className="text-slate-700">Ready: {recipe.readyIn}</Badge>
          <Badge
            variant="outline"
            className="text-slate-700"
            style={{ borderColor: getDifficultyColor(recipe.difficulty), color: getDifficultyColor(recipe.difficulty) }}
          >
            {recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}
          </Badge>
        </div>
        
        <div className="mt-4 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleToggle}
            className="flex items-center gap-1"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                <span>Collapse</span>
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                <span>View Full Recipe</span>
              </>
            )}
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <span>Modify This Recipe</span>
          </Button>
        </div>
      </div>
      
      {/* Expanded View */}
      {isExpanded && (
        <div className="border-t border-slate-200 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm text-slate-500">
              Created by: {recipe.creator} | Version: {recipe.version.number}
            </div>
            <Button variant="ghost" size="icon">
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Open in new view</span>
            </Button>
          </div>
          
          <div className="mb-3">
            <Button variant="outline" size="sm" className="w-full justify-center text-sm">
              <span>Show in: Beginner ↔ Advanced Mode</span>
            </Button>
          </div>
          
          <div className="mb-3">
            <span className="text-sm font-semibold uppercase text-slate-700">Style:</span>{' '}
            <span className="text-sm text-slate-600">{recipe.style.charAt(0).toUpperCase() + recipe.style.slice(1)}</span>
          </div>
          
          <Separator className="my-3" />
          
          <div className="mb-4">
            <h4 className="mb-2 font-semibold uppercase text-slate-700">Metrics:</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
              <li className="flex items-baseline justify-between">
                <span className="text-sm text-slate-500">ABV:</span>
                <span className="font-medium">{recipe.abv}%</span>
              </li>
              <li className="flex items-baseline justify-between">
                <span className="text-sm text-slate-500">OG:</span>
                <span className="font-medium">{recipe.og}</span>
              </li>
              <li className="flex items-baseline justify-between">
                <span className="text-sm text-slate-500">FG:</span>
                <span className="font-medium">{recipe.fg}</span>
              </li>
              <li className="flex items-baseline justify-between">
                <span className="text-sm text-slate-500">Ready in:</span>
                <span className="font-medium">{recipe.readyIn}</span>
              </li>
              <li className="flex items-baseline justify-between">
                <span className="text-sm text-slate-500">Primary:</span>
                <span className="font-medium">{recipe.primary}</span>
              </li>
              <li className="flex items-baseline justify-between">
                <span className="text-sm text-slate-500">Secondary:</span>
                <span className="font-medium">{recipe.secondary}</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">View Ingredients</Button>
            <Button variant="outline" size="sm">View Process</Button>
            <Button variant="outline" size="sm">View Notes</Button>
            <Button variant="outline" size="sm">View Reviews</Button>
          </div>
        </div>
      )}
    </div>
  )
}