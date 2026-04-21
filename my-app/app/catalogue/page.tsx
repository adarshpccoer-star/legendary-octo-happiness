"use client";

import Link from "next/link";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { furnitureItems } from "@/lib/furniture-data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = ["all", "chairs", "tables", "sofas", "beds"] as const;
const types = ["all", "modern", "minimal", "luxury", "wooden"] as const;

export default function CataloguePage() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("all");
  const [activeType, setActiveType] = useState<(typeof types)[number]>("all");
  const [maxPrice, setMaxPrice] = useState(1500);

  const filteredItems = useMemo(() => {
    return furnitureItems.filter((item) => {
      const categoryMatch = activeCategory === "all" || item.category === activeCategory;
      const typeMatch = activeType === "all" || item.type === activeType;
      const priceMatch = item.price <= maxPrice;
      return categoryMatch && typeMatch && priceMatch;
    });
  }, [activeCategory, activeType, maxPrice]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".catalogue-headline", {
        y: 44,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".catalogue-filter-panel", {
        x: -36,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".catalogue-filter-panel",
          start: "top 15%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".catalogue-card").forEach((card, index) => {
        gsap.from(card, {
          x: index % 2 === 0 ? -48 : 48,
          opacity: 0,
          duration: 0.75,
          delay: Math.min(index * 0.05, 0.3),
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 15%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".catalogue-photo").forEach((photo, index) => {
        gsap.from(photo, {
          x: index % 2 === 0 ? -40 : 40,
          scale: 0.92,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: photo,
            start: "top 15%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [filteredItems.length]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#f4f1ec] px-6 pb-16 pt-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="catalogue-headline mb-8 border-b border-black/10 pb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-black/45">Catalogue</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-black md:text-6xl">Discover Furniture</h1>
        </header>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="catalogue-filter-panel h-fit rounded-2xl border border-black/10 bg-white/70 p-5 lg:sticky lg:top-28">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-black/60">Filters</h2>
            </div>

            <div className="mt-5 space-y-3">
              <label htmlFor="price-range" className="block text-sm font-medium text-black">
                Max Price: ${maxPrice}
              </label>
              <input
                id="price-range"
                type="range"
                min={150}
                max={1500}
                step={10}
                value={maxPrice}
                onChange={(event) => setMaxPrice(Number(event.target.value))}
                className="w-full accent-black"
              />
            </div>

            <div className="mt-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Type</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.14em] transition ${
                      activeType === type ? "border-black bg-black text-white" : "border-black/20 text-black/70 hover:border-black/40"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Categories</h3>
              <div className="mt-3 grid gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-lg border px-3 py-2 text-left text-sm capitalize transition ${
                      activeCategory === category
                        ? "border-black bg-black text-white"
                        : "border-black/15 bg-transparent text-black/70 hover:border-black/40"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                href={`/catalogue/${item.id}`}
                className="catalogue-card group overflow-hidden rounded-2xl border border-black/10 bg-white/70 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-4/5 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-black/45">{item.category}</p>
                  <h2 className="mt-2 text-lg font-medium tracking-tight text-black">{item.name}</h2>
                  <p className="mt-3 text-base font-semibold text-black">${item.price}</p>
                </div>
              </Link>
            ))}
            {filteredItems.length === 0 && (
              <div className="col-span-full rounded-xl border border-dashed border-black/20 bg-white/50 p-8 text-center text-black/60">
                No furniture items match these filters.
              </div>
            )}
          </section>
        </div>

        <section className="mt-14 grid gap-5 md:grid-cols-2">
          <article className="catalogue-photo overflow-hidden rounded-3xl border border-black/10 bg-white/70">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80"
              alt="Sculptural dining interior"
              className="h-72 w-full object-cover md:h-96"
            />
          </article>
          <article className="catalogue-photo overflow-hidden rounded-3xl border border-black/10 bg-white/70">
            <img
              src="https://images.unsplash.com/photo-1616627452092-ec7f9f8f9f7a?auto=format&fit=crop&w=1400&q=80"
              alt="Warm living room with handcrafted furniture"
              className="h-72 w-full object-cover md:h-96"
            />
          </article>
        </section>
      </div>
    </main>
  );
}
