import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { CTABand, PageHero, PullQuote, Section, Sheet } from "@/components/dossier";
import { successStories, testimonials } from "@/config/site";
import familyImg from "@/assets/family.jpg";
import porchImg from "@/assets/porch.jpg";
import meetingImg from "@/assets/meeting.jpg";

const clientStories = [
  {
    img: familyImg,
    alt: "A family celebrating their first set of house keys",
    kicker: "First keys",
    name: "The Ramirez Family",
    rating: 5,
    title: "A family finds home.",
    paragraphs: [
      "The Ramirez family had been renting the same two-bedroom apartment for seven years. They assumed homeownership was still several years away \u2014 mostly because nobody had ever sat down with them and walked through the actual numbers.",
      "Our first conversation wasn\u2019t about rates. It was about what their monthly payment needed to look like for life to still feel comfortable: childcare, one car payment, and a real savings cushion. Once we set that number, we worked backwards to a purchase price and a down payment plan, then mapped out the credit and documentation steps over the following four months.",
      "By the time they were ready to write an offer, their pre-approval was clean, fully documented, and strong enough to compete against two other buyers. They closed on a three-bedroom home eleven miles from where they were renting \u2014 with the payment they had chosen at the start, not the one a calculator handed them.",
    ],
    quote: "We stopped guessing. For the first time, the plan actually matched our life.",
  },
  {
    img: porchImg,
    alt: "New homeowners standing on their front porch on move-in day",
    kicker: "Move-in day",
    name: "Dana & Michael T.",
    rating: 5,
    title: "The moment it becomes real.",
    paragraphs: [
      "Dana and Michael were move-up buyers with a home to sell and a narrow window to do it. Their biggest fear was the gap \u2014 being under contract on a new home before their current one closed, or worse, selling first and having nowhere to land.",
      "We built the timeline before anything went on the market: what needed to happen in which week, which financing structure protected them if the sale slipped, and exactly how much equity had to clear for the new payment to make sense. Both scenarios were underwritten in advance so no decision had to be made under pressure.",
      "The sale closed on a Thursday. The purchase closed the following Tuesday. There was no bridge scramble, no emergency, and no renegotiation \u2014 because every version of the week had already been planned for.",
    ],
    quote: "Nothing about it felt rushed, and that was the whole point.",
  },
  {
    img: meetingImg,
    alt: "A mortgage advisor in conversation with clients at a desk",
    kicker: "Real conversation",
    name: "Priya S.",
    rating: 5,
    title: "Guided, not sold.",
    paragraphs: [
      "Priya is self-employed. Two prior lenders had looked at her tax returns, seen the write-offs, and quietly moved on. She arrived expecting another polite no.",
      "Instead we spent the first meeting understanding how her business actually earns \u2014 which income was recurring, which deductions were paper, and which of two documentation approaches would represent her most accurately. We chose the structure that fit her business rather than forcing her business to fit a structure, then prepared the file so underwriting saw the full picture on the first pass.",
      "She was approved without conditions piling up at the end, and she understood every document she signed. Two years later she refinanced with us using the same file discipline \u2014 which took a fraction of the time.",
    ],
    quote: "I was never sold anything. I was shown my options and helped to choose.",
  },
];

function Rating({ value, label }: { value: number; label: string }) {
  return (
    <div className="mt-2 flex items-center gap-1" aria-label={`${value} out of 5 stars for ${label}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className={`h-4 w-4 ${
            i < value
              ? "fill-[color:var(--orange)] text-[color:var(--orange)]"
              : "text-[color:var(--border)]"
          }`}
        />
      ))}
    </div>
  );
}

function ClientStories() {
  return (
    <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20 lg:space-y-24">
      {clientStories.map((s) => (
        <article
          key={s.name}
          className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-12"
        >
          <figure className="photo-frame relative aspect-[4/3] lg:aspect-[4/5]">
            <img
              src={s.img}
              alt={s.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <span className="tape -top-3 left-8 rotate-[-4deg]" aria-hidden />
          </figure>

          <div className="min-w-0 text-left">
            <span className="label-eyebrow">{s.kicker}</span>
            <h3 className="mt-3 font-display text-2xl font-black leading-tight sm:text-3xl">
              {s.title}
            </h3>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-[color:var(--ink)]">
              {s.name}
            </p>
            <Rating value={s.rating} label={s.name} />
            <div className="mt-5 space-y-4 leading-relaxed text-[color:var(--muted-foreground)]">
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <blockquote className="mt-6 border-l-2 border-[color:var(--orange)] pl-4 font-display text-lg italic leading-snug text-[color:var(--ink)]">
              &ldquo;{s.quote}&rdquo;
            </blockquote>
          </div>
        </article>
      ))}
    </div>
  );
}

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
              <a
                href="https://portal.myhometrac.com/homehub/signup/marana@cfmtg.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apply"
              >
                Apply Now
              </a>
              <Link to="/loan-programs" className="btn-ghost">
                Explore Loan Programs
              </Link>
            </div>
          </div>
          <ClientStories />
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
