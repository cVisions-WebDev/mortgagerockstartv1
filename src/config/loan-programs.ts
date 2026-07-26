/**
 * Approved loan program content. Copy comes verbatim from the
 * M.R. WEBSITE UPDATE and MORTGAGE ROCKSTAR WEB UPDATES documents.
 * Do not add fake stats, rates, or ratios.
 */

export interface LoanProgram {
  slug: string;
  shortTitle: string;
  title: string; // page hero headline
  heading: string; // program name on selectors
  body: string; // primary approved paragraph
  extra?: string; // additional approved paragraph
  approvedBullets?: string[];
  bulletsLabel?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  documentLabel: string; // dossier tab
  approved: true;
  complianceReviewed: true;
}

export const loanPrograms: LoanProgram[] = [
  {
    slug: "conventional",
    shortTitle: "Conventional",
    heading: "Conventional",
    title: "Flexible Financing for Today\u2019s Homebuyers",
    body:
      "A conventional loan offers flexibility, competitive financing, and long-term value for many homebuyers. Mortgage Rockstar strategically reviews conventional lending guidelines to help clients understand how different structures may affect cash reserves, affordability, and long-term goals. Whether you\u2019re purchasing your first home, upgrading, or refinancing, you\u2019ll receive guidance and a personalized financing strategy designed to support both your immediate needs and your long-term financial goals.",
    bulletsLabel: "Often a fit for",
    approvedBullets: [
      "Primary residences",
      "Repeat homebuyers",
      "Move-up buyers",
      "Strong credit borrowers",
    ],
    secondaryCTA: "Schedule a Strategy Session",
    documentLabel: "Conventional",
    approved: true,
    complianceReviewed: true,
  },
  {
    slug: "first-time-homebuyer",
    shortTitle: "First-Time Homebuyer",
    heading: "First-Time Homebuyer",
    title: "Homeownership Begins with Confidence",
    body:
      "Buying your first home should feel exciting. Mortgage Rockstar simplifies every step through education, preparation, and guidance designed specifically for first-time buyers.",
    extra:
      "Cut through the housing noise. Your first purchase can shape your financial path for years. Mortgage Rockstar strips away corporate jargon to help you understand down payment strategies, mortgage fundamentals, and long-term equity planning.",
    bulletsLabel: "What we cover",
    approvedBullets: [
      "Credit preparation",
      "Down payment options",
      "Closing costs",
      "Loan comparisons",
      "Mortgage basics",
      "Homeownership planning",
    ],
    // Download CTA suppressed until approved guide file exists.
    primaryCTA: "Schedule Your Homebuyer Strategy Session",
    documentLabel: "First-Time",
    approved: true,
    complianceReviewed: true,
  },
  {
    slug: "investor-dscr",
    shortTitle: "Investor / DSCR",
    heading: "Investor / DSCR",
    title: "Financing Built for Real Estate Investors",
    body:
      "Whether you\u2019re purchasing your first investment property or expanding an established portfolio, Mortgage Rockstar helps investors create financing strategies designed for long-term growth.",
    extra:
      "Grow your real estate portfolio with financing designed for investors. A DSCR, or Debt Service Coverage Ratio, loan focuses on the property\u2019s income potential rather than your personal income, making it possible to evaluate certain investment opportunities through a different qualification structure. Whether you\u2019re purchasing your first rental property or scaling a portfolio, Mortgage Rockstar provides strategic guidance to help you review financing options that support your long-term investment goals.",
    bulletsLabel: "Financing topics",
    approvedBullets: [
      "DSCR Loans",
      "Rental Properties",
      "Portfolio Expansion",
      "Cash Flow Strategies",
    ],
    secondaryCTA: "Build Your Investment Strategy",
    documentLabel: "Investor / DSCR",
    approved: true,
    complianceReviewed: true,
  },
  {
    slug: "jumbo-luxury",
    shortTitle: "Jumbo & Luxury",
    heading: "Jumbo & Luxury Financing",
    title: "Financing Exceptional Homes",
    body:
      "Luxury homes deserve thoughtful financing strategies. Mortgage Rockstar provides personalized guidance through jumbo financing while helping buyers understand qualification requirements, asset planning, and wealth-building opportunities.",
    extra:
      "Luxury homes deserve a financing strategy that matches your goals. Jumbo financing provides higher loan limits for premium properties while offering flexible solutions tailored to your financial profile. Whether you\u2019re purchasing your dream home, relocating, or investing in a high-value property, Mortgage Rockstar delivers expertise and personalized guidance to help you review financing options with confidence.",
    bulletsLabel: "Often a fit for",
    approvedBullets: [
      "Luxury homes",
      "Executive relocations",
      "High-value properties",
      "Custom homes",
    ],
    secondaryCTA: "Explore Jumbo Financing",
    documentLabel: "Jumbo / Luxury",
    approved: true,
    complianceReviewed: true,
  },
  {
    slug: "complex-household-financing",
    shortTitle: "Complex Household",
    heading: "Complex Household Financing",
    title: "Guidance for an Evolving Financial Picture",
    body:
      "Life changes often bring unique home financing needs. Whether you\u2019re navigating a major transition, adjusting to a new financial picture, or purchasing a home under evolving circumstances, specialized mortgage solutions can help you move forward with confidence. Mortgage Rockstar provides thoughtful guidance, personalized strategies, and a clear plan designed around your goals, helping you make informed decisions every step of the way.",
    primaryCTA: "Schedule Your Strategy Session",
    documentLabel: "Complex Household",
    approved: true,
    complianceReviewed: true,
  },
  {
    slug: "refinance",
    shortTitle: "Refinance",
    heading: "Refinance",
    title: "Keep Your Mortgage Aligned with Your Goals",
    body:
      "Your mortgage should continue working for you as your life and financial goals evolve. Refinancing may help you review your monthly payment, access available home equity, adjust your loan term, or better align your financing with your long-term plans. Mortgage Rockstar takes a strategic approach to refinancing, helping you evaluate available options and understand which structure may create value for your future.",
    primaryCTA: "Learn about Refinancing Options",
    documentLabel: "Refinance",
    approved: true,
    complianceReviewed: true,
  },
  {
    slug: "self-employed",
    shortTitle: "Self-Employed",
    heading: "Self-Employed",
    title: "Financing for the Way You Earn",
    body:
      "Your business tells the story of your success, and your mortgage strategy should too. Self-employed financing is designed for entrepreneurs, business owners, freelancers, and independent professionals with unique income structures. Mortgage Rockstar helps simplify the process by identifying options to review, organizing required documentation, and creating a financing strategy tailored to your business and long-term financial goals.",
    primaryCTA: "Find Your Solution",
    documentLabel: "Self-Employed",
    approved: true,
    complianceReviewed: true,
  },
  {
    slug: "va",
    shortTitle: "VA Loan",
    heading: "VA Loan",
    title: "Thoughtful Guidance for Those Who Served",
    body:
      "VA loans can be one of the most valuable mortgage benefits available to eligible veterans and active-duty military borrowers. They are also among the most misunderstood and some of the most aggressively marketed.",
    extra:
      "Matt helps VA borrowers cut through the noise. He takes the time to explain eligibility, documentation, financing options, and the practical differences between what gets quoted and what makes strategic sense long term. Veterans and active-duty military borrowers deserve someone who knows the program, not just someone who markets around it. That is Matt\u2019s standard.",
    secondaryCTA: "Schedule Your VA Consultation",
    documentLabel: "VA",
    approved: true,
    complianceReviewed: true,
  },
  {
    slug: "relocation",
    shortTitle: "Relocation",
    heading: "Relocation Purchase",
    title: "Making Your Move Simpler",
    body:
      "Relocating comes with exciting opportunities and important decisions. Mortgage Rockstar helps professionals and families coordinate financing while navigating changing timelines, employment transitions, and new communities.",
    extra:
      "Relocation decisions often involve employer-driven timing, compressed schedules, and an unfamiliar local market. Mortgage Rockstar provides calm guidance, buyer-readiness planning, and mortgage clarity throughout the transition.",
    secondaryCTA: "Speak With a Mortgage Advisor",
    documentLabel: "Relocation",
    approved: true,
    complianceReviewed: true,
  },
  {
    slug: "divorce-life-transitions",
    shortTitle: "Divorce & Life Transitions",
    heading: "Divorce & Life Transitions",
    title: "Guidance Through Life\u2019s Changing Seasons",
    body:
      "Major life transitions often create important financial decisions. Every recommendation is handled with professionalism, respect, and personalized attention. Mortgage Rockstar provides calm mortgage guidance, strategic clarity, and coordination with the legal and financial professionals already involved. Mortgage guidance is not legal advice.",
    bulletsLabel: "Situations we support",
    approvedBullets: [
      "Divorce",
      "Separation",
      "Estate Planning",
      "Financial Restructuring",
      "New Beginnings",
    ],
    secondaryCTA: "Learn About Your Financing Options",
    documentLabel: "Life Transitions",
    approved: true,
    complianceReviewed: true,
  },
  {
    slug: "family-assisted-purchase",
    shortTitle: "Family-Assisted",
    heading: "Family-Assisted Purchase",
    title: "Building Generational Opportunities",
    body:
      "Family support creates exciting possibilities for homeownership. When family helps with a down payment or joins as a co-borrower, documentation and structure matter. Mortgage Rockstar helps families understand lender requirements, organize gift-fund documentation, and set expectations before money moves.",
    bulletsLabel: "Structures we help review",
    approvedBullets: [
      "Gift funds",
      "Co-borrowers",
      "Multi-generational purchases",
      "Family-assisted financing",
    ],
    secondaryCTA: "Explore Family Purchase Options",
    documentLabel: "Family-Assisted",
    approved: true,
    complianceReviewed: true,
  },
];

export const loanProgramBySlug = (slug: string) =>
  loanPrograms.find((p) => p.slug === slug);
