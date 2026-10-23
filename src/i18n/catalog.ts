import { commercialCatalogEs } from '../content/es';
import type { CommercialCatalog } from '../content/types';
import { locales, type Locale } from './types';

const commercialCatalogs: Partial<Record<Locale, CommercialCatalog>> = {
  'es-PE': commercialCatalogEs,
};

export interface ResolvedCommercialCatalog {
  catalog: CommercialCatalog;
  locale: Locale;
}

export function resolveCommercialCatalog(locale: string | undefined): ResolvedCommercialCatalog {
  if (locale && isLocale(locale)) {
    const requestedCatalog = commercialCatalogs[locale];

    if (requestedCatalog) {
      return { catalog: requestedCatalog, locale };
    }
  }

  return { catalog: commercialCatalogEs, locale: 'es-PE' };
}

function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}
