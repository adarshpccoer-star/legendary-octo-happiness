"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Circle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutUsPage() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. ABOUT US HEADER (Comes from Left)
      gsap.from(".about-header", {
        x: -150,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-header",
          start: "top 15%",
          end: "top 10%",
          toggleActions: "play reverse play reverse", // play on enter, reverse on leave
        },
      });

      // 2. CONTACT US HEADER (Comes from Right)
      gsap.from(".contact-header", {
        x: 150,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 15%",
          end: "top 10%",
          toggleActions: "play reverse play reverse",
        },
      });

      // 3. IMAGES (Left-side Reveal)
      gsap.utils.toArray(".image-left").forEach((img: any) => {
        gsap.from(img, {
          x: -100,
          opacity: 0,
          scale: 0.9,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: img,
            start: "top 15%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });
      });

      // 4. IMAGES (Right-side Reveal)
      gsap.utils.toArray(".image-right").forEach((img: any) => {
        gsap.from(img, {
          x: 100,
          opacity: 0,
          scale: 0.9,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: img,
            start: "top 15%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-white px-6 pb-24 pt-28 text-black md:px-10 lg:px-16 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* HEADER */}
        <div className="flex flex-col gap-6 border-b border-black/10 pb-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="about-header">
            <p className="text-xs uppercase tracking-[0.28em] text-black/45">Artisan Furniture Studio</p>
            <h1 className="mt-6 text-[18vw] font-black uppercase leading-none tracking-[-0.06em] sm:text-[6.8rem] lg:text-[8.8rem]">
              ABOUT US
            </h1>
          </div>

          <div className="contact-header flex flex-col items-start gap-4 lg:pt-3">
            <p className="max-w-sm text-sm leading-7 text-black/60">
              Handcrafting timeless pieces with sculptural restraint and master-grade timber.
            </p>
            <Link href="/contact" className="inline-flex items-center rounded-full border border-black bg-black px-6 py-3 text-sm font-medium uppercase text-white transition hover:bg-white hover:text-black">
              Contact Us
            </Link>
          </div>
        </div>

        {/* SECTION 1: Image Left */}
        <section className="py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="image-left overflow-hidden rounded-3xl bg-[#F5F5F5]">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                alt="Woodcraft"
                className="h-full min-h-[500px] w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <h2 className="text-4xl font-semibold">Born from the forest.</h2>
              <p className="mt-4 text-black/60 leading-relaxed">Each grain tells a story of patience, precision, and the raw beauty of nature preserved in functional art.</p>
            </div>
          </div>
        </section>

        {/* SECTION 2: Image Right */}
        <section className="py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 order-2 lg:order-1">
              <h2 className="text-4xl font-semibold">The Benchwork.</h2>
              <p className="mt-4 text-black/60 leading-relaxed">Our master craftsmen spend weeks on a single joint to ensure a lifetime of stability.</p>
            </div>
            <div className="image-right overflow-hidden rounded-3xl bg-[#F5F5F5] order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
                alt="Craftsmanship"
                className="h-full min-h-[500px] w-full object-cover"
              />
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}