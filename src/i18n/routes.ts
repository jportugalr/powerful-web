import type { CommercialRouteMap } from './types';

/**
 * Commercial route counterparts. English paths are a future contract only;
 * do not link to them until translated pages exist.
 */
export const commercialPageRoutes = {
  home: {
    'es-PE': '/',
    en: '/en/',
  },
  about: {
    'es-PE': '/nosotros.html',
    en: '/en/about.html',
  },
  services: {
    'es-PE': '/servicios.html',
    en: '/en/services.html',
  },
  sectors: {
    'es-PE': '/sectores.html',
    en: '/en/sectors.html',
  },
  process: {
    'es-PE': '/como-trabajamos.html',
    en: '/en/how-we-work.html',
  },
  contact: {
    'es-PE': '/contacto.html',
    en: '/en/contact.html',
  },
} as const satisfies CommercialRouteMap;
