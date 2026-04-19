import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='w-full h-20 flex items-center justify-between px-6 md:px-16 absolute top-0 left-0 z-50'>
      
      {/* Logo */}
      <div className='text-2xl font-bold italic tracking-tight text-black'>
        PANTO
      </div>

      {/* Links */}
      <div className='hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-black'>
        <Link href="/" className="hover:opacity-50 transition-opacity">Home</Link>
        <Link href="/about" className="hover:opacity-50 transition-opacity">About</Link>
        <Link href="/services" className="hover:opacity-50 transition-opacity">Services</Link>
        <Link href="/contact" className="hover:opacity-50 transition-opacity">Contact</Link>
      </div>

      {/* Action */}
      <button className='bg-black text-white px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black border border-black transition-all duration-300'>
        Get Started
      </button>

    </nav>
  )
}

export default Navbar