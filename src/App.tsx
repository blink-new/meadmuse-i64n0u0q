function App() {
  return (
    <div className="flex min-h-screen w-full p-4 flex-col">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-amber-600">MeadMuse</h1>
        <p className="text-slate-600">AI-powered mead recipe assistant</p>
      </header>
      
      <main className="flex-1 bg-white rounded-md shadow p-6">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 p-4 bg-slate-50 rounded-md">
            <div className="h-8 w-8 shrink-0 bg-slate-200 rounded-md flex items-center justify-center">
              <span>👤</span>
            </div>
            <div>
              I'd like to make a sweet berry mead that's ready in about 3 months.
            </div>
          </div>
          
          <div className="flex gap-4 p-4 rounded-md">
            <div className="h-8 w-8 shrink-0 bg-amber-100 rounded-md flex items-center justify-center">
              <span>🤖</span>
            </div>
            <div className="space-y-4">
              <p>
                I can help with that! For a sweet berry mead with a shorter timeline, I'd recommend using a fast-fermenting yeast like Lalvin 71B and adding stabilizers once fermentation reaches your desired sweetness level.
              </p>
              <p>Here are some options that match your criteria:</p>
              
              <div className="mt-4 space-y-4">
                <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
                  <h3 className="text-xl font-semibold">Quick Berry Mead</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-amber-400">★★★★☆</span>
                    <span className="text-sm text-slate-500">(4.5/5) | 2 Reviews</span>
                  </div>
                  <p className="mt-2 text-slate-600">
                    A sweet berry mead designed to be ready in just 3 months, perfect for those who want to enjoy their mead quickly.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm">ABV: 12%</span>
                    <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm">Ready: 3 months</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Beginner</span>
                  </div>
                </div>
                
                <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
                  <h3 className="text-xl font-semibold">Summer Raspberry Mead</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-amber-400">★★★★★</span>
                    <span className="text-sm text-slate-500">(4.7/5) | 3 Reviews</span>
                  </div>
                  <p className="mt-2 text-slate-600">
                    A vibrant, sweet raspberry mead perfect for summer enjoyment, crafted to be ready in just 3 months.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm">ABV: 14%</span>
                    <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm">Ready: 3 months</span>
                    <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-sm">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <div className="border-t py-4 mt-4">
        <div className="flex gap-2 max-w-3xl mx-auto">
          <input 
            type="text" 
            placeholder="Ask about mead recipes..." 
            className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-xl">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default App