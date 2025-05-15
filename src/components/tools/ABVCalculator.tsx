import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Calculate, Save } from 'lucide-react'

export function ABVCalculator() {
  const [og, setOg] = useState('1.110')
  const [fg, setFg] = useState('1.010')
  const [abv, setAbv] = useState('13.13')
  
  const calculateABV = () => {
    const originalGravity = parseFloat(og)
    const finalGravity = parseFloat(fg)
    
    if (!isNaN(originalGravity) && !isNaN(finalGravity)) {
      const calculatedABV = (originalGravity - finalGravity) * 131.25
      setAbv(calculatedABV.toFixed(2))
    }
  }
  
  return (
    <Card>
      <CardHeader className="bg-amber-50 border-b">
        <CardTitle className="text-amber-800">ABV Calculator</CardTitle>
        <CardDescription>Calculate alcohol by volume from gravity readings</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="og">Original Gravity (OG):</Label>
            <Input
              id="og"
              type="text"
              value={og}
              onChange={(e) => setOg(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="fg">Final Gravity (FG):</Label>
            <Input
              id="fg"
              type="text"
              value={fg}
              onChange={(e) => setFg(e.target.value)}
            />
          </div>
          
          <div className="mt-2 text-sm text-slate-500">
            <p>Formula: (OG - FG) × 131.25</p>
          </div>
          
          <div className="rounded-md bg-amber-50 p-3 text-center">
            <div className="text-sm font-medium text-amber-800">RESULT</div>
            <div className="text-2xl font-bold text-amber-900">{abv}% ABV</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-slate-50 px-6 py-4">
        <Button
          variant="outline"
          onClick={calculateABV}
          className="flex items-center gap-2"
        >
          <Calculate className="h-4 w-4" />
          <span>Recalculate</span>
        </Button>
        <Button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600">
          <Save className="h-4 w-4" />
          <span>Save to Recipe</span>
        </Button>
      </CardFooter>
    </Card>
  )
}