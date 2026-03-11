"use client"

import { CheckCircle, Droplets } from "lucide-react"

const PRODUTUS = [
  {
    id: "tanki-3600",
    naran: "Tanki Bee Moos",
    volume: "3600 Litru",
    preco: "Kontaktu Ami",
    gradientFrom: "#0ea5e9",
    gradientTo: "#1d4ed8",
    benefisiu: [
      "Bee Hamos, Livre Hosi Kimiku",
      "Livre Hosi Kalkariu",
      "Entrega Ba Ita-Nia Fatin",
      "Kualidade Garantidu",
    ],
    popular: true,
  },
]

export default function ProductCatalog() {
  return (
    <section id="produtus" className="py-16 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-water-pale text-water-deep text-sm font-semibold mb-4">
            <Droplets className="w-4 h-4" />
            Ita-nia Produtus
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-balance mb-3">
            Bee Ba Moris Diak
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Ami fornese bee moos kualidade aas ho preco justu, entrega lalais ba ita-nia porta.
          </p>
        </div>

        {/* Grid */}
        <div className="flex justify-center">
          {PRODUTUS.map((prod) => (
            <div
              key={prod.id}
              className="relative bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 w-full max-w-sm"
            >
              {prod.popular && (
                <div className="absolute top-3 right-3 z-10 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-1 rounded-full shadow">
                  Popular
                </div>
              )}

              {/* Gradient top */}
              <div
                className="h-28 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${prod.gradientFrom}, ${prod.gradientTo})`,
                }}
              >
                <div className="w-16 h-16 rounded-full bg-white/25 flex items-center justify-center shadow-inner">
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-9 h-9 opacity-90"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C8.13 2 5 7.5 5 12a7 7 0 0 0 14 0c0-4.5-3.13-10-7-10zm0 13a3 3 0 0 1-3-3c0-.55.45-1 1-1s1 .45 1 1a1 1 0 0 0 2 0c0-1.66-1.34-3-3-3-.55 0-1-.45-1-1s.45-1 1-1a5 5 0 0 1 5 5 3 3 0 0 1-3 3z" />
                  </svg>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-bold text-foreground text-base leading-tight">{prod.naran}</h3>
                  <p className="text-muted-foreground text-sm">{prod.volume}</p>
                </div>

                <div className="text-2xl font-extrabold text-water-deep">{prod.preco}</div>

                <ul className="space-y-1.5">
                  {prod.benefisiu.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-water-mid flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
