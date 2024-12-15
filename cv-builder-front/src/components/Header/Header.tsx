'use client';

import Link from 'next/link';
import s from './styles.module.scss';
import clsx from 'clsx';
import { useHeaderScroll } from './useHeaderScroll';

export const Header = () => {
  const hasScrolled = useHeaderScroll();
  return (
    <header className={clsx(s.header, hasScrolled && s.headerScrolled)}>
      <div className="container">
        <div className={s.flex}>
          <Link href="/" className={s.logo}>
            Better CV
          </Link>
          <div className={s.headerRight}>
            <nav className={s.nav}>
              <ul>
                <li>
                  <Link href="/">Resume Examples</Link>
                </li>
                <li>
                  <Link href="/">Cover letters</Link>
                </li>
                <li>
                  <Link href="/">Blog</Link>
                </li>
              </ul>
            </nav>
            <div className={s.lang}>
              <select className="select">
                <option>EN</option>
                <option>UK</option>
              </select>
            </div>
            <div className={s.myAccount}>
              <button className="btn">My Account</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
