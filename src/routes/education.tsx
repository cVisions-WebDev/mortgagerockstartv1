import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CTABand, PageHero, Section, Sheet } from "@/components/dossier";
import deskAsset from "@/assets/desk.jpg.asset.json";

const writtenCategories = [
  "First-Time Homebuying",
  "Credit Improvement",
  "Down Payment Strategies",
  "Interest Rates",
  "Mortgage Planning",
  "Investment Financing",
] as const;

const videoTopics = [
  "Mortgage Tips",
  "Buyer Education",
  "Market Updates",
  "Frequently Asked Questions",
  "Financing Strategies",
] as const;

const guideCategories = [
  "Buyer Checklists",
  "Timeline Playbooks",
  "Self-Employed",
  "Investor",
  "Preparation",
] as const;

type ArticleCategory = (typeof writtenCategories)[number];
type VideoCategory = (typeof videoTopics)[number];
type GuideCategory = (typeof guideCategories)[number];

const sampleArticles: {
  title: string;
  category: ArticleCategory;
  description: string;
  readTime: string;
}[] = [
  { title: "The First Steps Every First-Time Buyer Should Take", category: "First-Time Homebuying", description: "Before you tour a single home, get the three numbers that decide everything.", readTime: "6 min read" },
  { title: "What Lenders Actually See on Your Credit Report", category: "Credit Improvement", description: "The lines that move your rate — and the ones that don't.", readTime: "5 min read" },
  { title: "Raising a Score Without Playing Games", category: "Credit Improvement", description: "Simple, durable habits that improve credit without gimmicks.", readTime: "4 min read" },
  { title: "How Much Down Payment Is Actually Enough?", category: "Down Payment Strategies", description: "The tradeoffs between 3%, 10%, and 20% — with real math.", readTime: "7 min read" },
  { title: "Gift Funds, Grants, and Assistance Programs Explained", category: "Down Payment Strategies", description: "Where the money can come from without breaking the file.", readTime: "6 min read" },
  { title: "Why Rates Move (and Why Headlines Get It Wrong)", category: "Interest Rates", description: "The forces behind daily rate movement — in plain language.", readTime: "5 min read" },
  { title: "Locking Your Rate: When and Why", category: "Interest Rates", description: "A calm framework for the most stressful choice of the process.", readTime: "4 min read" },
  { title: "Planning a Mortgage Around Your Life, Not the Other Way", category: "Mortgage Planning", description: "Structure a loan around the next five years of your household.", readTime: "8 min read" },
  { title: "Refinance Math That Actually Makes Sense", category: "Mortgage Planning", description: "Break-even, opportunity cost, and when to leave it alone.", readTime: "6 min read" },
  { title: "Financing Your First Investment Property", category: "Investment Financing", description: "DSCR, conventional, and portfolio options compared honestly.", readTime: "7 min read" },
  { title: "Scaling a Small Rental Portfolio Without Overleveraging", category: "Investment Financing", description: "How disciplined investors grow without getting stuck.", readTime: "8 min read" },
  { title: "First-Time Buyer Timeline: 90 Days to Keys", category: "First-Time Homebuying", description: "A week-by-week map from pre-approval through closing.", readTime: "9 min read" },
];

const sampleVideos: {
  title: string;
  category: VideoCategory;
  duration: string;
}[] = [
  { title: "Three Mortgage Tips Buyers Wish They Heard First", category: "Mortgage Tips", duration: "3:42" },
  { title: "Reading a Loan Estimate Line by Line", category: "Mortgage Tips", duration: "6:18" },
  { title: "How to Prepare Before You Ever Tour a Home", category: "Buyer Education", duration: "4:55" },
  { title: "Pre-Qualification vs. Pre-Approval", category: "Buyer Education", duration: "3:10" },
  { title: "What Today's Market Actually Means for Buyers", category: "Market Updates", duration: "5:22" },
  { title: "Rate Movement This Quarter — In Plain English", category: "Market Updates", duration: "4:08" },
  { title: "The Ten Questions Buyers Ask Most", category: "Frequently Asked Questions", duration: "7:30" },
  { title: "PMI, Escrow, and Points Explained", category: "Frequently Asked Questions", duration: "5:45" },
  { title: "Buy Down or Bank the Cash? A Framework", category: "Financing Strategies", duration: "6:02" },
  { title: "Structuring an Offer Your Lender Can Actually Close", category: "Financing Strategies", duration: "4:36" },
];

