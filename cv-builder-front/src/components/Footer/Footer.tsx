import Link from 'next/link';
import s from './styles.module.scss';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.flex}>
          <div className={s.column}>
            <Link className={s.logo} href="/">
              Better CV
            </Link>
          </div>
          <div className={s.column}>
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
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={s.legend}>
          <div>
            © The project was created by <b>Olexandr Stadnik</b>
          </div>
          <div className={s.soc}>
            <Link href="https://www.linkedin.com/in/olexandr-stadnik">
              <svg width={30} height={30} viewBox="0 0 24 24" data-testid="LinkedInIcon">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
              </svg>
            </Link>
            <Link href="https://t.me/OlexandrStadnik">
              <svg width={30} height={30} viewBox="0 0 24 24">
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
