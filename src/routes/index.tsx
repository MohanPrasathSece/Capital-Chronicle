import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search, Menu, Bookmark, Share2, Headphones, Printer, ArrowRight,
  ArrowUpRight, Play, Clock, ChevronDown, Globe, Mail,
} from "lucide-react";
import heroImg from "@/assets/hero-ai-research.jpg";
import euroImg from "@/assets/article-european-innovation.jpg";
import aiLabImg from "@/assets/article-ai-lab.jpg";
import blockchainImg from "@/assets/article-blockchain.jpg";
import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";
import card5 from "@/assets/card-5.jpg";
import card6 from "@/assets/card-6.jpg";
import podcastCover from "@/assets/podcast-cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Évolia Journal — European Financial Intelligence" },
      { name: "description", content: "How artificial intelligence is transforming digital asset research across Europe — plus markets, fintech, cybersecurity and the global economy." },
      { property: "og:title", content: "Évolia Journal — European Financial Intelligence" },
      { property: "og:description", content: "Premium editorial coverage of AI, blockchain, digital finance and the global economy from a European point of view." },
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
  "EURO STOXX 50  +0.42%",
  "ECB holds policy rate at 3.25%",
  "European AI Act enforcement enters phase II",
  "Bund 10Y  2.31%  −2 bp",
  "Mistral closes €640M Series C",
  "Brent  $82.40  +0.31%",
  "MiCA framework: 14 firms granted EU passport",
  "EUR/USD  1.0832",
  "Quantum chip yields cross 99.4% threshold at IMEC",
  "DAX  +0.18%   CAC 40  +0.27%   FTSE 100  −0.05%",
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
            <span>Frankfurt 14:32 CET</span>
            <span className="text-primary font-medium">EUR/USD 1.0832</span>
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
            Évolia <span className="italic font-normal">Journal</span>
          </span>
          <span className="eyebrow mt-1 text-[10px] lg:text-[11px] text-muted-foreground">
            European Financial Intelligence
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
            How Artificial Intelligence Is Transforming{" "}
            <em className="font-normal text-primary">Digital Asset Research</em>{" "}
            Across Europe
          </h1>
          <p className="mt-6 max-w-2xl body-prose">
            From Frankfurt to Lisbon, a generation of researchers is rebuilding the
            tools of financial analysis around machine learning, distributed ledgers
            and a uniquely European appetite for regulation that protects without
            paralysing. A field report.
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
            <span>Markets · AI · Research</span>
          </div>
          <div className="mt-8 flex items-center gap-1 text-muted-foreground">
            {[
              { i: Headphones, l: "Listen" },
              { i: Bookmark, l: "Save" },
              { i: Share2, l: "Share" },
              { i: Printer, l: "Print" },
            ].map(({ i: Icon, l }) => (
              <button key={l} className="flex items-center gap-1.5 px-3 py-2 text-xs hover:text-primary hover:bg-surface transition-colors">
                <Icon className="h-4 w-4" /> {l}
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 order-1 lg:order-2">
          <figure className="relative overflow-hidden bg-surface">
            <img
              src={heroImg}
              alt="A sunlit European office with financial data softly projected on a wall"
              width={1600}
              height={1100}
              className="w-full h-[380px] lg:h-[560px] object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
            <figcaption className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground">
              Photograph · Évolia Studio, Paris
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Article ----------------------------- */
const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "digital-transformation", title: "Digital Transformation" },
  { id: "blockchain", title: "Blockchain Explained" },
  { id: "ai", title: "Artificial Intelligence" },
  { id: "european-innovation", title: "European Innovation" },
  { id: "security", title: "Security" },
  { id: "regulation", title: "Regulation" },
  { id: "market-analysis", title: "Market Analysis" },
  { id: "future-outlook", title: "Future Outlook" },
  { id: "conclusion", title: "Conclusion" },
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
        <Section id="introduction" title="Introduction" number="01">
          <p className="text-2xl serif-display leading-[1.4] text-ink mb-8">
            In a quiet room overlooking the Main, a team of researchers spends its
            mornings teaching a machine to read prospectuses — and its afternoons
            arguing about what the machine should never be allowed to do.
          </p>
          <p>
            European finance has always preferred caution to spectacle. Yet a quiet
            transformation is underway: artificial intelligence is being woven into
            the daily work of analysts, risk officers, regulators and the open-source
            communities that maintain the continent&rsquo;s blockchain infrastructure.
            The result is neither the breathless future promised by Silicon Valley
            nor the moratorium feared by its critics — but something more characteristic
            of the region: a careful, well-documented experiment.
          </p>
          <KeyTakeaways
            items={[
              "European AI-for-finance investment crossed €4.2B in 2025, up 38% YoY.",
              "MiCA passporting now covers 14 EU-licensed digital-asset firms.",
              "Open-source LLMs are favoured by 61% of Tier-1 European banks.",
              "Time-to-research on equity coverage fell from 11h to 2.4h with AI assist.",
            ]}
          />
        </Section>

        <Section id="digital-transformation" title="Digital Transformation" number="02">
          <p>
            The transformation is not abstract. At a mid-sized asset manager in
            Amsterdam, an analyst opens a model that has, overnight, read every
            8-K filed by 312 portfolio companies, clustered them by exposure to
            energy prices, and flagged six paragraphs worth a human reading.
            The analyst spends ninety minutes on what used to take a week.
          </p>
          <PullQuote
            quote="The most radical thing artificial intelligence has done to our work is give us back the time to think."
            attribution="Head of Equity Research, mid-cap European asset manager"
          />
          <p>
            What separates the European approach is the insistence on
            explainability. Each summary is annotated with the source paragraph;
            each recommendation, with the model&rsquo;s confidence; each dataset,
            with its provenance. The audit trail is the product.
          </p>
        </Section>

        <Section id="blockchain" title="Blockchain Explained" number="03">
          <figure className="my-10 -mx-4 lg:mx-0">
            <img src={blockchainImg} alt="Abstract visualisation of a blockchain network" loading="lazy" width={1200} height={800} className="w-full" />
            <figcaption className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground">
              Visualisation · Evolia Data Studio
            </figcaption>
          </figure>
          <p>
            A blockchain is, at its most boring, a shared spreadsheet that no
            single party can quietly edit. In financial research that boring
            property becomes valuable: it lets independent analysts agree on what
            a settlement happened, when, and for how much, without trusting any
            individual venue.
          </p>
          <Definition term="Distributed Ledger">
            A database whose entries are replicated across many independent
            computers, where consensus rules &mdash; not a central administrator
            &mdash; determine which entries are valid.
          </Definition>
          <p>
            European interest has concentrated less on speculative tokens and
            more on so-called &ldquo;plumbing&rdquo;: tokenised bonds issued
            under the EU&rsquo;s pilot regime, on-chain repo, and the slow but
            durable work of standardising data so that machines can read it.
          </p>
        </Section>

        <Section id="ai" title="Artificial Intelligence" number="04">
          <p>
            The models doing the work are mostly not the chatbots familiar from
            headlines. They are smaller, fine-tuned systems trained on filings,
            transcripts, market microstructure and, increasingly, the chain
            itself. They do not predict prices. They organise evidence.
          </p>
          <Infographic
            title="Where European banks deploy AI in research workflows"
            rows={[
              ["Document summarisation", 88],
              ["Anomaly detection in filings", 71],
              ["ESG signal extraction", 64],
              ["Trade-surveillance assistants", 59],
              ["Code review for on-chain contracts", 41],
            ]}
          />
          <ExpertCommentary
            name="Dr. Henrik Lund"
            role="Évolia Contributing Editor, Quant Research"
            text="The interesting frontier is not larger models. It is models that know what they do not know — and say so."
          />
        </Section>

        <Section id="european-innovation" title="European Innovation" number="05">
          <figure className="my-10 -mx-4 lg:mx-0">
            <img src={euroImg} alt="A European financial district at blue hour" loading="lazy" width={1200} height={800} className="w-full" />
          </figure>
          <p>
            The continent&rsquo;s innovation map is no longer dominated by a
            single hub. Paris hosts the largest open-source foundation model
            community in the EU; Zurich and Lausanne anchor cryptography research;
            Tallinn supplies an outsized share of regulated wallet
            infrastructure; Frankfurt remains the gravitational centre of
            institutional adoption.
          </p>
          <QuickFacts
            items={[
              ["€640M", "Largest 2025 European AI Series C"],
              ["27", "EU member states aligned under MiCA"],
              ["2.4h", "Median time to first-draft equity note with AI assist"],
              ["61%", "Tier-1 banks favouring open-weights LLMs"],
            ]}
          />
        </Section>

        <Section id="security" title="Security" number="06">
          <figure className="my-10 -mx-4 lg:mx-0">
            <img src={aiLabImg} alt="A modern data center" loading="lazy" width={1200} height={800} className="w-full" />
          </figure>
          <p>
            Every new layer of automation is also a new surface to defend.
            European institutions have responded with red-team exercises that
            now include adversarial prompts, model exfiltration drills, and
            wallet-level kill switches.
          </p>
          <RelatedReading
            items={[
              "Inside Europe&rsquo;s first AI red-team certification",
              "The quiet revolution in custody software",
              "Why post-quantum cryptography matters to fund administrators",
            ]}
          />
        </Section>

        <Section id="regulation" title="Regulation" number="07">
          <p>
            The EU AI Act is sometimes described as a brake; viewed from
            inside research teams, it functions more like a checklist that
            forces decisions which would otherwise have been deferred. Who
            owns the training data. Who reviews the prompt. Who signs the
            report. None of this is glamorous. All of it is foundational.
          </p>
          <PullQuote
            quote="Regulation, properly designed, is a forcing function for clarity."
            attribution="European Securities and Markets Authority working paper, 2025"
          />
        </Section>

        <Section id="market-analysis" title="Market Analysis" number="08">
          <p>
            Equity markets have, predictably, paid attention. The MSCI Europe
            IT sub-index outperformed the broader benchmark by 11 percentage
            points over the past twelve months. But the deeper signal is in
            mid-caps: specialist data vendors, regulated-token infrastructure,
            and what the sell-side now calls &ldquo;research-as-a-service.&rdquo;
          </p>
          <ChartPlaceholder caption="MSCI Europe IT vs. Broad Index · Trailing 12 months" />
        </Section>

        <Section id="future-outlook" title="Future Outlook" number="09">
          <p>
            The next five years will be defined less by which models exist and
            more by which institutions can absorb them without losing the things
            that make them trustworthy. That is, in the end, a European story:
            slow, deliberate, occasionally frustrating, often underestimated.
          </p>
        </Section>

        <Section id="conclusion" title="Conclusion" number="10">
          <p>
            Artificial intelligence will not replace the European financial
            researcher. It will, however, change what counts as a good day&rsquo;s
            work. The reading is faster. The arguments are sharper. The audit
            trails are longer. The job &mdash; thinking carefully about money
            in a complicated world &mdash; remains.
          </p>
          <div className="mt-12 pt-8 border-t border-rule flex items-center justify-between">
            <div className="text-xs text-muted-foreground uppercase tracking-wider">
              Évolia Journal · Issue 042
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
        Source · Évolia Research, survey of 84 European institutions, 2025.
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
          ["A field guide to Europe’s AI labs", "Innovation"],
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
          "Five charts on European fintech valuations",
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
          ["24 Jun", "Évolia Salon: AI & Sovereignty", "Paris"],
          ["02 Jul", "Digital Asset Forum", "Frankfurt"],
          ["18 Sep", "European Fintech Week", "Amsterdam"],
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
        <div className="eyebrow text-secondary mb-3" style={{ color: "oklch(0.7 0.12 260)" }}>Weekly Brief</div>
        <div className="serif-display text-2xl mb-3">The Continental Memo</div>
        <p className="text-sm text-background/70 mb-5 leading-relaxed">
          A Friday letter from our editors on what moved European markets and minds this week.
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
            Can Europe build its own AI &mdash; on its own terms?
          </h2>
          <p className="body-prose max-w-2xl">
            Hosts Camille Aubert and Henrik Lund are joined by our regulation
            editor Marta Velasco for a long conversation about sovereignty,
            open weights, and what the next five years of European AI policy
            actually require from the financial industry.
          </p>
          <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 52 min</span>
            <span>Released 16 June 2026</span>
          </div>
          <div className="mt-6 p-5 border-l-2 border-primary bg-background text-sm italic font-serif text-ink/80">
            &ldquo;The question is not whether Europe can build a frontier model. The
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
  { img: card1, cat: "Markets", title: "What the ECB’s next move means for European tech valuations", author: "Sofia Marchetti", time: 7 },
  { img: card2, cat: "Startups", title: "The quiet decade of European deep-tech is ending", author: "Lukas Berg", time: 9 },
  { img: card3, cat: "Cybersecurity", title: "Inside Europe’s first AI red-team certification", author: "Marta Velasco", time: 11 },
  { img: card4, cat: "Economy", title: "Brussels reconsiders its industrial policy — again", author: "Henrik Lund", time: 6 },
  { img: card5, cat: "Innovation", title: "Why post-quantum cryptography matters to fund administrators", author: "Aïcha Diallo", time: 8 },
  { img: card6, cat: "Events", title: "Field notes from the European Fintech Forum, Amsterdam", author: "Camille Aubert", time: 5 },
  { img: card1, cat: "Research", title: "Five charts on European fintech valuations", author: "Évolia Data", time: 4 },
  { img: card2, cat: "AI", title: "Open weights, closed contracts: the new compromise", author: "Henrik Lund", time: 10 },
  { img: card3, cat: "Digital Finance", title: "Custody software is quietly being rebuilt", author: "Sofia Marchetti", time: 9 },
  { img: card4, cat: "Opinion", title: "In praise of boring infrastructure", author: "Évolia Editorial Board", time: 4 },
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
          Join 84,000 European executives, researchers and investors who start
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
              Évolia <em className="font-normal">Journal</em>
            </div>
            <div className="eyebrow mt-2 text-background/60" style={{ color: "oklch(0.75 0 0)" }}>
              European Financial Intelligence
            </div>
            <p className="mt-5 text-sm text-background/60 leading-relaxed max-w-sm">
              An independent European publication of considered journalism on
              technology, finance and the institutions that shape them.
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
          <div>© {new Date().getFullYear()} Évolia Journal. Printed in Paris. Read everywhere.</div>
          <div className="flex gap-5">
            <span>ISSN 2754-0421</span>
            <a href="#" className="hover:text-background">Support</a>
            <a href="#" className="hover:text-background">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
