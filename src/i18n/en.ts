import type { Dictionary } from "./types";

// DRAFT TRANSLATION. The live tdc.am site does not actually serve English content (its
// language switcher is non-functional), so this dictionary was translated from the
// Armenian original and needs client/native review before publishing. See
// .ai/redesign-plan.md, section 6.5.
export const en: Dictionary = {
  meta: {
    siteName: "Triada Consulting",
    titleSuffix: "Triada Consulting",
    defaultDescription:
      "Accounting and tax consulting in Yerevan since 2010.",
  },
  nav: {
    about: "About",
    services: "Services",
    team: "Team",
    partners: "Partners",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Accounting & tax consulting · Yerevan",
    titleLead: "Bookkeeping that holds up to any",
    titleAccent: "audit",
    lede: "Triada Consulting handles bookkeeping, prepares EAEU trade documentation, and represents businesses before the tax authorities — since 2010.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "All services",
  },
  stats: [
    { value: "15", label: "years on the market since founding" },
    { value: "10+", label: "long-standing partners across industries" },
    { value: "98", label: "tax disputes won" },
  ],
  servicesSection: {
    eyebrow: "What we do",
    title: "Services",
    note: "Six areas of work — from day-to-day bookkeeping to registering new companies.",
    readMore: "Learn more",
    tableHeadIndex: "No.",
    tableHeadName: "Service",
    tableHeadDescription: "Description",
    scopeTitle: "What's included",
    backToServices: "← All services",
  },
  services: [
    {
      slug: "accounting",
      title: "Bookkeeping",
      summary:
        "A full bookkeeping service package for a company of any size or industry.",
      points: [
        "Reviewing the business activity and determining the applicable tax regime",
        "Accounting consultation",
        "Receiving and verifying the completeness of documents",
        "Initial and ongoing data entry",
        "Issuing invoices",
        "Preparing and filing tax and financial reports",
        "Calculating and remitting tax payments",
        "Payroll and HR records",
        "Drafting employee documentation and keeping it aligned with current legislation",
      ],
    },
    {
      slug: "eaeu",
      title: "EAEU trade packages",
      summary:
        "Preparing the full set of trade documentation required under EAEU customs regulations.",
      points: [
        "Checking that all required documents are in place",
        "Matching goods to the correct commodity (HS) codes",
        "Calculating the applicable taxes",
        "Filing reports in the Taxservice system",
        "Preparing customs statistical reports",
      ],
    },
    {
      slug: "restoration",
      title: "Bookkeeping recovery",
      summary:
        "A complete package — from checking the completeness of a company's records to recalculating tax payments.",
      points: [
        "Reviewing the completeness of documents",
        "Recovering missing documents",
        "Correcting reports",
        "Recalculating tax payments",
      ],
    },
    {
      slug: "audit",
      title: "Bookkeeping audit",
      summary:
        "A thorough review of the quality and state of a company's bookkeeping, with optional follow-up consulting.",
      points: [
        "Reviewing source documents",
        "Verifying reports",
        "Assessing risk",
        "Providing a report on the current state",
      ],
    },
    {
      slug: "formation",
      title: "Company formation",
      summary:
        "The full package of services for setting up a company — from choosing a name to state registration.",
      points: [
        "Choosing the legal structure",
        "Naming",
        "State registration",
        "Obtaining company seals",
        "Signing agreements with the tax authority, registering users, activating/deactivating authorizations",
      ],
    },
    {
      slug: "other",
      title: "Other services",
      summary:
        "Other services provided by Triada Consulting are outlined below.",
      points: [
        "Participation in tax audits",
        "Consulting on tax and labour legislation",
        "Appealing tax authority decisions, economic litigation",
      ],
    },
  ],
  about: {
    eyebrow: "About us",
    title: "Triada Consulting",
    paragraphs: [
      "The company was founded on 6 December 2010 as “TD Consulting” LLC. In 2015 it was renamed “Triada Consulting” LLC.",
      "We handle bookkeeping for organizations across industries and sizes, prepare the documentation required for foreign trade activity, and represent our clients' interests before the tax authorities.",
    ],
    facts: [
      { label: "Founded", value: "06.12.2010" },
      { label: "Renamed", value: "2015" },
      { label: "Office", value: "Yerevan" },
      { label: "Languages of service", value: "ՀԱՅ / ENG / РУС" },
    ],
  },
  team: {
    eyebrow: "Who's behind it",
    title: "Team",
    members: [
      { initials: "EF", name: "Ervand Frangulyan", role: "Director" },
      { initials: "AY", name: "Ashot Yezdoghlyan", role: "Senior accounting specialist" },
      { initials: "AK", name: "Arusyak Kocharyan", role: "Senior accounting specialist" },
    ],
  },
  partners: {
    eyebrow: "Trusted by",
    title: "Partners",
    note: "A small sample of organizations across different industries we work with on an ongoing, mutually beneficial basis.",
    names: [
      "Asoghik",
      "In Vino",
      "Inter School",
      "Medline Clinic",
      "Modern Implant Medicine",
      "Akumb Club",
      "Narekatsi Art Union",
      "National Leadership Institute",
      "Titan",
      "Antares",
    ],
  },
  cta: {
    title: "Let's work together — we'll become your representative in this field",
    note: "Insure your business against tax risk: write to us and we'll look into your situation.",
    button: "Write to us",
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Contact",
    addressLabel: "Address",
    address: "27 Azatutyan St, “Yeraz” business center, offices 703, 706, Yerevan",
    phone: "+374 60 440535",
    email: "frangulyan@tdc.am",
    form: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send",
      pendingNotice: "The form is ready, but sending isn't wired up yet — please email us directly for now.",
      success: "Thank you, your message has been sent.",
      error: "Couldn't send your message. Please try again or email us directly.",
    },
  },
  footer: {
    rights: "© Triada Consulting LLC. All rights reserved.",
  },
};
