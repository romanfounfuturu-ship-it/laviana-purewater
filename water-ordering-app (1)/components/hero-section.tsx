"use client"

import { Droplets, ChevronDown, Shield, Clock, Star } from "lucide-react"

const STATS = [
  { naran: "Kualidade Garantida", ikon: Shield },
  { naran: "Entrega Lalais", ikon: Clock },
  { naran: "Pelanggu Satisfeitu", ikon: Star },
]

export default function HeroSection() {
  const scrollToOrder = () => {
    document.getElementById("pedidu")?.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToProducts = () => {
    document.getElementById("produtus")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-water-deep">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: "white" }}
        />
        <div
          className="absolute top-1/2 -left-16 w-64 h-64 rounded-full opacity-5"
          style={{ background: "white" }}
        />
        <div
          className="absolute bottom-32 right-1/4 w-48 h-48 rounded-full opacity-5"
          style={{ background: "white" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-semibold mb-8 border border-white/25">
          <Droplets className="w-4 h-4 wave-animation" />
          <span>Timor-Leste &mdash; Bee Moos Kualidade Aas</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight text-balance mb-2 drop-shadow-md">
          Laviana
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white/85 leading-tight text-balance mb-3">
          Distribuisaun
        </h2>
        <div className="inline-block px-5 py-2 rounded-2xl bg-white/20 border border-white/30 mb-6">
          <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Bee-Moos
          </span>
        </div>

        <p className="text-white/75 text-base md:text-lg max-w-md mx-auto leading-relaxed mb-10 text-pretty">
          Bee moos, puru, no seguru — entrega ba ita-nia uma-kain no negosiu iha Timor-Leste.
          Halo pedidu fasil liu WhatsApp!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <button
            onClick={scrollToOrder}
            className="px-8 py-4 rounded-2xl bg-white text-water-deep font-bold text-base hover:bg-white/90 active:scale-95 transition-all shadow-xl"
          >
            Halo Pedidu Agora
          </button>
          <button
            onClick={scrollToProducts}
            className="px-8 py-4 rounded-2xl border-2 border-white/50 text-white font-bold text-base hover:bg-white/10 active:scale-95 transition-all"
          >
            Haree Produtus
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {STATS.map(({ naran, ikon: Ikon }) => (
            <div key={naran} className="flex items-center gap-2 text-white/75">
              <Ikon className="w-5 h-5 text-white/90 flex-shrink-0" />
              <span className="text-sm font-medium">{naran}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <button
          onClick={scrollToProducts}
          className="flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors"
          aria-label="Haree tan"
        >
          <span className="text-xs">haree tan</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 56"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-14"
          preserveAspectRatio="none"
        >
          <path
            d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
