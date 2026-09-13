export interface ServiceEntry {
  slug: string;
  title: string;
  /** Short one-line summary used on the home teaser and the services list. */
  summary: string;
  /** Detailed scope of work, shown as a checklist on the service's own page. */
  points: string[];
}

export interface TeamMember {
  initials: string;
  name: string;
  role: string;
}

export interface StatEntry {
  value: string;
  label: string;
}

export interface Dictionary {
  meta: {
    siteName: string;
    /** Appended to every <title>, e.g. "Услуги — Триада Консалтинг". */
    titleSuffix: string;
    defaultDescription: string;
  };
  nav: {
    about: string;
    services: string;
    team: string;
    partners: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stats: StatEntry[];
  servicesSection: {
    eyebrow: string;
    title: string;
    note: string;
    readMore: string;
    tableHeadIndex: string;
    tableHeadName: string;
    tableHeadDescription: string;
    scopeTitle: string;
    backToServices: string;
  };
  services: ServiceEntry[];
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  team: {
    eyebrow: string;
    title: string;
    members: TeamMember[];
  };
  partners: {
    eyebrow: string;
    title: string;
    note: string;
    names: string[];
  };
  cta: {
    title: string;
    note: string;
    button: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    addressLabel: string;
    address: string;
    phone: string;
    email: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
      pendingNotice: string;
      success: string;
      error: string;
    };
  };
  footer: {
    rights: string;
  };
}
