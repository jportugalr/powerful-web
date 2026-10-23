import { commercialCatalogEs } from '../content/es';
import type { CommercialCatalog } from '../content/types';
import { locales, type Locale } from './types';

const commercialCatalogs: Partial<Record<Locale, CommercialCatalog>> = {
  'es-PE': commercialCatalogEs,
};

export function resolveCommercialCatalog(locale: string | undefined): CommercialCatalog {
  if (!locale) {
    throw new Error('Cannot resolve commercial content without a locale.');
  }

  if (!isLocale(locale)) {
    throw new Error(`Unsupported commercial locale "${locale}".`);
  }

  const catalog = commercialCatalogs[locale];
  if (!catalog) {
    throw new Error(`No commercial content catalog is registered for locale "${locale}".`);
  }

  return catalog;
}

function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}
