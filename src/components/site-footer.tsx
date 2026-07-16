import { Link } from "@tanstack/react-router";
import { nav, site } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="bg-[color:var(--ink)] text-[color:var(--paper)]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-2xl font-black tracking-tight">
                {site.brandName}
              </span>
              <span className="font-mono text-xs font-bold text-[color:var(--orange)]">
                &trade;
              </span>
            </div>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--orange)]">
              {site.tagline}
            </p>
            <p className="mt-5 max-w-md text-sm text-white/70">
              Helping individuals and families make confident mortgage
              decisions through personalized advice, meaningful
              relationships, and financing strategies built around their
              goals.
            </p>
          </div>

          <div>
            <p className="label-eyebrow text-white/60">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/85 transition-colors hover:text-[color:var(--orange)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-eyebrow text-white/60">Get in Touch</p>
            <div className="mt-4 space-y-3 text-sm text-white/85">
              {site.approvedPhone ? (
                <p>{site.approvedPhone}</p>
              ) : null}
              {site.approvedEmail ? (
                <a
                  href={`mailto:${site.approvedEmail}`}
                  className="block hover:text-[color:var(--orange)]"
                >
                  {site.approvedEmail}
                </a>
              ) : null}
              {site.approvedOfficeAddress ? (
                <p className="whitespace-pre-line">
                  {site.approvedOfficeAddress}
                </p>
              ) : null}
              {site.approvedBusinessHours ? (
                <p className="whitespace-pre-line">
                  {site.approvedBusinessHours}
                </p>
              ) : null}
              <Link to="/contact" className="btn-invert mt-2">
                Contact Mortgage Rockstar
              </Link>
              {site.approvedSocialLinks.length > 0 && (
                <ul className="mt-4 flex gap-3">
                  {site.approvedSocialLinks.map((s) => (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        className="text-white/70 hover:text-[color:var(--orange)]"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <hr className="my-10 border-white/15" />

        {/* Mandatory legal block — verbatim, do not shorten */}
        <div className="space-y-4 text-xs leading-relaxed text-white/70">
          <p className="text-sm font-semibold text-white">
            {site.legalFooterShort}
          </p>
          <p>{site.legalFooterLong}</p>
        </div>
      </div>
    </footer>
  );
}
