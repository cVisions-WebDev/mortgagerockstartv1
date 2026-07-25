import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Sheet } from "@/components/dossier";
import { LoanSelector } from "@/components/loan-selector";
import {
  Float,
  Marquee,
  Parallax,
  Reveal,
  SpotlightCursor,
  Stagger,
  StaggerItem,
  staggerItemVariants,
} from "@/components/motion";
import { useState } from "react";
import mattAsset from "@/assets/matt.jpg.asset.json";
import mattCtaAsset from "@/assets/matt-cta.png.asset.json";

import homeAsset from "@/assets/home.jpg.asset.json";
import coupleAsset from "@/assets/couple.jpg.asset.json";
import deskAsset from "@/assets/desk.jpg.asset.json";
import neighborhoodImg from "@/assets/neighborhood.jpg";
import keysImg from "@/assets/keys.jpg";
import familyImg from "@/assets/family.jpg";
import porchImg from "@/assets/porch.jpg";
import differentApproachAsset from "@/assets/different-approach.jpg.asset.json";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mortgage Rockstar\\u2122 | Mortgage Clarity Before Commitment" },
      {
        name: "description",
        content:
          "Know what you can really afford before you start shopping. Education-first mortgage guidance from Matt Arana, powered by Cornerstone First Mortgage.",
      },
      { property: "og:title", content: "Mortgage Rockstar\\u2122 | Mortgage Clarity Before Commitment" },
      {
        property: "og:description",
        content: "Know what you can really afford before you start shopping. Education-first mortgage guidance from Matt Arana, powered by Cornerstone First Mortgage.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: mattAsset.url },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TickerBand />
      <ADifferentApproach />
      <PortraitBand />
      <BeginWithKnowledge />
      <BrandPillars />
      <LoanExplorer />
      <NumbersMonument />
      <EducationPreview />
      <SuccessPreview />
      <FinalCTA />
    </>
  );
}

