export const siteNavigation = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros.html' },
  { label: 'Qué hacemos', href: '/servicios.html' },
  { label: 'Sectores', href: '/sectores.html' },
  { label: 'Cómo trabajamos', href: '/como-trabajamos.html' },
] as const;

export const footerSections = [
  {
    heading: 'EXPLORAR',
    links: [
      { label: 'Nosotros', href: '/nosotros.html' },
      { label: 'Qué hacemos', href: '/servicios.html' },
      { label: 'Sectores', href: '/sectores.html' },
      { label: 'Cómo trabajamos', href: '/como-trabajamos.html' },
    ],
  },
  {
    heading: 'CONTACTO',
    links: [
      { label: 'Empresas que evalúan ingresar al Perú', href: '/contacto.html?tipo=expansion' },
      { label: 'Inversionistas y socios', href: '/contacto.html?tipo=inversionista' },
      { label: 'Representantes de proyectos peruanos', href: '/contacto.html?tipo=proyecto' },
      { label: 'Alianzas comerciales', href: '/contacto.html?tipo=alianza' },
    ],
  },
  {
    heading: 'INFORMACIÓN',
    links: [
      { label: 'Privacidad', href: '/privacidad.html' },
      { label: 'Condiciones', href: '/terminos.html' },
    ],
  },
] as const;

