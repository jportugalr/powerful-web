import { commercialPageRoutes } from '../i18n/routes';
import type { BusinessPages, CommercialCatalog, ContactPage, HomePage, SiteShellContent } from './types';

export const siteShellEn = {
  skipLink: 'Skip to content',
  header: {
    brandHomeLabel: 'POWERFUL, back to home',
    homeHref: commercialPageRoutes.home.en,
    desktopNavigationLabel: 'Main navigation',
    mobileNavigationLabel: 'Mobile navigation',
    mobileToggleLabel: 'Open menu',
    mobileToggleCloseLabel: 'Close menu',
    languageTitle: 'English language website',
    languageLabel: 'English',
    languageSwitchTitle: 'Switch language to Spanish',
    languageSwitchLabel: 'Español',
    contactLabel: 'Let’s talk',
    contactHref: commercialPageRoutes.contact.en,
    navigation: [
      { label: 'Home', href: commercialPageRoutes.home.en },
      { label: 'About', href: commercialPageRoutes.about.en },
      { label: 'What we do', href: commercialPageRoutes.services.en },
      { label: 'Sectors', href: commercialPageRoutes.sectors.en },
      { label: 'How we work', href: commercialPageRoutes.process.en },
    ],
  },
  footer: {
    lead: {
      eyebrow: 'BUSINESS INITIATIVES IN PERU',
      heading: { lead: 'What are you looking to build', emphasis: 'in Peru?' },
      actionLabel: 'Tell us about your initiative',
      actionHref: commercialPageRoutes.contact.en,
    },
    companyDescription: 'Business origination and relationship building',
    companyNote: 'Our network has a stronger presence in northern and northeastern Peru.',
    sections: [
      {
        heading: 'EXPLORE',
        links: [
          { label: 'About', href: commercialPageRoutes.about.en },
          { label: 'What we do', href: commercialPageRoutes.services.en },
          { label: 'Sectors', href: commercialPageRoutes.sectors.en },
          { label: 'How we work', href: commercialPageRoutes.process.en },
        ],
      },
      {
        heading: 'CONTACT',
        links: [
          { label: 'Companies considering entry into Peru', href: `${commercialPageRoutes.contact.en}?tipo=expansion` },
          { label: 'Investors and partners', href: `${commercialPageRoutes.contact.en}?tipo=inversionista` },
          { label: 'Representatives of Peruvian projects', href: `${commercialPageRoutes.contact.en}?tipo=proyecto` },
          { label: 'Business partnerships', href: `${commercialPageRoutes.contact.en}?tipo=alianza` },
        ],
      },
      {
        heading: 'INFORMATION',
        links: [
          { label: 'Privacy (in Spanish)', href: '/privacidad.html', hreflang: 'es-PE' },
          { label: 'Terms (in Spanish)', href: '/terminos.html', hreflang: 'es-PE' },
        ],
        footerNote: 'PERU · NATIONWIDE REACH',
      },
    ],
    backToTopLabel: 'Back to top',
  },
} satisfies SiteShellContent;

