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
      { label: 'Inversionistas', href: '/contacto.html?tipo=inversionista' },
      { label: 'Titulares de proyectos', href: '/contacto.html?tipo=proyecto' },
      { label: 'Representación', href: '/contacto.html?tipo=representacion' },
      { label: 'Consulta general', href: '/contacto.html' },
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
    mapStamp: string;
    mapReach: string;
    mapNetwork: string;
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
      lead: 'Tu contraparte empresarial',
      emphasis: 'para proyectos',
      trailing: 'en todo el Perú.',
    },
    description:
      'Conectamos empresas e inversionistas nacionales e internacionales con proyectos en todo el Perú. Nuestra red tiene mayor presencia en el norte y nororiente; priorizamos el capital extranjero, sin excluir el nacional.',
    actions: [
      {
        label: 'Iniciar una conversación',
        href: '/contacto.html',
        variant: 'gold',
      },
      {
        label: 'Conocer POWERFUL',
        href: '/nosotros.html',
        variant: 'outline',
      },
    ],
    proofPoints: [
      'ALCANCE NACIONAL',
      'MAYOR PRESENCIA EN EL NORTE Y NORORIENTE',
      'CAPITAL NACIONAL E INTERNACIONAL',
    ],
    mapAlt: 'Contorno del Perú, sin límites departamentales, ubicaciones ni rutas marcadas.',
    mapStamp: 'INICIATIVA PERUANA',
    mapReach: 'Proyectos en todo el Perú',
    mapNetwork: 'Red nacional con mayor presencia en el norte y nororiente.',
  },
  intro: {
    index: '01 / NUESTRA PROPUESTA',
    lead: 'Más que vincular partes:',
    emphasis: 'construir relaciones comerciales con un papel activo.',
  },
  servicesPreview: {
    eyebrow: 'NUESTRO ENFOQUE',
    heading: {
      lead: 'Tres maneras de',
      emphasis: 'generar conexión.',
    },
    description:
      'El modelo de POWERFUL combina articulación, representación y participación, ajustándose a las características de cada proyecto.',
    cardAction: 'Explorar servicio',
    cards: [
      {
        number: '01',
        icon: 'globe',
        title: 'Articulación de proyectos',
        description:
          'Identificamos posibles conexiones entre iniciativas en Perú, empresas y potenciales aliados o inversionistas.',
        href: '/servicios.html',
      },
      {
        number: '02',
        icon: 'briefcase',
        title: 'Representación empresarial',
        description:
          'Actuamos dentro de facultades y acuerdos específicos para acompañar intereses comerciales y relaciones de negocio.',
        href: '/servicios.html',
      },
      {
        number: '03',
        icon: 'layers',
        title: 'Participación en negocios',
        description:
          'Evaluamos esquemas de involucramiento directo, coordinación o participación empresarial cuando una operación lo requiere.',
        href: '/servicios.html',
      },
    ],
  },
  sectorHighlight: {
    eyebrow: 'ÁMBITOS DE ACTUACIÓN',
    context: 'PERÚ / VISIÓN MULTISECTORIAL',
    heading: {
      lead: 'Donde el potencial',
      secondLead: 'encuentra',
      emphasis: 'estructura.',
    },
    description:
      'Exploramos iniciativas en ámbitos productivos, comerciales y de infraestructura, cada una sujeta a revisión particular.',
    sectors: [
      { label: 'Minería y minerales', href: '/sectores.html#mineria' },
      { label: 'Energía e hidrocarburos', href: '/sectores.html#energia' },
      { label: 'Infraestructura', href: '/sectores.html#infraestructura' },
      { label: 'Inmobiliario', href: '/sectores.html#inmobiliario' },
      { label: 'Comercio exterior', href: '/sectores.html#comercio' },
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
      'POWERFUL busca clientes e inversión nacionales e internacionales para proyectos en el Perú. Su red de contactos alcanza todo el país, con mayor presencia en el norte y nororiente; prioriza el capital extranjero, sin excluir el nacional.',
    linkLabel: 'Cómo trabajamos',
    linkHref: '/como-trabajamos.html',
    diagramSource: 'Empresas e inversionistas',
    diagramSourceDetail: 'Nacionales e internacionales',
    diagramRole: 'Articulación · representación · participación',
    diagramDestination: 'Proyectos',
    diagramDestinationDetail: 'En todo el Perú',
    diagramNote: 'La participación y el alcance de cada relación se definen según las características de cada proyecto.',
  },
  processPreview: {
    eyebrow: 'NUESTRA METODOLOGÍA',
    heading: {
      lead: 'Primero entender.',
      emphasis: 'Luego actuar.',
    },
    description:
      'No todas las iniciativas requieren la misma estructura. Nuestro punto de partida es comprender a las partes y evaluar el alcance real de cada iniciativa.',
    steps: [
      {
        number: '01',
        title: 'Conocer',
        description: 'Comprender el interés y las condiciones iniciales.',
      },
      {
        number: '02',
        title: 'Evaluar',
        description: 'Identificar pertinencia y posibilidades de colaboración.',
      },
      {
        number: '03',
        title: 'Definir',
        description: 'Precisar responsabilidades, facultades y acuerdos.',
      },
      {
        number: '04',
        title: 'Participar',
        description: 'Actuar según el rol y las condiciones pactadas.',
      },
    ],
  },
  miniCta: {
    eyebrow: 'RELACIONES CON PROPÓSITO',
    heading: '¿Tienes un proyecto que merece una conversación?',
    description:
      'Ya sea una iniciativa en Perú o una búsqueda de representación y aliados, cuéntanos tu objetivo.',
    actionLabel: 'Presentar un proyecto',
    actionHref: '/contacto.html?tipo=proyecto',
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
  | 'comercio';

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
    cta: MiniCtaEs;
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
    cta: MiniCtaEs;
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
      fields: string[];
      disclaimer: string;
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
        description: 'Iniciativa peruana con red nacional y mayor presencia en el norte y nororiente',
    },
    hero: {
      eyebrow: 'CONOCE POWERFUL',
      heading: {
        lead: 'Una iniciativa peruana con',
        emphasis: 'alcance nacional.',
      },
      lede:
        'Conectamos empresas e inversionistas nacionales e internacionales con proyectos en todo el Perú, con mayor presencia de nuestra red en el norte y nororiente.',
      pageNumber: '02',
    },
    profile: {
      eyebrow: 'QUIÉNES SOMOS',
      heading: {
        lead: 'Un punto de encuentro para',
        emphasis: 'nuevos negocios.',
      },
      paragraphs: [
        'POWERFUL es una iniciativa empresarial centrada en el Perú. Facilitamos la relación entre empresas, inversionistas y titulares de proyectos en distintas regiones del país.',
        'Buscamos clientes e inversionistas nacionales e internacionales. Priorizamos el capital extranjero, sin excluir el nacional. El alcance de cada relación depende de la iniciativa y de los acuerdos correspondientes.',
      ],
      linkLabel: 'Ver qué hacemos',
      linkHref: '/servicios.html',
    },
    approach: {
      eyebrow: 'NUESTRO ENFOQUE',
      heading: {
        lead: 'Alcance nacional',
        emphasis: 'con mayor presencia regional.',
      },
      description:
        'Nuestra red de contactos cubre todo el Perú, con mayor presencia en el norte y nororiente. Trabajamos con empresas e inversionistas nacionales e internacionales, y priorizamos el capital extranjero, sin excluir el nacional.',
      values: [
        {
          index: '01 /',
          title: 'Criterio',
          description:
            'Comprender el proyecto, su contexto y a las contrapartes antes de avanzar.',
        },
        {
          index: '02 /',
          title: 'Relaciones',
          description:
            'Promover vínculos comerciales con objetivos y alcances claramente definidos.',
        },
        {
          index: '03 /',
          title: 'Participación',
          description:
            'Evaluar un rol activo en cada negocio cuando el acuerdo lo permita.',
        },
      ],
    },
    transparency: {
      eyebrow: 'UNA IDENTIDAD EN CONSTRUCCIÓN',
      heading: {
        lead: 'La confianza debe sustentarse en',
        emphasis: 'hechos verificables.',
      },
      description:
        'Distinguimos la experiencia profesional de integrantes del equipo de la trayectoria corporativa de POWERFUL. Los antecedentes, proyectos, alianzas y resultados de la empresa se publicarán solo cuando estén documentados y autorizados para difusión.',
    },
    cta: {
      eyebrow: 'SIGUIENTE PASO',
      heading: 'Hablemos de la relación que buscas.',
      description:
        'Podemos revisar si la iniciativa es pertinente para conversar.',
      actionLabel: 'Contactar',
      actionHref: '/contacto.html',
    },
  },
  servicios: {
    metadata: {
      title: 'Qué hacemos | POWERFUL',
      description: 'Articulación, representación y participación empresarial',
    },
    hero: {
      eyebrow: 'QUÉ HACEMOS',
      heading: {
        lead: 'Articulamos, representamos y',
        emphasis: 'participamos.',
      },
      lede:
        'El alcance de POWERFUL puede abarcar distintas etapas de una relación empresarial, dependiendo del proyecto, las contrapartes y los acuerdos aplicables.',
      pageNumber: '03',
    },
    details: [
      {
        index: '01 / ARTICULACIÓN',
        heading: {
          lead: 'Proyectos y',
          emphasis: 'contrapartes.',
        },
        description:
          'Identificamos iniciativas y posibles espacios de colaboración entre titulares de proyectos en Perú, empresas y actores con interés comercial o de inversión.',
        icon: 'globe',
      },
      {
        index: '02 / REPRESENTACIÓN',
        heading: {
          lead: 'Gestión y',
          emphasis: 'representación empresarial.',
        },
        description:
          'Podemos asumir funciones de representación, coordinación o gestión comercial dentro de facultades expresamente acordadas y documentadas.',
        icon: 'briefcase',
      },
      {
        index: '03 / PARTICIPACIÓN',
        heading: {
          lead: 'Involucramiento en',
          emphasis: 'negocios y proyectos.',
        },
        description:
          'Evaluamos esquemas de participación directa o colaboración sostenida, con responsabilidades y condiciones pactadas para cada operación.',
        icon: 'layers',
      },
      {
        index: '04 / COMERCIO',
        heading: {
          lead: 'Relaciones de',
          emphasis: 'comercio exterior.',
        },
        description:
          'Evaluamos iniciativas vinculadas con importación, exportación, comercialización y suministro de bienes o materias primas, según las capacidades y requisitos del caso.',
        icon: 'compass',
      },
    ],
    notice: {
      eyebrow: 'NUESTRO ALCANCE',
      heading: 'Una propuesta no equivale a una promesa.',
      description:
        'La evaluación inicial de un proyecto no implica compromisos de financiamiento, representación, contratación ni participación. Las responsabilidades se establecen únicamente mediante los acuerdos aplicables.',
    },
    cta: {
      eyebrow: 'CONVERSEMOS',
      heading: 'Cada operación tiene su propio contexto.',
      description:
        'Describe brevemente la relación empresarial o necesidad que te interesa explorar.',
      actionLabel: 'Solicitar conversación',
      actionHref: '/contacto.html?tipo=representacion',
    },
  },
  sectores: {
    metadata: {
      title: 'Sectores | POWERFUL',
        description: 'Sectores de interés y experiencia profesional del equipo en Perú',
    },
    hero: {
      eyebrow: 'SECTORES DE INTERÉS',
      heading: {
        lead: 'Una perspectiva',
        emphasis: 'multisectorial.',
      },
      lede:
        'Exploramos iniciativas empresariales en todo el Perú. Nuestra red tiene mayor presencia en el norte y nororiente; cada iniciativa se evalúa según sus características y el marco aplicable.',
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
    ],
    cardAction: 'Consultar sobre un proyecto',
    disclaimer:
      'Los sectores presentados describen ámbitos de interés y evaluación. No implican que POWERFUL haya ejecutado proyectos en todos ellos ni constituyen una oferta pública de inversión.',
    teamExperience: {
      heading: 'Experiencia profesional del equipo',
      fields: ['Agua y perforación de pozos', 'Agroexportación', 'Pesca'],
      disclaimer:
        'Esta experiencia corresponde a integrantes del equipo y no constituye, por sí sola, trayectoria corporativa ni proyectos ejecutados por POWERFUL.',
    },
    cta: {
      eyebrow: 'PROYECTOS EN PERÚ',
      heading: '¿Tu iniciativa pertenece a alguno de estos sectores?',
      description:
        'Cuéntanos el tipo de proyecto y la relación comercial que deseas desarrollar.',
      actionLabel: 'Presentar consulta',
      actionHref: '/contacto.html?tipo=proyecto',
    },
  },
  comoTrabajamos: {
    metadata: {
      title: 'Cómo trabajamos | POWERFUL',
      description: 'Proceso de evaluación, vinculación y colaboración empresarial',
    },
    hero: {
      eyebrow: 'NUESTRO PROCESO',
      heading: {
        lead: 'De la primera conversación a una',
        emphasis: 'relación estructurada.',
      },
      lede:
        'El trabajo empieza por comprender la iniciativa y su contexto. Cada una se evalúa individualmente antes de definir posibles compromisos.',
      pageNumber: '05',
    },
    process: {
      eyebrow: 'LA FORMA DE TRABAJAR',
      heading: {
        lead: 'Un proceso',
        emphasis: 'con criterio.',
      },
      description:
        'El siguiente recorrido es orientativo. No sustituye las validaciones técnicas, legales, comerciales o contractuales que correspondan.',
      steps: [
        {
          number: '01',
          title: 'Primer contacto',
          description:
            'Recibimos una descripción inicial del interés empresarial y, si corresponde, de la iniciativa o el proyecto.',
        },
        {
          number: '02',
          title: 'Revisión de pertinencia',
          description:
            'Consideramos el tipo de iniciativa, el objetivo de las partes y si existe espacio para una conversación.',
        },
        {
          number: '03',
          title: 'Conversaciones y validaciones',
          description:
            'Cuando corresponde, se coordinan acercamientos y un intercambio adecuado de información.',
        },
        {
          number: '04',
          title: 'Definición contractual',
          description:
            'El rol de articulación, representación, gestión o participación se establece mediante acuerdos.',
        },
        {
          number: '05',
          title: 'Seguimiento según alcance',
          description:
            'Se realizan las actividades pactadas, con responsabilidades y condiciones propias de cada operación.',
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
        'La intervención de POWERFUL puede adoptar diferentes formas, pero ninguna se presume: representación y participación directa dependen de facultades y acuerdos adecuados.',
        'No prometemos aprobación de proyectos, adjudicación, liquidez ni retorno de inversión.',
      ],
    },
    cta: {
      eyebrow: 'EMPECEMOS',
      heading: 'Cuéntanos qué necesitas explorar.',
      description:
        'Un primer mensaje con el contexto suficiente es el punto de partida.',
      actionLabel: 'Enviar una consulta',
      actionHref: '/contacto.html',
    },
  },
} as const satisfies BusinessPagesEs;

