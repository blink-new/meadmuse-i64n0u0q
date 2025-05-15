// Message types
export type MessageRole = 'user' | 'assistant' | 'system'

export interface Message {
  id: string
  role: MessageRole
  content: string
  timestamp: number
}

export interface Conversation {
  id: string
  title: string
  messages: Message[]
  lastActive: number
  expertiseLevel?: ExpertiseLevel
}

// Recipe types
export type ExpertiseLevel = 'beginner' | 'intermediate' | 'advanced'

export type MeadStyle = 
  | 'traditional' 
  | 'melomel' 
  | 'metheglin' 
  | 'braggot'
  | 'cyser'
  | 'pyment'
  | 'bochet'
  | 'acerglyn'
  | 'rhodomel'
  | 'capsicumel'
  | 'specialty'

export interface RecipeIngredient {
  id: string
  name: string
  amount: string
  unit: string
  notes?: string
}

export interface RecipeStep {
  id: string
  order: number
  description: string
  duration?: string
  notes?: string
}

export interface RecipeNote {
  id: string
  content: string
  author: string
  timestamp: number
}

export interface RecipeReview {
  id: string
  rating: number
  content: string
  author: string
  timestamp: number
}

export interface RecipeVersion {
  id: string
  number: string
  changelog: string
  createdBy: string
  timestamp: number
  parentVersionId?: string
}

export interface Recipe {
  id: string
  name: string
  description: string
  style: MeadStyle
  difficulty: ExpertiseLevel
  abv: number
  og: number
  fg: number
  readyIn: string
  primary: string
  secondary: string
  ingredients: RecipeIngredient[]
  steps: RecipeStep[]
  notes: RecipeNote[]
  reviews: RecipeReview[]
  rating: number
  reviewCount: number
  creator: string
  isAiGenerated: boolean
  createdAt: number
  updatedAt: number
  version: RecipeVersion
  parentRecipeId?: string
}

// Collection types
export interface Collection {
  id: string
  name: string
  description: string
  recipes: string[] // Array of recipe IDs
  createdAt: number
  updatedAt: number
}