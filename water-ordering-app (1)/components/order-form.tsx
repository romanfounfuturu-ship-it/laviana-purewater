"use client"

import { useState } from "react"
import { Phone, MapPin, User, ShoppingCart, MessageCircle, ChevronDown, Droplets } from "lucide-react"

const PRODUTUS = [
  {
    id: "tanki-3600",
    naran: "Tanki Bee Moos 3600 Litru",
    deskrisaun: "3600 Litru — Bee Hamos, Livre Hosi Kimiku no Kalkariu",
    preco: "Kontaktu Ami",
  },
]

const WA_OPTIONS = [
  { id: "wa1", label: "+670 7514 1305", number: "670751413052" },
  { id: "wa2", label: "+670 75067998", number: "67075067998" },
  { id: "wa3", label: "+670 75785253", number: "67075785253" },
  { id: "wa4", label: "+670 73330060", number: "67073330060" },
]

interface FormData {
  naran: string
  numeru: string
  endereco: string
  produto: string
  kuantidade: number
  observasaun: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

export default function OrderForm() {
  const [form, setForm] = useState<FormData>({
    naran: "",
    numeru: "",
    endereco: "",
    produto: "",
    kuantidade: 1,
    observasaun: "",
  })
  const [waChoice, setWaChoice] = useState("wa3")
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.naran.trim()) newErrors.naran = "Naran presiza"
    if (!form.numeru.trim()) newErrors.numeru = "Numeru telefone presiza"
    if (!form.endereco.trim()) newErrors.endereco = "Enderesu presiza"
    if (!form.produto) newErrors.produto = "Hili produtu ida"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const buildMessage = (): string => {
    const prod = PRODUTUS.find((p) => p.id === form.produto)
    const lines = [
      "*PEDIDU FOUN — Laviana Distribuisaun Bee-Moos*",
      "",
      `*Naran:* ${form.naran}`,
      `*Numeru:* ${form.numeru}`,
      `*Enderesu:* ${form.endereco}`,
      `*Produtu:* ${prod?.naran ?? ""} (${prod?.deskrisaun ?? ""})`,
      `*Kuantidade:* ${form.kuantidade}`,
      form.observasaun ? `*Observasaun:* ${form.observasaun}` : "",
      "",
      "_Hau hakarak halo pedidu bee-moos husi Laviana. Obrigadu!_",
    ]
      .filter((l) => l !== undefined)
      .join("\n")
    return encodeURIComponent(lines)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    const selected = WA_OPTIONS.find((o) => o.id === waChoice) ?? WA_OPTIONS[2]
    const url = `https://wa.me/${selected.number}?text=${buildMessage()}`
    window.open(url, "_blank", "noopener,noreferrer")
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ naran: "", numeru: "", endereco: "", produto: "", kuantidade: 1, observasaun: "" })
    }, 5000)
  }

  const handleChange = (field: keyof FormData, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const produtoSelecionado = PRODUTUS.find((p) => p.id === form.produto)

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
        <div className="w-20 h-20 rounded-full bg-water-pale flex items-center justify-center float-animation">
          <Droplets className="w-10 h-10 text-water-mid" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-water-deep mb-2">Obrigadu!</h3>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Ita-nia pedidu nain ona ba WhatsApp. Ami sei konfirma ita lalais.
          </p>
        </div>
        <div className="flex gap-2">
          {[0, 150, 300].map((delay) => (
            <div
              key={delay}
              className="w-2 h-2 rounded-full bg-water-mid animate-bounce"
              style={{ animationDelay: `${delay}ms` }}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Naran */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-foreground flex items-center gap-2">
          <User className="w-4 h-4 text-water-mid" />
          Ita-nia Naran <span className="text-destructive ml-0.5">*</span>
        </label>
        <input
          type="text"
          value={form.naran}
          onChange={(e) => handleChange("naran", e.target.value)}
          placeholder="Hakerek ita-nia naran kompletu"
          className={`w-full px-4 py-3 rounded-xl border text-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-water-mid/50 transition-all ${
            errors.naran ? "border-destructive" : "border-border"
          }`}
        />
        {errors.naran && <p className="text-xs text-destructive">{errors.naran}</p>}
      </div>

      {/* Numeru */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-foreground flex items-center gap-2">
          <Phone className="w-4 h-4 text-water-mid" />
          Numeru Telefone <span className="text-destructive ml-0.5">*</span>
        </label>
        <input
          type="tel"
          value={form.numeru}
          onChange={(e) => handleChange("numeru", e.target.value)}
          placeholder="+670 7X XXX XXX"
          className={`w-full px-4 py-3 rounded-xl border text-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-water-mid/50 transition-all ${
            errors.numeru ? "border-destructive" : "border-border"
          }`}
        />
        {errors.numeru && <p className="text-xs text-destructive">{errors.numeru}</p>}
      </div>

      {/* Enderesu */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-foreground flex items-center gap-2">
          <MapPin className="w-4 h-4 text-water-mid" />
          Enderesu Entrega <span className="text-destructive ml-0.5">*</span>
        </label>
        <textarea
          value={form.endereco}
          onChange={(e) => handleChange("endereco", e.target.value)}
          placeholder="Hakerek ita-nia enderesu, suku, posto, munisipiu..."
          rows={3}
          className={`w-full px-4 py-3 rounded-xl border text-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-water-mid/50 transition-all resize-none ${
            errors.endereco ? "border-destructive" : "border-border"
          }`}
        />
        {errors.endereco && <p className="text-xs text-destructive">{errors.endereco}</p>}
      </div>

      {/* Produtu */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-foreground flex items-center gap-2">
          <ShoppingCart className="w-4 h-4 text-water-mid" />
          Hili Produtu <span className="text-destructive ml-0.5">*</span>
        </label>
        <div className="relative">
          <select
            value={form.produto}
            onChange={(e) => handleChange("produto", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-water-mid/50 transition-all appearance-none cursor-pointer ${
              errors.produto ? "border-destructive" : "border-border"
            } ${!form.produto ? "text-muted-foreground" : ""}`}
          >
            <option value="" disabled>-- Hili produtu --</option>
            {PRODUTUS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.naran} — {p.preco}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        </div>
        {errors.produto && <p className="text-xs text-destructive">{errors.produto}</p>}
        {produtoSelecionado && (
          <div className="p-3 rounded-xl bg-water-pale border border-water-light/30 text-sm text-water-deep font-medium">
            {produtoSelecionado.deskrisaun} —{" "}
            <span className="font-bold">{produtoSelecionado.preco}</span>
          </div>
        )}
      </div>

      {/* Kuantidade */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-foreground">Kuantidade</label>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleChange("kuantidade", Math.max(1, form.kuantidade - 1))}
            className="w-11 h-11 rounded-xl border border-border bg-card flex items-center justify-center text-xl font-bold text-foreground hover:bg-water-pale transition-colors"
            aria-label="Hamenus kuantidade"
          >
            -
          </button>
          <div className="flex-1 text-center text-xl font-bold text-water-deep py-2.5 bg-water-pale rounded-xl">
            {form.kuantidade}
          </div>
          <button
            type="button"
            onClick={() => handleChange("kuantidade", form.kuantidade + 1)}
            className="w-11 h-11 rounded-xl border border-border bg-card flex items-center justify-center text-xl font-bold text-foreground hover:bg-water-pale transition-colors"
            aria-label="Hatama kuantidade"
          >
            +
          </button>
        </div>
      </div>

      {/* Observasaun */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-foreground">
          Observasaun <span className="text-muted-foreground font-normal">(opsional)</span>
        </label>
        <textarea
          value={form.observasaun}
          onChange={(e) => handleChange("observasaun", e.target.value)}
          placeholder="Informasaun adisional, oras entrega, etc..."
          rows={2}
          className="w-full px-4 py-3 rounded-xl border border-border text-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-water-mid/50 transition-all resize-none"
        />
      </div>

      {/* WA Selection */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-foreground flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-whatsapp" />
          Hili Numeru WhatsApp
        </label>
        <div className="grid grid-cols-2 gap-2">
          {WA_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setWaChoice(opt.id)}
              className={`py-3 px-2 rounded-xl border-2 transition-all flex flex-col items-center gap-1 text-xs font-semibold ${
                waChoice === opt.id
                  ? "border-whatsapp bg-whatsapp/10 text-whatsapp"
                  : "border-border bg-card text-muted-foreground hover:border-whatsapp/40"
              }`}
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0" />
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-4 rounded-2xl bg-whatsapp text-white font-bold text-base flex items-center justify-center gap-3 hover:opacity-90 active:scale-95 transition-all shadow-lg"
      >
        <MessageCircle className="w-5 h-5" />
        Haruka Pedidu via WhatsApp
      </button>

      <p className="text-xs text-center text-muted-foreground leading-relaxed">
        Bainhira klik knopun iha leten, ita sei nain ba WhatsApp atu konfirma ita-nia pedidu.
      </p>
    </form>
  )
}