export type ContactReasonEs =
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
    description: 'Comunícate con POWERFUL acerca de inversiones, proyectos o representación',
  },
  hero: {
    eyebrow: 'INICIEMOS UNA CONVERSACIÓN',
    heading: {
      lead: 'Un buen negocio comienza',
      emphasis: 'por entendernos.',
    },
    lede:
      'Si representas a una empresa o inversionista nacional o internacional, o a un proyecto en el Perú, comparte brevemente el motivo de tu consulta.',
    pageNumber: '06',
  },
  aside: {
    eyebrow: 'CONTACTO CORPORATIVO',
    heading: { lead: 'Cuéntanos tu', emphasis: 'objetivo.' },
    description:
      'Este formulario está orientado a relaciones empresariales. No envíes contratos, contraseñas, documentos personales ni información financiera confidencial en una primera consulta.',
    steps: [
      { number: '01 /', description: 'Selecciona el tipo de relación que buscas.' },
      { number: '02 /', description: 'Describe tu iniciativa de manera general.' },
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
      country: 'País de contacto',
      message: '¿Qué proyecto, representación o relación empresarial deseas explorar?',
    },
    options: [
      { value: 'inversionista', label: 'Represento capital o inversionistas' },
      { value: 'proyecto', label: 'Tengo un proyecto en Perú' },
      { value: 'representacion', label: 'Busco representación empresarial' },
      { value: 'alianza', label: 'Propongo una alianza comercial' },
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
      '* Campos obligatorios. No se garantiza financiación ni aceptación de operaciones mediante el formulario.',
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
          'La web de POWERFUL presenta el ámbito de actuación, servicios y vías de contacto de la empresa. La información no supone asesoría financiera individual, invitación pública a comprar valores, garantía de fondos ni compromiso contractual.',
      },
      {
        heading: 'Relaciones empresariales',
        paragraph:
          'Todo negocio, mandato o participación se evalúa individualmente y requiere los acuerdos que correspondan. El contacto inicial no constituye aceptación de proyectos ni promesa de inversión.',
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
