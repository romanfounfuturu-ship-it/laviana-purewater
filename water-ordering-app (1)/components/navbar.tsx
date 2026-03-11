"use client"

import { useState, useEffect } from "react"
import { Droplets, Menu, X, MessageCircle } from "lucide-react"

const WA_NUMBER = "67075785253"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const navLinks = [
    { label: "Uma", href: "#" },
    { label: "Produtus", href: "#produtus" },
    { label: "Halo Pedidu", href: "#pedidu" },
    { label: "Kontaktu", href: "#kontaktu" },
  ]

  const scrollTo = (href: string) => {
    setIsOpen(false)
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-water-deep/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo("#")} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <Droplets className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-extrabold text-sm tracking-tight">Laviana</span>
            <span className="text-white/70 font-medium text-xs">Bee-Moos</span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Olá%2C%20hau%20hakarak%20halo%20pedidu%20bee-moos`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-whatsapp text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Taka menu" : "Loke menu"}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-water-deep border-t border-white/10">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="w-full text-left px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium transition-all"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Olá%2C%20hau%20hakarak%20halo%20pedidu%20bee-moos`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-whatsapp text-white text-sm font-semibold mt-2"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle className="w-4 h-4" />
              Kontaktu via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
