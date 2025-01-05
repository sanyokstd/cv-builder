import Image from 'next/image';
import s from './styles.module.scss';
import { Link } from '@/i18n/routing';
import { getLocale, getTranslations } from 'next-intl/server';

export const HeroSection = async () => {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'HeroSection' });

  return (
    <section className={s.hero}>
      <picture>
        <source srcSet="/assets/hero/hero-mob.webp" media="(max-width: 767px)" width={767} height={717} />
        <Image priority className={s.imgBack} src="/assets/hero/hero.png" alt="hero" width={1080} height={1416} />
      </picture>
      <div className="container">
        <div className={s.wrap}>
          <h1 className={s.title}>{t('title')}</h1>
          <span className={s.sutTitle}>{t('subTitle')}</span>
          <p className={s.des}>
            {t.rich('description', {
              br: () => <br />,
            })}
          </p>
          <div className={s.actionButton}>
            <Link href="/create" className="btn">
              {t('action')}
            </Link>
            <Image className={s.arrow} src="/assets/hero/arrow.svg" alt="arrow" width={322} height={92} />
          </div>
        </div>
      </div>
    </section>
  );
};
