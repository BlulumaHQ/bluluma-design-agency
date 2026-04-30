import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getLatestByIndustry } from "@/lib/articles";
import logo from "@/assets/bluluma-logo.svg";
import { useState } from "react";

const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useScrollReveal({ delay });
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

/* ── Local minimal header for /realtor only ── */
const RealtorHeader = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", to: "#top" },
    { label: "What We Do", to: "#what-we-do" },
    { label: "Listings", to: "#listings" },
    { label: "Portfolio", to: "#portfolio" },
    { label: "Pricing", to: "#pricing" },
    { label: "Contact", to: "#cta" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="section-container flex items-center justify-between h-20">
        <a href="#top" className="flex-shrink-0 flex items-center gap-3">
          <img src={logo} alt="Bluluma logo" className="h-10 w-auto" />
          <span className="text-sm font-semibold text-muted-foreground hidden sm:inline">
            for Realtors
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.to}
              className="text-[15px] font-semibold text-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="cta-solid px-6 py-2.5 text-sm font-semibold rounded-lg"
          >
            Get My 2 Free Previews
          </a>
          <Link
            to="/"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Bluluma →
          </Link>
        </nav>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-foreground transition-transform ${open ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-transform ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          <div className="section-container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.to}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="w-full text-center cta-solid px-6 py-3.5 text-base font-semibold rounded-lg"
            >
              Get My 2 Free Previews
            </a>
            <Link to="/" className="text-xs text-muted-foreground">
              Bluluma →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

const RealtorFooter = () => (
  <footer className="section-dark border-t border-border">
    <div className="section-container py-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm" style={{ color: "hsl(220 10% 55%)" }}>
      <span>© 2026 Bluluma. All rights reserved.</span>
      <span>
        Web Design by{" "}
        <Link to="/" className="hover:text-primary transition-colors">
          Bluluma
        </Link>
      </span>
    </div>
  </footer>
);

/* ── Page ── */
const Realtor = () => {
  const insights = getLatestByIndustry("Realtor", 3);

  const services = [
    {
      title: "Conversion Website Design",
      desc: "Strategic structure, clear messaging, and a layout designed to turn visitors into qualified buyer and seller leads.",
    },
    {
      title: "Feature Listings System",
      desc: "Curated property pages with strong headlines, lifestyle photography, and clear CTAs — built to convert far better than raw MLS feeds.",
      highlight: true,
    },
    {
      title: "Listings Integration",
      desc: "Optional MLS / IDX integration alongside your feature listings, so you keep full coverage without the standardized look.",
    },
  ];

  const portfolio = Array.from({ length: 6 }).map((_, i) => ({
    name: `Realtor Project ${i + 1}`,
    result: [
      "+38% qualified inquiries in 60 days",
      "+52% time on listing pages",
      "2.4× contact form submissions",
      "+44% mobile conversion rate",
      "+61% return visitor rate",
      "3× featured-listing engagement",
    ][i],
  }));

  const steps = [
    { n: "01", title: "Submit", desc: "Tell us about your business and current website." },
    { n: "02", title: "Receive 2 Previews", desc: "We design two redesigned previews — before you pay." },
    { n: "03", title: "Choose Your Direction", desc: "Pick the version that fits your brand and goals." },
    { n: "04", title: "Launch", desc: "We finalize, integrate listings, and launch." },
  ];

  const pricing = [
    {
      name: "Version A — Launch Ready",
      price: "$2,400",
      desc: "A clean, conversion-focused Realtor website ready to launch fast.",
      features: [
        "Up to 6 pages",
        "Conversion-focused structure",
        "Mobile-first design",
        "Basic feature listing template",
        "Contact + lead capture",
        "Launch in ~2 weeks",
      ],
      cta: "Start with Version A",
    },
    {
      name: "Version B — Sales Focused",
      price: "$4,800",
      desc: "A complete sales system built around feature listings and lead conversion.",
      features: [
        "Everything in Version A",
        "Feature Listings System",
        "Optional MLS / IDX integration",
        "Advanced conversion structure",
        "Branded listing pages",
        "Trust + social proof modules",
      ],
      cta: "Start with Version B",
      featured: true,
    },
  ];

  return (
    <div id="top" className="flex flex-col min-h-screen">
      <RealtorHeader />

      <main className="flex-1">
        {/* HERO (dark) */}
        <section className="section-dark section-border">
          <div className="section-container py-20 md:py-32">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                For Realtors
              </span>
              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
                See Your New Real Estate Website Before You Pay
              </h1>
              <p className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: "hsl(220 10% 70%)" }}>
                We redesign your website to attract more buyers and sellers —
                with conversion-focused structure and powerful listing
                presentation.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#cta"
                  className="cta-solid inline-block text-center px-8 py-4 text-base font-semibold rounded-lg"
                >
                  Get My 2 Free Previews
                </a>
                <a
                  href="#what-we-do"
                  className="inline-block text-center px-8 py-4 text-base font-semibold rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  See How It Works
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section id="what-we-do" className="section-border bg-background">
          <div className="section-container section-padding">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                What We Do
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold max-w-2xl">
                Three pieces. One conversion system.
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <div
                    className={`h-full p-8 border rounded-lg transition-all hover:-translate-y-1 ${
                      s.highlight
                        ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                        : "border-border bg-background hover:border-primary/40"
                    }`}
                  >
                    {s.highlight && (
                      <span className="inline-block text-[10px] uppercase tracking-widest font-semibold text-primary mb-3">
                        Main Focus
                      </span>
                    )}
                    <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* LISTINGS (anchor target, expands the Feature Listings story) */}
        <section id="listings" className="section-border bg-background">
          <div className="section-container section-padding grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                Feature Listings
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                Listings designed to sell, not just to display.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Standard MLS pages all look the same. Our Feature Listings
                System turns each property into a high-conversion landing
                page — strong headline, curated photography, lifestyle
                copywriting, and a clear next step for buyers.
              </p>
              <ul className="mt-6 space-y-3 text-muted-foreground">
                <li>• Strong, headline-driven property pages</li>
                <li>• Curated photo galleries</li>
                <li>• Lifestyle-focused descriptions</li>
                <li>• Clear, single call-to-action per listing</li>
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className="aspect-[4/5] rounded-lg border border-border bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 flex items-end">
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary font-semibold">
                    Sample Feature Listing
                  </div>
                  <div className="mt-2 text-2xl font-bold">
                    A modern home, presented like a brand.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="section-border bg-background">
          <div className="section-container section-padding">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                Portfolio
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold max-w-2xl">
                Before, two previews, and the result.
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolio.map((p, i) => (
                <Reveal key={p.name} delay={i * 60}>
                  <div className="border border-border rounded-lg overflow-hidden bg-background hover:border-primary/40 transition-colors">
                    <div className="grid grid-cols-3 border-b border-border">
                      {["Before", "Preview A", "Preview B"].map((label) => (
                        <div
                          key={label}
                          className="aspect-square bg-muted flex items-center justify-center border-r last:border-r-0 border-border"
                        >
                          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="p-6">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                        {p.name}
                      </div>
                      <p className="mt-2 text-base font-semibold text-primary">
                        {p.result}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section-border bg-background">
          <div className="section-container section-padding">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                Process
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold max-w-2xl">
                Submit → 2 previews → choose → launch.
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <div className="p-6 border border-border rounded-lg h-full bg-background">
                    <div className="text-primary text-sm font-bold tracking-widest">
                      {s.n}
                    </div>
                    <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="section-border bg-background">
          <div className="section-container section-padding">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                Pricing
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold max-w-2xl">
                Two clear options. No surprises.
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
              {pricing.map((p, i) => (
                <Reveal key={p.name} delay={i * 100}>
                  <div
                    className={`p-8 md:p-10 border rounded-lg h-full flex flex-col ${
                      p.featured
                        ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                        : "border-border bg-background"
                    }`}
                  >
                    <div className="text-xs uppercase tracking-widest text-primary font-semibold">
                      {p.name}
                    </div>
                    <div className="mt-3 text-4xl font-bold">{p.price}</div>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {p.desc}
                    </p>
                    <ul className="mt-6 space-y-2.5 text-muted-foreground flex-1">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#cta"
                      className={`mt-8 inline-block text-center px-6 py-3.5 text-sm font-semibold rounded-lg ${
                        p.featured
                          ? "cta-solid"
                          : "border border-border hover:border-primary hover:text-primary transition-colors"
                      }`}
                    >
                      {p.cta}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INSIGHTS */}
        <section className="section-border bg-background">
          <div className="section-container section-padding">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
              <Reveal>
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                  Insights
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                  Insights for Realtors
                </h2>
              </Reveal>
              <Link
                to="/insights/realtor"
                className="text-sm font-semibold text-primary hover:underline"
              >
                View More Realtor Insights →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insights.map((a, i) => (
                <Reveal key={a.slug} delay={i * 80}>
                  <Link
                    to={`/insights/${a.slug}`}
                    className="block p-6 md:p-8 border border-border rounded-lg h-full bg-background hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-1"
                  >
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium mb-3">
                      {formatDate(a.date)}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{a.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {a.excerpt}
                    </p>
                    <span className="mt-5 inline-block text-xs text-primary font-semibold">
                      Read More →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA (dark) */}
        <section id="cta" className="section-dark">
          <div className="section-container py-20 md:py-28 text-center">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
                See your new real estate website before you pay.
              </h2>
              <p
                className="mt-5 max-w-xl mx-auto text-lg leading-relaxed"
                style={{ color: "hsl(220 10% 65%)" }}
              >
                Two redesigned previews. Zero risk. Pick the one that fits.
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-block cta-solid px-10 py-4 text-base font-semibold rounded-lg"
              >
                Get My 2 Free Previews
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <RealtorFooter />
    </div>
  );
};

export default Realtor;
