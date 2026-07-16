import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Float, Reveal } from "@/components/motion";

/** A single dossier sheet (document card) used across the site. */
export function Sheet({
  label,
  index,
  tone = "paper",
  className = "",
  children,
  rotate = 0,
}: {
  label?: string;
  index?: string;
  tone?: "paper" | "ink" | "blue";
  className?: string;
  children?: ReactNode;
  rotate?: number;
}) {
  const reduce = useReducedMotion();
  const toneClasses =
    tone === "ink"
      ? "bg-[color:var(--ink)] text-[color:var(--paper)] border-black"
      : tone === "blue"
        ? "bg-[color:var(--blue-soft)] text-[color:var(--ink)] border-[color:var(--blue)]/30"
        : "bg-white text-[color:var(--ink)] border-[color:var(--rule)]";
  return (
    <motion.div
      className={`sheet ${toneClasses} p-6 lg:p-8 ${className}`}
      initial={reduce ? false : { opacity: 0, y: 22, rotate }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -6, rotate: rotate + 0.6, transition: { duration: 0.25 } }}
    >
      {(label || index) && (
        <div className="mb-4 flex items-center justify-between">
          {label ? (
            <span className="label-eyebrow">{label}</span>
          ) : (
            <span />
          )}
          {index ? <span className="number-tag">{index}</span> : null}
        </div>
      )}
      {children}
    </motion.div>
  );
}

