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
      { label: 'Privacidad (borrador)', href: '/privacidad.html' },
      { label: 'Condiciones (borrador)', href: '/terminos.html' },
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
    eyebrow: 'INVERSIONES Y REPRESENTACIÓN EMPRESARIAL',
    heading: {
      lead: 'Tu empresa, con una',
      emphasis: 'contraparte local',
      trailing: 'en el Perú.',
    },
    description:
      'Para empresas y grupos con presencia internacional que evalúan ingresar al mercado peruano, exploramos posibles esquemas de representación y articulación comercial según cada caso. También conversamos con empresas, inversionistas y socios peruanos e internacionales interesados en proyectos del país. Nuestra red cubre todo el Perú, con mayor presencia en el norte y nororiente.',
    actions: [
      {
        label: 'Conversemos sobre tu ingreso al Perú',
        href: '/contacto.html?tipo=expansion',
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
    lead: 'Una contraparte para explorar el Perú:',
    emphasis: 'relaciones comerciales con alcance definido.',
  },
  servicesPreview: {
    eyebrow: 'NUESTRO ENFOQUE',
    heading: {
      lead: 'Tres vías para',
      emphasis: 'desarrollar relaciones.',
    },
    description:
      'Una vía para empresas que evalúan ingresar al Perú, otra para inversionistas y socios que exploran proyectos, y otra para titulares o representantes de iniciativas peruanas.',
    cardAction: 'Explorar servicio',
    cards: [
      {
        number: '01',
        icon: 'briefcase',
        title: 'Representación empresarial en Perú',
        description:
          'Conversamos con empresas y grupos con presencia internacional que evalúan ingresar al mercado peruano, para explorar representación y articulación comercial según cada caso.',
        href: '/servicios.html',
      },
      {
        number: '02',
        icon: 'globe',
        title: 'Inversión y alianzas',
        description:
          'Conversamos con inversionistas y socios interesados en proyectos del Perú.',
        href: '/servicios.html',
      },
      {
        number: '03',
        icon: 'layers',
        title: 'Articulación de iniciativas peruanas',
        description:
          'Las conversaciones con titulares o representantes de iniciativas peruanas se enmarcan en los objetivos y acuerdos de las partes.',
        href: '/servicios.html',
      },
    ],
  },
  sectorHighlight: {
    eyebrow: 'ÁMBITOS DE ACTUACIÓN',
    context: 'PERÚ / VISIÓN MULTISECTORIAL',
    heading: {
      lead: 'Sectores de interés',
      secondLead: 'para la actividad empresarial',
      emphasis: 'en el Perú.',
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
      'POWERFUL busca relacionarse primero con empresas internacionales que evalúan ingresar al Perú, y también con empresas, inversionistas y socios peruanos e internacionales interesados en proyectos en el país. Su red alcanza todo el Perú, con mayor presencia en el norte y nororiente.',
    linkLabel: 'Cómo trabajamos',
    linkHref: '/como-trabajamos.html',
    diagramSource: 'Empresas en expansión',
    diagramSourceDetail: 'Con presencia internacional',
    diagramRole: 'Representación · articulación · participación',
    diagramDestination: 'Proyectos peruanos',
    diagramDestinationDetail: 'En todo el país',
    diagramNote: 'Conexiones entre empresas, inversión e iniciativas en todo el país.',
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
    eyebrow: 'EXPANSIÓN EMPRESARIAL EN PERÚ',
    heading: '¿Tu empresa evalúa ingresar al mercado peruano?',
    description:
      'Conversemos sobre representación y articulación comercial. Si buscas invertir o asociarte a un proyecto peruano, elige esa ruta en el formulario.',
    actionLabel: 'Conversemos sobre tu ingreso al Perú',
    actionHref: '/contacto.html?tipo=expansion',
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
    teamExperience: {
      heading: string;
      description: string;
      note: string;
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
      description: 'Iniciativa peruana que conversa con empresas que evalúan ingresar al país e inversionistas interesados en proyectos peruanos.',
    },
    hero: {
      eyebrow: 'CONOCE POWERFUL',
      heading: {
        lead: 'Una iniciativa peruana con',
        emphasis: 'alcance nacional.',
      },
      lede:
        'Exploramos relaciones de representación y conversaciones de inversión o alianza vinculadas al Perú.',
      pageNumber: '02',
    },
    profile: {
      eyebrow: 'QUIÉNES SOMOS',
      heading: {
        lead: 'Un punto de encuentro para',
        emphasis: 'nuevos negocios.',
      },
      paragraphs: [
        'Nuestra prioridad son las empresas y grupos con presencia internacional que evalúan ingresar al mercado peruano.',
        'También conversamos con inversionistas y socios interesados en proyectos peruanos, así como con sus titulares y representantes.',
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
            'Evaluar un rol activo cuando el acuerdo de cada iniciativa lo permita.',
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
        'Distinguimos la experiencia profesional del equipo de la trayectoria corporativa de POWERFUL. Compartiremos antecedentes, proyectos, alianzas y resultados cuando estén documentados y autorizados.',
    },
  },
  servicios: {
    metadata: {
      title: 'Qué hacemos | POWERFUL',
      description: 'Representación y articulación comercial en Perú para empresas que evalúan ingresar al mercado peruano.',
    },
    hero: {
      eyebrow: 'QUÉ HACEMOS',
      heading: {
        lead: 'Exploramos relaciones',
        emphasis: 'empresariales en Perú.',
      },
      lede:
        'Conversamos sobre el ingreso de empresas al mercado peruano y posibles relaciones comerciales, de inversión o alianza. Cada alcance se define según los objetivos y acuerdos de las partes.',
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
          'Conversamos con empresas y grupos con presencia internacional que evalúan ingresar al Perú. Si una iniciativa requiere representación, acordamos previamente su alcance, facultades y responsabilidades.',
        icon: 'briefcase',
      },
      {
        index: '02 / ARTICULACIÓN',
        heading: {
          lead: 'Articulación de',
          emphasis: 'proyectos y alianzas.',
        },
        description:
          'Conversamos sobre iniciativas peruanas con empresas, inversionistas y socios, según los objetivos y acuerdos de cada parte. Algunas iniciativas se difunden por entidades del Estado.',
        icon: 'globe',
      },
      {
        index: '03 / INVERSIÓN Y PARTICIPACIÓN',
        heading: {
          lead: 'Esquemas de inversión',
          emphasis: 'y participación.',
        },
        description:
          'Exploramos posibles esquemas de inversión con inversionistas y socios. Las opciones de financiamiento o participación se evalúan según cada iniciativa y se definen de común acuerdo.',
        icon: 'layers',
      },
      {
        index: '04 / COMERCIO',
        heading: {
          lead: 'Relaciones de',
          emphasis: 'comercio exterior.',
        },
        description:
          'Conversamos sobre iniciativas de importación, exportación, comercialización y suministro de bienes o materias primas, según las capacidades y requisitos del caso.',
        icon: 'compass',
      },
    ],
    notice: {
      eyebrow: 'NUESTRO ALCANCE',
      heading: 'Cómo comienza cada colaboración',
      description:
        'Empezamos con una conversación para conocer tus objetivos y explorar posibilidades. Si hay afinidad, definimos juntos el alcance y las condiciones para avanzar.',
    },
  },
  sectores: {
    metadata: {
      title: 'Sectores | POWERFUL',
      description: 'Sectores de interés en Perú para empresas, inversionistas y socios; experiencia multisectorial del equipo.',
    },
    hero: {
      eyebrow: 'SECTORES DE INTERÉS',
      heading: {
        lead: 'Una perspectiva',
        emphasis: 'multisectorial.',
      },
      lede:
        'Exploramos relaciones comerciales, inversión y alianzas en distintos sectores del Perú. Nuestra red tiene mayor presencia en el norte y nororiente.',
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
          'Relaciones comerciales vinculadas con proyectos, minerales y materias primas, sujetas a análisis técnico, contractual y normativo.',
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
          'Iniciativas de generación eléctrica, petróleo, gas y actividades relacionadas que puedan requerir alianzas o participación empresarial.',
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
          'Operaciones de importación, exportación, suministros y comercialización en los ámbitos donde existan condiciones viables.',
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
          'Posibles relaciones comerciales vinculadas con actividades pesqueras, procesamiento y cadena de frío, sujetas a evaluación técnica, contractual y normativa.',
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
          'Iniciativas de transformación, acondicionamiento y comercialización de productos agrícolas, sujetas a evaluación técnica, comercial y normativa.',
      },
    ],
    cardAction: 'Conversemos sobre este sector',
    disclaimer:
      'Los sectores presentados describen ámbitos de interés; no implican que POWERFUL haya ejecutado proyectos en todos ellos ni constituyen una oferta pública de inversión.',
    teamExperience: {
      heading: 'Experiencia que aporta perspectiva',
      description:
        'Nuestro equipo combina experiencia profesional en todos los sectores que presentamos. Sus trayectorias reúnen un conocimiento amplio y práctico de distintas actividades empresariales del Perú. Esa mirada transversal enriquece nuestras conversaciones con empresas, inversionistas y quienes impulsan iniciativas en el país.',
      note: 'La trayectoria mencionada corresponde a los integrantes del equipo.',
    },
    cta: {
      eyebrow: 'INVERSIÓN Y ALIANZAS EN PERÚ',
      heading: '¿Buscas invertir o asociarte en estos sectores?',
      description:
        'Los sectores presentados son ámbitos de interés para proyectos y relaciones empresariales en el Perú.',
      actionLabel: 'Conversar sobre inversión y alianzas',
      actionHref: '/contacto.html?tipo=inversionista',
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
        actionLabel: 'Elegir motivo de consulta',
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
    warning: { heading: string; description: string };
  };
  form: ContactFormEs;
}

export interface ContactFormEs {
  eyebrow: string;
  code: string;
  labels: {
    reason: string;
    name: string;
    company: string;
    email: string;
    country: string;
    message: string;
    website: string;
  };
  placeholders: {
    reason: string;
    name: string;
    company: string;
    email: string;
    country: string;
    message: string;
  };
  options: { value: ContactReasonEs; label: string }[];
  limits: {
    nameMin: number;
    nameMax: number;
    companyMax: number;
    emailMax: number;
    countryMax: number;
    messageMin: number;
    messageMax: number;
  };
  privacy: { prefix: string; linkLabel: string; suffix: string; requiredMark: string };
  submitLabel: string;
  finePrint: string;
  errors: {
    reason: string;
    name: string;
    email: string;
    message: string;
    privacy: string;
  };
  result: { title: string; description: string };
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
    description: 'Conversemos sobre el ingreso de tu empresa al Perú, inversiones, alianzas o proyectos peruanos.',
  },
  hero: {
    eyebrow: 'INICIEMOS UNA CONVERSACIÓN',
    heading: {
      lead: 'Un buen negocio comienza',
      emphasis: 'por entendernos.',
    },
    lede:
      'Si representas a una empresa con presencia internacional que evalúa ingresar al Perú, buscas invertir o asociarte a proyectos del país, o representas una iniciativa peruana, cuéntanos tu objetivo.',
    pageNumber: '06',
  },
  aside: {
    eyebrow: 'CONTACTO CORPORATIVO',
    heading: { lead: 'Cuéntanos tu', emphasis: 'objetivo.' },
    description:
      'Este formulario orienta consultas de expansión empresarial, inversión y alianzas. Los titulares o representantes de iniciativas peruanas también pueden compartir un resumen general. No envíes contratos, contraseñas, documentos personales ni información financiera confidencial.',
    steps: [
      { number: '01 /', description: 'Indica si buscas ingresar al Perú, invertir, asociarte o presentar una iniciativa.' },
      { number: '02 /', description: 'Describe el objetivo de tu empresa o consulta en términos generales.' },
      {
        number: '03 /',
        description:
          'Un responsable comercial evaluará los siguientes pasos cuando el canal esté habilitado.',
      },
    ],
    warning: {
      heading: 'Modo demostración',
      description:
        'Este prototipo no envía correos ni registra datos en un servidor. Su objetivo es validar la experiencia.',
    },
  },
  form: {
    eyebrow: 'FORMULARIO DE CONTACTO',
    code: 'POWERFUL / PE',
    labels: {
      reason: '¿Cuál es el motivo de tu consulta?',
      name: 'Nombre completo',
      company: 'Empresa o entidad',
      email: 'Correo electrónico',
      country: 'País',
      message: 'Cuéntanos brevemente tu iniciativa',
      website: 'Sitio web',
    },
    placeholders: {
      reason: 'Selecciona una opción',
      name: 'Tu nombre',
      company: 'Opcional',
      email: 'correo@empresa.com',
      country: 'País donde opera tu empresa o resides',
      message: '¿Tu empresa evalúa ingresar al Perú, buscas invertir o asociarte, o representas un proyecto peruano?',
    },
    options: [
      { value: 'expansion', label: 'Represento una empresa que evalúa ingresar al Perú' },
      { value: 'inversionista', label: 'Busco invertir o asociarme a proyectos peruanos' },
      { value: 'representacion', label: 'Busco representación empresarial' },
      { value: 'alianza', label: 'Propongo una alianza comercial' },
      { value: 'proyecto', label: 'Represento un proyecto o iniciativa en Perú' },
      { value: 'otro', label: 'Otra consulta' },
    ],
    limits: {
      nameMin: 2,
      nameMax: 120,
      companyMax: 160,
      emailMax: 254,
      countryMax: 80,
      messageMin: 15,
      messageMax: 2000,
    },
    privacy: {
      prefix: 'He leído el ',
      linkLabel: 'aviso de privacidad (borrador)',
      suffix:
        ' y entiendo que este formulario es una demostración sin envío real.',
      requiredMark: '*',
    },
    submitLabel: 'Probar el envío',
    finePrint:
      '* Campos obligatorios. Cada consulta se evalúa de acuerdo con sus características y las posibilidades de colaboración.',
    errors: {
      reason: 'Selecciona una opción.',
      name: 'Ingresa tu nombre completo (2 a 120 caracteres).',
      email: 'Ingresa un correo válido.',
      message: 'Describe tu consulta con al menos 15 caracteres.',
      privacy: 'Marca la casilla para probar el flujo.',
    },
    result: {
      title: 'Validación completada — demostración.',
      description:
        'El formulario pasó las comprobaciones de interfaz, pero NO se envió información. El envío real se habilitará al conectar el backend de Laravel y aprobar privacidad y destinatarios.',
    },
  },
} as const satisfies ContactPageEs;

