import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ProductCatalog from "@/components/product-catalog"
import OrderForm from "@/components/order-form"
import Footer from "@/components/footer"
import { Droplets, CheckCircle, Truck, ShieldCheck, Headphones } from "lucide-react"

const KEUNGGULAN = [
  {
    ikon: CheckCircle,
    titlu: "GARANTIDU",
    deskrisaun:
      "Bee Ne'ebe Hamos Ona, no Livre Hosi Kimiku, Kalkariu no la-is.",
  },
  {
    ikon: Truck,
    titlu: "ENTREGA LALAIS",
    deskrisaun:
      "Ami Nia Kareta Prontu Tula Bee Ba Too Ita Boot Sira Nia Fatin.",
  },
  {
    ikon: ShieldCheck,
    titlu: "PRESU AMIGAVEL",
    deskrisaun: "Ami Oferese Presu Ne'ebe Razoavel No Kompetetivu.",
  },
  {
    ikon: Headphones,
    titlu: "ATENDEMENTU 24/7",
    deskrisaun:
      "Ita Boot Bele Kontaktu Ami Iha Kualker Tempu.\n+670 7514 1305 | 75067998\n+670 75785253 | 73330060",
  },
]

const HOW_TO = [
  {
    numeru: "01",
    titlu: "Hili Produtu",
    deskrisaun:
      "Hili tipu bee moos ne'ebé ita-nia presiza husi lista produtu ami nian.",
  },
  {
    numeru: "02",
    titlu: "Prenxe Formulario",
    deskrisaun:
      "Hatama ita-nia naran, numeru telefone, no enderesu entrega.",
  },
  {
    numeru: "03",
    titlu: "Konfirma via WA",
    deskrisaun:
      "Klik knopun WhatsApp atu haruka ita-nia pedidu. Ami sei konfirma lalais!",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Features / Keunggulan */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-water-pale text-water-deep text-sm font-semibold mb-4">
              <Droplets className="w-4 h-4" />
              Tanba Sa Hili Laviana?
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-balance mb-3">
              Ami Fornese Kualidade Aas
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
              Bee Ba Moris Diak — Kualidade Aas ba Ita-Nia Nesesidade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {KEUNGGULAN.map(({ ikon: Ikon, titlu, deskrisaun }) => (
              <div
                key={titlu}
                className="bg-card rounded-2xl p-5 border border-border hover:border-water-light hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-water-pale flex items-center justify-center mb-4 group-hover:bg-water-light/30 transition-colors">
                  <Ikon className="w-6 h-6 text-water-mid" />
                </div>
                <h3 className="font-bold text-foreground text-sm tracking-wide mb-2">
                  {titlu}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                  {deskrisaun}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <ProductCatalog />

      {/* How to Order */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-water-pale text-water-deep text-sm font-semibold mb-4">
            <Droplets className="w-4 h-4" />
            Oinsá Halo Pedidu
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-balance mb-3">
            Simples. Lalais. Fasilmente.
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-10">
            Iha dalan 3 de&apos;it atu halo pedidu bee moos husi ami.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {HOW_TO.map(({ numeru, titlu, deskrisaun }) => (
              <div
                key={numeru}
                className="bg-background rounded-2xl p-6 border border-border text-left h-full"
              >
                <span className="text-5xl font-extrabold text-water-light/60 leading-none">
                  {numeru}
                </span>
                <h3 className="font-bold text-foreground text-lg mt-2 mb-2">{titlu}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{deskrisaun}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="pedidu" className="py-16 px-4 bg-background">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-water-pale text-water-deep text-sm font-semibold mb-4">
              <Droplets className="w-4 h-4" />
              Halo Pedidu
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-balance mb-3">
              Ordena Bee Moos Agora
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Prenxe formulario iha okos no ami sei kontaktu ita liu WhatsApp.
            </p>
          </div>

          <div className="bg-card rounded-3xl border border-border p-6 md:p-8 shadow-sm">
            <OrderForm />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-water-deep">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-semibold mb-8 border border-white/20">
            <Droplets className="w-4 h-4" />
            Ita-Nia Konfiansa Mak Ita-Nia Misaun
          </div>
          <blockquote className="text-2xl md:text-3xl font-bold text-white text-balance leading-relaxed mb-6">
            &quot;Bee moos Laviana halo ita-nia família saudavel no aman.
            Entrega sempre pontual, preco justu!&quot;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Maria da Costa</p>
              <p className="text-white/50 text-xs">Klientu Laviana, Dili</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/67075785253?text=Olá%2C%20hau%20hakarak%20halo%20pedidu%20bee-moos"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
        aria-label="Kontaktu via WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </main>
  )
}
