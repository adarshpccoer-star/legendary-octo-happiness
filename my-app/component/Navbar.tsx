import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="absolute left-0 top-0 z-50 flex h-20 w-full items-center justify-between px-6 md:px-16">
      <div className="text-2xl font-bold italic tracking-tight text-black">
        WoodCraft
      </div>

      <div className="hidden gap-8 text-sm font-bold uppercase tracking-widest text-black md:flex">
        <Link href="/" className="hover:opacity-50 transition-opacity">Home</Link>
        <Link href="/catalogue" className="hover:opacity-50 transition-opacity">Catalogue</Link>
        <Link href="/about-us" className="hover:opacity-50 transition-opacity">About Us</Link>
        <Link href="/contact" className="hover:opacity-50 transition-opacity">Contact Us</Link>
      </div>

      <Link
        href="/catalogue"
        className="rounded-full border border-black bg-black px-7 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
      >
        Shop Now
      </Link>

    </nav>
  );
}

export default Navbar;