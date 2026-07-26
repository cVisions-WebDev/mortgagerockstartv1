import { createFileRoute, Link } from "@tanstack/react-router";
import { CTABand, PageHero, Section, Sheet } from "@/components/dossier";
import mattAsset from "@/assets/matt.jpg.asset.json";
import blueprintImg from "@/assets/blueprint.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Matt Arana | Mortgage Rockstar\u2122" },
      {
        name: "description",
        content:
          "The story behind The Mortgage Rockstar\u2122. Matt Arana didn\u2019t take the traditional road into mortgage lending. He took a longer one, and it made all the difference.",
      },
      { property: "og:title", content: "About Matt Arana" },
      {
        property: "og:description",
        content:
          "Musician. GE producer. Mortgage educator. The story behind The Mortgage Rockstar\u2122.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Show Up",
    body: "Consistent presence. Reliable follow-through. The people you work with should always know where you are and what happens next.",
  },
  {
    title: "Tell the Truth",
    body: "Even when it\u2019s the harder answer. Especially when it\u2019s the harder answer.",
  },
  {
    title: "Outwork Expectations",
    body: "Preparation, responsiveness, and accountability, every time.",
  },
  {
    title: "Never Stop Learning",
    body: "Markets, programs, and guidelines change. Curiosity keeps the advice current.",
  },
  {
    title: "Solve the Hard Problems",
    body: "The complex files, the unconventional scenarios, the deals that need someone who will turn over every stone.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Matt Arana"
        title={
          <>
            The Story Behind The <span className="marker-underline">Mortgage Rockstar</span>
            <span className="font-mono text-lg align-super text-[color:var(--orange)]">
              &trade;
            </span>
          </>
        }
        intro={
          <p>
            Matt Arana did not take the traditional road into mortgage lending. He took a longer
            one, and it made all the difference.
          </p>
        }
        image={mattAsset.url}
        imageAlt="Matt Arana, Mortgage Rockstar"
        stamp="Origin"
        fileLabel="Personnel File"
        fileTitle="Matt Arana"
        fileBullets={[
          "Full-time musician",
          "Insurance & finance",
          "GE Capital top-5 producer",
          "Mortgage Rockstar\u2122",
        ]}
      />

      <Section eyebrow="Origin story" heading="The long road here.">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-[color:var(--ink)]">
          <p>
            Before he was helping clients navigate complex financing decisions, Matt was a full-time
            musician with a record deal, touring nationally and learning firsthand what it means to
            show up for an audience night after night and make it count. Then 9/11 happened, the
            music industry changed and life required a different kind of pivot.
          </p>
          <p>
            What followed was a career built entirely on the willingness to walk into rooms that
            were new to him and figuring it out. This included insurance, finance and eventually GE
            Capital, one of the most competitive financial sales environments in the country. In his
            own words, he didn&rsquo;t know much, so he learned fast, connected with smart people,
            and challenged himself to master every new environment he entered. By the time he left
            GE, he was one of the company&rsquo;s top five referral producers because he refused to
            stop until it was.
          </p>
          <p>
            That instinct to understand first, then act is how Matt operates to this day. When a
            situation is complicated, he does not reach for a quick answer. He digs in, turns over
            every stone and comes back with clarity. It is how he has operated his entire career.
          </p>
          <p>
            The 2008 financial crisis did to Matt what it did to a lot of people. He had to adapt. A
            brief stop in financial data sales confirmed what he already suspected. He needed to be
            in a field where relationships and problem-solving actually mattered. Mortgage lending
            was that field and he took to it the way he had taken to everything else. He built
            teams, scaled organizations and along the way became known as something more than a
            lender. He became an educator, an advisor and the person clients called when the deal
            seemed impossible.
          </p>
          <p>
            The Mortgage Rockstar
            <span className="font-mono align-super text-xs text-[color:var(--orange)]">
              &trade;
            </span>{" "}
            is where all of it lands. It is the musician who learned to sell, the GE producer who
            learned to solve, and the mortgage educator who came to believe that the most important
            financial transaction in most people&rsquo;s lives deserves more than a call center and
            a chatbot.
          </p>
        </div>
      </Section>

      <Section
        tone="paper-2"
        align="center"
        eyebrow="Core values"
        heading="The room is different. The standard is the same."
        intro={
          <p>
            These are not brand values written in a conference room. They are the operating
            principles of someone who has built a career by walking into difficult situations and
            refusing to leave until he has a real answer.
          </p>
        }
      >
        <div className="flex flex-wrap justify-center gap-5">
          {values.map((v, i) => (
            <Sheet
              key={v.title}
              className="w-full text-left sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-xl font-black text-[color:var(--ink)]">
                  {v.title}
                </h3>
                <span className="number-tag">{`0${i + 1} / 05`}</span>
              </div>
              <p className="text-sm text-[color:var(--muted-foreground)]">{v.body}</p>
            </Sheet>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          <div className="sheet p-8 lg:p-10">
            <span className="label-eyebrow">Mission</span>
            <p className="mt-4 font-display text-2xl font-bold leading-snug text-[color:var(--ink)]">
              To empower individuals, families and investors to navigate the mortgage process and
              make smarter financial decisions with clarity, confidence and honest, strategic
              guidance.
            </p>
          </div>
          <div className="sheet p-8 lg:p-10">
            <span className="label-eyebrow">Vision</span>
            <p className="mt-4 font-display text-2xl font-bold leading-snug text-[color:var(--ink)]">
              To become a nationally recognized authority and resource in the mortgage space where
              serious buyers, investors and real estate professionals turn to first, known for
              education-driven content, strong client relationships, a powerful personal brand
              presence, and a reputation built one relationship at a time.
            </p>
          </div>
        </div>
      </Section>

      <Section
        tone="ink"
        align="left"
        eyebrow="Brand architecture"
        heading={
          <>
            Human Guidance.{" "}
            <span className="text-[color:var(--orange)]">Institutional Capability.</span>
          </>
        }
        intro={
          <p className="text-white/80">
            Mortgage Rockstar
            <span className="align-super text-xs">&trade;</span> is Matt Arana&rsquo;s
            education-first mortgage guidance platform, powered by Cornerstone First Mortgage.
          </p>
        }
      >
        <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-white/80">
            <p>
              Clients work directly with Matt for guidance, strategy, communication, and mortgage
              education, while benefiting from the lending strength, operational infrastructure and
              compliance support of Cornerstone First Mortgage.
            </p>
            <p>
              The personal brand is the front door. Cornerstone First Mortgage is the engine. The
              result is a mortgage experience that combines real human guidance with institutional
              capability.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-primary">
                Start the Conversation
              </Link>
              <a
                href="https://portal.myhometrac.com/homehub/signup/marana@cfmtg.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-invert"
              >
                Apply Now
              </a>
            </div>
          </div>
          <div className="relative mx-auto h-[300px] w-full max-w-[420px] lg:mx-0">
            <div className="photo-frame h-full w-full">
              <img
                src={blueprintImg}
                alt="Mortgage strategy and planning blueprint"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <CTABand
        eyebrow="Ready when you are"
        heading="Let's Start with a Conversation"
        primary="Schedule Your Strategy Session"
        primaryTo="/contact"
        secondary="Explore Loan Programs"
        secondaryTo="/loan-programs"
      />
    </>
  );
}
