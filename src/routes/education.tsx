import { createFileRoute, Link } from "@tanstack/react-router";
import { CTABand, PageHero, Section, Sheet } from "@/components/dossier";
import { resources } from "@/config/site";
import deskAsset from "@/assets/desk.jpg.asset.json";

const writtenCategories = [
  "First-Time Homebuying",
  "Credit Improvement",
  "Down Payment Strategies",
  "Interest Rates",
  "Mortgage Planning",
  "Investment Financing",
];

const contentThemes = [
  "Numbers Before Shopping",
  "Mortgage Myths",
  "Complex Borrower Clarity",
  "Before You Click Zillow",
  "Ask Matt",
  "Realtor Deal Protection",
  "After the Close",
  "Life-Transition Clarity",
  "Family-Assisted Homeownership",
];

const videoTopics = [
  "Mortgage Tips",
  "Buyer Education",
  "Market Updates",
  "Frequently Asked Questions",
  "Financing Strategies",
];

const guides = [
  "First-Time Homebuyer Guide",
  "Self-Employed Borrower Guide",
  "Investor Financing Guide",
  "Mortgage Preparation Checklist",
  "Home Buying Timeline",
];

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Mortgage Education Center | Mortgage Rockstar\u2122" },
      {
        name: "description",
        content:
          "Learn before you buy. Trusted articles, videos, and downloadable guides to help you understand every stage of the mortgage journey.",
      },
      { property: "og:title", content: "Mortgage Education Center" },
      {
        property: "og:description",
        content:
          "Knowledge creates confidence. Practical resources for confident mortgage decisions.",
      },
      { property: "og:url", content: "/education" },
    ],
    links: [{ rel: "canonical", href: "/education" }],
  }),
  component: EducationPage,
});

function EducationPage() {
  const approvedArticles = resources.filter(
    (r) => r.approved && r.resourceType === "article",
  );
  const approvedVideos = resources.filter(
    (r) => r.approved && r.resourceType === "video",
  );
  const approvedGuides = resources.filter(
    (r) => r.approved && r.resourceType === "guide",
  );

  return (
    <>
      <PageHero
        eyebrow="Education Center"
        title={
          <>
            Learn Before You <span className="marker-underline">Buy</span>.
          </>
        }
        intro={
          <>
            <p>Knowledge creates confidence.</p>
            <p>
              Mortgage Rockstar&rsquo;s Education Center provides trusted
              resources designed to help buyers understand every stage of
              the mortgage journey.
            </p>
          </>
        }
        image={deskAsset.url}
        imageAlt="Study desk with mortgage planning notes"
        stamp="Study"
        fileLabel="Curriculum"
        fileTitle="What you'll learn"
        fileBullets={[
          "Numbers before shopping",
          "Credit and down payment strategy",
          "Investment financing",
          "Life transitions",
        ]}
      />


      <Section
        eyebrow="Written resources"
        heading="Articles organized by topic."
        intro={
          <p>
            An indexed strategy binder of approved topics. New articles
            publish as they are written and reviewed.
          </p>
        }
      >
        <div className="flex flex-wrap gap-2">
          {writtenCategories.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--rule)] bg-white px-3 py-1.5 text-sm font-medium"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--blue)]" />
              {c}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <p className="label-eyebrow">Additional themes</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {contentThemes.map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded border border-[color:var(--rule)] bg-[color:var(--paper-2)] px-3 py-1.5 text-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {approvedArticles.length > 0 ? (
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {approvedArticles.map((a) => (
              <Sheet key={a.title} label={a.category}>
                <p className="font-display text-lg font-bold">{a.title}</p>
                {a.description ? (
                  <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
                    {a.description}
                  </p>
                ) : null}
              </Sheet>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-md border border-dashed border-[color:var(--rule)] bg-white p-8 text-center">
            <p className="label-eyebrow">In progress</p>
            <p className="mt-2 text-[color:var(--muted-foreground)]">
              Articles are being prepared. New pieces publish as they
              complete compliance review.
            </p>
          </div>
        )}
      </Section>

      <Section
        tone="paper-2"
        eyebrow="Video learning library"
        heading="Short videos, clear answers."
      >
        <div className="flex flex-wrap gap-2">
          {videoTopics.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--rule)] bg-white px-3 py-1.5 text-sm font-medium"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--orange)]" />
              {t}
            </span>
          ))}
        </div>

        {approvedVideos.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {approvedVideos.map((v) => (
              <Sheet key={v.title} label={v.category}>
                <p className="font-display text-lg font-bold">{v.title}</p>
                {v.videoUrl ? (
                  <a
                    href={v.videoUrl}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[color:var(--blue)] hover:text-[color:var(--orange)]"
                  >
                    Watch <span aria-hidden>&rarr;</span>
                  </a>
                ) : null}
              </Sheet>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-md border border-dashed border-[color:var(--rule)] bg-white p-8 text-center">
            <p className="label-eyebrow">Coming soon</p>
            <p className="mt-2 text-[color:var(--muted-foreground)]">
              Video content publishes as approved recordings are ready.
            </p>
          </div>
        )}
      </Section>

      <Section
        eyebrow="Free downloadable guides"
        heading="Printable checklists and playbooks."
        intro={
          <p>
            Guides activate here as they are finalized. Approved guide
            names are listed below.
          </p>
        }
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {guides.map((g) => {
            const match = approvedGuides.find(
              (r) => r.title === g && r.fileUrl,
            );
            return (
              <li
                key={g}
                className="flex items-center justify-between rounded-md border border-[color:var(--rule)] bg-white px-4 py-3"
              >
                <span className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="h-4 w-4 border border-[color:var(--ink)]"
                  />
                  <span className="text-sm font-medium">{g}</span>
                </span>
                {match?.fileUrl ? (
                  <a
                    href={match.fileUrl}
                    className="text-sm font-bold text-[color:var(--blue)] hover:text-[color:var(--orange)]"
                    download
                  >
                    Download
                  </a>
                ) : (
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                    In review
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </Section>

      <CTABand
        eyebrow="Have a specific question?"
        heading="Talk with Matt."
        body={<p>Personal answers to the questions your file actually raises.</p>}
        primary="Contact Mortgage Rockstar"
        primaryTo="/contact"
        secondary="Browse Loan Programs"
        secondaryTo="/loan-programs"
      />
      {/* used var to keep import lint happy in edge cases */}
      <span className="sr-only">
        <Link to="/contact">Talk with Matt</Link>
      </span>
    </>
  );
}
