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
    orbitCaption: string;
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
    sideIndex: string;
    sideCaption: string;
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
    artLabel: string;
    artCenter: string;
    artPoints: string[];
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
    orbitCaption: 'PERÚ · PLATAFORMA DE OPORTUNIDADES',
    eyebrow: 'INVERSIONES Y REPRESENTACIÓN EMPRESARIAL',
    heading: {
      lead: 'Conectamos capital internacional con',
      emphasis: 'oportunidades de negocio',
      trailing: 'en Perú.',
    },
    description:
      'Articulamos relaciones empresariales, representamos intereses comerciales y evaluamos nuestra participación en iniciativas y proyectos conforme a cada acuerdo.',
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
      'FOCO EN PERÚ',
      'VISIÓN EMPRESARIAL',
      'RELACIONES INTERNACIONALES',
    ],
    sideIndex: '01 / 05',
    sideCaption: 'CAPITAL · CONEXIÓN · PARTICIPACIÓN',
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
      'El modelo de POWERFUL combina articulación, representación y participación, ajustándose a las características de cada oportunidad.',
    cardAction: 'Explorar servicio',
    cards: [
      {
        number: '01',
        icon: 'globe',
        title: 'Articulación de oportunidades',
        description:
          'Identificamos posibles conexiones entre oportunidades en Perú, empresas y potenciales aliados o inversionistas.',
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
      'Exploramos oportunidades relacionadas con actividades productivas, comerciales e infraestructura. Cada iniciativa requiere revisión particular.',
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
      lead: 'Perú como centro.',
      emphasis: 'Relaciones sin fronteras.',
    },
    description:
      'La actividad y las oportunidades se concentran en Perú. El componente internacional está en el relacionamiento con empresas, contrapartes e inversionistas del exterior.',
    linkLabel: 'Cómo trabajamos',
    linkHref: '/como-trabajamos.html',
    artLabel: 'POWERFUL / CONNECTIONS',
    artCenter: 'PE',
    artPoints: ['CAPITAL', 'EMPRESAS', 'PROYECTOS', 'PERÚ'],
  },
  processPreview: {
    eyebrow: 'NUESTRA METODOLOGÍA',
    heading: {
      lead: 'Primero entender.',
      emphasis: 'Luego actuar.',
    },
    description:
      'No todas las oportunidades requieren la misma estructura. Nuestro punto de partida es comprender a las partes y evaluar el alcance real de cada iniciativa.',
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
    heading: '¿Tienes una oportunidad que merece una conversación?',
    description:
      'Ya sea una iniciativa en Perú o una búsqueda de representación y aliados, cuéntanos tu objetivo.',
    actionLabel: 'Presentar una oportunidad',
    actionHref: '/contacto.html?tipo=proyecto',
  },
} as const satisfies HomePageEs;