const home = {
  metadata: {
    title: 'POWERFUL | Connecting capital, projects and businesses',
    description: 'We originate and advance strategic transactions in Peru with the participation of domestic and international companies, investors and partners.',
  },
  sectorGalleryLabel: 'Photos of sectors where our team has experience',
  hero: {
    eyebrow: 'STRATEGIC TRANSACTIONS',
    heading: {
      lead: 'Connecting capital,',
      emphasis: 'projects',
      trailing: 'and businesses.',
    },
    description:
      'We originate and advance strategic transactions in Peru with the participation of domestic and international companies, investors and partners.',
    actions: [
      {
        label: 'Tell us about your initiative',
        href: commercialPageRoutes.contact.en,
        variant: 'gold',
      },
      {
        label: 'I’m looking to invest or partner',
        href: `${commercialPageRoutes.contact.en}?tipo=inversionista`,
        variant: 'outline',
      },
    ],
    proofPoints: [
      'NATIONWIDE REACH',
      'STRONGER PRESENCE IN THE NORTH AND NORTHEAST',
      'PERUVIAN AND INTERNATIONAL INVESTMENT',
    ],
    mapAlt: 'Reference illustration showing the outlines of the Americas, Europe, Africa, Asia and Oceania, with Peru highlighted in South America and visual connections to other continents.',
  },
  intro: {
    index: '01 / OUR APPROACH',
    lead: 'Every relationship starts with',
    emphasis: 'clear roles, scope and agreements.',
  },
  servicesPreview: {
    eyebrow: 'OUR APPROACH',
    heading: {
      lead: 'Business representation,',
      emphasis: 'project origination, investment and partnerships.',
    },
    description:
      'Depending on the scope of each initiative, coordination may involve public- and private-sector participants.',
    cardAction: 'Explore service',
    cards: [
      {
        number: '01',
        icon: 'briefcase',
        title: 'Business representation in Peru',
        description:
          'We advance business representation and commercial relationships to help develop business in Peru.',
        href: commercialPageRoutes.services.en,
      },
      {
        number: '02',
        icon: 'globe',
        title: 'Investment and partnerships',
        description:
          'We bring investment and partnership initiatives together around objectives and agreements defined for each project.',
        href: commercialPageRoutes.services.en,
      },
      {
        number: '03',
        icon: 'layers',
        title: 'Origination of Peruvian initiatives',
        description:
          'We bring business projects together in line with their participants’ objectives and the agreed scope.',
        href: commercialPageRoutes.services.en,
      },
    ],
  },
  sectorHighlight: {
    eyebrow: 'AREAS OF ACTIVITY',
    context: 'PERU / MULTISECTOR PERSPECTIVE',
    heading: {
      lead: 'Experience across',
      secondLead: 'a range of sectors',
      emphasis: 'in Peru.',
    },
    description:
      'The featured sectors reflect the range of business activities found across Peru’s regions.',
    sectors: [
      { label: 'Mining and minerals', href: `${commercialPageRoutes.sectors.en}#mineria` },
      { label: 'Energy and hydrocarbons', href: `${commercialPageRoutes.sectors.en}#energia` },
      { label: 'Infrastructure', href: `${commercialPageRoutes.sectors.en}#infraestructura` },
      { label: 'Real estate', href: `${commercialPageRoutes.sectors.en}#inmobiliario` },
      { label: 'International trade', href: `${commercialPageRoutes.sectors.en}#comercio` },
      { label: 'Fishing', href: `${commercialPageRoutes.sectors.en}#pesca` },
      { label: 'Agribusiness', href: `${commercialPageRoutes.sectors.en}#agroindustria` },
    ],
    linkLabel: 'Explore all sectors',
    linkHref: commercialPageRoutes.sectors.en,
  },
  principles: {
    eyebrow: 'A PURPOSE-DRIVEN APPROACH',
    heading: {
      lead: 'Peruvian initiative.',
      emphasis: 'Projects across the country.',
    },
    description:
      'Our network reaches across Peru, with a stronger presence in the north and northeast.',
    linkLabel: 'How we work',
    linkHref: commercialPageRoutes.process.en,
    diagramSource: 'Expanding companies',
    diagramSourceDetail: 'With an international presence',
    diagramRole: 'Representation · origination · participation',
    diagramDestination: 'Peruvian projects',
    diagramDestinationDetail: 'Across the country',
    diagramNote: 'A nationwide network with international ties.',
  },
  processPreview: {
    eyebrow: 'COLLABORATION PRINCIPLES',
    heading: {
      lead: 'Purposeful relationships.',
      emphasis: 'Clear agreements.',
    },
    description:
      'Conversations start with shared objectives and with responsibilities and scope defined by the parties.',
    steps: [
      {
        number: '01',
        title: 'Shared objectives',
        description: 'Every relationship starts with the purpose expressed by its participants.',
      },
      {
        number: '02',
        title: 'Clear roles',
        description: 'Each participant’s role is defined clearly.',
      },
      {
        number: '03',
        title: 'Responsibilities',
        description: 'Responsibilities reflect each party’s authority.',
      },
      {
        number: '04',
        title: 'Clear agreements',
        description: 'The scope of the relationship is set out in the relevant agreements.',
      },
    ],
  },
  miniCta: {
    eyebrow: 'BUSINESS INITIATIVES IN PERU',
    heading: 'What project or business would you like to advance?',
    description:
      'Let’s talk about representation, investment, partnerships and business projects in Peru.',
    actionLabel: 'Tell us about your initiative',
    actionHref: commercialPageRoutes.contact.en,
  },
} satisfies HomePage;

