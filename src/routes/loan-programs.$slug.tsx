import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CTABand, Section, Sheet } from "@/components/dossier";
import {
  loanProgramBySlug,
  loanPrograms,
  type LoanProgram,
} from "@/config/loan-programs";

export const Route = createFileRoute("/loan-programs/$slug")({
  loader: ({ params }) => {
    const program = loanProgramBySlug(params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Loan program not found | Mortgage Rockstar\u2122" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { program } = loaderData;
    return {
      meta: [
        {
          title: `${program.heading} | Mortgage Rockstar\u2122`,
        },
        { name: "description", content: program.body.slice(0, 155) },
        { property: "og:title", content: `${program.heading} | Mortgage Rockstar\u2122` },
        { property: "og:description", content: program.body.slice(0, 155) },
        { property: "og:url", content: `/loan-programs/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [
        { rel: "canonical", href: `/loan-programs/${params.slug}` },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-32 text-center">
      <p className="label-eyebrow">404</p>
      <h1 className="mt-3 font-display text-[2rem] font-black leading-[1.05]">
        This program isn&rsquo;t in the folder.
      </h1>
      <p className="mt-4 text-[color:var(--muted-foreground)]">
        Return to the loan programs index to browse approved options.
      </p>
      <Link to="/loan-programs" className="btn-primary mt-8">
        Loan Programs
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="mx-auto max-w-3xl px-5 py-32 text-center">
      <h1 className="font-display text-[1.5rem] font-black leading-[1.05]">
        This program didn&rsquo;t load.
      </h1>
      <button className="btn-primary mt-6" onClick={reset}>
        Try again
      </button>
    </div>
  ),
  component: LoanProgramPage,
});

const COMPLEX_SLUG = "complex-household-financing";
const APPLY_NOW_URL = "https://portal.myhometrac.com/homehub/signup/marana@cfmtg.com";
const SINGLE_ROW_APPLY_SLUGS = [
  "first-time-homebuyer",
  "complex-household-financing",
  "refinance",
  "self-employed",
];

function LoanProgramPage() {
  const { program } = Route.useLoaderData();
  return (
    <>
      <section className="border-b border-[color:var(--rule)] bg-[color:var(--paper)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-28 lg:grid-cols-[1.2fr_1fr] lg:px-8 lg:pt-36">
          <div>
            <nav aria-label="Breadcrumb" className="mb-6 text-sm">
              <ol className="flex flex-wrap items-center gap-2 text-[color:var(--muted-foreground)]">
                <li>
                  <Link to="/" className="hover:text-[color:var(--ink)]">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    to="/loan-programs"
                    className="hover:text-[color:var(--ink)]"
                  >
                    Loan Programs
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-[color:var(--ink)]">{program.heading}</li>
              </ol>
            </nav>

            <p className="label-eyebrow">{program.heading}</p>
            <h1 className="mt-4 font-display text-[1.75rem] font-black leading-[1.05] tracking-tight sm:text-[2.25rem] lg:text-[2.75rem]">
              {program.title}
            </h1>
            <div className="mt-6 space-y-4 text-lg text-[color:var(--muted-foreground)]">
              <p>{program.body}</p>
              {program.extra ? <p>{program.extra}</p> : null}
            </div>

            {SINGLE_ROW_APPLY_SLUGS.includes(program.slug) ? (
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex flex-wrap gap-3">
                  <a
                    href={APPLY_NOW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-apply"
                  >
                    Apply Now
                  </a>
                </div>
                <div className="flex flex-wrap gap-3">
                  {program.primaryCTA ? (
                    <Link to="/contact" className="btn-ghost">
                      {program.primaryCTA}
                    </Link>
                  ) : null}
                  {program.secondaryCTA ? (
                    <Link to="/contact" className="btn-ghost">
                      {program.secondaryCTA}
                    </Link>
                  ) : null}
                </div>
              </div>
            ) : (
              <div className="mt-8 flex flex-wrap gap-3">
                {program.primaryCTA ? (
                  <Link to="/contact" className="btn-primary">
                    {program.primaryCTA}
                  </Link>
                ) : null}
                <a
                  href={APPLY_NOW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-apply"
                >
                  Apply Now
                </a>
                {program.secondaryCTA ? (
                  <Link to="/contact" className="btn-ghost">
                    {program.secondaryCTA}
                  </Link>
                ) : null}
              </div>
            )}
          </div>

          <ProgramDossier program={program} />
        </div>
      </section>

      {program.slug === COMPLEX_SLUG ? <ComplexUmbrella /> : null}

      <RelatedPrograms currentSlug={program.slug} />

      <CTABand
        eyebrow="Prefer a conversation?"
        heading="Every strategy begins with understanding your goals."
        primary="Schedule Your Mortgage Strategy Session"
        primaryTo="/contact"
        secondary="Return to Loan Programs"
        secondaryTo="/loan-programs"
      />
    </>
  );
}

function ProgramDossier({ program }: { program: LoanProgram }) {
  return (
    <div className="relative min-h-[420px]">
      <div className="sheet absolute right-0 top-6 h-[300px] w-[280px] rotate-[4deg] bg-[color:var(--paper-2)] p-5 sm:w-[320px]">
        <span className="label-eyebrow">{program.documentLabel}</span>
        <p className="mt-3 font-display text-lg font-bold leading-tight">
          Options Reviewed
        </p>
        <div className="mt-4 space-y-2">
          <div className="h-1 w-3/4 bg-[color:var(--rule)]" />
          <div className="h-1 w-5/6 bg-[color:var(--rule)]" />
          <div className="h-1 w-2/3 bg-[color:var(--rule)]" />
          <div className="h-1 w-1/2 bg-[color:var(--rule)]" />
        </div>
      </div>
      <div className="sheet sheet-tab absolute bottom-0 left-0 h-[340px] w-[300px] -rotate-[2deg] bg-white p-6 sm:w-[360px]">
        <div className="mt-2 flex items-center justify-between">
          <span className="label-eyebrow">Strategy File</span>
          <span className="stamp">Clarity</span>
        </div>
        <h3 className="mt-4 font-display text-xl font-black leading-tight">
          {program.heading}
        </h3>
        {program.approvedBullets ? (
          <ul className="mt-4 space-y-2 text-sm">
            {program.approvedBullets.slice(0, 4).map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span
                  aria-hidden
                  className="mt-1 h-1.5 w-3 bg-[color:var(--blue)]"
                />
                {b}
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-6 space-y-2">
            <div className="h-1 w-3/4 bg-[color:var(--rule)]" />
            <div className="h-1 w-5/6 bg-[color:var(--rule)]" />
            <div className="h-1 w-1/2 bg-[color:var(--rule)]" />
          </div>
        )}
        <div className="mt-6 flex items-center justify-between border-t border-[color:var(--rule)] pt-3">
          <span className="number-tag">Prepared by Matt Arana</span>
          <span className="number-tag">01 / 01</span>
        </div>
      </div>
    </div>
  );
}

function ComplexUmbrella() {
  const items = loanPrograms.filter((p) =>
    [
      "self-employed",
      "refinance",
      "divorce-life-transitions",
      "family-assisted-purchase",
      "relocation",
    ].includes(p.slug),
  );
  return (
    <Section
      tone="paper-2"
      align="left"
      eyebrow="Choose the situation most relevant to you"
      heading="Explore related programs."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Link
            key={p.slug}
            to="/loan-programs/$slug"
            params={{ slug: p.slug }}
            className="group sheet block p-6 transition-transform hover:-translate-y-0.5"
          >
            <span className="label-eyebrow">{p.documentLabel}</span>
            <p className="mt-3 font-display text-xl font-black leading-tight">
              {p.heading}
            </p>
            <p className="mt-3 text-sm text-[color:var(--muted-foreground)] line-clamp-3">
              {p.body}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[color:var(--blue)] group-hover:text-[color:var(--orange)]">
              View program <span aria-hidden>&rarr;</span>
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function RelatedPrograms({ currentSlug }: { currentSlug: string }) {
  const related = loanPrograms.filter((p) => p.slug !== currentSlug).slice(0, 4);
  return (
    <Section
      align="center"
      eyebrow="Other programs"
      heading="Keep exploring the index."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {related.map((p) => (
          <Sheet key={p.slug} label={p.documentLabel}>
            <p className="font-display text-lg font-bold leading-tight">
              {p.heading}
            </p>
            <Link
              to="/loan-programs/$slug"
              params={{ slug: p.slug }}
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[color:var(--blue)] hover:text-[color:var(--orange)]"
            >
              View program <span aria-hidden>&rarr;</span>
            </Link>
          </Sheet>
        ))}
      </div>
    </Section>
  );
}
