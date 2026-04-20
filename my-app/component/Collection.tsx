import Image from 'next/image';
import React from 'react';

function Collection() {
  const items = Array(10).fill("best Spoke");

  const StarIcon = () => (
    <svg className="w-8 h-8 fill-current" viewBox="0 0 50 50">
      <path d="M49.04,24.001l-1.082-0.043h-0.001C36.134,23.492,26.508,13.866,26.042,2.043L25.999,0.96C25.978,0.424,25.537,0,25,0 s-0.978,0.424-0.999,0.96l-0.043,1.083C23.492,13.866,13.866,23.492,2.042,23.958L0.96,24.001C0.424,24.022,0,24.463,0,25 c0,0.537,0.424,0.978,0.961,0.999l1.082,0.042c11.823,0.467,21.449,10.093,21.915,21.916l0.043,1.083C24.022,49.576,24.463,50,25,50 s0.978-0.424,0.999-0.96l0.043-1.083c0.466-11.823,10.092-21.449,21.915-21.916l1.082-0.042C49.576,25.978,50,25.537,50,25 C50,24.463,49.576,24.022,49.04,24.001z"></path>
    </svg>
  );

  // New furniture PNGs
  const galleryImages = [
    "/amzo1.jpg",
    "https://m.media-amazon.com/images/I/61pP1ng5xYL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/61AZEnSHqvL._SX679_.jpg"
  ];

  return (
    <div className='relative h-screen w-full bg-black overflow-hidden flex flex-col font-sans'>
      
      {/* TOP MARQUEE */}
      <div className='w-full bg-black py-4 overflow-hidden whitespace-nowrap flex border-y border-black/10'>
        <div className='flex flex-row items-center gap-8 animate-infinite-scroll'>
          {[...items, ...items].map((text, index) => (
            <div key={index} className="flex items-center gap-4 text-white font-black uppercase tracking-widest">
              <StarIcon />
              <span className="text-3xl">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED CARDS SECTION */}
      <div className='flex flex-1 gap-6 p-8 overflow-hidden items-stretch'>
        
        {/* CARD 1: MODERN (Left side) */}
        <div className='w-1/3 relative rounded-4xl border border-white/10 overflow-hidden bg-zinc-900/30 transition-all hover:bg-white/5 cursor-pointer'>
          <Image 
            src="/download.jpg" 
            alt="Modern Interior" 
            fill 
            className="object-cover"
            priority 
          />
        </div>

        {/* CARD 2: COLLECTION DETAILS (Right side) */}
        <div className='flex-1 relative rounded-4xl border border-white/10 bg-zinc-900/50 p-10 flex flex-col justify-between text-white'>
          
          <div className='flex flex-col gap-4'>
            <h1 className='text-7xl font-serif text-stone-100 tracking-tight'>Collection</h1>
            <p className='text-lg text-stone-400 max-w-sm leading-relaxed'>
              Hand-selected pieces focusing on minimalist geometry and natural textures.
            </p>
          </div>

          {/* Image Gallery Row */}
          <div className='flex gap-4 h-48 my-8'>
            {galleryImages.map((url, idx) => (
              <div key={idx} className='relative flex-1 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm grayscale hover:grayscale-0 transition-all duration-500 p-4'>
                <Image 
                  src={url} 
                  alt={`Furniture piece ${idx + 1}`} 
                  fill 
                  className="object-cover " // Ensures PNGs aren't cropped
                />
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className='border-t border-white/10 pt-6 flex justify-between items-center'>
            <div>
              <p className='text-xs uppercase tracking-[0.3em] text-stone-500 font-bold'>
                Handcrafted • 2026
              </p>
              <p className='text-sm mt-1 text-stone-400'>
                Sustainably sourced oak and walnut.
              </p>
            </div>
            
            <button className='group flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-bold uppercase text-xs tracking-widest hover:bg-red-600 hover:text-white transition-all'>
              Explore More
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Collection;