function FinalCTA() {
  return (
    <section className="bg-[color:var(--paper-2)] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal as="div">
          <div className="sheet relative overflow-hidden p-8 sm:p-12 lg:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-8 right-10 hidden h-16 w-40 rounded-b-md bg-[color:var(--orange)] sm:block"
            />
            <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div>
                <p className="label-eyebrow">
                  Let&rsquo;s Start with a Conversation
                </p>
                <h2 className="mt-3 font-display text-3xl font-black leading-[1.05] sm:text-4xl lg:text-5xl">
                  Every successful mortgage begins with understanding your goals.
                </h2>
                <p className="mt-5 max-w-xl text-base text-[color:var(--muted-foreground)] sm:text-lg">
                  Whether you&rsquo;re purchasing your first home, upgrading,
                  investing, relocating, or preparing for the future, Mortgage
                  Rockstar is here to help you build a financing strategy with
                  confidence.
                </p>
                <div className="mt-8">
                  <Link to="/contact" className="btn-primary">
                    Schedule Your Mortgage Strategy Session
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="photo-frame relative aspect-[4/5] w-full max-w-[420px] rotate-[2deg] lg:ml-auto">
                  <img
                    src={mattCtaAsset.url}
                    alt="Matt Arana, Founder of Mortgage Rockstar"
                    className="h-full w-full object-cover"

                    loading="lazy"
                  />
                  <span className="tape -top-3 left-10 rotate-[-4deg]" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


/* -------------------------------------------------------------------- */
/*  Hero  — asymmetric split with cinematic home photo + floating sheets */
/* -------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--paper)]">
      <SpotlightCursor color="var(--blue)" />
      <div aria-hidden className="absolute inset-0 dossier-grid opacity-50" />
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[color:var(--blue-soft)] blur-3xl opacity-70" />
      <div aria-hidden className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[color:var(--orange-soft)] blur-3xl opacity-80" />


      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-28 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-8 lg:pt-36">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="label-eyebrow"
          >
            Mortgage clarity before commitment
          </motion.p>

          <h1 className="mt-5 font-display text-[2.5rem] font-black leading-[0.98] tracking-tight text-[color:var(--ink)] sm:text-6xl lg:text-[4.5rem]">
            {["Know what you can", "really afford", "before", "you start shopping."].map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, clipPath: "inset(0 0 100% 0)" }}
                animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {i === 1 ? <span className="marker-underline">{line}</span> : line}
              </motion.span>
            ))}
          </h1>

          <Reveal delay={0.7}>
            <p className="mt-6 max-w-xl text-lg text-[color:var(--muted-foreground)]">
              Human strategy. Clear numbers. Rockstar follow-through.
            </p>
          </Reveal>
          <Reveal delay={0.8}>
            <div className="mt-8 space-y-4 text-[color:var(--muted-foreground)]">
              <p>
                Buying a home is one of life&rsquo;s most significant
                financial decisions. The right mortgage creates opportunities.
                The right guidance creates confidence.
              </p>
              <p>
                Mortgage Rockstar was built to help buyers make informed
                mortgage decisions through education, personalized strategy,
                and trusted relationships.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.95}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Schedule Your Mortgage Strategy Session
              </Link>
              <Link to="/loan-programs" className="btn-ghost">
                Explore Your Financing Options
              </Link>
            </div>
          </Reveal>

          <Reveal delay={1.1}>
            <p className="mt-10 max-w-md border-l-2 border-[color:var(--orange)] pl-4 font-display text-lg italic text-[color:var(--ink)]">
              &ldquo;Talk to your lender before you fall in love with a house.
              Fall in love with the numbers first.&rdquo;
            </p>
          </Reveal>
        </div>

        <HeroCollage />
      </div>
    </section>
  );
}

function HeroCollage() {
  return (
    <div className="relative h-[560px] lg:h-[640px]">
      {/* Main photo — the house */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="photo-frame absolute right-0 top-4 h-[380px] w-[85%] rotate-[2deg] lg:h-[440px]"
      >
        <img
          src={homeAsset.url}
          alt="A warm modern craftsman family home at golden hour"
          className="h-full w-full object-cover"
          width={1600}
          height={1000}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--ink)]/25 via-transparent to-transparent" />
        <span className="tape left-6 -top-3 rotate-[-6deg]" aria-hidden />
      </motion.div>

      {/* Floating cash-to-close sheet */}
      <Float className="absolute left-0 top-32 z-10" duration={7}>
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -12 }}
          animate={{ opacity: 1, x: 0, rotate: -6 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="sheet w-[280px] p-5 sm:w-[300px]"
        >
          <div className="flex items-center justify-between">
            <span className="label-eyebrow">Cash to Close</span>
            <span className="number-tag">02 / 03</span>
          </div>
          <div className="mt-4 grid gap-3">
            {[
              ["Down payment", "w-16", "bg-[color:var(--blue)]"],
              ["Reserves", "w-10", "bg-[color:var(--blue)]/50"],
              ["Closing costs", "w-14", "bg-[color:var(--blue)]/70"],
              ["Contingency", "w-8", "bg-[color:var(--blue)]/40"],
            ].map(([label, w, c]) => (
              <div key={label} className="flex items-center justify-between border-b border-[color:var(--rule)] pb-2 last:border-0">
                <span className="text-xs text-[color:var(--muted-foreground)]">{label}</span>
                <div className={`h-1.5 ${w} ${c}`} />
              </div>
            ))}
          </div>
        </motion.div>
      </Float>

      {/* Front affordability sheet */}
      <Float className="absolute bottom-0 right-6 z-20" duration={9} delay={0.4}>
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="sheet sheet-tab w-[300px] p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.3)] sm:w-[340px]"
        >
          <div className="mt-2 flex items-center justify-between">
            <span className="label-eyebrow">Affordability</span>
            <span className="stamp">Clarity</span>
          </div>
          <h3 className="mt-3 font-display text-xl font-black leading-tight text-[color:var(--ink)]">
            Fall in love with the numbers first.
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              "Understand realistic monthly comfort",
              "Review responsible cash reserves",
              "Map long-term financial goals",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-3 bg-[color:var(--blue)]" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center justify-between border-t border-[color:var(--rule)] pt-3">
            <span className="number-tag">Prepared by Matt Arana</span>
            <span className="number-tag">01 / 03</span>
          </div>
        </motion.div>
      </Float>

      {/* Circled orange scribble accent */}
      <motion.svg
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.9 }}
        transition={{ duration: 1.4, delay: 1.4 }}
        aria-hidden
        viewBox="0 0 120 60"
        className="absolute -top-4 right-16 h-14 w-28 text-[color:var(--orange)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <motion.path d="M8 42 C 20 8, 100 6, 112 34" />
        <motion.path d="M104 26 L 112 34 L 100 40" />
      </motion.svg>
    </div>
  );
}

