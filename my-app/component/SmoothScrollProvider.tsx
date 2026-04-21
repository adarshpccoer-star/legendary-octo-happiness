"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

interface LocomotiveLike {
  scrollTo: (target: number | string | HTMLElement, options?: { duration?: number; disableLerp?: boolean }) => void;
  resize: () => void;
  destroy: () => void;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<LocomotiveLike | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      const el = containerRef.current;
      if (!el) return;

      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (!isMounted) return;

      gsap.registerPlugin(ScrollTrigger);

      let currentY = 0;

      const locoScroll = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.08,
        },
        scrollCallback: (scrollValues?: { scroll?: number }) => {
          if (typeof scrollValues?.scroll === "number") {
            currentY = scrollValues.scroll;
          }
          ScrollTrigger.update();
        },
      }) as unknown as LocomotiveLike;

      scrollRef.current = locoScroll;

      ScrollTrigger.scrollerProxy(el, {
        scrollTop(value?: number) {
          if (typeof value === "number") {
            locoScroll.scrollTo(value, { duration: 0, disableLerp: true });
          }
          return currentY;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: el.style.transform ? "transform" : "fixed",
      });

      const sections = gsap.utils.toArray<HTMLElement>("main section");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 86%",
              scroller: el,
            },
          },
        );
      });

      ScrollTrigger.addEventListener("refresh", () => locoScroll.resize());
      ScrollTrigger.refresh();
    };

    init();

    return () => {
      isMounted = false;
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.clearScrollMemory();
      scrollRef.current?.destroy();
      scrollRef.current = null;
    };
  }, []);

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    scroller.scrollTo(0, { duration: 0, disableLerp: true });
    requestAnimationFrame(() => {
      scroller.resize();
      ScrollTrigger.refresh();
    });
  }, [pathname]);

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
}
