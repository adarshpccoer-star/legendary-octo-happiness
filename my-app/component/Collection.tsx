"use client"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Collection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marqueeTween = gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 16,
        ease: "none",
      });

      let deltaY = 0;
      const runCollectionAnimation = () => {
        const velocityFactor = Math.min(Math.abs(deltaY) / 1200, 0.35);
        const duration = 1.05 - velocityFactor;

        gsap.fromTo(
          ".modern-card",
          { x: -150, opacity: 0 },
          { x: 0, opacity: 1, duration, ease: "power3.out", overwrite: "auto", clearProps: "transform" },
        );

        gsap.fromTo(
          ".gallery-item",
          { y: 90, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: duration + 0.1,
            stagger: 0.12,
            ease: "power3.out",
            overwrite: "auto",
            clearProps: "transform",
          },
        );
      };

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 19%",
        end: "bottom top",
        onUpdate: (self) => {
          deltaY = self.getVelocity();
        },
        onEnter: runCollectionAnimation,
        onEnterBack: runCollectionAnimation,
      });

      return () => marqueeTween.kill();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const items = Array(10).fill("bespoke");

  const StarIcon = () => (
    <svg className="h-8 w-8 fill-current" viewBox="0 0 50 50">
      <path d="M49.04,24.001l-1.082-0.043h-0.001C36.134,23.492,26.508,13.866,26.042,2.043L25.999,0.96C25.978,0.424,25.537,0,25,0 s-0.978,0.424-0.999,0.96l-0.043,1.083C23.492,13.866,13.866,23.492,2.042,23.958L0.96,24.001C0.424,24.022,0,24.463,0,25 c0,0.537,0.424,0.978,0.961,0.999l1.082,0.042c11.823,0.467,21.449,10.093,21.915,21.916l0.043,1.083C24.022,49.576,24.463,50,25,50 s0.978-0.424,0.999-0.96l0.043-1.083c0.466-11.823,10.092-21.449,21.915-21.916l1.082-0.042C49.576,25.978,50,25.537,50,25 C50,24.463,49.576,24.022,49.04,24.001z"></path>
    </svg>
  );

  const galleryImages = [
    "/amzo1.jpg",
    "https://m.media-amazon.com/images/I/61pP1ng5xYL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/61AZEnSHqvL._SX679_.jpg"
  ];
  return (
    <div ref={containerRef} className='relative flex h-screen w-full flex-col overflow-hidden bg-black font-sans'>
      
      {/* TOP MARQUEE */}
      <div className='flex w-full overflow-hidden whitespace-nowrap border-y border-black/10 bg-black py-4'>
        <div ref={marqueeRef} className='flex flex-row items-center gap-8 px-4'>
          {/* Double the items to ensure seamless looping without snapping */}
          {[...items, ...items, ...items, ...items].map((text, index) => (
            <div key={index} className="flex items-center gap-4 font-black uppercase tracking-widest text-white">
              <StarIcon />
              <span className="text-3xl">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED CARDS SECTION */}
      <div className='flex flex-1 items-stretch gap-6 overflow-hidden p-8'>
        
        {/* CARD 1: MODERN */}
        <div className='modern-card relative w-1/3 cursor-pointer overflow-hidden rounded-4xl border border-white/10 bg-zinc-900/30 transition-all duration-500 hover:-translate-y-1 hover:bg-white/5'>
          <Image 
            src="/download.jpg" 
            alt="Modern Interior" 
            fill 
            className="object-cover"
            priority 
          />
        </div>

        {/* CARD 2: COLLECTION DETAILS */}
        <div className='details-card relative flex flex-1 flex-col justify-between rounded-4xl border border-white/10 bg-zinc-900/50 p-10 text-white'>
          
          <div className='flex flex-col gap-4'>
            <h1 className='font-serif text-7xl tracking-tight text-stone-100'>Collection</h1>
            <p className='max-w-sm text-lg leading-relaxed text-stone-400'>
              Hand-selected pieces focusing on minimalist geometry and natural textures.
            </p>
          </div>

          {/* Image Gallery Row */}
          <div className='my-8 flex h-48 gap-4'>
            {galleryImages.map((url, idx) => (
              <div key={idx} data-index={idx} className='gallery-item relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:grayscale-0'>
                <Image 
                  src={url} 
                  alt={`Furniture piece ${idx + 1}`} 
                  fill 
                  className="object-cover" 
                />
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className='flex items-center justify-between border-t border-white/10 pt-6'>
            <div>
              <p className='text-xs font-bold uppercase tracking-[0.3em] text-stone-500'>
                Handcrafted • 2026
              </p>
              <p className='mt-1 text-sm text-stone-400'>
                Sustainably sourced oak and walnut.
              </p>
            </div>
            
            <button className='group flex items-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-red-600 hover:text-white'>
              Explore More
              <svg className="h-5 w-5 rotate-0 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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