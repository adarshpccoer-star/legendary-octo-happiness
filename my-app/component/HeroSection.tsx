"use client"


import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const runHeroAnimation = () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(
          ".hero-title",
          { y: -120, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, clearProps: "transform" },
        )
          .fromTo(
            ".hero-img",
            { y: 140, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, duration: 1.2, clearProps: "transform" },
            "<0.05",
          )
          .fromTo(
            ".hero-text",
            { x: -120, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, clearProps: "transform" },
            "<0.1",
          );
      };

      runHeroAnimation();

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom top",
        onEnter: runHeroAnimation,
        onEnterBack: runHeroAnimation,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full justify-center overflow-hidden bg-[#c6bbaa]"
    >
      <div className="relative mt-20 flex w-full flex-col items-center">
        
        <h1 className="hero-title absolute top-32 z-10 w-full text-center text-[15vw] font-black uppercase">
          WoodCraft
        </h1>

        <div className="hero-text absolute bottom-24 left-10 z-30 max-w-64">
          <p className="text-xl text-gray-700 leading-tight">
            "Wait... did I leave the oven on? Also, this sofa is incredibly comfortable."
          </p>
          <button className="m-4 rounded-4xl bg-black p-5 text-white">
            explore more
          </button>
        </div>

        <img
          src="/sofa5.png"
          alt="Sofa"
          className="hero-img absolute top-20 z-20 w-[90%] max-w-225 object-contain"
        />
      </div>
    </section>
  );
}

export default HeroSection;