export const legalPagesEs = {
  privacidad: {
    metadata: {
      title: 'Privacidad | POWERFUL',
      description: 'Información preliminar sobre tratamiento de datos',
    },
    hero: {
      eyebrow: 'DOCUMENTACIÓN PRELIMINAR',
      heading: { lead: 'Aviso de', emphasis: 'privacidad.' },
      lede:
        'Texto de trabajo pendiente de validación legal y de los datos registrales y operativos de POWERFUL. No utilizar como política de privacidad definitiva.',
      pageNumber: '07',
    },
    alert: 'BORRADOR NO PUBLICABLE EN PRODUCCIÓN SIN REVISIÓN LEGAL.',
    sections: [
      {
        heading: 'Tratamiento de datos',
        paragraph:
          'La versión de producción deberá identificar al responsable del tratamiento, sus canales oficiales, las finalidades de contacto comercial, posibles proveedores de correo/alojamiento, períodos de conservación, mecanismos para ejercer derechos y la información exigida por la normativa peruana aplicable.',
      },
      {
        heading: 'Prototipo sin almacenamiento',
        paragraph:
          'El formulario de esta demostración realiza comprobaciones dentro del navegador, pero no transmite ni conserva la información en un backend de POWERFUL. Evita introducir información sensible real al probarlo.',
      },
      {
        heading: 'Pendientes de aprobación',
        paragraph:
          'Razón social y RUC; correo para derechos; finalidades y base jurídica; proveedores y transferencias; conservación; seguridad; texto legal definitivo revisado y aprobado.',
      },
    ],
  },
  terminos: {
    metadata: {
      title: 'Condiciones | POWERFUL',
      description: 'Condiciones preliminares de uso',
    },
    hero: {
      eyebrow: 'INFORMACIÓN INSTITUCIONAL',
      heading: { lead: 'Condiciones de', emphasis: 'uso.' },
      lede:
        'Borrador de estructura: no sustituye asesoría legal ni implica que exista una oferta pública de inversión.',
      pageNumber: '08',
    },
    alert: 'DOCUMENTO EDITORIAL PRELIMINAR — NO APROBADO PARA PUBLICACIÓN.',
    sections: [
      {
        heading: 'Finalidad informativa',
        paragraph:
          'Este sitio presenta información general sobre el ámbito de actuación, los servicios y las vías de contacto de POWERFUL. No constituye asesoría financiera individual ni una invitación pública a adquirir valores; tampoco confirma la disponibilidad de fondos ni establece por sí solo un compromiso contractual.',
      },
      {
        heading: 'Relaciones empresariales',
        paragraph:
          'Cada proyecto, encargo o participación se evalúa según sus características. Si las partes deciden avanzar, el alcance y las condiciones se establecen en acuerdos específicos; cualquier inversión requiere una definición expresa para cada caso.',
      },
      {
        heading: 'Contenido y derechos',
        paragraph:
          'El titular del sitio deberá confirmar la propiedad, licencias y autorizaciones de imágenes, marca, textos y demás materiales antes de su publicación.',
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
