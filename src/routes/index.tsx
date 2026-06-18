import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search, Menu, Bookmark, Share2, Headphones, Printer, ArrowRight,
  ArrowUpRight, Play, Clock, ChevronDown, Globe, Mail,
} from "lucide-react";
import heroImg from "@/assets/hero-ai-research.jpg";
import euroImg from "@/assets/article-Global-innovation.jpg";
import aiLabImg from "@/assets/article-ai-lab.jpg";
import blockchainImg from "@/assets/article-blockchain.jpg";
import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";
import card5 from "@/assets/card-5.jpg";
import card6 from "@/assets/card-6.jpg";
import podcastCover from "@/assets/podcast-cover.jpg";
import podcastCryptoImg from "@/assets/podcast_crypto.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Capital Chronicle — Intelligence Crypto" },
      { name: "description", content: "Couverture éditoriale premium des actifs numériques, de la blockchain et de l'économie mondiale." },
      { property: "og:title", content: "Capital Chronicle — Intelligence Crypto" },
      { property: "og:description", content: "Couverture éditoriale premium des actifs numériques, de la blockchain et de l'économie mondiale." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const utilityNav = [
  "Marchés", "Technologie", "IA", "Blockchain", "Affaires", "Économie",
  "Recherche", "Startups", "Opinion", "Podcasts", "Vidéos", "Événements",
];
const primaryNav = [
  "Dernières", "À la une", "Marchés", "Innovation", "Intelligence Artificielle",
  "Finance Numérique", "Fintech", "Cybersécurité", "Économie Mondiale",
  "Analyse", "Éducation", "Magazine",
];

const ticker = [
  "BTC/USD  $64,231.50  +2.4%",
  "ETH/USD  $3,452.12  -0.5%",
  "SOL/USD  $142.85  +1.2%",
  "XRP/USD  $0.582  +4.1%",
  "DOGE/USD  $0.12  -1.1%",
  "ADA/USD  $0.45  +0.2%",
  "AVAX/USD  $35.10  +1.5%",
  "DOT/USD  $6.80  -0.8%",
  "LINK/USD  $14.20  +2.1%",
  "MATIC/USD  $0.70  -0.4%",
];

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Allow interaction with form inputs
      if (target.closest("input, textarea, select, [data-no-redirect]")) return;
      e.preventDefault();
      e.stopPropagation();
      window.open("/enquiry", "_blank", "noopener,noreferrer");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);


  return (
    <div className="min-h-screen bg-background text-ink">
      {/* Reading progress */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
        <div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>

      <Header scrolled={scrolled} />
      <Ticker />
      <Hero />
      <main>
        <ArticleLayout />
        <PodcastSection />
        <RelatedGrid />
        <TopicsCloud />
        <Newsletter />
        <Comments />
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------------- Header ------------------------------- */
function Header({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-rule"
          : "bg-background border-b border-rule"
      }`}
    >
      {/* Utility row */}
      <div className="hidden lg:block border-b border-rule/70">
        <div className="container-edit flex h-9 items-center justify-between text-[12px] text-muted-foreground">
          <div className="flex items-center gap-5">
            <span className="font-medium text-ink/80">
              {new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span>Marchés Ouverts</span>
            <span className="text-primary font-medium">BTC/USD $64,231.50</span>
          </div>
          <nav className="flex items-center gap-4">
            {utilityNav.slice(0, 7).map((i) => (
              <a key={i} href="#" className="hover:text-ink transition-colors">{i}</a>
            ))}
            <span className="h-3 w-px bg-rule" />
            <a href="#" className="hover:text-ink flex items-center gap-1"><Globe className="h-3 w-3" /> FR</a>
            <a href="#" className="hover:text-ink">Connexion</a>
            <a href="#" className="bg-ink text-background px-3 py-1 hover:bg-primary transition-colors">S'abonner</a>
          </nav>
        </div>
      </div>

      {/* Masthead */}
      <div className="container-edit flex items-center justify-between py-5 lg:py-6">
        <button className="lg:hidden p-2 -ml-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex-1 lg:flex-none lg:w-1/3" />
        <a href="/" className="flex flex-col items-center group">
          <span className="serif-display text-2xl lg:text-4xl tracking-tight">
            Capital Chronicle <span className="italic font-normal">Journal</span>
          </span>
          <span className="eyebrow mt-1 text-[10px] lg:text-[11px] text-muted-foreground">
            Intelligence Crypto
          </span>
        </a>
        <div className="flex-1 lg:w-1/3 flex justify-end items-center gap-3">
          <button className="p-2 hover:text-primary transition-colors" aria-label="Rechercher">
            <Search className="h-[18px] w-[18px]" />
          </button>
          <a href="#newsletter" className="hidden lg:inline-flex items-center gap-1.5 border border-ink px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-ink hover:text-background transition-colors">
            S'abonner <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Primary nav */}
      <nav className="hidden lg:block border-t border-rule">
        <div className="container-edit flex items-center justify-center gap-7 h-11 overflow-x-auto text-[13px] font-medium">
          {primaryNav.map((i, idx) => (
            <a
              key={i}
              href="#"
              className={`whitespace-nowrap link-underline hover:link-underline-hover flex items-center gap-1 ${
                idx === 0 ? "text-primary" : "text-ink/80 hover:text-ink"
              }`}
            >
              {i}
              {(i === "Marchés" || i === "Innovation") && <ChevronDown className="h-3 w-3 opacity-60" />}
            </a>
          ))}
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-rule bg-background animate-fade-up">
          <nav className="container-edit py-4 flex flex-col gap-1">
            {primaryNav.map((i) => (
              <a key={i} href="#" className="py-2.5 border-b border-rule/60 text-sm flex justify-between items-center">
                {i} <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

/* ------------------------------- Ticker ------------------------------- */
function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="bg-ink text-background overflow-hidden">
      <div className="flex items-stretch">
        <div className="hidden sm:flex items-center gap-2 bg-primary px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] shrink-0">
          <span className="h-1.5 w-1.5 rounded-full bg-background animate-pulse" />
          En Direct
        </div>
        <div className="relative flex-1 overflow-hidden py-2">
          <div className="animate-ticker flex gap-10 whitespace-nowrap text-[12.5px] tracking-wide font-medium">
            {items.map((t, i) => (
              <span key={i} className="inline-flex items-center gap-10">
                {t}
                <span className="text-background/40">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- Hero ------------------------------- */
function Hero() {
  return (
    <section className="border-b border-rule">
      <div className="container-edit grid lg:grid-cols-12 gap-10 lg:gap-14 py-10 lg:py-16">
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow">Article de Couverture · Édition Nº 042</span>
            <span className="h-px flex-1 bg-rule" />
            <span className="text-xs text-muted-foreground">18 Juin 2026</span>
          </div>
          <h1 className="serif-display text-[clamp(2.25rem,5vw,4.5rem)] text-ink">
            Comment l'Investissement Crypto a{" "}
            <em className="font-normal text-primary">Changé Ma Vie</em>{" "}
            et Ma Façon de Penser
          </h1>
          <p className="mt-6 max-w-2xl body-prose">
            De la routine traditionnelle du 9h-17h au monde de la finance décentralisée, un parcours personnel sur la façon dont une modeste allocation en actifs numériques a complètement redéfini ma compréhension de l'argent et du temps.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-[13px] text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-secondary" />
              <div className="leading-tight">
                <div className="text-ink font-medium">Camille Aubert</div>
                <div className="text-[11px] uppercase tracking-wider">Éditrice Principale, Innovation</div>
              </div>
            </div>
            <span className="hidden sm:block h-8 w-px bg-rule" />
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 14 min de lecture</span>
            <span>Marchés · Crypto · Finances Personnelles</span>
          </div>
          <div className="mt-8 flex items-center gap-1 text-muted-foreground">
            <a href="/crypto" className="bg-ink text-background px-6 py-3 font-semibold uppercase tracking-wider hover:bg-primary transition-colors inline-flex items-center gap-2 mr-4">
              Explorer la Crypto <ArrowRight className="h-4 w-4" />
            </a>
            {[
              { i: Headphones, l: "Écouter" },
              { i: Bookmark, l: "Sauvegarder" },
              { i: Share2, l: "Partager" },
              { i: Printer, l: "Imprimer" },
            ].map(({ i: Icon, l }) => (
              <button key={l} type="button" className="flex items-center gap-1.5 px-3 py-2 text-xs hover:text-primary hover:bg-surface transition-colors">
                <Icon className="h-4 w-4" /> {l}
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 order-1 lg:order-2">
          <figure className="relative overflow-hidden bg-surface">
            <img
              src={heroImg}
              alt="Un bureau Global ensoleillé avec des données financières projetées doucement sur un mur"
              width={1600}
              height={1100}
              className="w-full h-[380px] lg:h-[560px] object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
            <figcaption className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground">
              Photographie · Studio Capital Chronicle, Paris
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Article ----------------------------- */
const sections = [
  { id: "the-leap", title: "Le Saut" },
  { id: "the-shift", title: "Le Changement" },
  { id: "the-conversation", title: "La Conversation" },
  { id: "the-future", title: "L'Avenir" },
];

function ArticleLayout() {
  return (
    <section className="container-edit grid lg:grid-cols-12 gap-12 py-16 lg:py-24">
      {/* Table of contents */}
      <aside className="hidden lg:block lg:col-span-2">
        <div className="sticky top-40">
          <div className="eyebrow mb-4">Sommaire</div>
          <ol className="space-y-2.5 text-[13px]">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="flex gap-3 text-muted-foreground hover:text-ink transition-colors">
                  <span className="text-primary tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span>{s.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </aside>

      {/* Article */}
      <article className="lg:col-span-7 max-w-[68ch]">
        <Section id="the-leap" title="Le Saut" number="01">
          <p className="text-2xl serif-display leading-[1.4] text-ink mb-8">
            Cela a commencé tranquillement pour moi. Une modeste allocation, une expérience née de la curiosité et peut-être d'un peu de FOMO. Ensuite, la réalisation s'est installée : les vieilles règles de l'argent ne s'appliquaient plus à ma vie.
          </p>
          <p>
            Quand j'ai mis de l'argent dans la crypto pour la première fois, ma vie a changé subtilement. Le traditionnel 9h-17h a commencé à sembler archaïque. Le concept d'attendre trois jours ouvrables pour un virement bancaire semblait presque comique. J'ai réalisé que ma richesse n'était plus confinée aux institutions physiques ; elle était décentralisée, sans frontières et entièrement entre mes propres mains.
          </p>
          <KeyTakeaways
            items={[
              "L'auto-conservation m'a accordé une véritable souveraineté financière.",
              "Les délais bancaires traditionnels sont devenus entièrement obsolètes dans ma routine.",
              "Je pouvais transférer de la valeur mondialement et sans frontières en quelques secondes.",
              "L'indépendance financière est passée d'un objectif de retraite lointain à ma réalité présente.",
            ]}
          />
        </Section>

        <Section id="the-shift" title="Le Changement" number="02">
          <p>
            Soudainement, je n'étais pas seulement un investisseur ; je faisais partie d'un écosystème. La volatilité quotidienne, qui semblait autrefois terrifiante, est devenue une fonctionnalité, pas un bug. C'était le battement de cœur d'une nouvelle ère financière. J'ai commencé à mesurer ma valeur nette non pas en monnaie fiduciaire, mais en Bitcoin et Ethereum.
          </p>
          <PullQuote
            quote="Au moment où j'ai pris l'auto-conservation de mes actifs numériques, j'ai cessé d'être un passager du système financier pour en devenir le conducteur."
            attribution="Mon Journal Personnel"
          />
          <p>
            Le changement psychologique a été profond. Ma consultation constante des graphiques a cédé la place à une compréhension plus profonde de la macroéconomie, de l'inflation et de la rareté numérique. J'ai commencé à voir la monnaie traditionnelle comme un glaçon qui fond, tandis que mes actifs numériques représentaient la préservation à long terme de mon pouvoir d'achat.
          </p>
        </Section>

        <Section id="the-conversation" title="La Conversation" number="03">
          <figure className="my-10 -mx-4 lg:mx-0">
            <img src={podcastCryptoImg} alt="Entrepreneur célèbre dans un podcast" loading="lazy" width={1200} height={800} className="w-full" />
            <figcaption className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground">
              Une conversation franche sur la richesse et la frontière numérique.
            </figcaption>
          </figure>
          <p>
            Au fur et à mesure que ma compréhension grandissait, la nature de mes conversations évoluait également. Je ne discutais plus des taux d'intérêt des comptes d'épargne ; je me retrouvais à débattre des tokenomics, des solutions de mise à l'échelle de couche 2 et des implications géopolitiques de la monnaie décentralisée. Ma vision entière du monde avait changé.
          </p>
          <ExpertCommentary
            name="Fondateur Anonyme"
            role="Pionnier de la Finance Décentralisée"
            text="Mettre du capital dans la crypto n'est pas seulement un investissement ; c'est se retirer d'un système brisé. Votre perspective sur le risque et la récompense change de façon permanente."
          />
        </Section>

        <Section id="the-future" title="L'Avenir" number="04">
          <p>
            L'avenir appartient à ceux qui s'adaptent. Ma transition de la finance traditionnelle à la crypto ne consistait pas seulement à gagner de l'argent ; il s'agissait de récupérer le contrôle sur mon temps et mes ressources. Ma vie après la crypto est marquée par un profond sentiment d'indépendance, une perspective mondiale sur la valeur et la réalisation palpitante que je participe au plus grand transfert de richesse de l'histoire de l'humanité.
          </p>
          <div className="mt-12 pt-8 border-t border-rule flex items-center justify-between">
            <div className="text-xs text-muted-foreground uppercase tracking-wider">
              Capital Chronicle · Essai Personnel
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:text-primary"><Bookmark className="h-4 w-4" /></button>
              <button className="p-2 hover:text-primary"><Share2 className="h-4 w-4" /></button>
            </div>
          </div>
        </Section>
      </article>

      {/* Sidebar */}
      <Sidebar />
    </section>
  );
}

/* ---------------------------- Article bits ---------------------------- */
function Section({
  id, title, number, children,
}: { id: string; title: string; number: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16 scroll-mt-40">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-primary font-mono text-xs tracking-wider">{number}</span>
        <h2 className="serif-display text-3xl lg:text-[2.25rem]">{title}</h2>
      </div>
      <div className="body-prose space-y-5 [&_p]:body-prose">{children}</div>
    </section>
  );
}

function PullQuote({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <blockquote className="my-10 border-l-2 border-primary pl-6 lg:-ml-6">
      <p className="serif-display italic text-2xl lg:text-[1.75rem] leading-snug text-ink">
        &ldquo;{quote}&rdquo;
      </p>
      <cite className="block mt-4 not-italic text-xs uppercase tracking-wider text-muted-foreground">
        — {attribution}
      </cite>
    </blockquote>
  );
}

function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <aside className="my-10 bg-surface p-6 lg:p-8 border-l-2 border-primary">
      <div className="eyebrow mb-4">Points Clés</div>
      <ul className="space-y-3">
        {items.map((t, i) => (
          <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
            <span className="text-primary tabular-nums mt-1 text-xs">0{i + 1}</span>
            <span className="text-ink/90">{t}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Definition({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <aside className="my-8 border border-rule p-5">
      <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1">Définition</div>
      <div className="font-serif text-lg text-ink">{term}</div>
      <p className="mt-2 text-sm text-body leading-relaxed">{children}</p>
    </aside>
  );
}

function QuickFacts({ items }: { items: [string, string][] }) {
  return (
    <div className="my-10 grid grid-cols-2 lg:grid-cols-4 border border-rule">
      {items.map(([n, l], i) => (
        <div key={i} className="p-5 border-r border-b border-rule last:border-r-0 lg:[&:nth-child(4)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+4)]:border-b-0">
          <div className="serif-display text-3xl text-primary">{n}</div>
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
        </div>
      ))}
    </div>
  );
}

function Infographic({ title, rows }: { title: string; rows: [string, number][] }) {
  return (
    <figure className="my-10 bg-surface p-6 lg:p-8">
      <div className="eyebrow mb-1">Infographie</div>
      <div className="font-serif text-lg text-ink mb-6">{title}</div>
      <div className="space-y-3">
        {rows.map(([label, value]) => (
          <div key={label}>
            <div className="flex justify-between text-[13px] mb-1.5">
              <span className="text-ink">{label}</span>
              <span className="text-primary font-mono tabular-nums">{value}%</span>
            </div>
            <div className="h-1.5 bg-rule overflow-hidden">
              <div
                className="h-full bg-primary animate-fade-up"
                style={{ width: `${value}%`, animationDuration: "1.2s" }}
              />
            </div>
          </div>
        ))}
      </div>
      <figcaption className="mt-5 text-[11px] text-muted-foreground">
        Source · Recherche Capital Chronicle, sondage de 84 institutions Mondiales, 2025.
      </figcaption>
    </figure>
  );
}

function ExpertCommentary({ name, role, text }: { name: string; role: string; text: string }) {
  return (
    <aside className="my-10 border-t border-b border-rule py-6 flex gap-5">
      <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary" />
      <div>
        <div className="eyebrow mb-2">Commentaire d'Expert</div>
        <p className="serif-display text-xl italic text-ink leading-snug">&ldquo;{text}&rdquo;</p>
        <div className="mt-3 text-xs">
          <span className="font-medium text-ink">{name}</span>
          <span className="text-muted-foreground"> · {role}</span>
        </div>
      </div>
    </aside>
  );
}

function RelatedReading({ items }: { items: string[] }) {
  return (
    <aside className="my-10 border border-rule">
      <div className="eyebrow px-5 pt-4">Lectures Connexes</div>
      <ul className="divide-y divide-rule">
        {items.map((t, i) => (
          <li key={i}>
            <a href="#" className="flex items-center justify-between px-5 py-4 hover:bg-surface transition-colors group">
              <span className="font-serif text-base text-ink" dangerouslySetInnerHTML={{ __html: t }} />
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function ChartPlaceholder({ caption }: { caption: string }) {
  return (
    <figure className="my-10 border border-rule p-6">
      <div className="eyebrow mb-4">Graphique</div>
      <svg viewBox="0 0 600 220" className="w-full h-44">
        <defs>
          <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.42 0.18 268)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="oklch(0.42 0.18 268)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[40, 90, 140, 190].map((y) => (
          <line key={y} x1="0" x2="600" y1={y} y2={y} stroke="oklch(0.92 0.005 250)" />
        ))}
        <path d="M0,170 C60,160 100,150 160,140 C220,130 260,90 320,80 C380,70 420,95 480,70 C540,45 580,55 600,40 L600,220 L0,220 Z" fill="url(#g)" />
        <path d="M0,170 C60,160 100,150 160,140 C220,130 260,90 320,80 C380,70 420,95 480,70 C540,45 580,55 600,40" fill="none" stroke="oklch(0.42 0.18 268)" strokeWidth="2" />
        <path d="M0,180 C60,178 120,175 200,170 C280,165 340,160 420,155 C500,150 560,148 600,145" fill="none" stroke="oklch(0.5 0.01 260)" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
      <figcaption className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

/* ------------------------------- Sidebar ------------------------------- */
function Sidebar() {
  return (
    <aside className="lg:col-span-3 space-y-12">
      <SidebarBlock title="Choix de la Rédaction">
        {[
          ["La lente ascension des trésoreries tokenisées", "Marchés"],
          ["Un guide de terrain sur les labos d'IA mondiaux", "Innovation"],
          ["Pourquoi la conservation est la nouvelle frontière", "Finance Numérique"],
        ].map(([t, c], i) => (
          <a key={i} href="#" className="group block py-3 border-b border-rule last:border-0">
            <div className="text-[11px] text-primary uppercase tracking-wider mb-1">{c}</div>
            <div className="font-serif text-base leading-snug text-ink group-hover:text-primary transition-colors">{t}</div>
          </a>
        ))}
      </SidebarBlock>

      <SidebarBlock title="Aperçu du Marché">
        <table className="w-full text-sm">
          <tbody>
            {[
              ["EURO STOXX 50", "4,932.18", "+0.42%", true],
              ["DAX", "18,604.20", "+0.18%", true],
              ["CAC 40", "8,213.95", "+0.27%", true],
              ["FTSE 100", "8,011.34", "−0.05%", false],
              ["Bund 10Y", "2.31%", "−2 bp", false],
              ["EUR/USD", "1.0832", "+0.11%", true],
            ].map(([n, v, c, up]) => (
              <tr key={n as string} className="border-b border-rule">
                <td className="py-2.5 text-ink">{n}</td>
                <td className="py-2.5 text-right tabular-nums">{v}</td>
                <td className={`py-2.5 pl-3 text-right tabular-nums text-xs ${up ? "text-primary" : "text-destructive"}`}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SidebarBlock>

      <SidebarBlock title="Les Plus Lus">
        {[
          "La digitalisation silencieuse de l'euro",
          "À l'intérieur de la levée de 640M€ de Mistral",
          "Cinq graphiques sur les valorisations des fintech mondiales",
          "Ce que MiCA a réellement changé",
        ].map((t, i) => (
          <a key={i} href="#" className="group flex gap-4 py-3 border-b border-rule last:border-0">
            <span className="serif-display text-2xl text-primary/40 tabular-nums">{i + 1}</span>
            <span className="font-serif text-base leading-snug text-ink group-hover:text-primary transition-colors">{t}</span>
          </a>
        ))}
      </SidebarBlock>

      <SidebarBlock title="Événements à Venir">
        {[
          ["24 Juin", "Salon Capital Chronicle: IA & Souveraineté", "Paris"],
          ["02 Juil", "Forum des Actifs Numériques", "Francfort"],
          ["18 Sep", "Semaine Fintech Mondiale", "Amsterdam"],
        ].map(([d, t, l], i) => (
          <a key={i} href="#" className="group flex gap-4 py-3 border-b border-rule last:border-0">
            <div className="text-center shrink-0 w-12">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{(d as string).split(" ")[1]}</div>
              <div className="serif-display text-xl text-primary leading-none">{(d as string).split(" ")[0]}</div>
            </div>
            <div className="leading-tight">
              <div className="font-serif text-[15px] text-ink group-hover:text-primary transition-colors">{t}</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
            </div>
          </a>
        ))}
      </SidebarBlock>

      <div className="bg-ink text-background p-6">
        <div className="eyebrow text-secondary mb-3">Résumé Hebdomadaire</div>
        <div className="serif-display text-2xl mb-3">Le Mémo Continental</div>
        <p className="text-sm text-background/70 mb-5 leading-relaxed">
          Une lettre du vendredi de nos rédacteurs sur ce qui a fait bouger les marchés et les esprits mondiaux cette semaine.
        </p>
        <form className="flex">
          <input
            type="email"
            placeholder="votre@email.eu"
            className="flex-1 bg-transparent border-b border-background/30 px-0 py-2 text-sm placeholder:text-background/40 focus:outline-none focus:border-background"
          />
          <button className="ml-3 text-sm font-semibold underline underline-offset-4 hover:text-secondary transition-colors">
            Rejoindre
          </button>
        </form>
      </div>
    </aside>
  );
}

function SidebarBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-sans text-xs uppercase tracking-[0.18em] text-ink mb-3 pb-3 border-b-2 border-ink">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

/* ------------------------------ Podcast ------------------------------ */
function PodcastSection() {
  return (
    <section className="bg-surface border-y border-rule">
      <div className="container-edit py-16 lg:py-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-4">
          <div className="relative group">
            <img src={podcastCover} alt="Pochette du podcast The Continental" loading="lazy" width={1024} height={1024} className="w-full aspect-square object-cover" />
            <button className="absolute inset-0 flex items-center justify-center bg-ink/0 hover:bg-ink/30 transition-colors">
              <span className="h-16 w-16 rounded-full bg-background flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="h-6 w-6 text-primary fill-primary ml-0.5" />
              </span>
            </button>
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="eyebrow mb-3">The Continental · Épisode 47</div>
          <h2 className="serif-display text-4xl lg:text-5xl mb-5">
            Le Monde peut-il construire sa propre IA &mdash; selon ses propres conditions ?
          </h2>
          <p className="body-prose max-w-2xl">
            Les animateurs Camille Aubert et Henrik Lund sont rejoints par notre rédactrice spécialisée
            en régulation, Marta Velasco, pour une longue conversation sur la souveraineté, les poids ouverts,
            et ce que les cinq prochaines années de politique mondiale sur l'IA exigent réellement de
            l'industrie financière.
          </p>
          <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 52 min</span>
            <span>Sorti le 16 Juin 2026</span>
          </div>
          <div className="mt-6 p-5 border-l-2 border-primary bg-background text-sm italic font-serif text-ink/80">
            &ldquo;La question n'est pas de savoir si nous pouvons construire un modèle de pointe. La
            question est de savoir si nous voulons le même modèle que tous les autres construisent.&rdquo;
            <span className="block mt-2 not-italic text-xs uppercase tracking-wider text-muted-foreground">
              — Extrait de la transcription, 14:22
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="bg-ink text-background px-5 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-primary transition-colors flex items-center gap-2">
              <Play className="h-3.5 w-3.5 fill-background" /> Écouter maintenant
            </button>
            <button className="border border-ink px-5 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-ink hover:text-background transition-colors">
              Lire la transcription
            </button>
            <button className="border border-ink/20 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-ink hover:border-ink transition-colors">
              Tous les épisodes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Related Grid ----------------------------- */
const related = [
  { img: card1, cat: "Marchés", title: "Ce que la prochaine décision de la BCE signifie pour les valorisations technologiques", author: "Sofia Marchetti", time: 7 },
  { img: card2, cat: "Startups", title: "La décennie tranquille de la deep-tech mondiale touche à sa fin", author: "Lukas Berg", time: 9 },
  { img: card3, cat: "Cybersécurité", title: "À l'intérieur de la première certification red-team IA", author: "Marta Velasco", time: 11 },
  { img: card4, cat: "Économie", title: "Bruxelles reconsidère sa politique industrielle — encore", author: "Henrik Lund", time: 6 },
  { img: card5, cat: "Innovation", title: "Pourquoi la cryptographie post-quantique importe aux administrateurs de fonds", author: "Aïcha Diallo", time: 8 },
  { img: card6, cat: "Événements", title: "Notes de terrain du Forum Fintech Mondial, Amsterdam", author: "Camille Aubert", time: 5 },
  { img: card1, cat: "Recherche", title: "Cinq graphiques sur les valorisations des fintech mondiales", author: "Données Capital Chronicle", time: 4 },
  { img: card2, cat: "IA", title: "Poids ouverts, contrats fermés : le nouveau compromis", author: "Henrik Lund", time: 10 },
  { img: card3, cat: "Finance Numérique", title: "Les logiciels de conservation sont discrètement reconstruits", author: "Sofia Marchetti", time: 9 },
  { img: card4, cat: "Opinion", title: "Éloge de l'infrastructure ennuyeuse", author: "Comité de Rédaction Capital Chronicle", time: 4 },
  { img: card5, cat: "Éducation", title: "Glossaire pour débutants sur la finance on-chain", author: "Aïcha Diallo", time: 6 },
  { img: card6, cat: "Magazine", title: "Lettre de l'Éditrice, Édition 042", author: "Camille Aubert", time: 3 },
];

function RelatedGrid() {
  return (
    <section className="container-edit py-16 lg:py-24">
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="eyebrow mb-2">Continuer la lecture</div>
          <h2 className="serif-display text-3xl lg:text-5xl">Dernière édition</h2>
        </div>
        <a href="#" className="hidden sm:flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider hover:text-primary transition-colors">
          Voir tous les articles <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {related.map((a, i) => (
          <article key={i} className="group">
            <a href="#" className="block overflow-hidden bg-surface mb-4">
              <img src={a.img} alt="" loading="lazy" width={900} height={600} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
            </a>
            <div className="text-[11px] uppercase tracking-wider text-primary font-semibold mb-2">{a.cat}</div>
            <h3 className="serif-display text-xl lg:text-2xl leading-snug mb-3 group-hover:text-primary transition-colors">
              <a href="#">{a.title}</a>
            </h3>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{a.author}</span>
              <span className="flex items-center gap-3">
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {a.time} min</span>
                <button className="hover:text-primary" aria-label="Sauvegarder"><Bookmark className="h-3.5 w-3.5" /></button>
                <button className="hover:text-primary" aria-label="Partager"><Share2 className="h-3.5 w-3.5" /></button>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Topics ------------------------------ */
const topics = [
  ["Intelligence Artificielle", "lg"],
  ["Finance Numérique", "lg"],
  ["Blockchain", "md"],
  ["Cybersécurité", "md"],
  ["Fintech", "lg"],
  ["Cloud Computing", "sm"],
  ["Informatique Quantique", "md"],
  ["Startups", "sm"],
  ["Économie", "lg"],
  ["Innovation", "md"],
  ["Capital-Risque", "sm"],
  ["Macro", "sm"],
  ["Tokenisation", "md"],
  ["Conservation", "sm"],
  ["Open Source", "md"],
  ["Régulation", "lg"],
];
const sizeMap: Record<string, string> = {
  sm: "text-xl",
  md: "text-3xl",
  lg: "text-5xl lg:text-6xl",
};

function TopicsCloud() {
  return (
    <section className="bg-ink text-background">
      <div className="container-edit py-16 lg:py-24">
        <div className="eyebrow text-secondary mb-4" style={{ color: "oklch(0.7 0.12 260)" }}>Explorateur de Sujets</div>
        <h2 className="serif-display text-3xl lg:text-5xl mb-12 max-w-2xl">
          Parcourez les idées que nous couvrons, par importance et emphase.
        </h2>
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-4">
          {topics.map(([t, s]) => (
            <a
              key={t}
              href="#"
              className={`serif-display ${sizeMap[s]} text-background/60 hover:text-background hover:italic transition-all`}
            >
              {t}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Newsletter ----------------------------- */
function Newsletter() {
  return (
    <section id="newsletter" className="container-edit py-20 lg:py-28">
      <div className="max-w-3xl mx-auto text-center">
        <div className="eyebrow mb-4">S'abonner</div>
        <h2 className="serif-display text-4xl lg:text-6xl mb-6">
          L'Intelligence, <em className="font-normal text-primary">livrée chaque semaine.</em>
        </h2>
        <p className="body-prose max-w-xl mx-auto">
          Rejoignez 84 000 cadres, chercheurs et investisseurs du monde entier qui commencent
          leur vendredi avec une seule lettre réfléchie de nos rédacteurs.
        </p>
        <form className="mt-10 grid sm:grid-cols-2 gap-3 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Nom complet"
            className="border-b border-ink px-1 py-3 bg-transparent placeholder:text-muted-foreground focus:outline-none focus:border-primary text-sm"
          />
          <input
            type="email"
            placeholder="Adresse e-mail"
            className="border-b border-ink px-1 py-3 bg-transparent placeholder:text-muted-foreground focus:outline-none focus:border-primary text-sm"
          />
          <select className="sm:col-span-2 border-b border-ink px-1 py-3 bg-transparent focus:outline-none focus:border-primary text-sm text-ink">
            <option>Centres d'intérêt — choisissez un domaine</option>
            <option>Marchés & Macro</option>
            <option>IA & Technologie</option>
            <option>Finance Numérique & Crypto</option>
            <option>Startups & Capital</option>
          </select>
          <button className="sm:col-span-2 mt-4 bg-ink text-background py-4 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-primary transition-colors inline-flex items-center justify-center gap-2">
            <Mail className="h-3.5 w-3.5" /> S'abonner à The Continental
          </button>
        </form>
        <p className="mt-5 text-[11px] text-muted-foreground">
          Gratuit. Désabonnez-vous à tout moment. Lisez notre politique éditoriale et notre avis de confidentialité.
        </p>
      </div>
    </section>
  );
}

/* ----------------------------- Comments ----------------------------- */
const comments = [
  {
    name: "Élise Moreau",
    role: "CFO · Paris",
    time: "2h",
    text: "Le point sur les pistes d'audit qui deviennent le produit est tout à fait juste. Nous avons dû reconstruire toute notre infrastructure de reporting autour de ça.",
    likes: 24, replies: 3,
  },
  {
    name: "Jonas Weber",
    role: "Recherche Quant · Francfort",
    time: "4h",
    text: "Les poids ouverts sont clairement gagnants dans nos évaluations internes. La plus grande question — et l'article y fait allusion — est de savoir qui les maintiendra dans cinq ans.",
    likes: 18, replies: 5,
  },
  {
    name: "Sara Lindqvist",
    role: "Politique Publique · Stockholm",
    time: "6h",
    text: "Il est rafraîchissant de lire une couverture qui ne présente pas MiCA comme un salut ou une catastrophe. C'est, comme la plupart des réglementations, surtout de la paperasse — et c'est bien le but.",
    likes: 12, replies: 1,
  },
];

function Comments() {
  return (
    <section className="bg-surface border-y border-rule">
      <div className="container-edit py-16 lg:py-20 max-w-4xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="eyebrow mb-2">Discussion · 47 commentaires</div>
            <h2 className="serif-display text-3xl lg:text-4xl">Une conversation réfléchie</h2>
          </div>
          <button className="hidden sm:inline-flex border border-ink px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-ink hover:text-background transition-colors">
            Rejoindre la discussion
          </button>
        </div>

        <div className="bg-background border border-rule p-5 mb-8">
          <textarea
            placeholder="Ajoutez un commentaire réfléchi…"
            rows={3}
            className="w-full bg-transparent text-sm resize-none focus:outline-none placeholder:text-muted-foreground"
          />
          <div className="flex justify-between items-center mt-3 pt-3 border-t border-rule">
            <span className="text-[11px] text-muted-foreground">Les commentaires sont modérés par nos rédacteurs.</span>
            <button className="bg-ink text-background px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-primary transition-colors">
              Publier
            </button>
          </div>
        </div>

        <ul className="space-y-8">
          {comments.map((c, i) => (
            <li key={i} className="flex gap-4">
              <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary" />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 mb-1.5">
                  <span className="font-semibold text-ink text-sm">{c.name}</span>
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{c.role}</span>
                  <span className="text-[11px] text-muted-foreground ml-auto">il y a {c.time}</span>
                </div>
                <p className="text-[15px] text-ink/85 leading-relaxed" dangerouslySetInnerHTML={{ __html: c.text }} />
                <div className="mt-3 flex items-center gap-5 text-xs text-muted-foreground">
                  <button className="hover:text-primary transition-colors">♥ {c.likes}</button>
                  <button className="hover:text-primary transition-colors">Répondre · {c.replies}</button>
                  <button className="hover:text-primary transition-colors">Partager</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------- Footer ------------------------------- */
const footerCols: { title: string; items: string[] }[] = [
  { title: "Sections", items: ["Marchés", "Technologie", "Affaires", "Innovation", "Recherche", "Opinion"] },
  { title: "Entreprise", items: ["À Propos", "Auteurs", "Carrières", "Politique Éditoriale", "Contact", "Presse"] },
  { title: "Ressources", items: ["Archives Magazine", "Newsletters", "Podcasts", "Événements", "RSS", "Plan du Site"] },
  { title: "Légal", items: ["Confidentialité", "Conditions d'Utilisation", "Cookies", "Accessibilité", "Corrections", "Accord Abonné"] },
];

function Footer() {
  return (
    <footer className="bg-ink text-background">
      <div className="container-edit py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="serif-display text-3xl">
              Capital Chronicle <em className="font-normal">Journal</em>
            </div>
            <div className="eyebrow mt-2 text-background/60" style={{ color: "oklch(0.75 0 0)" }}>
              Intelligence Crypto
            </div>
            <p className="mt-5 text-sm text-background/60 leading-relaxed max-w-sm">
              Une publication indépendante de journalisme réfléchi sur
              la technologie, les actifs numériques et les institutions qui les façonnent.
            </p>
            <div className="mt-6 flex gap-4 text-xs">
              {["LinkedIn", "X", "Mastodon", "RSS", "YouTube"].map((s) => (
                <a key={s} href="#" className="text-background/60 hover:text-background transition-colors">{s}</a>
              ))}
            </div>
          </div>
          {footerCols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <h4 className="text-[11px] uppercase tracking-[0.18em] text-background/50 mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-background/85 hover:text-background hover:underline underline-offset-4 transition-colors">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center text-[11px] text-background/50">
          <div>© {new Date().getFullYear()} Capital Chronicle. Imprimé sur la Blockchain. Lu partout.</div>
          <div className="flex gap-5">
            <span>ISSN 2754-0421</span>
            <a href="/privacy" className="hover:text-background">Politique de Confidentialité</a>
            <a href="/terms" className="hover:text-background">Conditions Générales</a>
            <a href="#" className="hover:text-background">Accessibilité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