/** Section shell for consistent editorial rhythm. */
export function Section({
  id,
  eyebrow,
  heading,
  intro,
  children,
  className = "",
  tone = "paper",
  align = "default",
}: {
  id?: string;
  eyebrow?: string;
  heading?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
  tone?: "paper" | "ink" | "paper-2";
  align?: "default" | "left" | "center";
}) {
  const bg =
    tone === "ink"
      ? "bg-[color:var(--ink)] text-[color:var(--paper)]"
      : tone === "paper-2"
        ? "bg-[color:var(--paper-2)]"
        : "bg-[color:var(--paper)]";
  const headerAlign =
    align === "center"
      ? "mx-auto text-center"
      : align === "left"
        ? "mr-auto"
        : "mx-auto";
  return (
    <section id={id} className={`relative ${bg} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        {(eyebrow || heading || intro) && (
          <Reveal as="div" className={`mb-12 max-w-3xl ${headerAlign}`}>
            {eyebrow ? (
              <p
                className={`label-eyebrow ${tone === "ink" ? "text-[color:var(--orange)]" : ""}`}
              >
                {eyebrow}
              </p>
            ) : null}
            {heading ? (
              <h2 className="mt-3 text-3xl leading-[1.05] sm:text-4xl lg:text-5xl">
                {heading}
              </h2>
            ) : null}
            {intro ? (
              <div
                className={`mt-5 space-y-4 text-base sm:text-lg ${
                  tone === "ink"
                    ? "text-white/80"
                    : "text-[color:var(--muted-foreground)]"
                }`}
              >
                {intro}
              </div>
            ) : null}
          </Reveal>
        )}
        <Reveal as="div" delay={0.08}>{children}</Reveal>
      </div>
    </section>
  );
}

/** Editorial pull-quote / signature-language line. */
export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-l-4 border-[color:var(--orange)] pl-4 font-display text-xl italic leading-snug text-[color:var(--ink)] sm:text-2xl">
      &ldquo;{children}&rdquo;
    </blockquote>
  );
}

/** Final page CTA "band" styled as an open dossier page. */
export function CTABand({
  eyebrow,
  heading,
  body,
  primary,
  primaryTo,
  secondary,
  secondaryTo,
}: {
  eyebrow?: string;
  heading: string;
  body?: ReactNode;
  primary: string;
  primaryTo: string;
  secondary?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="bg-[color:var(--paper-2)] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal as="div">
          <div className="sheet relative overflow-hidden p-8 sm:p-12 lg:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-8 right-10 hidden h-16 w-40 rounded-b-md bg-[color:var(--orange)] sm:block"
            />
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <div>
                {eyebrow ? (
                  <p className="label-eyebrow">{eyebrow}</p>
                ) : null}
                <h2 className="mt-3 text-3xl leading-[1.05] sm:text-4xl lg:text-5xl">
                  {heading}
                </h2>
                {body ? (
                  <div className="mt-5 max-w-2xl space-y-3 text-base text-[color:var(--muted-foreground)] sm:text-lg">
                    {body}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                <a href={primaryTo} className="btn-primary w-full sm:w-auto">
                  {primary}
                </a>
                {secondary && secondaryTo ? (
                  <a href={secondaryTo} className="btn-ghost w-full sm:w-auto">
                    {secondary}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Editorial hero for interior routes: animated left column + collage right. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  stamp = "On File",
  fileLabel = "Strategy File",
  fileTitle,
  breadcrumb,
  ctas,
  fileBullets,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  imageAlt: string;
  stamp?: string;
  fileLabel?: string;
  fileTitle: string;
  breadcrumb?: ReactNode;
  ctas?: ReactNode;
  fileBullets?: string[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--rule)] bg-[color:var(--paper)]">
      <div aria-hidden className="dossier-grid pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[color:var(--blue)]/8 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-28 lg:grid-cols-[1.15fr_1fr] lg:px-8 lg:pt-36">
        <Reveal as="div">
          {breadcrumb}
          <p className="label-eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-black leading-[1] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {intro ? (
            <div className="mt-6 max-w-2xl space-y-4 text-lg text-[color:var(--muted-foreground)]">
              {intro}
            </div>
          ) : null}
          {ctas ? <div className="mt-8 flex flex-wrap gap-3">{ctas}</div> : null}

          <div aria-hidden className="mt-10 hidden items-center gap-4 text-[color:var(--muted-foreground)] lg:flex">
            <span className="number-tag">FILE&nbsp;NO.&nbsp;{fileLabel.slice(0, 2).toUpperCase()}-08</span>
            <span className="h-px flex-1 bg-[color:var(--rule)]" />
            <span className="number-tag">Prepared by Matt Arana</span>
          </div>
        </Reveal>

        <Reveal as="div" delay={0.18}>
          <div className="relative mx-auto h-[440px] w-full max-w-[420px] lg:mx-0">
            <Float className="absolute -left-3 top-2 z-30" duration={7} distance={6}>
              <div className="stamp bg-[color:var(--paper)]">{stamp}</div>
            </Float>
            <span aria-hidden className="ring-mark bottom-8 right-2 h-24 w-24" />

            <div className="photo-frame absolute right-0 top-6 h-[260px] w-[300px] rotate-[3deg] sm:w-[340px]">
              <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
              <div className="tape left-1/2 top-[-10px] -translate-x-1/2 rotate-[-3deg]" />
            </div>

            <div className="sheet sheet-tab absolute bottom-0 left-0 w-[280px] -rotate-[3deg] bg-white p-6 sm:w-[320px]">
              <div className="mt-2 flex items-center justify-between">
                <span className="label-eyebrow">{fileLabel}</span>
                <span className="number-tag">01 / 01</span>
              </div>
              <p className="mt-3 font-display text-lg font-black leading-tight">
                {fileTitle}
              </p>
              {fileBullets && fileBullets.length > 0 ? (
                <ul className="mt-4 space-y-2 text-sm">
                  {fileBullets.slice(0, 4).map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span aria-hidden className="mt-1 h-1.5 w-3 shrink-0 bg-[color:var(--blue)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-4 space-y-2">
                  <div className="h-1 w-3/4 bg-[color:var(--rule)]" />
                  <div className="h-1 w-5/6 bg-[color:var(--rule)]" />
                  <div className="h-1 w-1/2 bg-[color:var(--rule)]" />
                </div>
              )}
              <div className="mt-6 flex items-center justify-between border-t border-[color:var(--rule)] pt-3">
                <span className="number-tag">Mortgage Rockstar</span>
                <span className="number-tag">v.1</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Small helper used by hero breadcrumb — kept here to co-locate. */
export function HeroBreadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-[color:var(--muted-foreground)]">
        {items.map((it, i) => (
          <li key={i} className={i === items.length - 1 ? "text-[color:var(--ink)]" : ""}>
            {it.to && i !== items.length - 1 ? (
              <a href={it.to} className="hover:text-[color:var(--ink)]">
                {it.label}
              </a>
            ) : (
              it.label
            )}
            {i < items.length - 1 ? <span aria-hidden className="ml-2">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
