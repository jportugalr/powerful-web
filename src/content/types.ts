import type { Locale, LocaleCatalog } from '../i18n/types';

export interface TextHeading {
  lead: string;
  emphasis: string;
}

export interface PageMetadata {
  title: string;
  description: string;
}

export interface SubpageHero {
  eyebrow: string;
  heading: TextHeading;
  lede: string;
  pageNumber?: string;
}

export interface MiniCta {
  eyebrow: string;
  heading: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}

export interface ServiceDetail {
  index: string;
  heading: TextHeading;
  description: string;
  icon: 'globe' | 'briefcase' | 'layers' | 'compass';
}

export type SectorCategoryId =
  | 'mineria'
  | 'energia'
  | 'infraestructura'
  | 'inmobiliario'
  | 'comercio'
  | 'pesca'
  | 'agroindustria';

export interface SectorFilter {
  value: 'all' | SectorCategoryId | 'technology';
  label: string;
}

export interface SectorCard {
  id: SectorCategoryId;
  category: SectorCategoryId;
  index: string;
  image: {
    src: string;
    srcSet: string;
    mobileSrc: string;
    alt: string;
  };
  title: string;
  description: string;
}

export interface TechnologyCapability {
  anchor: string;
  eyebrow: string;
  heading: TextHeading;
  description: string;
  image: {
    src: string;
    webpSrc: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface HomePage {
  metadata: PageMetadata;
  sectorGalleryLabel: string;
  hero: {
    eyebrow: string;
    heading: {
      lead: string;
      emphasis: string;
      trailing: string;
    };
    description: string;
    actions: {
      label: string;
      href: string;
      variant: 'gold' | 'outline';
    }[];
    proofPoints: string[];
    mapAlt: string;
  };
  intro: {
    index: string;
    lead: string;
    emphasis: string;
  };
  servicesPreview: {
    eyebrow: string;
    heading: {
      lead: string;
      emphasis: string;
    };
    description: string;
    cardAction: string;
    cards: {
      number: string;
      icon: 'globe' | 'briefcase' | 'layers';
      title: string;
      description: string;
      href: string;
    }[];
  };
  sectorHighlight: {
    eyebrow: string;
    context: string;
    heading: {
      lead: string;
      secondLead: string;
      emphasis: string;
    };
    description: string;
    sectors: {
      label: string;
      href: string;
    }[];
    linkLabel: string;
    linkHref: string;
  };
  principles: {
    eyebrow: string;
    heading: {
      lead: string;
      emphasis: string;
    };
    description: string;
    linkLabel: string;
    linkHref: string;
    diagramSource: string;
    diagramSourceDetail: string;
    diagramRole: string;
    diagramDestination: string;
    diagramDestinationDetail: string;
    diagramNote: string;
  };
  processPreview: {
    eyebrow: string;
    heading: {
      lead: string;
      emphasis: string;
    };
    description: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  miniCta: {
    eyebrow: string;
    heading: string;
    description: string;
    actionLabel: string;
    actionHref: string;
  };
}

export interface BusinessPages {
  nosotros: {
    metadata: PageMetadata;
    hero: SubpageHero;
    profile: {
      eyebrow: string;
      heading: TextHeading;
      paragraphs: [string, string];
      linkLabel: string;
      linkHref: string;
    };
    approach: {
      eyebrow: string;
      heading: TextHeading;
      description: string;
      values: {
        index: string;
        title: string;
        description: string;
      }[];
    };
    transparency: {
      eyebrow: string;
      heading: TextHeading;
      description: string;
    };
  };
  servicios: {
    metadata: PageMetadata;
    hero: SubpageHero;
    details: ServiceDetail[];
    notice: {
      eyebrow: string;
      heading: string;
      description: string;
    };
  };
  sectores: {
    metadata: PageMetadata;
    hero: SubpageHero;
    controls: {
      eyebrow: string;
      heading: TextHeading;
      ariaLabel: string;
      filters: SectorFilter[];
    };
    cards: SectorCard[];
    cardAction: string;
    disclaimer: string;
    technologyCapability: TechnologyCapability;
    teamExperience: {
      heading: string;
      description: string;
    };
    cta: MiniCta;
  };
  comoTrabajamos: {
    metadata: PageMetadata;
    hero: SubpageHero;
    process: {
      eyebrow: string;
      heading: TextHeading;
      description: string;
      steps: ProcessStep[];
    };
    responsibilities: {
      eyebrow: string;
      heading: TextHeading;
      paragraphs: [string, string];
    };
    cta: MiniCta;
  };
}

export type ContactReason =
  | 'expansion'
  | 'inversionista'
  | 'proyecto'
  | 'representacion'
  | 'alianza'
  | 'otro';

export interface ContactPage {
  metadata: PageMetadata;
  hero: SubpageHero;
  aside: {
    eyebrow: string;
    heading: TextHeading;
    description: string;
    steps: { number: string; description: string }[];
  };
  whatsapp: {
    eyebrow: string;
    heading: string;
    description: string;
    phone: string;
    buttonLabel: string;
    note: string;
    defaultMessage: string;
    messages: Record<ContactReason, string>;
  };
}

export interface LegalPage {
  metadata: PageMetadata;
  hero: SubpageHero;
  alert: string;
  sections: { heading: string; paragraph: string }[];
}

export interface LegalPages {
  privacidad: LegalPage;
  terminos: LegalPage;
}

export interface NotFoundPage {
  metadata: PageMetadata;
  hero: SubpageHero;
  action: { label: string; href: string };
}

export interface SiteShellContent {
  skipLink: string;
  header: {
    brandHomeLabel: string;
    homeHref: string;
    desktopNavigationLabel: string;
    mobileNavigationLabel: string;
    mobileToggleLabel: string;
    mobileToggleCloseLabel: string;
    languageTitle: string;
    languageLabel: string;
    languageSwitchTitle: string;
    languageSwitchLabel: string;
    contactLabel: string;
    contactHref: string;
    navigation: { label: string; href: string }[];
  };
  footer: {
    lead: {
      eyebrow: string;
      heading: TextHeading;
      actionLabel: string;
      actionHref: string;
    };
    companyDescription: string;
    companyNote: string;
    sections: {
      heading: string;
      links: { label: string; href: string; hreflang?: Locale }[];
      footerNote?: string;
    }[];
    backToTopLabel: string;
  };
}

export interface CommercialCatalog {
  home: HomePage;
  businessPages: BusinessPages;
  contact: ContactPage;
  shell: SiteShellContent;
}

export type LocalizedCommercialCatalog = LocaleCatalog<CommercialCatalog>;