const sampleGuides: {
  title: string;
  category: GuideCategory;
  pages: string;
}[] = [
  { title: "First-Time Homebuyer Guide", category: "Buyer Checklists", pages: "24 pages" },
  { title: "Home Buying Timeline", category: "Timeline Playbooks", pages: "12 pages" },
  { title: "Mortgage Preparation Checklist", category: "Preparation", pages: "8 pages" },
  { title: "Self-Employed Borrower Guide", category: "Self-Employed", pages: "18 pages" },
  { title: "Investor Financing Guide", category: "Investor", pages: "20 pages" },
  { title: "Document Prep Playbook", category: "Preparation", pages: "10 pages" },
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

function CategoryChip({
  label,
  active,
  onClick,
  dotColor,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  dotColor: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition ${
        active
          ? "border-[color:var(--ink)] bg-[color:var(--ink)] text-[color:var(--paper)]"
          : "border-[color:var(--rule)] bg-white text-[color:var(--ink)] hover:border-[color:var(--ink)]"
      }`}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: active ? "currentColor" : dotColor }}
      />
      {label}
    </button>
  );
}

function EducationPage() {
  const [articleCat, setArticleCat] = useState<ArticleCategory | "All">("All");
  const [videoCat, setVideoCat] = useState<VideoCategory | "All">("All");
  const [guideCat, setGuideCat] = useState<GuideCategory | "All">("All");

  const filteredArticles = useMemo(
    () => (articleCat === "All" ? sampleArticles : sampleArticles.filter((a) => a.category === articleCat)),
    [articleCat],
  );
  const filteredVideos = useMemo(
    () => (videoCat === "All" ? sampleVideos : sampleVideos.filter((v) => v.category === videoCat)),
    [videoCat],
  );
  const filteredGuides = useMemo(
    () => (guideCat === "All" ? sampleGuides : sampleGuides.filter((g) => g.category === guideCat)),
    [guideCat],
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
              Mortgage Rockstar&rsquo;s Education Center provides trusted resources designed to help
              buyers understand every stage of the mortgage journey.
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

      <section className="border-b border-[color:var(--rule)] bg-[color:var(--paper-2)]">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <p className="label-eyebrow text-center">Jump to a resource</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a href="#articles" className="btn-primary">
              Read Articles
            </a>
            <a href="#videos" className="btn-primary">
              Watch Videos
            </a>
            <a href="#guides" className="btn-primary">
              Download Guides
            </a>
          </div>
        </div>
      </section>

      <div id="articles">
        <Section
          align="left"
          eyebrow="Written resources"
          heading="Articles organized by topic."
          intro={
            <p>
              An indexed strategy binder of approved topics. Filter by category to focus your
              reading.
            </p>
          }
        >
          <div className="flex flex-wrap gap-2">
            <CategoryChip
              label="All"
              active={articleCat === "All"}
              onClick={() => setArticleCat("All")}
              dotColor="var(--blue)"
            />
            {writtenCategories.map((c) => (
              <CategoryChip
                key={c}
                label={c}
                active={articleCat === c}
                onClick={() => setArticleCat(c)}
                dotColor="var(--blue)"
              />
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((a) => (
              <Sheet key={a.title} label={a.category}>
                <p className="font-display text-lg font-bold">{a.title}</p>
                <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{a.description}</p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                  {a.readTime}
                </p>
              </Sheet>
            ))}
          </div>
        </Section>
      </div>

      <div id="videos">
        <Section
          align="left"
          tone="paper-2"
          eyebrow="Video learning library"
          heading="Short videos, clear answers."
        >
          <div className="flex flex-wrap gap-2">
            <CategoryChip
              label="All"
              active={videoCat === "All"}
              onClick={() => setVideoCat("All")}
              dotColor="var(--orange)"
            />
            {videoTopics.map((t) => (
              <CategoryChip
                key={t}
                label={t}
                active={videoCat === t}
                onClick={() => setVideoCat(t)}
                dotColor="var(--orange)"
              />
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((v) => (
              <Sheet key={v.title} label={v.category}>
                <div className="flex aspect-video items-center justify-center rounded border border-[color:var(--rule)] bg-[color:var(--ink)]/5">
                  <span
                    aria-hidden
                    className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--orange)] text-white"
                  >
                    ▶
                  </span>
                </div>
                <p className="mt-4 font-display text-lg font-bold">{v.title}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                  {v.duration}
                </p>
              </Sheet>
            ))}
          </div>
        </Section>
      </div>

      <div id="guides">
        <Section
          align="center"
          eyebrow="Free downloadable guides"
          heading="Printable Buyers Guides."
          intro={
            <p>Choose a category to browse the guides available for download.</p>
          }
        >
          <div className="flex flex-wrap justify-center gap-2">
            <CategoryChip
              label="All"
              active={guideCat === "All"}
              onClick={() => setGuideCat("All")}
              dotColor="var(--blue)"
            />
            {guideCategories.map((c) => (
              <CategoryChip
                key={c}
                label={c}
                active={guideCat === c}
                onClick={() => setGuideCat(c)}
                dotColor="var(--blue)"
              />
            ))}
          </div>

          <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
            {filteredGuides.map((g) => (
              <Sheet key={g.title} label={g.category}>
                <p className="font-display text-lg font-bold">{g.title}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                  {g.pages}
                </p>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[color:var(--blue)] hover:text-[color:var(--orange)]"
                >
                  Download <span aria-hidden>&darr;</span>
                </button>
              </Sheet>
            ))}
          </div>
        </Section>
      </div>

      <CTABand
        eyebrow="Have a specific question?"
        heading="Talk with Matt."
        body={<p>Personal answers to the questions your file actually raises.</p>}
        primary="Contact Mortgage Rockstar"
        primaryTo="/contact"
        secondary="Browse Loan Programs"
        secondaryTo="/loan-programs"
      />
      <span className="sr-only">
        <Link to="/contact">Talk with Matt</Link>
      </span>
    </>
  );
}
