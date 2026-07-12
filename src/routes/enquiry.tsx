import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Bitcoin, Shield, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { submitLead, COUNTRY_PHONE_PATTERNS } from '../lib/crmApi';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Demande Crypto — Capital Chronicle" },
      { name: "description", content: "Contactez-nous concernant les actifs numériques, la recherche sur la blockchain et l'intelligence du marché crypto." },
    ],
  }),
  component: EnquiryPage,
});

function EnquiryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", number: "", message: "", countryCode: "CH"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const cleanNum = form.number.replace(/\\s+/g, "");
    if (!cleanNum) {
      setErrorMsg("Veuillez entrer un numéro de téléphone");
      setIsSubmitting(false);
      return;
    } else {
      const pattern = COUNTRY_PHONE_PATTERNS[form.countryCode]?.pattern;
      if (pattern && !pattern.test(cleanNum) && !pattern.test(form.number)) {
        setErrorMsg(`Format invalide. Exemple: ${COUNTRY_PHONE_PATTERNS[form.countryCode]?.example}`);
        setIsSubmitting(false);
        return;
      }
    }

    try {
      const result = await submitLead({
        name: form.name,
        email: form.email,
        phone: form.number,
        countryCode: form.countryCode,
        message: form.message,
        leadType: 'contact'
      });
      if (result.success) {
        setSubmitted(true);
      } else {
        throw new Error("Échec de la soumission de la demande.");
      }
    } catch (err: any) {
      const rawMsg = (err?.message || err?.toString() || "");
      if (rawMsg.toLowerCase().includes("already exist") || rawMsg.toLowerCase().includes("already exists") || rawMsg.toLowerCase().includes("contacted")) {
        toast.success("Vous nous avez déjà contactés. Veuillez patienter.");
        setSubmitted(true);
        return;
      }
      setErrorMsg(err.message || "Une erreur s'est produite.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05070d] text-slate-100 relative overflow-hidden">
      {/* Animated glow background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#f7931a]/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[#627eea]/20 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[#00ffa3]/10 blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Nav */}
      <header className="relative z-10 border-b border-white/5 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#f7931a] to-[#627eea] flex items-center justify-center font-bold text-white">
              É
            </div>
            <span className="font-semibold tracking-tight">Capital Chronicle <span className="text-[#f7931a]">/ Crypto</span></span>
          </Link>
          <Link
            to="/"
            className="text-xs uppercase tracking-[0.2em] text-slate-400 hover:text-white transition"
          >
            ← Retour au Journal
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — pitch */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#f7931a]/30 bg-[#f7931a]/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#f7931a]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f7931a] animate-pulse" />
                Bureau des Actifs Numériques
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                Parlez avec notre{" "}
                <span className="bg-gradient-to-r from-[#f7931a] via-[#ffb84d] to-[#627eea] bg-clip-text text-transparent">
                  bureau de recherche crypto
                </span>
              </h1>
              <p className="mt-6 text-slate-400 text-lg leading-relaxed">
                Renseignements de niveau institutionnel sur Bitcoin, Ethereum, les pièces stables, la conformité MiCA et les marchés on-chain — fournis par les analystes principaux de Capital Chronicle.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Shield, title: "Analyse conforme MiCA", desc: "Cadres réglementaires mondiaux intégrés dans chaque rapport." },
                { icon: Zap, title: "On-chain en temps réel", desc: "Données de flux à travers 14 réseaux L1 et L2." },
                { icon: Bitcoin, title: "Neutralité des classes d'actifs", desc: "Du BTC aux RWAs — aucune recommandation de jeton, jamais." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br from-[#f7931a]/20 to-[#627eea]/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#f7931a]" />
                  </div>
                  <div>
                    <div className="font-medium">{title}</div>
                    <div className="text-sm text-slate-400 mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mini ticker */}
            <div className="rounded-xl border border-white/5 bg-black/30 p-5 font-mono text-xs space-y-2">
              <div className="flex justify-between text-slate-500 uppercase tracking-wider text-[10px]"><span>Actif</span><span>24h</span></div>
              {[
                ["BTC / EUR", "63,420.00", "+1.8%"],
                ["ETH / EUR", "3,184.20", "+2.4%"],
                ["SOL / EUR", "142.06", "+5.1%"],
                ["EUR-C", "1.0001", "+0.0%"],
              ].map(([a, p, c]) => (
                <div key={a} className="flex justify-between border-t border-white/5 pt-2">
                  <span className="text-slate-300">{a}</span>
                  <span className="text-slate-400">€{p}</span>
                  <span className={c.startsWith("+") ? "text-[#00ffa3]" : "text-red-400"}>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-8 lg:p-10">
              <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#f7931a]/60 to-transparent" />

              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="mx-auto h-16 w-16 rounded-full bg-[#00ffa3]/10 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-[#00ffa3]" />
                  </div>
                  <h2 className="text-2xl font-semibold">Demande reçue</h2>
                  <p className="text-slate-400 max-w-md mx-auto">
                    Un membre de notre équipe des actifs numériques vous répondra dans un délai d'un jour ouvrable. Hauteur de bloc notée.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold">Soumettre une demande</h2>
                    <p className="text-sm text-slate-400 mt-1">Tous les champs sont cryptés en transit. Aucune donnée vendue ou partagée.</p>
                  </div>

                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Nom complet" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                      <Field label="E-mail" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.18em] text-slate-400">Numéro de contact</label>
                      <div className="flex gap-2">
                        <Select value={form.countryCode} onValueChange={(val) => setForm({ ...form, countryCode: val })}>
                          <SelectTrigger className="bg-black/40 border border-white/10 rounded-lg px-2 text-sm focus:border-[#f7931a]/60 focus:outline-none transition text-white" style={{ width: '120px', height: 'auto' }}>
                            <SelectValue placeholder="Code" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#111] text-white border-white/20 z-[100] max-h-64" side="bottom">
                            {Object.keys(COUNTRY_PHONE_PATTERNS).map(code => (
                              <SelectItem key={code} value={code} className="hover:bg-white/10 focus:bg-white/10 focus:text-white cursor-pointer">
                                {code} (+{COUNTRY_PHONE_PATTERNS[code].dialCode})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <input
                          type="tel"
                          value={form.number}
                          onChange={(e) => setForm({ ...form, number: e.target.value })}
                          required
                          className="flex-1 bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-[#f7931a]/60 focus:outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.18em] text-slate-400">Message (Optionnel)</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={5}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-[#f7931a]/60 focus:outline-none transition resize-none"
                        placeholder="Dites-nous ce dont vous aimeriez discuter…"
                      />
                    </div>

                    {errorMsg && <div className="text-red-400 text-sm mt-2">{errorMsg}</div>}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#f7931a] to-[#ff7a45] px-6 py-4 font-medium text-black hover:shadow-[0_0_40px_-10px_rgba(247,147,26,0.8)] transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? "Envoi..." : "Envoyer la demande"}
                      {!isSubmitting && <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
                    </button>

                    <p className="text-[11px] text-slate-500 text-center">
                      En soumettant, vous acceptez les conditions de confidentialité éditoriales de Capital Chronicle. Pas un conseil en investissement.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/5 mt-16">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col items-center sm:flex-row justify-between gap-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Capital Chronicle — Bureau des Actifs Numériques</span>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-white transition">Politique de Confidentialité</a>
            <a href="/terms" className="hover:text-white transition">Conditions Générales</a>
          </div>
          <span className="font-mono">block · 871,204 · synchronisé</span>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label, value, onChange, type = "text", required, placeholder, mono,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; required?: boolean; placeholder?: string; mono?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</label>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-[#f7931a]/60 focus:outline-none transition ${mono ? "font-mono" : ""}`}
      />
    </div>
  );
}
