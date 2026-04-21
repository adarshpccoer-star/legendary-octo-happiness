"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  style: string;
  image: string;
}

function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cs-text", {
        x: -80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 15%",
          toggleActions: "play reverse play reverse",
        },
      });

      const cards = gsap.utils.toArray<HTMLElement>(".cs-card");
      cards.forEach((card, index) => {
        const fromX = index % 2 === 0 ? -130 : 130;
        const hideX = -fromX;

        gsap.set(card, { x: fromX, opacity: 0 });

        ScrollTrigger.create({
          trigger: card,
          start: "top 15%",
          end: "bottom top",
          onEnter: () => {
            gsap.to(card, {
              x: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power3.out",
              overwrite: "auto",
            });
          },
          onEnterBack: () => {
            gsap.to(card, {
              x: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power3.out",
              overwrite: "auto",
            });
          },
          onUpdate: (self) => {
            const deltaY = self.getVelocity();
            if (deltaY < 0 && self.progress < 0.02) {
              gsap.to(card, {
                x: hideX,
                opacity: 0,
                duration: 0.45,
                ease: "power2.in",
                overwrite: "auto",
              });
            }
          },
          onLeaveBack: () => {
            gsap.to(card, {
              x: hideX,
              opacity: 0,
              duration: 0.45,
              ease: "power2.in",
              overwrite: "auto",
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const galleryItems: GalleryItem[] = [
    {
      id: "01",
      title: "Scandinavian Living Corner",
      category: "Living Room",
      style: "Soft Neutrals",
      image: "https://images.unsplash.com/photo-1616593969747-4797dc75033e?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "02",
      title: "Contemporary Dining Setup",
      category: "Dining",
      style: "Natural Wood",
      image: "https://images.unsplash.com/photo-1617104551722-3b2d513664c7?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "03",
      title: "Minimal Bedroom Essentials",
      category: "Bedroom",
      style: "Clean Geometry",
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "04",
      title: "Modern Home Office",
      category: "Workspace",
      style: "Productive Calm",
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "05",
      title: "Accent Chairs Collection",
      category: "Seating",
      style: "Statement Pieces",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "06",
      title: "Warm Lighting Concepts",
      category: "Lighting",
      style: "Ambient Luxe",
      image: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  return (
    <section ref={sectionRef} className="min-h-screen w-full bg-[#e8dfd3] px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_1.6fr]">
        <aside className="lg:sticky lg:top-10 lg:h-fit">
          <p className="cs-text mb-4 text-xs uppercase tracking-[0.24em] text-black/45">Case Studies</p>
          <h1 className="cs-text text-4xl font-semibold leading-tight tracking-tight text-black sm:text-6xl">
            Furniture
            <br />
            Style Gallery
          </h1>
          <p className="cs-text mt-8 max-w-md text-sm leading-relaxed text-black/60">
            Explore curated furniture looks for every room. Each setup highlights a design mood so your catalog
            feels premium, consistent, and easy to browse.
          </p>

          <div className="cs-text mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-black/10 bg-white/50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-black/45">Themes</p>
              <p className="mt-2 text-2xl font-semibold text-black">06</p>
            </div>
            <div className="rounded-xl border border-black/10 bg-white/50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-black/45">Rooms</p>
              <p className="mt-2 text-2xl font-semibold text-black">05+</p>
            </div>
          </div>
        </aside>

        <div className="grid gap-6 sm:grid-cols-2">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className="cs-card group overflow-hidden rounded-2xl border border-black/10 bg-[#f6f2eb] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-4/5 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover grayscale-25 transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-black/45">
                  <span>{item.category}</span>
                  <span>#{item.id}</span>
                </div>
                <h2 className="text-xl font-medium tracking-tight text-black">{item.title}</h2>
                <p className="text-sm text-black/60">{item.style}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;  