export interface HomePageEs {
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

export const homePageEs = {
  hero: {
    eyebrow: 'OPERACIONES ESTRATÉGICAS',
    heading: {
      lead: 'Conectamos capital,',
      emphasis: 'proyectos',
      trailing: 'y negocios.',
    },
    description:
      'Originamos e impulsamos operaciones estratégicas en el Perú con la participación de empresas, inversionistas y socios nacionales e internacionales.',
    actions: [
      {
        label: 'Conversemos sobre tu iniciativa',
        href: '/contacto.html',
        variant: 'gold',
      },
      {
        label: 'Busco invertir o asociarme',
        href: '/contacto.html?tipo=inversionista',
        variant: 'outline',
      },
    ],
    proofPoints: [
      'ALCANCE NACIONAL',
      'MAYOR PRESENCIA EN EL NORTE Y NORORIENTE',
      'INVERSIÓN PERUANA E INTERNACIONAL',
    ],
    mapAlt: 'Ilustración referencial: contornos de América, Europa, África, Asia y Oceanía; Perú resaltado en Sudamérica, con conexiones visuales hacia los demás continentes.',
  },
  intro: {
    index: '01 / NUESTRA PROPUESTA',
    lead: 'Cada relación parte de',
    emphasis: 'roles, alcances y acuerdos claros.',
  },
  servicesPreview: {
    eyebrow: 'NUESTRO ENFOQUE',
    heading: {
      lead: 'Representación empresarial,',
      emphasis: 'articulación de proyectos, inversión y alianzas.',
    },
    description:
      'La articulación puede involucrar actores de los sectores público y privado, según el alcance de cada iniciativa.',
    cardAction: 'Explorar servicio',
    cards: [
      {
        number: '01',
        icon: 'briefcase',
        title: 'Representación empresarial en Perú',
        description:
          'Impulsamos relaciones de representación empresarial y articulación comercial para desarrollar negocios en el Perú.',
        href: '/servicios.html',
      },
      {
        number: '02',
        icon: 'globe',
        title: 'Inversión y alianzas',
        description:
          'Articulamos iniciativas de inversión y alianzas con objetivos y acuerdos definidos para cada proyecto.',
        href: '/servicios.html',
      },
      {
        number: '03',
        icon: 'layers',
        title: 'Articulación de iniciativas peruanas',
        description:
          'Articulamos proyectos empresariales conforme a los objetivos de sus participantes y al alcance acordado.',
        href: '/servicios.html',
      },
    ],
  },
  sectorHighlight: {
    eyebrow: 'ÁMBITOS DE ACTUACIÓN',
    context: 'PERÚ / VISIÓN MULTISECTORIAL',
    heading: {
      lead: 'Experiencia en',
      secondLead: 'diversos sectores',
      emphasis: 'del Perú.',
    },
    description:
      'Los sectores destacados reflejan la diversidad de actividades empresariales presentes en distintas regiones del Perú.',
    sectors: [
      { label: 'Minería y minerales', href: '/sectores.html#mineria' },
      { label: 'Energía e hidrocarburos', href: '/sectores.html#energia' },
      { label: 'Infraestructura', href: '/sectores.html#infraestructura' },
      { label: 'Inmobiliario', href: '/sectores.html#inmobiliario' },
      { label: 'Comercio exterior', href: '/sectores.html#comercio' },
      { label: 'Pesca', href: '/sectores.html#pesca' },
      { label: 'Agroindustria', href: '/sectores.html#agroindustria' },
    ],
    linkLabel: 'Ver todos los sectores',
    linkHref: '/sectores.html',
  },
  principles: {
    eyebrow: 'UN ENFOQUE CON PROPÓSITO',
    heading: {
      lead: 'Iniciativa peruana.',
      emphasis: 'Proyectos en todo el país.',
    },
    description:
      'Nuestra red tiene alcance nacional, con mayor presencia en el norte y nororiente.',
    linkLabel: 'Cómo trabajamos',
    linkHref: '/como-trabajamos.html',
    diagramSource: 'Empresas en expansión',
    diagramSourceDetail: 'Con presencia internacional',
    diagramRole: 'Representación · articulación · participación',
    diagramDestination: 'Proyectos peruanos',
    diagramDestinationDetail: 'En todo el país',
    diagramNote: 'Red nacional con vínculos internacionales.',
  },
  processPreview: {
    eyebrow: 'PRINCIPIOS DE COLABORACIÓN',
    heading: {
      lead: 'Relaciones con propósito.',
      emphasis: 'Acuerdos con claridad.',
    },
    description:
      'Las conversaciones parten de objetivos compartidos y de responsabilidades y alcances definidos entre las partes.',
    steps: [
      {
        number: '01',
        title: 'Objetivos compartidos',
        description: 'Cada relación parte del propósito expresado por las partes.',
      },
      {
        number: '02',
        title: 'Roles claros',
        description: 'La función de cada participante se define con claridad.',
      },
      {
        number: '03',
        title: 'Responsabilidades',
        description: 'Las responsabilidades corresponden a las facultades de cada parte.',
      },
      {
        number: '04',
        title: 'Acuerdos claros',
        description: 'El alcance de la relación se establece mediante los acuerdos correspondientes.',
      },
    ],
  },
  miniCta: {
    eyebrow: 'INICIATIVAS EMPRESARIALES EN EL PERÚ',
    heading: '¿Qué proyecto o negocio quieres impulsar?',
    description:
      'Conversemos sobre representación, inversión, alianzas y proyectos empresariales en el Perú.',
    actionLabel: 'Conversemos sobre tu iniciativa',
    actionHref: '/contacto.html',
  },
} as const satisfies HomePageEs;

export interface TextHeadingEs {
  lead: string;
  emphasis: string;
}

export interface PageMetadataEs {
  title: string;
  description: string;
}

export interface SubpageHeroEs {
  eyebrow: string;
  heading: TextHeadingEs;
  lede: string;
  pageNumber?: string;
}

export interface MiniCtaEs {
  eyebrow: string;
  heading: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}

export interface ServiceDetailEs {
  index: string;
  heading: TextHeadingEs;
  description: string;
  icon: 'globe' | 'briefcase' | 'layers' | 'compass';
}

export type SectorCategoryEs =
  | 'mineria'
  | 'energia'
  | 'infraestructura'
  | 'inmobiliario'
  | 'comercio'
  | 'pesca'
  | 'agroindustria';

export interface SectorFilterEs {
  value: 'all' | SectorCategoryEs;
  label: string;
}

export interface SectorCardEs {
  id: SectorCategoryEs;
  category: SectorCategoryEs;
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

export interface TechnologyCapabilityEs {
  eyebrow: string;
  heading: TextHeadingEs;
  description: string;
  image: {
    src: string;
    webpSrc: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface ProcessStepEs {
  number: string;
  title: string;
  description: string;
}

export interface BusinessPagesEs {
  nosotros: {
    metadata: PageMetadataEs;
    hero: SubpageHeroEs;
    profile: {
      eyebrow: string;
      heading: TextHeadingEs;
      paragraphs: [string, string];
      linkLabel: string;
      linkHref: string;
    };
    approach: {
      eyebrow: string;
      heading: TextHeadingEs;
      description: string;
      values: {
        index: string;
        title: string;
        description: string;
      }[];
    };
    transparency: {
      eyebrow: string;
      heading: TextHeadingEs;
      description: string;
    };
  };
  servicios: {
    metadata: PageMetadataEs;
    hero: SubpageHeroEs;
    details: ServiceDetailEs[];
    notice: {
      eyebrow: string;
      heading: string;
      description: string;
    };
  };
  sectores: {
    metadata: PageMetadataEs;
    hero: SubpageHeroEs;
    controls: {
      eyebrow: string;
      heading: TextHeadingEs;
      ariaLabel: string;
      filters: SectorFilterEs[];
    };
    cards: SectorCardEs[];
    cardAction: string;
    disclaimer: string;
    technologyCapability: TechnologyCapabilityEs;
    teamExperience: {
      heading: string;
      description: string;
    };
    cta: MiniCtaEs;
  };
  comoTrabajamos: {
    metadata: PageMetadataEs;
    hero: SubpageHeroEs;
    process: {
      eyebrow: string;
      heading: TextHeadingEs;
      description: string;
      steps: ProcessStepEs[];
    };
    responsibilities: {
      eyebrow: string;
      heading: TextHeadingEs;
      paragraphs: [string, string];
    };
    cta: MiniCtaEs;
  };
}

export const businessPagesEs = {
  nosotros: {
    metadata: {
      title: 'Nosotros | POWERFUL',
      description: 'Iniciativa peruana que origina e impulsa operaciones estratégicas en el Perú junto a empresas, inversionistas y socios nacionales e internacionales.',
    },
    hero: {
      eyebrow: 'CONOCE POWERFUL',
      heading: {
        lead: 'Una iniciativa peruana con',
        emphasis: 'alcance nacional.',
      },
      lede:
        'Articulamos iniciativas de expansión empresarial, inversión y alianzas vinculadas al Perú.',
      pageNumber: '02',
    },
    profile: {
      eyebrow: 'QUIÉNES SOMOS',
      heading: {
        lead: 'Un punto de encuentro para',
        emphasis: 'nuevos negocios.',
      },
      paragraphs: [
        'Desde el Perú, originamos e impulsamos proyectos empresariales junto a empresas, inversionistas y socios peruanos e internacionales.',
        'También articulamos relaciones con titulares y representantes de iniciativas peruanas.',
      ],
      linkLabel: 'Ver qué hacemos',
      linkHref: '/servicios.html',
    },
    approach: {
      eyebrow: 'NUESTRO ENFOQUE',
      heading: {
        lead: 'Relaciones guiadas por',
        emphasis: 'claridad y acuerdos.',
      },
      description:
        'El alcance de proyectos y contactos es nacional, con mayor presencia de la red en el norte y nororiente.',
      values: [
        {
          index: '01 /',
          title: 'Claridad',
          description:
            'Acordar objetivos, alcances y responsabilidades para cada relación.',
        },
        {
          index: '02 /',
          title: 'Relaciones',
          description:
            'Promover vínculos comerciales con objetivos claros y compartidos.',
        },
        {
          index: '03 /',
          title: 'Participación',
          description:
            'Definimos nuestra participación según el alcance y las responsabilidades acordadas para cada iniciativa.',
        },
      ],
    },
    transparency: {
      eyebrow: 'TRANSPARENCIA',
      heading: {
        lead: 'La confianza se construye con',
        emphasis: 'hechos verificables.',
      },
      description:
        'Nuestro equipo aporta experiencia profesional y conocimiento práctico en diversas actividades empresariales del Perú. Las referencias a proyectos, alianzas y resultados de POWERFUL se comparten con respaldo documental y las autorizaciones correspondientes.',
    },
  },
  servicios: {
    metadata: {
      title: 'Qué hacemos | POWERFUL',
      description: 'Representación y articulación empresarial para iniciativas de expansión, inversión y alianzas en el Perú.',
    },
    hero: {
      eyebrow: 'QUÉ HACEMOS',
      heading: {
        lead: 'Originamos y articulamos operaciones',
        emphasis: 'estratégicas en el Perú.',
      },
      lede:
        'Impulsamos iniciativas de expansión, inversión y alianzas vinculadas al Perú. Definimos con cada parte los objetivos, el alcance y los acuerdos para avanzar.',
      pageNumber: '03',
    },
    details: [
      {
        index: '01 / REPRESENTACIÓN',
        heading: {
          lead: 'Representación',
          emphasis: 'empresarial en Perú.',
        },
        description:
          'Articulamos la representación empresarial y las relaciones comerciales de iniciativas vinculadas al Perú. Acordamos con cada parte las facultades, responsabilidades y alcance del encargo.',
        icon: 'briefcase',
      },
      {
        index: '02 / ARTICULACIÓN',
        heading: {
          lead: 'Articulación de',
          emphasis: 'proyectos y alianzas.',
        },
        description:
          'Articulamos iniciativas peruanas con empresas, inversionistas y socios, conforme a los objetivos y acuerdos de cada parte. Algunas iniciativas se difunden por entidades del Estado.',
        icon: 'globe',
      },
      {
        index: '03 / INVERSIÓN Y PARTICIPACIÓN',
        heading: {
          lead: 'Esquemas de inversión',
          emphasis: 'y participación.',
        },
        description:
          'Articulamos opciones de inversión y participación con inversionistas y socios. Las condiciones de financiamiento o participación se definen para cada iniciativa y de común acuerdo.',
        icon: 'layers',
      },
      {
        index: '04 / COMERCIO',
        heading: {
          lead: 'Relaciones de',
          emphasis: 'comercio exterior.',
        },
        description:
          'Articulamos iniciativas de importación, exportación, comercialización y suministro de bienes o materias primas, conforme a las capacidades y requisitos de cada caso.',
        icon: 'compass',
      },
    ],
    notice: {
      eyebrow: 'NUESTRO ALCANCE',
      heading: 'Cómo comienza cada colaboración',
      description:
        'Iniciamos cada colaboración definiendo con las partes los objetivos, el alcance y las condiciones para avanzar.',
    },
  },
  sectores: {
    metadata: {
      title: 'Sectores | POWERFUL',
      description: 'Experiencia multisectorial del equipo en diversos sectores del Perú, junto con desarrollo tecnológico aplicado.',
    },
    hero: {
      eyebrow: 'EXPERIENCIA MULTISECTORIAL',
      heading: {
        lead: 'Una perspectiva',
        emphasis: 'multisectorial.',
      },
      lede:
        'Articulamos relaciones comerciales, iniciativas de inversión y alianzas en distintos sectores del Perú. Nuestra red tiene mayor presencia en el norte y nororiente.',
      pageNumber: '04',
    },
    controls: {
      eyebrow: 'ÁMBITOS DE ACTUACIÓN',
      heading: {
        lead: 'Explora los',
        emphasis: 'sectores.',
      },
      ariaLabel: 'Filtrar sectores',
      filters: [
        { value: 'all', label: 'Todos' },
        { value: 'mineria', label: 'Minería' },
        { value: 'energia', label: 'Energía' },
        { value: 'infraestructura', label: 'Construcción' },
        { value: 'inmobiliario', label: 'Inmobiliario' },
        { value: 'comercio', label: 'Comercio exterior' },
        { value: 'pesca', label: 'Pesca' },
        { value: 'agroindustria', label: 'Agroindustria' },
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
          alt: 'Mineral de cobre y fragmentos sobre una mesa de trabajo',
        },
        title: 'Minería y minerales',
        description:
          'Articulamos iniciativas en minería, minerales y materias primas, con revisión técnica, contractual y normativa para cada caso.',
      },
      {
        id: 'energia',
        category: 'energia',
        index: 'SECTOR / 02',
        image: {
          src: '/images/sectors/energia-1280.webp',
          srcSet: '/images/sectors/energia-640.webp 640w, /images/sectors/energia-1280.webp 1280w',
          mobileSrc: '/images/sectors/energia-mobile-640.webp',
          alt: 'Detalle de una brida y tuberías industriales',
        },
        title: 'Energía e hidrocarburos',
        description:
          'Conectamos iniciativas de generación eléctrica, petróleo y gas con socios y esquemas de participación empresarial.',
      },
      {
        id: 'infraestructura',
        category: 'infraestructura',
        index: 'SECTOR / 03',
        image: {
          src: '/images/sectors/infraestructura-1280.webp',
          srcSet: '/images/sectors/infraestructura-640.webp 640w, /images/sectors/infraestructura-1280.webp 1280w',
          mobileSrc: '/images/sectors/infraestructura-mobile-640.webp',
          alt: 'Unión de perfiles de acero, pernos y estructura de concreto',
        },
        title: 'Infraestructura y construcción',
        description:
          'Proyectos, suministro de materiales, ejecución y relaciones comerciales para infraestructura y obras.',
      },
      {
        id: 'inmobiliario',
        category: 'inmobiliario',
        index: 'SECTOR / 04',
        image: {
          src: '/images/sectors/inmobiliario-1280.webp',
          srcSet: '/images/sectors/inmobiliario-640.webp 640w, /images/sectors/inmobiliario-1280.webp 1280w',
          mobileSrc: '/images/sectors/inmobiliario-mobile-640.webp',
          alt: 'Edificios residenciales con balcones y áreas verdes',
        },
        title: 'Inmobiliario y bienes raíces',
        description:
          'Proyectos empresariales relacionados con activos y negocios del mercado inmobiliario peruano.',
      },
      {
        id: 'comercio',
        category: 'comercio',
        index: 'SECTOR / 05',
        image: {
          src: '/images/sectors/comercio-1280.webp',
          srcSet: '/images/sectors/comercio-640.webp 640w, /images/sectors/comercio-1280.webp 1280w',
          mobileSrc: '/images/sectors/comercio-mobile-640.webp',
          alt: 'Carga sobre pallets y contenedores de transporte',
        },
        title: 'Comercio exterior y materias primas',
        description:
          'Articulamos operaciones de importación, exportación, suministro y comercialización, con revisión técnica, contractual y normativa para cada iniciativa.',
      },
      {
        id: 'pesca',
        category: 'pesca',
        index: 'SECTOR / 06',
        image: {
          src: '/images/sectors/pesca-1280.webp',
          srcSet: '/images/sectors/pesca-640.webp 640w, /images/sectors/pesca-1280.webp 1280w',
          mobileSrc: '/images/sectors/pesca-mobile-640.webp',
          alt: 'Pescados frescos sobre hielo en una caja plástica',
        },
        title: 'Pesca',
        description:
          'Articulamos iniciativas comerciales en pesca, procesamiento y cadena de frío, con revisión técnica, contractual y normativa para cada caso.',
      },
      {
        id: 'agroindustria',
        category: 'agroindustria',
        index: 'SECTOR / 07',
        image: {
          src: '/images/sectors/agroindustria-1280.webp',
          srcSet: '/images/sectors/agroindustria-640.webp 640w, /images/sectors/agroindustria-1280.webp 1280w',
          mobileSrc: '/images/sectors/agroindustria-mobile-640.webp',
          alt: 'Paltas Hass en una caja frente a una línea de selección',
        },
        title: 'Agroindustria',
        description:
          'Articulamos iniciativas para transformar, acondicionar y comercializar productos agrícolas, con revisión técnica, contractual y normativa en cada caso.',
      },
    ],
    cardAction: 'Conversemos sobre este sector',
    disclaimer:
      'Nuestro equipo aporta experiencia profesional y conocimiento práctico en los sectores presentados, y pone esa capacidad al servicio de iniciativas en otros ámbitos empresariales, según los objetivos de cada proyecto.',
    technologyCapability: {
      eyebrow: 'ÁMBITO TECNOLÓGICO',
      heading: {
        lead: 'Desarrollo tecnológico',
        emphasis: 'para necesidades empresariales.',
      },
      description:
        'Desarrollamos software de gestión a medida; integramos sistemas y automatizamos procesos como partes de una misma solución empresarial. Aplicamos inteligencia artificial a tareas concretas, como consultar información, según los objetivos de cada organización y con atención al contexto empresarial peruano.',
      image: {
        src: '/images/technology-development-automation-ai.png',
        webpSrc: '/images/technology-development-automation-ai.webp',
        alt: 'Escena conceptual de una persona desarrollando software frente a código y una interfaz con un flujo automatizado y funciones de inteligencia artificial.',
        width: 1448,
        height: 1086,
      },
    },
    teamExperience: {
      heading: 'Experiencia que aporta perspectiva',
      description:
        'Nuestro equipo combina experiencia profesional en todos los sectores que presentamos. Sus trayectorias reúnen un conocimiento amplio y práctico de distintas actividades empresariales del Perú. Esa mirada transversal aporta criterio para vincular a empresas, inversionistas y titulares de iniciativas en el país.',
    },
    cta: {
      eyebrow: 'PROYECTOS Y OPERACIONES ESTRATÉGICAS EN PERÚ',
      heading: '¿Qué operación estratégica quieres articular?',
      description:
        'Conversemos sobre proyectos, alianzas e iniciativas empresariales en el Perú.',
      actionLabel: 'Conversemos sobre tu iniciativa',
      actionHref: '/contacto.html',
    },
  },
  comoTrabajamos: {
    metadata: {
      title: 'Cómo trabajamos | POWERFUL',
      description: 'Conoce los principios que guían las relaciones de POWERFUL con empresas, inversionistas, socios y representantes de iniciativas en Perú.',
    },
    hero: {
      eyebrow: 'RELACIONES DE TRABAJO',
      heading: {
        lead: 'Relaciones',
        emphasis: 'con propósito.',
      },
      lede:
        'Las conversaciones reúnen objetivos, responsabilidades y alcances que las partes acuerdan para cada relación.',
      pageNumber: '05',
    },
    process: {
      eyebrow: 'PRINCIPIOS DE COLABORACIÓN',
      heading: {
        lead: 'Relaciones con',
        emphasis: 'acuerdos claros.',
      },
      description:
        'Cada relación se guía por objetivos compartidos, roles definidos y acuerdos claros entre las partes.',
      steps: [
        {
          number: '01',
          title: 'Objetivos compartidos',
          description:
            'Cada parte expresa el propósito que busca en una relación empresarial en el Perú.',
        },
        {
          number: '02',
          title: 'Roles claros',
          description:
            'La función de cada participante se define con claridad.',
        },
        {
          number: '03',
          title: 'Responsabilidades',
          description:
            'Las responsabilidades corresponden a las facultades de cada parte.',
        },
        {
          number: '04',
          title: 'Acuerdos claros',
          description:
            'El alcance de la relación se establece mediante los acuerdos correspondientes.',
        },
        {
          number: '05',
          title: 'Colaboración responsable',
          description:
            'Las partes colaboran conforme a las responsabilidades y condiciones que acuerdan.',
        },
      ],
    },
    responsibilities: {
      eyebrow: 'RELACIONES CON RESPONSABILIDADES CLARAS',
      heading: {
        lead: 'Las condiciones se',
        emphasis: 'acuerdan.',
      },
      paragraphs: [
        'El rol de POWERFUL se define para cada relación. Si incluye representación o participación directa, acordamos las facultades y responsabilidades correspondientes antes de avanzar.',
        'Los resultados de cada iniciativa, incluidas aprobaciones, adjudicaciones, liquidez o retornos, dependen de las condiciones del proyecto y de las decisiones de sus participantes.',
      ],
    },
    cta: {
      eyebrow: 'EMPECEMOS',
        heading: 'Cuéntanos qué buscas en el Perú.',
      description:
          'Puedes consultar sobre ingreso empresarial, inversión, alianzas o presentar un proyecto peruano.',
        actionLabel: 'Contactar por WhatsApp',
      actionHref: '/contacto.html',
    },
  },
} as const satisfies BusinessPagesEs;

export type ContactReasonEs =
  | 'expansion'
  | 'inversionista'
  | 'proyecto'
  | 'representacion'
  | 'alianza'
  | 'otro';

export interface ContactPageEs {
  metadata: PageMetadataEs;
  hero: SubpageHeroEs;
  aside: {
    eyebrow: string;
    heading: TextHeadingEs;
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
    messages: Record<ContactReasonEs, string>;
  };
}

export interface LegalPageEs {
  metadata: PageMetadataEs;
  hero: SubpageHeroEs;
  alert: string;
  sections: { heading: string; paragraph: string }[];
}

export interface LegalPagesEs {
  privacidad: LegalPageEs;
  terminos: LegalPageEs;
}

export interface NotFoundPageEs {
  metadata: PageMetadataEs;
  hero: SubpageHeroEs;
  action: { label: string; href: string };
}

export const contactPageEs = {
  metadata: {
    title: 'Contacto | POWERFUL',
    description: 'Contacto para iniciativas de expansión, inversión, alianzas y proyectos empresariales vinculados al Perú.',
  },
  hero: {
    eyebrow: 'INICIEMOS UNA CONVERSACIÓN',
    heading: {
      lead: 'Un buen negocio comienza',
      emphasis: 'por entendernos.',
    },
    lede:
      'Cuéntanos sobre una iniciativa de expansión empresarial, inversión, alianza o proyecto peruano. Trabajamos con empresas, inversionistas, socios y representantes de iniciativas vinculadas al país.',
    pageNumber: '06',
  },
  aside: {
    eyebrow: 'CONTACTO CORPORATIVO',
    heading: { lead: 'Cuéntanos tu', emphasis: 'objetivo.' },
    description:
      'Conversemos sobre expansión empresarial, inversión, alianzas o iniciativas peruanas. Comparte el contexto general de tu empresa o consulta; evita enviar contratos, contraseñas, documentos personales o información financiera confidencial.',
    steps: [
      { number: '01 /', description: 'Abre WhatsApp con un mensaje inicial relacionado con el motivo de tu consulta.' },
      { number: '02 /', description: 'Revisa y edita el texto para contar tu objetivo con tus propias palabras.' },
      { number: '03 /', description: 'Envía el mensaje cuando esté listo; el sitio no lo envía por ti.' },
    ],
  },
  whatsapp: {
    eyebrow: 'CONTACTO DIRECTO',
    heading: 'Conversemos por WhatsApp',
    description:
      'Cuéntanos brevemente qué buscas y el contexto de tu empresa o iniciativa.',
    phone: '+51 947 982 249',
    buttonLabel: 'Escríbenos por WhatsApp',
    note: 'WhatsApp se abrirá con un mensaje que podrás revisar y editar antes de enviarlo.',
    defaultMessage:
      'Hola, equipo POWERFUL. Les contacto desde su web y quisiera conversar sobre una consulta empresarial.',
    messages: {
      expansion:
        'Hola, equipo POWERFUL. Les contacto desde su web. Mi empresa está evaluando ingresar al Perú y quisiera conversar sobre nuestro objetivo.',
      inversionista:
        'Hola, equipo POWERFUL. Les contacto desde su web. Busco invertir o asociarme a proyectos peruanos y quisiera conversar sobre las opciones.',
      proyecto:
        'Hola, equipo POWERFUL. Les contacto desde su web. Represento una iniciativa peruana y quisiera compartirles un resumen general.',
      representacion:
        'Hola, equipo POWERFUL. Les contacto desde su web. Busco representación empresarial en el Perú y quisiera conversar sobre mi objetivo.',
      alianza:
        'Hola, equipo POWERFUL. Les contacto desde su web. Quisiera proponer una alianza comercial y conversar sobre el contexto.',
      otro:
        'Hola, equipo POWERFUL. Les contacto desde su web y quisiera conversar sobre una consulta empresarial.',
    },
  },
} as const satisfies ContactPageEs;

export const legalPagesEs = {
  privacidad: {
    metadata: {
      title: 'Privacidad | POWERFUL',
      description: 'Información sobre el funcionamiento actual del sitio y sus vías de contacto.',
    },
    hero: {
      eyebrow: 'AVISO DE PRIVACIDAD',
      heading: { lead: 'Aviso de', emphasis: 'privacidad.' },
      lede:
        'Este texto está incompleto y no ha sido aprobado legalmente; no constituye un aviso de privacidad completo.',
      pageNumber: '07',
    },
    alert: 'AVISO: Texto incompleto y no aprobado legalmente. No constituye un documento legal completo.',
    sections: [
      {
        heading: 'Funcionamiento del sitio',
        paragraph:
          'El sitio es estático y no incluye un formulario que envíe o almacene consultas. El enlace de contacto abre WhatsApp con un texto prellenado; puedes revisarlo o editarlo y solo se enviará si eliges hacerlo dentro de WhatsApp. POWERFUL no recibe ese texto mediante un formulario de la web.',
      },
      {
        heading: 'Datos técnicos de conexión',
        paragraph:
          'La infraestructura que sirve el sitio puede procesar datos técnicos necesarios para atender las conexiones. No se ha confirmado qué proveedor interviene, qué registros conserva ni por cuánto tiempo.',
      },
      {
        heading: 'Mensajes por WhatsApp',
        paragraph:
          'Si decides enviar el mensaje prellenado, la comunicación se cursa por WhatsApp. El número mostrado en el sitio no está confirmado como canal oficial para solicitudes de privacidad o ejercicio de derechos. Evita compartir información confidencial.',
      },
      {
        heading: 'Información por completar',
        paragraph:
          'Este texto aún no identifica al responsable del tratamiento ni detalla todas las finalidades, destinatarios, plazos de conservación o un canal confirmado para ejercer derechos. Esos datos requieren confirmación y revisión antes de considerar completo el aviso.',
      },
    ],
  },
  terminos: {
    metadata: {
      title: 'Condiciones | POWERFUL',
      description: 'Información general sobre el uso de este sitio y sus vías de contacto.',
    },
    hero: {
      eyebrow: 'CONDICIONES DEL SITIO',
      heading: { lead: 'Condiciones de', emphasis: 'uso.' },
      lede:
        'Este texto está incompleto y no ha sido aprobado legalmente; no constituye un documento de condiciones completo.',
      pageNumber: '08',
    },
    alert: 'AVISO: Texto incompleto y no aprobado legalmente. No constituye un documento legal completo.',
    sections: [
      {
        heading: 'Información del sitio',
        paragraph:
          'Este sitio estático presenta información general sobre POWERFUL, sus ámbitos de actuación y sus vías de contacto. La publicación de una iniciativa no confirma su disponibilidad ni establece por sí sola un encargo o compromiso; cada relación requiere acuerdos específicos entre las partes.',
      },
      {
        heading: 'Contacto',
        paragraph:
          'El enlace de contacto abre WhatsApp con un texto prellenado. El sitio no lo envía por ti: puedes revisarlo o editarlo y decides si lo envías desde esa aplicación.',
      },
      {
        heading: 'Materiales del sitio',
        paragraph:
          'Este documento no declara titularidad ni licencia sobre imágenes u otros materiales cuya autorización no se haya verificado.',
      },
    ],
  },
} as const satisfies LegalPagesEs;

export const notFoundPageEs = {
  metadata: {
    title: 'Página no encontrada | POWERFUL',
    description: 'No pudimos encontrar esta página',
  },
  hero: {
    eyebrow: '404 / NO ENCONTRADO',
    heading: { lead: 'Esta página no está', emphasis: 'disponible.' },
    lede: 'Vuelve al inicio o explora nuestros servicios.',
  },
  action: { label: 'Volver al inicio', href: '/' },
} as const satisfies NotFoundPageEs;
