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
            <Link href="https://www.linkedin.com/in/olexandr-stadnik" target="_blank" aria-label="linkedin">
              <svg width={30} height={30} viewBox="0 0 24 24" data-testid="LinkedInIcon">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
              </svg>
            </Link>
            <Link href="https://t.me/OlexandrStadnik" target="_blank" aria-label="telegram">
              <svg width={30} height={30} viewBox="0 0 24 24">
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
              </svg>
            </Link>
            <Link href="https://github.com/sanyokstd" target="_blank" aria-label="github">
              <svg width={30} height={30} viewBox="0 0 24 24">
                <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
