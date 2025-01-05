import { Geist } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { LocaleNames } from '@/types/global';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'MainMeta' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

type Props = {
  children: ReactNode;
  params: { locale: LocaleNames };
};

export default async function LocaleLayout({ children, params }: Props) {
  const thisParams = await params;
  const locale = thisParams.locale || 'en';

  // setRequestLocale(locale);
  const messages = await getMessages();
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={geistSans.variable}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
