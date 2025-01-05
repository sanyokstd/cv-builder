export type LocaleNames = 'en' | 'uk';

export interface PageWithLocale {
  params: { locale: LocaleNames };
}
