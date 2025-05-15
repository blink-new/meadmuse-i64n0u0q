import { Message, Recipe, Conversation } from '@/types'

// Mock messages for initial conversation
export const mockMessages: Message[] = [
  {
    id: '1',
    role: 'user',
    content: 'I\'d like to make a sweet berry mead that\'s ready in about 3 months.',
    timestamp: Date.now() - 1000 * 60 * 5
  },
  {
    id: '2',
    role: 'assistant',
    content: 'I can help with that! For a sweet berry mead with a shorter timeline, I\'d recommend using a fast-fermenting yeast like Lalvin 71B and adding stabilizers once fermentation reaches your desired sweetness level.\n\nHere are some options that match your criteria:',
    timestamp: Date.now() - 1000 * 60 * 4
  }
]

// Mock recipe data
export const mockRecipes: Recipe[] = [
  {
    id: 'berry-mead-1',
    name: 'Quick Berry Mead',
    description: 'A sweet berry mead designed to be ready in just 3 months, perfect for those who want to enjoy their mead quickly.',
    style: 'melomel',
    difficulty: 'beginner',
    abv: 12,
    og: 1.110,
    fg: 1.020,
    readyIn: '3 months',
    primary: '2 weeks',
    secondary: '10 weeks',
    ingredients: [
      {
        id: 'honey-1',
        name: 'Wildflower Honey',
        amount: '3',
        unit: 'lbs'
      },
      {
        id: 'berry-1',
        name: 'Mixed Berries (fresh or frozen)',
        amount: '2',
        unit: 'lbs'
      },
      {
        id: 'yeast-1',
        name: 'Lalvin 71B Yeast',
        amount: '1',
        unit: 'packet'
      },
      {
        id: 'nutrient-1',
        name: 'Yeast Nutrient',
        amount: '1',
        unit: 'tsp'
      }
    ],
    steps: [
      {
        id: 'step-1',
        order: 1,
        description: 'Sanitize all equipment thoroughly.',
        duration: '30 minutes'
      },
      {
        id: 'step-2',
        order: 2,
        description: 'Heat 1/2 gallon of water to 160°F, remove from heat.',
        duration: '10 minutes'
      },
      {
        id: 'step-3',
        order: 3,
        description: 'Stir in honey until fully dissolved.',
        duration: '5 minutes'
      },
      {
        id: 'step-4',
        order: 4,
        description: 'Add cool water to bring total volume to 1 gallon and temperature to 70-75°F.',
        duration: '5 minutes'
      },
      {
        id: 'step-5',
        order: 5,
        description: 'Add yeast nutrient and pitch yeast according to package directions.',
        duration: '5 minutes'
      },
      {
        id: 'step-6',
        order: 6,
        description: 'Add berries to primary fermentation vessel.',
        duration: '5 minutes'
      },
      {
        id: 'step-7',
        order: 7,
        description: 'Ferment for 2 weeks, then rack to secondary fermenter, leaving fruit behind.',
        duration: '2 weeks'
      },
      {
        id: 'step-8',
        order: 8,
        description: 'Age for 2 months in secondary fermenter.',
        duration: '2 months'
      },
      {
        id: 'step-9',
        order: 9,
        description: 'Stabilize and back-sweeten if desired, then bottle.',
        duration: '1 day'
      }
    ],
    notes: [
      {
        id: 'note-1',
        content: 'Using frozen berries can help break down cell walls and extract more flavor quickly.',
        author: 'MeadMuse',
        timestamp: Date.now() - 1000 * 60 * 60 * 24 * 7
      },
      {
        id: 'note-2',
        content: 'For a clearer mead in this short timeframe, consider using pectic enzyme with the fruit.',
        author: 'MeadMaster91',
        timestamp: Date.now() - 1000 * 60 * 60 * 24 * 5
      }
    ],
    reviews: [
      {
        id: 'review-1',
        rating: 4,
        content: 'Turned out surprisingly good for such a quick mead! The berry flavor was prominent and pleasant.',
        author: 'NewBrewer22',
        timestamp: Date.now() - 1000 * 60 * 60 * 24 * 30
      },
      {
        id: 'review-2',
        rating: 5,
        content: 'Perfect recipe for beginners. I was able to make this successfully on my first try!',
        author: 'MeadFan99',
        timestamp: Date.now() - 1000 * 60 * 60 * 24 * 15
      }
    ],
    rating: 4.5,
    reviewCount: 2,
    creator: 'MeadMuse',
    isAiGenerated: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 180,
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 90,
    version: {
      id: 'v1',
      number: '1.0',
      changelog: 'Initial recipe creation',
      createdBy: 'MeadMuse',
      timestamp: Date.now() - 1000 * 60 * 60 * 24 * 180
    }
  },
  {
    id: 'summer-raspberry-mead',
    name: 'Summer Raspberry Mead',
    description: 'A vibrant, sweet raspberry mead perfect for summer enjoyment, crafted to be ready in just 3 months.',
    style: 'melomel',
    difficulty: 'intermediate',
    abv: 14,
    og: 1.115,
    fg: 1.015,
    readyIn: '3 months',
    primary: '2 weeks',
    secondary: '10 weeks',
    ingredients: [
      {
        id: 'honey-2',
        name: 'Clover Honey',
        amount: '3.5',
        unit: 'lbs'
      },
      {
        id: 'raspberry-1',
        name: 'Fresh Raspberries',
        amount: '3',
        unit: 'lbs'
      },
      {
        id: 'yeast-2',
        name: 'Lalvin 71B Yeast',
        amount: '1',
        unit: 'packet'
      },
      {
        id: 'nutrient-2',
        name: 'Fermaid O',
        amount: '3',
        unit: 'g'
      },
      {
        id: 'pectic-1',
        name: 'Pectic Enzyme',
        amount: '1/2',
        unit: 'tsp'
      }
    ],
    steps: [
      {
        id: 'step-1',
        order: 1,
        description: 'Sanitize all equipment thoroughly.',
        duration: '30 minutes'
      },
      {
        id: 'step-2',
        order: 2,
        description: 'Crush raspberries in a sanitized fermenting bucket.',
        duration: '10 minutes'
      },
      {
        id: 'step-3',
        order: 3,
        description: 'Add pectic enzyme to crushed raspberries and let sit for 12 hours.',
        duration: '12 hours'
      },
      {
        id: 'step-4',
        order: 4,
        description: 'Heat 1/2 gallon of water to 160°F, remove from heat, and stir in honey until dissolved.',
        duration: '15 minutes'
      },
      {
        id: 'step-5',
        order: 5,
        description: 'Cool honey water to room temperature and add to fermenting bucket with raspberries.',
        duration: '30 minutes'
      },
      {
        id: 'step-6',
        order: 6,
        description: 'Add water to make 1 gallon, then add Fermaid O.',
        duration: '5 minutes'
      },
      {
        id: 'step-7',
        order: 7,
        description: 'Pitch yeast according to package directions.',
        duration: '5 minutes'
      },
      {
        id: 'step-8',
        order: 8,
        description: 'Ferment for 2 weeks, stirring gently daily for the first week.',
        duration: '2 weeks'
      },
      {
        id: 'step-9',
        order: 9,
        description: 'Rack to secondary, leaving fruit and sediment behind.',
        duration: '30 minutes'
      },
      {
        id: 'step-10',
        order: 10,
        description: 'Age for 10 weeks, stabilizing and back-sweetening if desired in the final 2 weeks.',
        duration: '10 weeks'
      },
      {
        id: 'step-11',
        order: 11,
        description: 'Bottle and allow to age for at least 2 more weeks before drinking.',
        duration: '2 weeks'
      }
    ],
    notes: [
      {
        id: 'note-1',
        content: 'The color of this mead is absolutely stunning - a beautiful deep pink that brightens any table.',
        author: 'RaspberryFan',
        timestamp: Date.now() - 1000 * 60 * 60 * 24 * 100
      },
      {
        id: 'note-2',
        content: 'For a more tart flavor profile, reduce the back-sweetening amount.',
        author: 'MeadMaster91',
        timestamp: Date.now() - 1000 * 60 * 60 * 24 * 80
      }
    ],
    reviews: [
      {
        id: 'review-1',
        rating: 5,
        content: 'This recipe produced the most beautiful mead I\'ve ever made. The raspberry flavor was bright and fresh even after only 3 months.',
        author: 'SummerSipper',
        timestamp: Date.now() - 1000 * 60 * 60 * 24 * 60
      },
      {
        id: 'review-2',
        rating: 4,
        content: 'Great recipe! I found I needed to back-sweeten a bit more than suggested, but the result was delicious.',
        author: 'HoneyBrewer',
        timestamp: Date.now() - 1000 * 60 * 60 * 24 * 45
      },
      {
        id: 'review-3',
        rating: 5,
        content: 'Perfect summer drink! I served this at a garden party and everyone was impressed.',
        author: 'GardenMeader',
        timestamp: Date.now() - 1000 * 60 * 60 * 24 * 30
      }
    ],
    rating: 4.7,
    reviewCount: 3,
    creator: 'BerryBrewer',
    isAiGenerated: false,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 200,
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 100,
    version: {
      id: 'v1',
      number: '2.1',
      changelog: 'Optimized fermentation schedule for better clarity',
      createdBy: 'BerryBrewer',
      timestamp: Date.now() - 1000 * 60 * 60 * 24 * 100
    },
    parentRecipeId: 'original-raspberry-mead'
  }
]

// Mock conversations
export const mockConversations: Conversation[] = [
  {
    id: 'conv-1',
    title: 'Sweet Berry Mead Recipe',
    messages: mockMessages,
    lastActive: Date.now() - 1000 * 60 * 5,
    expertiseLevel: 'beginner'
  },
  {
    id: 'conv-2',
    title: 'Traditional Mead with Vanilla',
    messages: [],
    lastActive: Date.now() - 1000 * 60 * 60 * 2,
    expertiseLevel: 'intermediate'
  },
  {
    id: 'conv-3',
    title: 'Coffee Mead Creation',
    messages: [],
    lastActive: Date.now() - 1000 * 60 * 60 * 24,
    expertiseLevel: 'intermediate'
  },
  {
    id: 'conv-4',
    title: 'Viking Style Exploration',
    messages: [],
    lastActive: Date.now() - 1000 * 60 * 60 * 24 * 2,
    expertiseLevel: 'advanced'
  }
]