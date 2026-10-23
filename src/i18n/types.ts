export const locales = ['es-PE', 'en'] as const;

export type Locale = (typeof locales)[number];

export type LocaleCatalog<T> = Readonly<Record<Locale, T>>;

export type CommercialPageKey =
  | 'home'
  | 'about'
  | 'services'
  | 'sectors'
  | 'process'
  | 'contact';

export type LocalizedRoute = Readonly<Record<Locale, string>>;

export type CommercialRouteMap = Readonly<Record<CommercialPageKey, LocalizedRoute>>;
