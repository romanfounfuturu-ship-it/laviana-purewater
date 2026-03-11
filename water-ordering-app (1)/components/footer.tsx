import { Droplets, Phone, MessageCircle, MapPin, Heart } from "lucide-react"

const ALL_NUMBERS = [
  { label: "WA / Telefone 1", numeru: "+670 7514 1305", wa: "670751413052" },
  { label: "WA / Telefone 2", numeru: "+670 75067998", wa: "67075067998" },
  { label: "WA / Telefone 3", numeru: "+670 75785253", wa: "67075785253" },
  { label: "WA / Telefone 4", numeru: "+670 73330060", wa: "67073330060" },
]

const QUICK_LINKS = ["Uma", "Produtus", "Halo Pedidu", "Kualidade", "Kontaktu"]

export default function Footer() {
  return (
    <footer id="kontaktu" className="bg-water-deep text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg leading-none">Laviana</h3>
                <p className="text-white/60 text-sm">Distribuisaun Bee-Moos</p>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed">
              Servisu distribuisaun bee moos kualidade aas ba ita-nia uma-kain no negosiu iha
              Timor-Leste. Ami dedika atu fornese bee seguru no puru.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-base text-white">Ligasaun Lalais</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((item) => (
                <li key={item}>
                  <span className="text-white/60 text-sm hover:text-white cursor-pointer transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-base text-white">Kontaktu</h4>
            <div className="space-y-2.5">
              {ALL_NUMBERS.map(({ label, numeru, wa }) => (
                <a
                  key={numeru}
                  href={`https://wa.me/${wa}?text=Olá%2C%20hau%20hakarak%20halo%20pedidu%20bee-moos`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-whatsapp/20 border border-whatsapp/30 flex items-center justify-center group-hover:bg-whatsapp/30 transition-colors flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-green-300" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40">{label}</p>
                    <p className="text-sm font-semibold">{numeru}</p>
                  </div>
                </a>
              ))}

              <div className="flex items-center gap-3 text-white/60 pt-1">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Lokasaun</p>
                  <p className="text-sm">Timor-Leste</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white/60">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Oras Servisu</p>
                  <p className="text-sm">24/7 — Kualker Tempu</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-2xl bg-white/10 border border-white/15 p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-white text-lg">Presiza Bee Moos?</h4>
            <p className="text-white/60 text-sm">Halo pedidu agora liu WhatsApp. Entrega lalais!</p>
          </div>
          <a
            href={`https://wa.me/67075785253?text=Olá%2C%20hau%20hakarak%20halo%20pedidu%20bee-moos`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-whatsapp text-white text-sm font-bold hover:opacity-90 transition-opacity flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Pedidu Agora
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Laviana Distribuisaun Bee-Moos. Direitu hotu-hotu rezervadu.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1">
            Halo ho <Heart className="w-3 h-3 text-red-400 fill-red-400 mx-0.5" /> iha Timor-Leste
          </p>
        </div>
      </div>
    </footer>
  )
}
