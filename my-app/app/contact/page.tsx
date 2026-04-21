"use client";

import { useLayoutEffect, useRef } from "react";
import {
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Hammer, // Changed from Stethoscope
  User,
  Home, // Changed from Building2
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const infoCards = [
  {
    title: "Phone",
    icon: Phone,
    lines: ["+1 (212) 555-0188", "+1 (646) 555-0142"],
  },
  {
    title: "Email",
    icon: Mail,
    lines: ["hello@woodcraft.studio", "support@woodcraft.studio"],
  },
  {
    title: "Showroom", // Changed from Address
    icon: MapPin,
    lines: ["221b Elementary Street", "New York, NY 10012"],
  },
];

export default function ContactPage() {
  const containerRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-title", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".contact-card").forEach((card, index) => {
        gsap.from(card, {
          x: index % 2 === 0 ? -60 : 60,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 15%",
          },
        });
      });

      gsap.from(".contact-showcase", {
        x: -48,
        opacity: 0,
        scale: 0.96,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".contact-showcase",
          start: "top 15%",
        },
      });

      gsap.from(".contact-consultation", {
        x: -30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-consultation",
          start: "top 15%",
        },
      });

      gsap.from(".contact-form", {
        x: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 15%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#F9F9F7] pt-28 text-[#111827]">
      <section className="px-6 pb-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.24em] text-black/50">Get in touch</p>
          <h1 className="contact-title mt-4 text-4xl font-bold uppercase tracking-tighter text-black md:text-6xl">
            Let&apos;s Talk Timber
          </h1>

          <div className="contact-card-grid mt-10 grid gap-5 md:grid-cols-3">
            {infoCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="contact-card rounded-3xl border border-black/5 bg-white px-6 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.03)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c6bbaa]/30 text-black">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-lg font-semibold text-black">{card.title}</h2>
                  <div className="mt-3 space-y-1 text-sm leading-7 text-black/60">
                    {card.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="contact-showcase mt-10 overflow-hidden rounded-[2rem] border border-black/10 bg-white/60 p-3">
            <img
              src="https://images.unsplash.com/photo-1616594039964-3f2a2c2f2d40?auto=format&fit=crop&w=1600&q=80"
              alt="Handcrafted furniture studio workspace"
              className="h-72 w-full rounded-[1.4rem] object-cover md:h-104"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.05)] md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="contact-consultation rounded-[1.75rem] bg-[#c6bbaa]/20 p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-black/60">Design Consultation</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black">
                Start your custom project.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-black/60">
                Whether it&apos;s a bespoke walnut dining table or a full interior fit-out, our master 
                craftsmen are ready to bring your vision to life.
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-black/10 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                    <Hammer className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black">Artisan Support Desk</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-black/40">Handcrafted, Sustainable, Precise</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-black">Inquiry Type</span>
                  <select className="h-14 rounded-2xl border border-black/10 bg-[#F9F9F7] px-4 text-sm text-black/70 outline-none transition focus:border-black">
                    <option>Custom Furniture Quote</option>
                    <option>Bulk/Commercial Order</option>
                    <option>Interior Design Partnership</option>
                    <option>Returns & Maintenance</option>
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-black">Wood Preference</span>
                  <select className="h-14 rounded-2xl border border-black/10 bg-[#F9F9F7] px-4 text-sm text-black/70 outline-none transition focus:border-black">
                    <option>Black Walnut</option>
                    <option>White Oak</option>
                    <option>Reclaimed Teak</option>
                    <option>Not sure yet</option>
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-black">Full Name</span>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="h-14 w-full rounded-2xl border border-black/10 bg-[#F9F9F7] pl-11 pr-4 text-sm outline-none transition focus:border-black"
                    />
                  </div>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-black">Project Location</span>
                  <div className="relative">
                    <Home className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
                    <input
                      type="text"
                      placeholder="Residential / Commercial"
                      className="h-14 w-full rounded-2xl border border-black/10 bg-[#F9F9F7] pl-11 pr-4 text-sm outline-none transition focus:border-black"
                    />
                  </div>
                </label>

                <label className="grid gap-2 md:col-span-2">
                  <span className="text-sm font-medium text-black">Phone Number</span>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="h-14 w-full rounded-2xl border border-black/10 bg-[#F9F9F7] pl-11 pr-4 text-sm outline-none transition focus:border-black"
                    />
                  </div>
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-black">Project Details</span>
                <textarea
                  rows={7}
                  placeholder="Tell us about the piece you're looking for (dimensions, style, usage)..."
                  className="min-h-40 rounded-3xl border border-black/10 bg-[#F9F9F7] px-4 py-4 text-sm outline-none transition focus:border-black"
                />
              </label>

              <button
                type="submit"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-black px-8 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:bg-zinc-800"
              >
                Send Inquiry
                <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}