const businessPages = {
  nosotros: {
    metadata: {
      title: 'About | POWERFUL',
      description: 'A Peruvian-led initiative originating and advancing strategic transactions in Peru with domestic and international companies, investors and partners.',
    },
    hero: {
      eyebrow: 'GET TO KNOW POWERFUL',
      heading: {
        lead: 'A Peruvian-led initiative with',
        emphasis: 'nationwide reach.',
      },
      lede:
        'We bring together business expansion, investment and partnership initiatives connected to Peru.',
      pageNumber: '02',
    },
    profile: {
      eyebrow: 'WHO WE ARE',
      heading: {
        lead: 'A meeting point for',
        emphasis: 'new business.',
      },
      paragraphs: [
        'From Peru, we originate and advance business projects with Peruvian and international companies, investors and partners.',
        'We also build relationships with owners and representatives of Peruvian initiatives.',
      ],
      linkLabel: 'See what we do',
      linkHref: commercialPageRoutes.services.en,
    },
    approach: {
      eyebrow: 'OUR APPROACH',
      heading: {
        lead: 'Relationships guided by',
        emphasis: 'clarity and agreements.',
      },
      description:
        'Our projects and contacts can reach across Peru; our network has a stronger presence in the north and northeast.',
      values: [
        {
          index: '01 /',
          title: 'Clarity',
          description: 'Agree on objectives, scope and responsibilities for each relationship.',
        },
        {
          index: '02 /',
          title: 'Relationships',
          description: 'Encourage commercial relationships around clear, shared objectives.',
        },
        {
          index: '03 /',
          title: 'Participation',
          description: 'We define our participation according to the scope and responsibilities agreed for each initiative.',
        },
      ],
    },
    transparency: {
      eyebrow: 'TRANSPARENCY',
      heading: {
        lead: 'Trust is built on',
        emphasis: 'verifiable facts.',
      },
      description:
        'Our team brings professional experience and practical knowledge across a range of business activities in Peru. References to POWERFUL projects, partnerships and results are shared with supporting documentation and the relevant authorizations.',
    },
  },
  servicios: {
    metadata: {
      title: 'What We Do | POWERFUL',
      description: 'Business representation and origination for expansion, investment and partnership initiatives in Peru.',
    },
    hero: {
      eyebrow: 'WHAT WE DO',
      heading: {
        lead: 'We originate and bring together',
        emphasis: 'strategic transactions in Peru.',
      },
      lede:
        'We advance expansion, investment and partnership initiatives connected to Peru. With each party, we define the objectives, scope and agreements needed to move forward.',
      pageNumber: '03',
    },
    details: [
      {
        index: '01 / REPRESENTATION',
        heading: {
          lead: 'Business',
          emphasis: 'representation in Peru.',
        },
        description:
          'We bring together business representation and commercial relationships for initiatives connected to Peru. With each party, we agree on the authority, responsibilities and scope of the engagement.',
        icon: 'briefcase',
      },
      {
        index: '02 / ORIGINATION',
        heading: {
          lead: 'Bringing together',
          emphasis: 'projects and partnerships.',
        },
        description:
          'We bring Peruvian initiatives together with companies, investors and partners according to each party’s objectives and agreements. Some initiatives are published by government entities.',
        icon: 'globe',
      },
      {
        index: '03 / INVESTMENT AND PARTICIPATION',
        heading: {
          lead: 'Investment and',
          emphasis: 'participation structures.',
        },
        description:
          'We bring investment and participation options together with investors and partners. Financing and participation terms are defined for each initiative by mutual agreement.',
        icon: 'layers',
      },
      {
        index: '04 / TRADE',
        heading: {
          lead: 'International',
          emphasis: 'trade relationships.',
        },
        description:
          'We bring together import, export, trading and supply initiatives involving goods or raw materials, in line with the capabilities and requirements of each case.',
        icon: 'compass',
      },
    ],
    notice: {
      eyebrow: 'OUR SCOPE',
      heading: 'How each collaboration begins',
      description:
        'We begin each collaboration by defining the objectives, scope and conditions for moving forward with the parties involved.',
    },
  },
  sectores: {
    metadata: {
      title: 'Sectors | POWERFUL',
      description: 'Our team’s cross-sector experience in Peru, together with applied technology development.',
    },
    hero: {
      eyebrow: 'CROSS-SECTOR EXPERIENCE',
      heading: {
        lead: 'A cross-sector',
        emphasis: 'perspective.',
      },
      lede:
        'We bring together commercial relationships, investment initiatives and partnerships across sectors in Peru. Our network has a stronger presence in the north and northeast.',
      pageNumber: '04',
    },
    controls: {
      eyebrow: 'AREAS OF ACTIVITY',
      heading: {
        lead: 'Explore the',
        emphasis: 'sectors.',
      },
      ariaLabel: 'Filter sectors',
      filters: [
        { value: 'all', label: 'All' },
        { value: 'mineria', label: 'Mining' },
        { value: 'energia', label: 'Energy' },
        { value: 'infraestructura', label: 'Infrastructure' },
        { value: 'inmobiliario', label: 'Real estate' },
        { value: 'comercio', label: 'International trade' },
        { value: 'pesca', label: 'Fishing' },
        { value: 'agroindustria', label: 'Agribusiness' },
      ],
    },
    cards: [
      {
        id: 'mineria',
        category: 'mineria',
        index: 'SECTOR / 01',
        image: {
          src: '/images/sectors/mineria-1280.webp',
          srcSet: '/images/sectors/mineria-640.webp 640w, /images/sectors/mineria-1280.webp 1280w',
          mobileSrc: '/images/sectors/mineria-mobile-640.webp',
          alt: 'Copper ore and fragments on a work table',
        },
        title: 'Mining and minerals',
        description:
          'We bring together initiatives in mining, minerals and raw materials, with technical, contractual and regulatory review for each case.',
      },
      {
        id: 'energia',
        category: 'energia',
        index: 'SECTOR / 02',
        image: {
          src: '/images/sectors/energia-1280.webp',
          srcSet: '/images/sectors/energia-640.webp 640w, /images/sectors/energia-1280.webp 1280w',
          mobileSrc: '/images/sectors/energia-mobile-640.webp',
          alt: 'Close-up of a flange and industrial pipes',
        },
        title: 'Energy and hydrocarbons',
        description:
          'We connect power generation, oil and gas initiatives with partners and business participation structures.',
      },
      {
        id: 'infraestructura',
        category: 'infraestructura',
        index: 'SECTOR / 03',
        image: {
          src: '/images/sectors/infraestructura-1280.webp',
          srcSet: '/images/sectors/infraestructura-640.webp 640w, /images/sectors/infraestructura-1280.webp 1280w',
          mobileSrc: '/images/sectors/infraestructura-mobile-640.webp',
          alt: 'Steel sections and bolts joined to a concrete structure',
        },
        title: 'Infrastructure and construction',
        description:
          'Projects, material supply, execution and commercial relationships for infrastructure and construction works.',
      },
      {
        id: 'inmobiliario',
        category: 'inmobiliario',
        index: 'SECTOR / 04',
        image: {
          src: '/images/sectors/inmobiliario-1280.webp',
          srcSet: '/images/sectors/inmobiliario-640.webp 640w, /images/sectors/inmobiliario-1280.webp 1280w',
          mobileSrc: '/images/sectors/inmobiliario-mobile-640.webp',
          alt: 'Residential buildings with balconies and green spaces',
        },
        title: 'Real estate',
        description:
          'Business projects involving assets in Peru’s real estate market.',
      },
      {
        id: 'comercio',
        category: 'comercio',
        index: 'SECTOR / 05',
        image: {
          src: '/images/sectors/comercio-1280.webp',
          srcSet: '/images/sectors/comercio-640.webp 640w, /images/sectors/comercio-1280.webp 1280w',
          mobileSrc: '/images/sectors/comercio-mobile-640.webp',
          alt: 'Freight on pallets and shipping containers',
        },
        title: 'International trade and raw materials',
        description:
          'We bring together import, export, supply and trading operations, with technical, contractual and regulatory review for each initiative.',
      },
      {
        id: 'pesca',
        category: 'pesca',
        index: 'SECTOR / 06',
        image: {
          src: '/images/sectors/pesca-1280.webp',
          srcSet: '/images/sectors/pesca-640.webp 640w, /images/sectors/pesca-1280.webp 1280w',
          mobileSrc: '/images/sectors/pesca-mobile-640.webp',
          alt: 'Fresh fish on ice in a plastic crate',
        },
        title: 'Fishing',
        description:
          'We bring together commercial initiatives in fishing, processing and the cold chain, with technical, contractual and regulatory review for each case.',
      },
      {
        id: 'agroindustria',
        category: 'agroindustria',
        index: 'SECTOR / 07',
        image: {
          src: '/images/sectors/agroindustria-1280.webp',
          srcSet: '/images/sectors/agroindustria-640.webp 640w, /images/sectors/agroindustria-1280.webp 1280w',
          mobileSrc: '/images/sectors/agroindustria-mobile-640.webp',
          alt: 'Hass avocados in a crate beside a sorting line',
        },
        title: 'Agribusiness',
        description:
          'We bring together initiatives to process, prepare and market agricultural products, with technical, contractual and regulatory review in each case.',
      },
    ],
    cardAction: 'Discuss this sector with us',
    disclaimer:
      'Our team brings professional experience and practical knowledge in the sectors shown. We apply that experience to initiatives in other areas of business according to each project’s objectives.',
    technologyCapability: {
      eyebrow: 'TECHNOLOGY',
      heading: {
        lead: 'Technology development',
        emphasis: 'for business needs.',
      },
      description:
        'We develop custom business software, integrate systems and automate processes as parts of a unified business solution. We apply artificial intelligence to specific tasks, such as information retrieval, according to each organization’s objectives and with attention to the Peruvian business context.',
      image: {
        src: '/images/technology-development-automation-ai.png',
        webpSrc: '/images/technology-development-automation-ai.webp',
        alt: 'Conceptual scene of a person developing software alongside code, an automated workflow interface and artificial intelligence features.',
        width: 1448,
        height: 1086,
      },
    },
    teamExperience: {
      heading: 'Experience that brings perspective',
      description:
        'Our team combines professional experience across all the sectors presented. Its members bring broad, practical knowledge of different business activities in Peru. This cross-sector perspective helps us connect companies, investors and owners of initiatives in the country.',
    },
    cta: {
      eyebrow: 'STRATEGIC PROJECTS AND TRANSACTIONS IN PERU',
      heading: 'What strategic transaction would you like to bring together?',
      description:
        'Let’s talk about projects, partnerships and business initiatives in Peru.',
      actionLabel: 'Tell us about your initiative',
      actionHref: commercialPageRoutes.contact.en,
    },
  },
  comoTrabajamos: {
    metadata: {
      title: 'How We Work | POWERFUL',
      description: 'The principles that guide POWERFUL’s relationships with companies, investors, partners and representatives of initiatives in Peru.',
    },
    hero: {
      eyebrow: 'WORKING RELATIONSHIPS',
      heading: {
        lead: 'Relationships',
        emphasis: 'with purpose.',
      },
      lede:
        'Conversations bring together objectives, responsibilities and scope agreed by the parties for each relationship.',
      pageNumber: '05',
    },
    process: {
      eyebrow: 'COLLABORATION PRINCIPLES',
      heading: {
        lead: 'Relationships built on',
        emphasis: 'clear agreements.',
      },
      description:
        'Every relationship is guided by shared objectives, defined roles and clear agreements between the parties.',
      steps: [
        {
          number: '01',
          title: 'Shared objectives',
          description: 'Each party states what it seeks from a business relationship in Peru.',
        },
        {
          number: '02',
          title: 'Clear roles',
          description: 'Each participant’s role is defined clearly.',
        },
        {
          number: '03',
          title: 'Responsibilities',
          description: 'Responsibilities reflect each party’s authority.',
        },
        {
          number: '04',
          title: 'Clear agreements',
          description: 'The scope of the relationship is set out in the relevant agreements.',
        },
        {
          number: '05',
          title: 'Responsible collaboration',
          description: 'The parties work together under the responsibilities and conditions they agree on.',
        },
      ],
    },
    responsibilities: {
      eyebrow: 'RELATIONSHIPS WITH CLEAR RESPONSIBILITIES',
      heading: {
        lead: 'Conditions are',
        emphasis: 'agreed.',
      },
      paragraphs: [
        'POWERFUL’s role is defined for each relationship. If it includes representation or direct participation, we agree on the relevant authority and responsibilities before moving forward.',
        'The outcomes of each initiative, including approvals, awards, liquidity or returns, depend on project conditions and the decisions of its participants.',
      ],
    },
    cta: {
      eyebrow: 'LET’S GET STARTED',
      heading: 'Tell us what you are looking for in Peru.',
      description:
        'Ask us about entering the market, investment, partnerships or presenting a Peruvian project.',
      actionLabel: 'Contact us on WhatsApp',
      actionHref: commercialPageRoutes.contact.en,
    },
  },
} satisfies BusinessPages;

