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
      { title: "Capital Chronicle — Crypto Intelligence" },
      { name: "description", content: "Premium editorial coverage of digital assets, blockchain, and the global economy." },
      { property: "og:title", content: "Capital Chronicle — Crypto Intelligence" },
      { property: "og:description", content: "Premium editorial coverage of digital assets, blockchain, and the global economy." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const utilityNav = [
  "Markets", "Technology", "AI", "Blockchain", "Business", "Economy",
  "Research", "Startups", "Opinion", "Podcasts", "Videos", "Events",
];
const primaryNav = [
  "Latest", "Featured", "Markets", "Innovation", "Artificial Intelligence",
  "Digital Finance", "Fintech", "Cybersecurity", "Global Economy",
  "Analysis", "Education", "Magazine",
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
              {new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span>Markets Open</span>
            <span className="text-primary font-medium">BTC/USD $64,231.50</span>
          </div>
          <nav className="flex items-center gap-4">
            {utilityNav.slice(0, 7).map((i) => (
              <a key={i} href="#" className="hover:text-ink transition-colors">{i}</a>
            ))}
            <span className="h-3 w-px bg-rule" />
            <a href="#" className="hover:text-ink flex items-center gap-1"><Globe className="h-3 w-3" /> EN</a>
            <a href="#" className="hover:text-ink">Login</a>
            <a href="#" className="bg-ink text-background px-3 py-1 hover:bg-primary transition-colors">Subscribe</a>
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
            Crypto Intelligence
          </span>
        </a>
        <div className="flex-1 lg:w-1/3 flex justify-end items-center gap-3">
          <button className="p-2 hover:text-primary transition-colors" aria-label="Search">
            <Search className="h-[18px] w-[18px]" />
          </button>
          <a href="#newsletter" className="hidden lg:inline-flex items-center gap-1.5 border border-ink px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-ink hover:text-background transition-colors">
            Subscribe <ArrowRight className="h-3 w-3" />
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
              {(i === "Markets" || i === "Innovation") && <ChevronDown className="h-3 w-3 opacity-60" />}
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
          Live
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
            <span className="eyebrow">Cover Story · Issue Nº 042</span>
            <span className="h-px flex-1 bg-rule" />
            <span className="text-xs text-muted-foreground">18 June 2026</span>
          </div>
          <h1 className="serif-display text-[clamp(2.25rem,5vw,4.5rem)] text-ink">
            How Crypto Investment{" "}
            <em className="font-normal text-primary">Changed My Life</em>{" "}
            and Mindset
          </h1>
          <p className="mt-6 max-w-2xl body-prose">
            From the traditional 9-to-5 grind to a world of decentralized finance, a personal journey into how a modest allocation in digital assets completely rewired my understanding of money and time.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-[13px] text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-secondary" />
              <div className="leading-tight">
                <div className="text-ink font-medium">Camille Aubert</div>
                <div className="text-[11px] uppercase tracking-wider">Senior Editor, Innovation</div>
              </div>
            </div>
            <span className="hidden sm:block h-8 w-px bg-rule" />
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 14 min read</span>
            <span>Markets · Crypto · Personal Finance</span>
          </div>
          <div className="mt-8 flex items-center gap-1 text-muted-foreground">
            <a href="/crypto" className="bg-ink text-background px-6 py-3 font-semibold uppercase tracking-wider hover:bg-primary transition-colors inline-flex items-center gap-2 mr-4">
              Explore Crypto <ArrowRight className="h-4 w-4" />
            </a>
            {[
              { i: Headphones, l: "Listen" },
              { i: Bookmark, l: "Save" },
              { i: Share2, l: "Share" },
              { i: Printer, l: "Print" },
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
              alt="A sunlit Global office with financial data softly projected on a wall"
              width={1600}
              height={1100}
              className="w-full h-[380px] lg:h-[560px] object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
            <figcaption className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground">
              Photograph · Capital Chronicle Studio, Paris
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Article ----------------------------- */
const sections = [
  { id: "the-leap", title: "The Leap" },
  { id: "the-shift", title: "The Shift" },
  { id: "the-conversation", title: "The Conversation" },
  { id: "the-future", title: "The Future" },
];

function ArticleLayout() {
  return (
    <section className="container-edit grid lg:grid-cols-12 gap-12 py-16 lg:py-24">
      {/* Table of contents */}
      <aside className="hidden lg:block lg:col-span-2">
        <div className="sticky top-40">
          <div className="eyebrow mb-4">Contents</div>
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
        <Section id="the-leap" title="The Leap" number="01">
          <p className="text-2xl serif-display leading-[1.4] text-ink mb-8">
            It started quietly for me. A modest allocation, an experiment born of curiosity and perhaps a little FOMO. Then, the realization set in: the old rules of money no longer applied to my life.
          </p>
          <p>
            When I first put money into crypto, my life changed subtly. The traditional 9-to-5 began to feel archaic. The concept of waiting three business days for a wire transfer seemed almost comical. I realized that my wealth was no longer confined to brick-and-mortar institutions; it was decentralized, borderless, and entirely in my own hands.
          </p>
          <KeyTakeaways
            items={[
              "Self-custody granted me true financial sovereignty.",
              "Traditional banking timelines became entirely obsolete in my routine.",
              "I could transfer value globally and borderlessly in seconds.",
              "Financial independence shifted from a distant retirement goal to my present reality.",
            ]}
          />
        </Section>

        <Section id="the-shift" title="The Shift" number="02">
          <p>
            Suddenly, I wasn't just an investor; I became part of an ecosystem. The daily volatility, which once seemed terrifying, became a feature, not a bug. It was the heartbeat of a new financial era. I started measuring my net worth not in fiat currency, but in Bitcoin and Ethereum.
          </p>
          <PullQuote
            quote="The moment I took self-custody of my digital assets, I stopped being a passenger in the financial system and became the driver."
            attribution="My Personal Journal"
          />
          <p>
            The psychological shift was profound. My constant checking of charts gave way to a deeper understanding of macroeconomics, inflation, and digital scarcity. I began to see traditional money as a melting ice cube, while my digital assets represented the long-term preservation of my purchasing power.
          </p>
        </Section>

        <Section id="the-conversation" title="The Conversation" number="03">
          <figure className="my-10 -mx-4 lg:mx-0">
            <img src={podcastCryptoImg} alt="Famous entrepreneur in a podcast" loading="lazy" width={1200} height={800} className="w-full" />
            <figcaption className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground">
              A candid conversation about wealth and the digital frontier.
            </figcaption>
          </figure>
          <p>
            As my understanding grew, so did the nature of my conversations. No longer was I discussing interest rates on savings accounts; I found myself debating tokenomics, Layer 2 scaling solutions, and the geopolitical implications of decentralized money. My entire worldview had shifted.
          </p>
          <ExpertCommentary
            name="Anonymous Founder"
            role="Decentralized Finance Pioneer"
            text="Putting capital into crypto isn't just an investment; it's an opt-out from a broken system. Your perspective on risk and reward changes permanently."
          />
        </Section>

        <Section id="the-future" title="The Future" number="04">
          <p>
            The future belongs to those who adapt. My transition from traditional finance to crypto wasn't just about making money; it was about reclaiming agency over my time and resources. My life after crypto is marked by a profound sense of independence, a global perspective on value, and the thrilling realization that I am participating in the greatest wealth transfer in human history.
          </p>
          <div className="mt-12 pt-8 border-t border-rule flex items-center justify-between">
            <div className="text-xs text-muted-foreground uppercase tracking-wider">
              Capital Chronicle · Personal Essay
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
      <div className="eyebrow mb-4">Key Takeaways</div>
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
      <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1">Definition</div>
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
      <div className="eyebrow mb-1">Infographic</div>
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
        Source · Capital Chronicle Research, survey of 84 Global institutions, 2025.
      </figcaption>
    </figure>
  );
}

function ExpertCommentary({ name, role, text }: { name: string; role: string; text: string }) {
  return (
    <aside className="my-10 border-t border-b border-rule py-6 flex gap-5">
      <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary" />
      <div>
        <div className="eyebrow mb-2">Expert Commentary</div>
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
      <div className="eyebrow px-5 pt-4">Related Reading</div>
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
      <div className="eyebrow mb-4">Chart</div>
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
      <SidebarBlock title="Editor’s Picks">
        {[
          ["The slow rise of tokenised treasuries", "Markets"],
          ["A field guide to Global’s AI labs", "Innovation"],
          ["Why custody is the new frontier", "Digital Finance"],
        ].map(([t, c], i) => (
          <a key={i} href="#" className="group block py-3 border-b border-rule last:border-0">
            <div className="text-[11px] text-primary uppercase tracking-wider mb-1">{c}</div>
            <div className="font-serif text-base leading-snug text-ink group-hover:text-primary transition-colors">{t}</div>
          </a>
        ))}
      </SidebarBlock>

      <SidebarBlock title="Market Snapshot">
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

      <SidebarBlock title="Most Read">
        {[
          "The euro’s quiet digitalisation",
          "Inside Mistral’s €640M raise",
          "Five charts on Global fintech valuations",
          "What MiCA actually changed",
        ].map((t, i) => (
          <a key={i} href="#" className="group flex gap-4 py-3 border-b border-rule last:border-0">
            <span className="serif-display text-2xl text-primary/40 tabular-nums">{i + 1}</span>
            <span className="font-serif text-base leading-snug text-ink group-hover:text-primary transition-colors">{t}</span>
          </a>
        ))}
      </SidebarBlock>

      <SidebarBlock title="Upcoming Events">
        {[
          ["24 Jun", "Capital Chronicle Salon: AI & Sovereignty", "Paris"],
          ["02 Jul", "Digital Asset Forum", "Frankfurt"],
          ["18 Sep", "Global Fintech Week", "Amsterdam"],
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
        <div className="eyebrow text-secondary mb-3">Weekly Brief</div>
        <div className="serif-display text-2xl mb-3">The Continental Memo</div>
        <p className="text-sm text-background/70 mb-5 leading-relaxed">
          A Friday letter from our editors on what moved Global markets and minds this week.
        </p>
        <form className="flex">
          <input
            type="email"
            placeholder="your@email.eu"
            className="flex-1 bg-transparent border-b border-background/30 px-0 py-2 text-sm placeholder:text-background/40 focus:outline-none focus:border-background"
          />
          <button className="ml-3 text-sm font-semibold underline underline-offset-4 hover:text-secondary transition-colors">
            Join
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
            <img src={podcastCover} alt="The Continental podcast cover" loading="lazy" width={1024} height={1024} className="w-full aspect-square object-cover" />
            <button className="absolute inset-0 flex items-center justify-center bg-ink/0 hover:bg-ink/30 transition-colors">
              <span className="h-16 w-16 rounded-full bg-background flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="h-6 w-6 text-primary fill-primary ml-0.5" />
              </span>
            </button>
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="eyebrow mb-3">The Continental · Episode 47</div>
          <h2 className="serif-display text-4xl lg:text-5xl mb-5">
            Can Global build its own AI &mdash; on its own terms?
          </h2>
          <p className="body-prose max-w-2xl">
            Hosts Camille Aubert and Henrik Lund are joined by our regulation
            editor Marta Velasco for a long conversation about sovereignty,
            open weights, and what the next five years of Global AI policy
            actually require from the financial industry.
          </p>
          <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 52 min</span>
            <span>Released 16 June 2026</span>
          </div>
          <div className="mt-6 p-5 border-l-2 border-primary bg-background text-sm italic font-serif text-ink/80">
            &ldquo;The question is not whether Global can build a frontier model. The
            question is whether it wants the same model everyone else is building.&rdquo;
            <span className="block mt-2 not-italic text-xs uppercase tracking-wider text-muted-foreground">
              — Transcript preview, 14:22
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="bg-ink text-background px-5 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-primary transition-colors flex items-center gap-2">
              <Play className="h-3.5 w-3.5 fill-background" /> Listen now
            </button>
            <button className="border border-ink px-5 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-ink hover:text-background transition-colors">
              Read transcript
            </button>
            <button className="border border-ink/20 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-ink hover:border-ink transition-colors">
              All episodes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Related Grid ----------------------------- */
const related = [
  { img: card1, cat: "Markets", title: "What the ECB’s next move means for Global tech valuations", author: "Sofia Marchetti", time: 7 },
  { img: card2, cat: "Startups", title: "The quiet decade of Global deep-tech is ending", author: "Lukas Berg", time: 9 },
  { img: card3, cat: "Cybersecurity", title: "Inside Global’s first AI red-team certification", author: "Marta Velasco", time: 11 },
  { img: card4, cat: "Economy", title: "Brussels reconsiders its industrial policy — again", author: "Henrik Lund", time: 6 },
  { img: card5, cat: "Innovation", title: "Why post-quantum cryptography matters to fund administrators", author: "Aïcha Diallo", time: 8 },
  { img: card6, cat: "Events", title: "Field notes from the Global Fintech Forum, Amsterdam", author: "Camille Aubert", time: 5 },
  { img: card1, cat: "Research", title: "Five charts on Global fintech valuations", author: "Capital Chronicle Data", time: 4 },
  { img: card2, cat: "AI", title: "Open weights, closed contracts: the new compromise", author: "Henrik Lund", time: 10 },
  { img: card3, cat: "Digital Finance", title: "Custody software is quietly being rebuilt", author: "Sofia Marchetti", time: 9 },
  { img: card4, cat: "Opinion", title: "In praise of boring infrastructure", author: "Capital Chronicle Editorial Board", time: 4 },
  { img: card5, cat: "Education", title: "A beginner’s glossary for on-chain finance", author: "Aïcha Diallo", time: 6 },
  { img: card6, cat: "Magazine", title: "Letter from the Editor, Issue 042", author: "Camille Aubert", time: 3 },
];

function RelatedGrid() {
  return (
    <section className="container-edit py-16 lg:py-24">
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="eyebrow mb-2">Continue reading</div>
          <h2 className="serif-display text-3xl lg:text-5xl">From the latest issue</h2>
        </div>
        <a href="#" className="hidden sm:flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider hover:text-primary transition-colors">
          See all articles <ArrowRight className="h-3.5 w-3.5" />
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
                <button className="hover:text-primary" aria-label="Save"><Bookmark className="h-3.5 w-3.5" /></button>
                <button className="hover:text-primary" aria-label="Share"><Share2 className="h-3.5 w-3.5" /></button>
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
  ["Artificial Intelligence", "lg"],
  ["Digital Finance", "lg"],
  ["Blockchain", "md"],
  ["Cybersecurity", "md"],
  ["Fintech", "lg"],
  ["Cloud Computing", "sm"],
  ["Quantum Computing", "md"],
  ["Startups", "sm"],
  ["Economics", "lg"],
  ["Innovation", "md"],
  ["Venture Capital", "sm"],
  ["Macro", "sm"],
  ["Tokenisation", "md"],
  ["Custody", "sm"],
  ["Open Source", "md"],
  ["Regulation", "lg"],
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
        <div className="eyebrow text-secondary mb-4" style={{ color: "oklch(0.7 0.12 260)" }}>Topic Explorer</div>
        <h2 className="serif-display text-3xl lg:text-5xl mb-12 max-w-2xl">
          Browse the ideas we cover, by weight and emphasis.
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
        <div className="eyebrow mb-4">Subscribe</div>
        <h2 className="serif-display text-4xl lg:text-6xl mb-6">
          Intelligence, <em className="font-normal text-primary">delivered weekly.</em>
        </h2>
        <p className="body-prose max-w-xl mx-auto">
          Join 84,000 Global executives, researchers and investors who start
          their Friday with a single, considered letter from our editors.
        </p>
        <form className="mt-10 grid sm:grid-cols-2 gap-3 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Full name"
            className="border-b border-ink px-1 py-3 bg-transparent placeholder:text-muted-foreground focus:outline-none focus:border-primary text-sm"
          />
          <input
            type="email"
            placeholder="Email address"
            className="border-b border-ink px-1 py-3 bg-transparent placeholder:text-muted-foreground focus:outline-none focus:border-primary text-sm"
          />
          <select className="sm:col-span-2 border-b border-ink px-1 py-3 bg-transparent focus:outline-none focus:border-primary text-sm text-ink">
            <option>Interests — choose a focus area</option>
            <option>Markets & Macro</option>
            <option>AI & Technology</option>
            <option>Digital Finance & Crypto</option>
            <option>Startups & Venture</option>
          </select>
          <button className="sm:col-span-2 mt-4 bg-ink text-background py-4 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-primary transition-colors inline-flex items-center justify-center gap-2">
            <Mail className="h-3.5 w-3.5" /> Subscribe to The Continental
          </button>
        </form>
        <p className="mt-5 text-[11px] text-muted-foreground">
          Free. Unsubscribe at any time. Read our editorial policy and privacy notice.
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
    text: "The point about audit trails being the product is exactly right. We&rsquo;ve had to rebuild our entire reporting stack around it.",
    likes: 24, replies: 3,
  },
  {
    name: "Jonas Weber",
    role: "Quant Research · Frankfurt",
    time: "4h",
    text: "Open-weights are clearly winning in our internal evals. The bigger question — and the article hints at it — is who maintains them five years from now.",
    likes: 18, replies: 5,
  },
  {
    name: "Sara Lindqvist",
    role: "Policy · Stockholm",
    time: "6h",
    text: "Refreshing to read coverage that does not present MiCA as either salvation or doom. It is, like most regulation, mostly paperwork — and that is the point.",
    likes: 12, replies: 1,
  },
];

function Comments() {
  return (
    <section className="bg-surface border-y border-rule">
      <div className="container-edit py-16 lg:py-20 max-w-4xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="eyebrow mb-2">Discussion · 47 comments</div>
            <h2 className="serif-display text-3xl lg:text-4xl">A considered conversation</h2>
          </div>
          <button className="hidden sm:inline-flex border border-ink px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-ink hover:text-background transition-colors">
            Join the discussion
          </button>
        </div>

        <div className="bg-background border border-rule p-5 mb-8">
          <textarea
            placeholder="Add a thoughtful comment…"
            rows={3}
            className="w-full bg-transparent text-sm resize-none focus:outline-none placeholder:text-muted-foreground"
          />
          <div className="flex justify-between items-center mt-3 pt-3 border-t border-rule">
            <span className="text-[11px] text-muted-foreground">Comments are moderated by our editors.</span>
            <button className="bg-ink text-background px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-primary transition-colors">
              Post
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
                  <span className="text-[11px] text-muted-foreground ml-auto">{c.time} ago</span>
                </div>
                <p className="text-[15px] text-ink/85 leading-relaxed" dangerouslySetInnerHTML={{ __html: c.text }} />
                <div className="mt-3 flex items-center gap-5 text-xs text-muted-foreground">
                  <button className="hover:text-primary transition-colors">♥ {c.likes}</button>
                  <button className="hover:text-primary transition-colors">Reply · {c.replies}</button>
                  <button className="hover:text-primary transition-colors">Share</button>
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
  { title: "Sections", items: ["Markets", "Technology", "Business", "Innovation", "Research", "Opinion"] },
  { title: "Company", items: ["About", "Authors", "Careers", "Editorial Policy", "Contact", "Press"] },
  { title: "Resources", items: ["Magazine Archive", "Newsletters", "Podcasts", "Events", "RSS", "Sitemap"] },
  { title: "Legal", items: ["Privacy", "Terms of Service", "Cookies", "Accessibility", "Corrections", "Subscriber Agreement"] },
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
              Crypto Intelligence
            </div>
            <p className="mt-5 text-sm text-background/60 leading-relaxed max-w-sm">
              An independent publication of considered journalism on
              technology, digital assets and the institutions that shape them.
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
          <div>© {new Date().getFullYear()} Capital Chronicle. Printed on the Blockchain. Read everywhere.</div>
          <div className="flex gap-5">
            <span>ISSN 2754-0421</span>
            <a href="/privacy" className="hover:text-background">Privacy Policy</a>
            <a href="/terms" className="hover:text-background">Terms & Conditions</a>
            <a href="#" className="hover:text-background">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