/* -------------------------------------------------------------------- */
/*  Ticker Band — animated marquee reinforcing signature language        */
/* -------------------------------------------------------------------- */

function TickerBand() {
  const phrases = [
    "Education first",
    "Strategy follows",
    "The loan is the solution",
    "I\u2019m a resource, not a source",
    "Fall in love with the numbers first",
    "Rockstar-level follow-through",
  ];
  return (
    <div className="relative border-y border-[color:var(--rule)] bg-[color:var(--ink)] py-5 text-[color:var(--paper)]">
      <Marquee speed={38}>
        {phrases.map((p, i) => (
          <span key={i} className="flex items-center gap-6 font-display text-2xl font-black uppercase tracking-tight sm:text-3xl">
            {p}
            <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-[color:var(--orange)]" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}

/* -------------------------------------------------------------------- */
/*  A Different Approach — steps + timeline animation                    */
/* -------------------------------------------------------------------- */

function ADifferentApproach() {
  return (
    <Section
      align="left"
      eyebrow="A different approach"
      heading={
        <>
          A different approach to{" "}
          <span className="marker-underline">home financing</span>.
        </>
      }
      intro={
        <>
          <p>
            <strong>
              Mortgage Rockstar was founded by Matt Arana with a simple
              belief:
            </strong>
          </p>
          <p>
            Buying a home deserves more than loan quotes and interest
            rates. It deserves trusted guidance, thoughtful planning, and a
            relationship built around your long-term financial success.
          </p>
          <p>
            Too often, buyers begin shopping for loan programs before
            understanding which financing strategy best supports their
            future.
          </p>
        </>
      }
    >
      <div className="relative">
        <div aria-hidden className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--rule)] to-transparent lg:block" />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.15}>
          {[
            { label: "Step 01", title: "Education comes first." },
            { label: "Step 02", title: "Strategy follows." },
            { label: "Step 03", title: "The loan simply becomes the solution." },
          ].map((s, i) => (
            <StaggerItem key={s.title} variants={staggerItemVariants} className="relative">
              <div aria-hidden className="absolute -top-2 left-6 z-10 hidden h-4 w-4 rounded-full border-4 border-[color:var(--paper)] bg-[color:var(--orange)] lg:block" />
              <motion.div
                whileHover={{ y: -6, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <Sheet label={s.label} index={`0${i + 1} / 03`}>
                  <h3 className="font-display text-2xl font-black leading-tight">
                    {s.title}
                  </h3>
                  <div className="mt-6 space-y-1.5">
                    <div className="h-1 w-2/3 bg-[color:var(--rule)]" />
                    <div className="h-1 w-5/6 bg-[color:var(--rule)]" />
                    <div className="h-1 w-1/2 bg-[color:var(--rule)]" />
                  </div>
                </Sheet>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
        <Reveal className="space-y-4 text-lg text-[color:var(--muted-foreground)]">
          <p>
            Rather than focusing solely on rates and products, we help
            individuals and families understand their options, prepare with
            confidence, and build a financing strategy aligned with their
            personal goals.
          </p>
          <p>
            Whether you&rsquo;re purchasing your first home, upgrading,
            relocating, or expanding your investment portfolio, our
            commitment remains the same:
          </p>
          <p className="font-display text-2xl font-bold text-[color:var(--ink)]">
            Educate first. Guide with integrity. Build lasting relationships.
          </p>
          <Link to="/about" className="btn-primary mt-4 inline-flex">
            Meet Matt &amp; Learn Our Story
          </Link>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="photo-frame relative aspect-[4/5] w-full max-w-[420px] rotate-[1.5deg] lg:ml-auto">
            <img
              src={meetingImg}
              alt="A mortgage advisor guiding a couple through their financing options"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <span className="tape -top-3 left-10 rotate-[-4deg]" aria-hidden />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------- */
/*  Portrait Band — Matt photo + editorial pull                          */
/* -------------------------------------------------------------------- */

function PortraitBand() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--paper-2)] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-[1fr_1.1fr] lg:px-8">
        <div className="relative">
          <Parallax amount={30}>
            <div className="photo-frame relative aspect-[4/5] w-full max-w-[440px] -rotate-[1.5deg]">
              <img
                src={mattAsset.url}
                alt="Matt Arana, founder of Mortgage Rockstar"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1200}
                height={1400}
              />
              <span className="tape -top-3 left-10 rotate-[-4deg]" aria-hidden />
            </div>
          </Parallax>

          {/* Overlay caption card */}
          <Reveal delay={0.2}>
            <div className="sheet absolute -bottom-6 right-0 w-[220px] rotate-[3deg] p-4 sm:right-6">
              <span className="label-eyebrow">Founder</span>
              <p className="mt-1 font-display text-lg font-black leading-tight">
                Matt Arana
              </p>
              <p className="mt-1 text-xs text-[color:var(--muted-foreground)]">
                Mortgage Rockstar
              </p>
            </div>
          </Reveal>

          {/* Big background numeral */}
          <span
            aria-hidden
            className="pointer-events-none absolute -left-6 -top-16 -z-10 font-display text-[8rem] font-black leading-none text-[color:var(--blue-soft)] sm:text-[11rem]"
          >
            01
          </span>
        </div>

        <div>
          <Reveal>
            <p className="label-eyebrow">Meet your advisor</p>
            <h2 className="mt-3 font-display text-4xl font-black leading-[1.02] sm:text-5xl lg:text-6xl">
              <span className="marker-underline">Real conversations.</span>{" "}
              Real judgment. Real follow-through.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-lg text-[color:var(--muted-foreground)]">
              You&rsquo;re not caller number 39. You never should have been.
              Matt turns over every stone until he finds a responsible path
              forward &mdash; or gives a clear and honest answer about why
              it does not work and what to do next.
            </p>
          </Reveal>

          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2" gap={0.1}>
            {[
              { k: "Human", v: "strategy" },
              { k: "Clear", v: "numbers" },
              { k: "Complex", v: "files welcomed" },
              { k: "Rockstar", v: "follow-through" },
            ].map((f) => (
              <StaggerItem
                key={f.k}
                variants={staggerItemVariants}
                className="rule-hair flex items-baseline gap-3 py-3"
              >
                <span className="font-display text-3xl font-black text-[color:var(--ink)]">
                  {f.k}
                </span>
                <span className="text-sm text-[color:var(--muted-foreground)]">
                  {f.v}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.35}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="btn-primary">
                Meet Matt &amp; Learn Our Story
              </Link>
              <Link to="/contact" className="btn-ghost">
                Schedule Your Strategy Session
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------- */
/*  Begin with Knowledge — photo-driven                                  */
/* -------------------------------------------------------------------- */

function BeginWithKnowledge() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--ink)] py-24 text-[color:var(--paper)] lg:py-32">
      <div aria-hidden className="absolute inset-0 opacity-[0.05] dossier-grid" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[1fr_1.15fr] md:items-center lg:px-8">
        <Reveal>
          <p className="label-eyebrow text-[color:var(--orange)]">
            Begin your journey with knowledge
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            The most confident buyers are informed buyers.
          </h2>
          <div className="mt-6 space-y-4 text-white/80">
            <p>
              Our Education Center provides practical articles,
              professional guides, and easy-to-understand videos that
              simplify the mortgage process and help you make confident
              financial decisions before you begin shopping for a home.
            </p>
            <p>
              Whether you&rsquo;re planning today or preparing for the
              future, we&rsquo;re here to help you every step of the way.
            </p>
          </div>
          <Link to="/education" className="btn-primary mt-8">
            Visit the Education Center
          </Link>
        </Reveal>

        <div className="relative h-[480px]">
          <Reveal delay={0.15}>
            <div className="photo-frame absolute right-0 top-0 h-[360px] w-[86%] rotate-[2deg]">
              <img
                src={coupleAsset.url}
                alt="A young couple reviews their mortgage options together"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1400}
                height={1000}
              />
            </div>
          </Reveal>

          <Float className="absolute bottom-0 left-0 z-10" duration={8}>
            <div className="sheet w-[260px] -rotate-[3deg] p-5 text-[color:var(--ink)] sm:w-[300px]">
              <span className="label-eyebrow">Guide</span>
              <p className="mt-2 font-display text-lg font-black">
                Mortgage Preparation Checklist
              </p>
              <div className="mt-4 space-y-2 text-sm">
                {["Credit review", "Reserves", "Document intake", "Goal check"].map(
                  (l, i) => (
                    <motion.div
                      key={l}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <span aria-hidden className="inline-block h-3 w-3 border border-[color:var(--ink)]" />
                      {l}
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </Float>

          <Float className="absolute -bottom-4 right-6 z-20" duration={10} delay={0.6}>
            <div className="sheet w-[220px] rotate-[4deg] bg-[color:var(--blue-soft)] p-4 text-[color:var(--ink)]">
              <span className="label-eyebrow">Article</span>
              <p className="mt-2 font-display text-base font-black leading-tight">
                Before You Click Zillow
              </p>
            </div>
          </Float>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------- */
/*  Brand pillars                                                        */
/* -------------------------------------------------------------------- */

const pillars = [
  {
    title: "Numbers Before Shopping",
    body:
      "Understand affordability and strategy before falling in love with a property. Talk to your lender before you fall in love with a house. Fall in love with the numbers first.",
  },
  {
    title: "Human Strategy, Not Call-Center Processing",
    body:
      "Real conversations. Real judgment. Real follow-through. You\u2019re not caller number 39. You never should have been.",
  },
  {
    title: "Complex Files, Clear Paths",
    body:
      "Complex income situations, unconventional scenarios, and files that require deeper review are where Matt earns his reputation. He turns over every stone until he finds a responsible path forward or gives a clear and honest answer about why it does not work and what to do next.",
  },
  {
    title: "Rockstar Level Follow-Through",
    body:
      "Consistent communication, preparation, responsiveness, and accountability. When Matt does not know something, his answer is simple: \u201CI\u2019ll get back to you.\u201D And then he does, with the right answer, not the fastest one.",
  },
];

function BrandPillars() {
  const [active, setActive] = useState(0);
  return (
    <Section
      align="left"
      eyebrow="Why Mortgage Rockstar"
      heading="More Than Mortgage Financing"
      intro={
        <p>
          Working with Mortgage Rockstar means gaining a trusted advisor
          who helps you make confident financial decisions before, during,
          and long after closing.
        </p>
      }
    >
      <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
        <div
          role="tablist"
          aria-label="Brand pillars"
          className="flex flex-col overflow-hidden rounded-md border border-[color:var(--rule)] bg-white"
        >
          {pillars.map((p, i) => {
            const selected = i === active;
            return (
              <button
                key={p.title}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(i)}
                className={`group relative flex items-start gap-4 border-b border-[color:var(--rule)] px-5 py-4 text-left transition-colors last:border-b-0 focus-visible:outline-2 focus-visible:outline-[color:var(--blue)] ${
                  selected
                    ? "bg-[color:var(--paper-2)]"
                    : "hover:bg-[color:var(--paper-2)]/60"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="pillar-marker"
                    className="absolute left-0 top-0 h-full w-1 bg-[color:var(--orange)]"
                  />
                )}
                <span
                  className={`number-tag pt-1 ${selected ? "text-[color:var(--orange)]" : ""}`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`font-display text-lg font-bold leading-tight ${
                    selected
                      ? "text-[color:var(--ink)]"
                      : "text-[color:var(--ink)]/70"
                  }`}
                >
                  {p.title}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sheet p-8"
        >
          <p className="label-eyebrow">Pillar 0{active + 1}</p>
          <h3 className="mt-3 font-display text-3xl font-black leading-tight">
            {pillars[active].title}
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-[color:var(--muted-foreground)]">
            {pillars[active].body}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="h-1 w-16 bg-[color:var(--orange)]" />
            <span className="number-tag">
              {active + 1} of {pillars.length}
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------- */
/*  Loan explorer                                                       */
/* -------------------------------------------------------------------- */

function LoanExplorer() {
  return (
    <Section
      tone="paper-2"
      align="center"
      eyebrow="Need a loan?"
      heading="Financing Solutions Built Around Your Goals"
      intro={
        <>
          <p>Every borrower has a unique story.</p>
          <p>
            Rather than simply presenting loan products, Mortgage Rockstar
            helps determine which financing strategy aligns with your
            financial goals, lifestyle, and future plans.
          </p>
          <p>Explore financing solutions designed around your needs.</p>
        </>
      }
    >
      <Reveal>
        <LoanSelector />
      </Reveal>
      <div className="mt-10 flex justify-center">
        <Link to="/loan-programs" className="btn-primary">
          Find the Right Loan Program
        </Link>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------- */
/*  Education preview — asymmetric with still life                       */
/* -------------------------------------------------------------------- */

function EducationPreview() {
  const kinds = [
    {
      label: "Written Resources",
      body: "Articles that explain what to prepare, what to expect, and what to avoid.",
    },
    {
      label: "Video Learning Library",
      body: "Short, clear videos that walk through mortgage decisions in plain language.",
    },
    {
      label: "Free Downloadable Guides",
      body: "Printable checklists and playbooks to organize your file before you begin.",
    },
  ];
  return (
    <section className="relative bg-[color:var(--paper)]">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div>
            <Reveal>
              <p className="label-eyebrow">Education Center</p>
              <h2 className="mt-3 font-display text-4xl font-black leading-[1.02] sm:text-5xl lg:text-6xl">
                Learn <span className="marker-underline">before</span> you buy.
              </h2>
              <div className="mt-6 space-y-4 text-lg text-[color:var(--muted-foreground)]">
                <p>Knowledge creates confidence.</p>
                <p>
                  Mortgage Rockstar&rsquo;s Education Center provides trusted
                  resources designed to help buyers understand every stage of
                  the mortgage journey.
                </p>
              </div>
            </Reveal>

            <Stagger className="mt-10 divide-y divide-[color:var(--rule)] border-y border-[color:var(--rule)]" gap={0.1}>
              {kinds.map((k, i) => (
                <StaggerItem
                  key={k.label}
                  variants={staggerItemVariants}
                >
                  <Link
                    to="/education"
                    className="group flex items-start justify-between gap-6 py-5 transition-colors hover:bg-[color:var(--paper-2)]"
                  >
                    <div className="flex items-start gap-5">
                      <span className="number-tag pt-1">0{i + 1}</span>
                      <div>
                        <p className="font-display text-xl font-black leading-tight text-[color:var(--ink)]">
                          {k.label}
                        </p>
                        <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
                          {k.body}
                        </p>
                      </div>
                    </div>
                    <span
                      aria-hidden
                      className="mt-1 inline-block text-2xl text-[color:var(--blue)] transition-transform group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/education" className="btn-primary">
                Browse Educational Resources
              </Link>
              <Link to="/education" className="btn-ghost">
                Watch Mortgage Videos
              </Link>
            </div>
          </div>

          <Parallax amount={40} className="hidden lg:block">
            <div className="photo-frame aspect-[5/6] rotate-[2deg]">
              <img
                src={deskAsset.url}
                alt="Neatly organized mortgage documents, keys, and coffee"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1400}
                height={1000}
              />
              <span className="tape -top-3 right-8 rotate-[6deg]" aria-hidden />
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------- */
/*  Success preview                                                     */
/* -------------------------------------------------------------------- */

function SuccessPreview() {
  return (
    <Section
      tone="paper-2"
      align="center"
      eyebrow="Success Stories"
      heading="Real People. Real Goals. Real Results."
      intro={
        <>
          <p>Every home purchase tells a unique story.</p>
          <p>
            Mortgage Rockstar has helped families, professionals, veterans,
            investors, and first-time buyers move forward with confidence
            through education and personalized guidance.
          </p>
          <p>
            Their experiences reflect what happens when strategy comes
            before financing.
          </p>
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { img: familyImg, kicker: "First keys", title: "A family finds home.", rotate: "-rotate-[1.5deg]" },
          { img: porchImg, kicker: "Move-in day", title: "The moment it becomes real.", rotate: "rotate-[1deg]" },
          { img: meetingImg, kicker: "Real conversation", title: "Guided, not sold.", rotate: "-rotate-[0.5deg]" },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <motion.figure
              whileHover={{ y: -8, rotate: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`photo-frame group relative aspect-[4/5] ${c.rotate}`}
            >
              <img
                src={c.img}
                alt={c.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)] via-[color:var(--ink)]/40 to-transparent opacity-90" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-[color:var(--paper)]">
                <span className="label-eyebrow !text-[color:var(--orange)]">{c.kicker}</span>
                <p className="mt-2 font-display text-2xl font-black leading-tight">{c.title}</p>
              </figcaption>
              <span className="tape -top-3 left-8 rotate-[-4deg]" aria-hidden />
            </motion.figure>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <div className="mt-12 mx-auto max-w-2xl text-center">
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/success-stories" className="btn-primary">
              Read Client Success Stories
            </Link>
            <Link to="/contact" className="btn-ghost">
              Schedule Your Success Story
            </Link>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}


/* -------------------------------------------------------------------- */
/*  Numbers Monument — parallax stats with photo background              */
/* -------------------------------------------------------------------- */

function NumbersMonument() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yPhoto = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);
  const yNum = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  const stats = [
    { n: "01", k: "Advisor, not a call center", v: "You get Matt, not queue position 39." },
    { n: "02", k: "Steps before shopping", v: "Education. Strategy. Then the loan." },
    { n: "03", k: "Rules we live by", v: "Educate. Guide with integrity. Follow through." },
  ];
  return (
    <section ref={ref} className="relative overflow-hidden bg-[color:var(--ink)] py-28 text-[color:var(--paper)] lg:py-36">
      <motion.div style={{ y: yPhoto }} aria-hidden className="pointer-events-none absolute inset-0">
        <img src={neighborhoodImg} alt="" className="h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--ink)] via-[color:var(--ink)]/70 to-[color:var(--ink)]" />
      </motion.div>

      <motion.span
        aria-hidden
        style={{ y: yNum }}
        className="pointer-events-none absolute -right-8 top-10 font-display text-[22rem] font-black leading-none text-white/[0.04] sm:text-[30rem]"
      >
        03
      </motion.span>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="label-eyebrow !text-[color:var(--orange)]">The Mortgage Rockstar Standard</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-[1.02] sm:text-5xl lg:text-6xl">
            A different way to arrive at yes.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-10 md:grid-cols-3" gap={0.12}>
          {stats.map((s) => (
            <StaggerItem key={s.n} variants={staggerItemVariants} className="relative border-t border-white/20 pt-6">
              <span className="font-display text-6xl font-black text-[color:var(--orange)]">{s.n}</span>
              <p className="mt-3 font-display text-xl font-bold leading-tight">{s.k}</p>
              <p className="mt-2 text-white/70">{s.v}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

