'use client'

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 md:px-12 py-8 backdrop-blur-md bg-[#202b45]/20">
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <a
          href="/"
          className="logo-font text-3xl md:text-4xl"
        >
          Beyond Scrumptious
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-sm uppercase tracking-[0.3em] text-[#f8f8f8]/80">

          <a href="/#cakes">
            Cakes
          </a>

          <a href="/gallery">
            Gallery
          </a>

          <a href="/live-desserts">
            Live Desserts
          </a>

          <a href="/faq">
            FAQ
          </a>

          <a href="/#desserts">
            Desserts
          </a>

          <a href="/#contact">
            Contact
          </a>

          <a href="/terms">
            Terms
          </a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-6 mt-8 text-sm uppercase tracking-[0.3em] text-[#f8f8f8]/80 bg-[#202b45] p-6 rounded-3xl">

          <a href="/#cakes">
            Cakes
          </a>

          <a href="/gallery">
            Gallery
          </a>

          <a href="/live-desserts">
            Live Desserts
          </a>

          <a href="/faq">
            FAQ
          </a>

          <a href="/#desserts">
            Desserts
          </a>

          <a href="/#contact">
            Contact
          </a>

          <a href="/terms">
            Terms
          </a>

        </div>
      )}
    </nav>
  )
}