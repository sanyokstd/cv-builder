'use client';

import { Link } from '@/i18n/routing';
import s from './styles.module.scss';
import clsx from 'clsx';
import { useHeaderScroll } from './useHeaderScroll';
import { useState } from 'react';
import { LocaleSelect } from '../LocaleSelect/LocaleSelect';
import { useTranslations } from 'next-intl';

export const Header = () => {
  const hasScrolled = useHeaderScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations('Menu');
  return (
    <header className={clsx(s.header, hasScrolled && s.headerScrolled)}>
      <div className="container">
        <div className={s.flex}>
          <Link href="/" className={s.logo}>
            Better CV
          </Link>
          <div className={clsx(s.headerRight, menuOpen && s.headerRightOpen)}>
            <nav className={s.nav}>
              <ul>
                <li>
                  <Link href="/">{t('resumeExamples')}</Link>
                </li>
                <li>
                  <Link href="/">{t('coverLetters')}</Link>
                </li>
                <li>
                  <Link href="/">{t('blog')}</Link>
                </li>
              </ul>
            </nav>
            <div className={s.lang}>
              <LocaleSelect />
            </div>
            <div className={s.myAccount}>
              <button className="btn" aria-label="login">
                {t('myAccount')}
              </button>
            </div>
          </div>
          <div className={clsx(s.burger, menuOpen && s.burgerOpen)}>
            <LocaleSelect />
            <button className="icon-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="open menu">
              <svg className={s.burgerIconOpen} width={30} height={30} viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
              </svg>
              <svg className={s.burgerIconClose} width={30} height={30} viewBox="0 0 24 24">
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
