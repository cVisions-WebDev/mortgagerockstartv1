import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { loanPrograms } from "@/config/loan-programs";

/**
 * Compact multi-choice loan selector (per M.R. UPDATES doc 3):
 * — Compact index of program labels
 * — Highlights active
 * — Expandable info panel (one at a time)
 * — Keyboard navigation via native buttons/links
 * — Accordion on mobile
 * — Never displays rates, figures, or estimated qualification results.
 */
export function LoanSelector() {
  const [activeSlug, setActiveSlug] = useState(loanPrograms[0].slug);
  const active = useMemo(
    () =>
      loanPrograms.find((p) => p.slug === activeSlug) ?? loanPrograms[0],
    [activeSlug],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(260px,320px)_1fr]">
      {/* Desktop compact index */}
      <div
        role="tablist"
        aria-label="Loan programs"
        className="hidden flex-col overflow-hidden rounded-md border border-[color:var(--rule)] bg-white lg:flex"
      >
        {loanPrograms.map((p, i) => {
          const selected = p.slug === activeSlug;
          return (
            <button
              key={p.slug}
              role="tab"
              aria-selected={selected}
              type="button"
              onClick={() => setActiveSlug(p.slug)}
              className={`group flex items-center justify-between border-b border-[color:var(--rule)] px-4 py-3 text-left transition-colors last:border-b-0 focus-visible:outline-2 focus-visible:outline-[color:var(--blue)] ${
                selected
                  ? "bg-[color:var(--ink)] text-white"
                  : "hover:bg-[color:var(--paper-2)]"
              }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`number-tag ${selected ? "text-white/60" : ""}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold">{p.heading}</span>
              </span>
              <span
                aria-hidden
                className={`h-2 w-2 rounded-full transition-colors ${
                  selected
                    ? "bg-[color:var(--orange)]"
                    : "bg-transparent group-hover:bg-[color:var(--orange)]"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Desktop panel */}
      <div
        role="tabpanel"
        aria-live="polite"
        className="hidden lg:block"
      >
        <div className="sheet p-8">
          <div className="flex items-center justify-between">
            <p className="label-eyebrow">{active.documentLabel}</p>
            <span className="stamp">Options Reviewed</span>
          </div>
          <h3 className="mt-4 text-3xl font-black tracking-tight">
            {active.title}
          </h3>
          <p className="mt-4 max-w-2xl text-[color:var(--muted-foreground)]">
            {active.body}
          </p>
          {active.approvedBullets && (
            <div className="mt-6">
              {active.bulletsLabel ? (
                <p className="label-eyebrow mb-3">{active.bulletsLabel}</p>
              ) : null}
              <ul className="grid grid-cols-2 gap-y-1.5 text-sm">
                {active.approvedBullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span
                      aria-hidden
                      className="h-1 w-3 bg-[color:var(--blue)]"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/loan-programs/$slug"
              params={{ slug: active.slug }}
              className="btn-primary"
            >
              View Full Program
            </Link>
            <Link to="/contact" className="btn-ghost">
              Talk With a Mortgage Advisor
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile accordion */}
      <div className="lg:hidden">
        <ul className="divide-y divide-[color:var(--rule)] overflow-hidden rounded-md border border-[color:var(--rule)] bg-white">
          {loanPrograms.map((p) => {
            const open = p.slug === activeSlug;
            return (
              <li key={p.slug}>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() =>
                    setActiveSlug(open ? "" : p.slug)
                  }
                  className="flex w-full items-center justify-between px-4 py-4 text-left"
                >
                  <span className="text-sm font-semibold">{p.heading}</span>
                  <span
                    aria-hidden
                    className={`text-lg font-black text-[color:var(--orange)] transition-transform ${open ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                {open && (
                  <div className="border-t border-[color:var(--rule)] bg-[color:var(--paper-2)] px-4 py-5">
                    <p className="text-sm text-[color:var(--muted-foreground)]">
                      {p.body}
                    </p>
                    <Link
                      to="/loan-programs/$slug"
                      params={{ slug: p.slug }}
                      className="btn-primary mt-4 w-full"
                    >
                      View Full Program
                    </Link>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
