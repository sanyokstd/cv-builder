'use client';

import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';

export const LocaleSelect = () => {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <select
      className="select"
      aria-label="choose language"
      defaultValue={locale}
      disabled={isPending}
      onChange={onSelectChange}
    >
      <option value="en">EN</option>
      <option value="uk">UK</option>
    </select>
  );
};
