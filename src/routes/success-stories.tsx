import { createFileRoute, Link } from "@tanstack/react-router";
import { CTABand, PageHero, PullQuote, Section, Sheet } from "@/components/dossier";
import { successStories, testimonials } from "@/config/site";
import familyImg from "@/assets/family.jpg";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Client Success Stories | Mortgage Rockstar\u2122" },
      {
        name: "description",
        content:
          "Real people, real goals, real results. Every home purchase tells a unique story. Strategy comes before financing.",
      },
      { property: "og:title", content: "Client Success Stories" },
      {
        property: "og:description",
        content: "What happens when strategy comes before financing.",
      },
      { property: "og:url", content: "/success-stories" },
    ],
    links: [{ rel: "canonical", href: "/success-stories" }],
  }),
  component: SuccessStoriesPage,
});

function SuccessStoriesPage() {
  const approved = successStories.filter(
    (s) => s.approved && s.complianceReviewed && s.permissionConfirmed,
  );
  const approvedTestimonials = testimonials.filter(
    (t) => t.approved && t.complianceReviewed && t.permissionConfirmed,
  );

  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title={
          <>
            Real People. Real Goals. <span className="marker-underline">Real Results.</span>
          </>
        }
        intro={
          <>
            <p>Every home purchase tells a unique story.</p>
            <p>
              Mortgage Rockstar has helped families, professionals, veterans, investors, and
              first-time buyers move forward with confidence through education and personalized
              guidance.
            </p>
            <p>Their experiences reflect what happens when strategy comes before financing.</p>
          </>
        }
        image={familyImg}
        imageAlt="Family celebrating homeownership"
        stamp="Closed"
        fileLabel="Case Log"
        fileTitle="Selected outcomes"
        fileBullets={["First-time buyers", "Move-up families", "Veterans & VA", "Investor / DSCR"]}
      />

      {approved.length > 0 ? (
        <Section eyebrow="Case files" heading="Selected stories.">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {approved.map((s) => (
              <Sheet key={s.title} label="Case File">
                <h3 className="font-display text-2xl font-black">{s.title}</h3>
                <p className="mt-3 text-[color:var(--muted-foreground)]">{s.approvedNarrative}</p>
                {s.approvedQuote ? (
                  <blockquote className="mt-5 border-l-2 border-[color:var(--orange)] pl-4 italic">
                    &ldquo;{s.approvedQuote}&rdquo;
                  </blockquote>
                ) : null}
              </Sheet>
            ))}
          </div>
        </Section>
      ) : (
        <Section>
          <div className="mx-auto max-w-2xl text-center">
            <PullQuote>Fast isn&rsquo;t the goal. Getting it right is.</PullQuote>
            <p className="mt-8 text-[color:var(--muted-foreground)]">
              Approved client stories will appear here as they complete written permission and
              compliance review.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary">
                Schedule Your Success Story
              </Link>
              <Link to="/loan-programs" className="btn-ghost">
                Explore Loan Programs
              </Link>
            </div>
          </div>
        </Section>
      )}

      {approvedTestimonials.length > 0 && (
        <Section tone="paper-2" eyebrow="In their words" heading="Testimonials.">
          <div className="grid gap-5 md:grid-cols-2">
            {approvedTestimonials.map((t, i) => (
              <Sheet key={i}>
                <p className="text-lg italic text-[color:var(--ink)]">&ldquo;{t.quote}&rdquo;</p>
                {t.attribution ? (
                  <p className="mt-3 text-sm font-semibold text-[color:var(--muted-foreground)]">
                    &mdash; {t.attribution}
                  </p>
                ) : null}
              </Sheet>
            ))}
          </div>
        </Section>
      )}

      <CTABand
        eyebrow="Your's next"
        heading="Let's build your story."
        primary="Schedule Your Mortgage Strategy Session"
        primaryTo="/contact"
      />
    </>
  );
}