const contact = {
  metadata: {
    title: 'Contact | POWERFUL',
    description: 'Contact us about expansion, investment, partnership and business project initiatives connected to Peru.',
  },
  hero: {
    eyebrow: 'LET’S START A CONVERSATION',
    heading: {
      lead: 'Good business starts',
      emphasis: 'with understanding.',
    },
    lede:
      'Tell us about a business expansion, investment, partnership or Peruvian project initiative. We work with companies, investors, partners and representatives of initiatives connected to the country.',
    pageNumber: '06',
  },
  aside: {
    eyebrow: 'BUSINESS CONTACT',
    heading: { lead: 'Tell us your', emphasis: 'objective.' },
    description:
      'Let’s talk about business expansion, investment, partnerships or Peruvian initiatives. Share general context about your company or inquiry; please do not send contracts, passwords, personal documents or confidential financial information.',
    steps: [
      { number: '01 /', description: 'Open WhatsApp with an introductory message related to your inquiry.' },
      { number: '02 /', description: 'Review and edit the text to describe your objective in your own words.' },
      { number: '03 /', description: 'Send the message when it is ready; the website does not send it for you.' },
    ],
  },
  whatsapp: {
    eyebrow: 'DIRECT CONTACT',
    heading: 'Let’s talk on WhatsApp',
    description:
      'Briefly tell us what you are looking for and share context about your company or initiative.',
    phone: '+51 947 982 249',
    buttonLabel: 'Message us on WhatsApp',
    note: 'WhatsApp will open with a message you can review and edit before sending.',
    defaultMessage:
      'Hello, POWERFUL team. I found you through your website and would like to discuss a business inquiry.',
    messages: {
      expansion:
        'Hello, POWERFUL team. I found you through your website. My company is considering entering Peru, and I would like to discuss our objective.',
      inversionista:
        'Hello, POWERFUL team. I found you through your website. I am looking to invest in or partner with Peruvian projects and would like to discuss the options.',
      proyecto:
        'Hello, POWERFUL team. I found you through your website. I represent a Peruvian initiative and would like to share a general overview.',
      representacion:
        'Hello, POWERFUL team. I found you through your website. I am looking for business representation in Peru and would like to discuss my objective.',
      alianza:
        'Hello, POWERFUL team. I found you through your website. I would like to propose a business partnership and discuss the context.',
      otro:
        'Hello, POWERFUL team. I found you through your website and would like to discuss a business inquiry.',
    },
  },
} satisfies ContactPage;

export const commercialCatalogEn = {
  home,
  businessPages,
  contact,
  shell: siteShellEn,
} satisfies CommercialCatalog;
