import type { CommercialRouteMap } from './types';

/**
 * Commercial route counterparts used by navigation and the contextual language switch.
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

export function getCommercialLanguageSwitch(pathname: string, locale: 'es-PE' | 'en') {
  const normalizePath = (path: string) => {
    const withoutHtmlExtension = path.endsWith('.html') ? path.slice(0, -5) : path;
    const withoutTrailingSlash = withoutHtmlExtension.length > 1
      ? withoutHtmlExtension.replace(/\/$/, '')
      : withoutHtmlExtension;
    return withoutTrailingSlash || '/';
  };
  const currentRoute = normalizePath(pathname);
  const page = Object.values(commercialPageRoutes).find((routes) => normalizePath(routes[locale]) === currentRoute);

  if (!page) return undefined;

  const targetLocale = locale === 'en' ? 'es-PE' : 'en';
  return { href: page[targetLocale], locale: targetLocale } as const;
}
