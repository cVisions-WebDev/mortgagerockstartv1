/**
 * Mortgage Rockstar™ — Site configuration.
 *
 * Single source of truth for all factual business details. Anything not
 * yet approved MUST stay null / empty. Downstream UI checks for the
 * value and hides the slot when absent — do not render placeholders,
 * "555" numbers, "[Insert ...]" strings, or fabricated data on the
 * public site.
 *
 * Only the compliance footer text below is approved.
 */

export const site = {
  brandName: "Mortgage Rockstar",
  brandNameTM: "Mortgage Rockstar\u2122",
  poweredBy: "Cornerstone First Mortgage",
  tagline: "Education. Strategy. Trusted Guidance.",
  positioning: "Mortgage clarity before commitment.",
  campaign: "Fall in love with the numbers first.",

  // ---- Approved factual data (fill in via client confirmation) --------
  approvedPhone: null as string | null,
  approvedEmail: null as string | null,
  approvedOfficeAddress: null as string | null,
  approvedBusinessHours: null as string | null,
  approvedBookingUrl: null as string | null,
  approvedSocialLinks: [] as Array<{ label: string; url: string }>,
  approvedMarkets: [] as string[],

  // ---- Approved compliance footer (verbatim, do NOT shorten) ----------
  legalFooterShort:
    "\u00A92026 Cornerstone First Mortgage, LLC. All Rights Reserved. NMLS ID #173855. Equal Housing Lender.",
  legalFooterLong:
    "Cornerstone First Mortgage, LLC is an Equal Housing Lender. All loans are subject to buyer, property, and underwriting qualification. This material is informational only and does not constitute an offer of credit or an absolute commitment to lend. Interest rates, products, and loan program terms change frequently and are subject to change without notice. Matt Arana is a licensed Mortgage Advisor operating under Corporate NMLS #173855.",
};

// -------- CMS-style collections (empty by default per protocol) --------

export interface Testimonial {
  quote: string;
  attribution: string | null;
  approved: boolean;
  complianceReviewed: boolean;
  permissionConfirmed: boolean;
}
export const testimonials: Testimonial[] = [];

export interface SuccessStory {
  title: string;
  approvedNarrative: string;
  approvedQuote: string | null;
  approved: boolean;
  complianceReviewed: boolean;
  permissionConfirmed: boolean;
}
export const successStories: SuccessStory[] = [];

export interface Resource {
  title: string;
  category: string;
  resourceType: "article" | "video" | "guide";
  description: string | null;
  fileUrl: string | null;
  videoUrl: string | null;
  thumbnail: string | null;
  approved: boolean;
  complianceReviewed: boolean;
}
export const resources: Resource[] = [];

// Nav is site-level and stable across pages.
export const nav = [
  { label: "Home", to: "/" },
  { label: "About Matt", to: "/about" },
  { label: "Loan Programs", to: "/loan-programs" },
  { label: "Education Center", to: "/education" },
  { label: "Success Stories", to: "/success-stories" },
  { label: "Referral Program", to: "/referral" },
  { label: "Contact", to: "/contact" },
] as const;

export type NavItem = (typeof nav)[number];
