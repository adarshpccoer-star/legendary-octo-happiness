"use client"
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from(".footer-col", {
  //       scrollTrigger: {
  //         trigger: footerRef.current,
  //         start: "top 90%", 
  //         toggleActions: "play none none none"
  //       },
  //       y: 40,
  //       opacity: 0,
  //       duration: 0.8,
  //       stagger: 0.15,
  //       ease: "power2.out"
  //     });
      
  //     gsap.from(".footer-bottom", {
  //       scrollTrigger: {
  //         trigger: footerRef.current,
  //         start: "top 95%", 
  //         toggleActions: "play none none none"
  //       },
  //       opacity: 0,
  //       duration: 1,
  //       delay: 0.5,
  //     })
  //   }, footerRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <footer ref={footerRef} className="w-full border-t border-black/10 bg-[#c6bbaa] px-10 py-16 font-sans text-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
        
        {/* COLUMN 1: BRAND & PHILOSOPHY */}
        <div className="footer-col flex flex-col justify-between">
          <div>
            <h2 className="mb-4 font-serif text-3xl uppercase tracking-tighter">WoodCraft</h2>
            <p className="max-w-[280px] text-sm leading-relaxed text-black/60">
              Crafting sustainable, high-end furniture that merges geometric precision with the warmth of natural oak and walnut.
            </p>
          </div>
          <div className="mt-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
              © 2026 WoodCraft Studio
            </span>
          </div>
        </div>

        {/* COLUMN 2: NAVIGATION & EXPLORE */}
        <div className="footer-col flex flex-col gap-6 border-black/10 md:border-x md:px-12">
          <h4 className="text-xs font-bold uppercase tracking-widest text-black/40">Navigation</h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Home", href: "/" },
              { label: "Catalogue", href: "/catalogue" },
              { label: "About Us", href: "/about-us" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-lg transition-all hover:italic">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3: NEWSLETTER & SOCIAL */}
        <div className="footer-col flex flex-col justify-between">
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-black/40">Stay Connected</h4>
            <div className="group relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full border-b border-black/20 bg-transparent py-2 placeholder:text-xs placeholder:text-black/30 focus:border-black focus:outline-none transition-colors"
              />
              <button className="absolute bottom-2 right-0 text-xs font-bold uppercase tracking-tighter hover:italic">
                Join
              </button>
            </div>
          </div>

          <div className="mt-12 flex gap-6 text-sm font-medium">
            <a href="#" className="underline decoration-1 underline-offset-4 transition-opacity hover:opacity-50">Instagram</a>
            <a href="#" className="underline decoration-1 underline-offset-4 transition-opacity hover:opacity-50">Pinterest</a>
            <a href="#" className="underline decoration-1 underline-offset-4 transition-opacity hover:opacity-50">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* BOTTOM STRIP */}
      <div className="footer-bottom mx-auto mt-16 flex max-w-7xl items-center justify-between border-t border-black/5 pt-8 text-[10px] uppercase tracking-widest opacity-40">
        <p>Designed for Longevity</p>
        <p>Privacy • Terms</p>
      </div>
    </footer>
  );
}

export default Footer;