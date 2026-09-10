'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full border-b border-white/6 bg-transparent">
      <div className="container-max mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left navigation (desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#discover" className="hover:text-white transition-colors">Discover</a>
          <a href="#daily" className="hover:text-white transition-colors">Daily AURA</a>
          <a href="#cosmic" className="hover:text-white transition-colors">Cosmic Mirror</a>
        </nav>

        {/* Center wordmark */}
        <div className="text-lg md:text-xl font-display tracking-widest">AURA</div>

        {/* Right navigation (desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#shop" className="hover:text-white transition-colors">Shop</a>
          <a href="#rewards" className="hover:text-white transition-colors">Rewards</a>
          <a href="#account" className="hover:text-white transition-colors">Account</a>
        </nav>

        {/* Mobile menu trigger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="p-2 rounded-md border border-white/6 text-sm text-gray-300"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-[#070607] border-t border-white/4">
          <div className="px-4 py-4 flex flex-col gap-3 text-sm">
            <a href="#discover" className="py-2 px-2 rounded-md hover:bg-white/2">Discover</a>
            <a href="#daily" className="py-2 px-2 rounded-md hover:bg-white/2">Daily AURA</a>
            <a href="#cosmic" className="py-2 px-2 rounded-md hover:bg-white/2">Cosmic Mirror</a>
            <a href="#shop" className="py-2 px-2 rounded-md hover:bg-white/2">Shop</a>
            <a href="#rewards" className="py-2 px-2 rounded-md hover:bg-white/2">Rewards</a>
            <a href="#account" className="py-2 px-2 rounded-md hover:bg-white/2">Account</a>
          </div>
        </div>
      )}
    </header>
  )
}
