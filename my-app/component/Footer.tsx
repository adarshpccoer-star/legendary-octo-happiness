import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-[#c6bbaa] text-black border-t border-black/10 px-10 py-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* COLUMN 1: BRAND & PHILOSOPHY */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-serif tracking-tighter uppercase mb-4">WoodCraft</h2>
            <p className="text-sm text-black/60 leading-relaxed max-w-[280px]">
              Crafting sustainable, high-end furniture that merges geometric precision with the warmth of natural oak and walnut.
            </p>
          </div>
          <div className="mt-8">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">
              © 2026 WoodCraft Studio
            </span>
          </div>
        </div>

        {/* COLUMN 2: NAVIGATION & EXPLORE */}
        <div className="flex flex-col gap-6 md:border-x border-black/10 md:px-12">
          <h4 className="text-xs uppercase tracking-widest font-bold text-black/40">Navigation</h4>
          <ul className="flex flex-col gap-3">
            {['Collections', 'Case Studies', 'Featured Products', 'Process', 'Sustainability'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-lg hover:italic transition-all">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3: NEWSLETTER & SOCIAL */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-black/40 mb-6">Stay Connected</h4>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-black transition-colors placeholder:text-black/30 placeholder:text-xs"
              />
              <button className="absolute right-0 bottom-2 text-xs uppercase font-bold tracking-tighter hover:italic">
                Join
              </button>
            </div>
          </div>

          <div className="flex gap-6 mt-12 text-sm font-medium">
            <a href="#" className="hover:opacity-50 transition-opacity underline decoration-1 underline-offset-4">Instagram</a>
            <a href="#" className="hover:opacity-50 transition-opacity underline decoration-1 underline-offset-4">Pinterest</a>
            <a href="#" className="hover:opacity-50 transition-opacity underline decoration-1 underline-offset-4">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* BOTTOM STRIP */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-black/5 flex justify-between items-center text-[10px] uppercase tracking-widest opacity-40">
        <p>Designed for Longevity</p>
        <p>Privacy • Terms</p>
      </div>
    </footer>
  )
}

export default Footer