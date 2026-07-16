import { createFileRoute } from "@tanstack/react-router";
import { CTABand, HeroBreadcrumb, PageHero, Section } from "@/components/dossier";
import { LoanSelector } from "@/components/loan-selector";
import blueprintImg from "@/assets/blueprint.jpg";

export const Route = createFileRoute("/loan-programs/")({
  head: () => ({
    meta: [
      { title: "Loan Programs: Mortgage Financing Options | Mortgage Rockstar\u2122" },
      {
        name: "description",
        content:
          "Financing solutions built around your goals. Explore Mortgage Rockstar\u2019s approved loan programs — Conventional, First-Time, Investor / DSCR, Jumbo, Refinance, VA, and more.",
      },
      { property: "og:title", content: "Mortgage Financing Options" },
      {
        property: "og:description",
        content:
          "Explore financing solutions designed around your needs.",
      },
      { property: "og:url", content: "/loan-programs" },
    ],
    links: [{ rel: "canonical", href: "/loan-programs" }],
  }),
  component: LoanProgramsIndex,
});

function LoanProgramsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Loan Programs"
        breadcrumb={
          <HeroBreadcrumb
            items={[{ label: "Home", to: "/" }, { label: "Loan Programs" }]}
          />
        }
        title={
          <>
            Financing Solutions{" "}
            <span className="marker-underline">Built Around Your Goals</span>.
          </>
        }
        intro={
          <>
            <p>Every borrower has a unique story.</p>
            <p>
              Rather than simply presenting loan products, Mortgage
              Rockstar helps determine which financing strategy aligns with
              your financial goals, lifestyle, and future plans.
            </p>
            <p>Explore financing solutions designed around your needs.</p>
          </>
        }
        image={blueprintImg}
        imageAlt="Blueprints and financial planning materials"
        stamp="Index"
        fileLabel="Program Index"
        fileTitle="Choose the fit"
        fileBullets={[
          "Conventional & Jumbo",
          "First-Time & FHA",
          "VA & Veteran",
          "Investor / DSCR",
        ]}
      />


      <Section
        eyebrow="Program index"
        heading="Choose the file that fits your situation."
        intro={
          <p>
            Select a program to review its approved overview. Every page
            links to a full strategy conversation with Matt.
          </p>
        }
      >
        <LoanSelector />
      </Section>

      <CTABand
        eyebrow="Not sure which fits?"
        heading="Talk through your situation first."
        body={
          <p>
            The right program depends on your goals, timing, and financial
            picture. A short conversation is usually the fastest way to
            find it.
          </p>
        }
        primary="Schedule Your Mortgage Strategy Session"
        primaryTo="/contact"
        secondary="Return Home"
        secondaryTo="/"
      />
    </>
  );
}
