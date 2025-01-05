import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { LocaleNames } from '@/types/global';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that the incoming `locale` is valid
  if (!locale || !routing.locales.includes(locale as LocaleNames)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (
      await (locale === 'en'
        ? // When using Turbopack, this will enable HMR for `en`
          import('../../messages/en.json')
        : import(`../../messages/${locale}.json`))
    ).default,
  };
});