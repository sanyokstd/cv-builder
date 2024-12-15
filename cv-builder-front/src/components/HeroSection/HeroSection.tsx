import Image from 'next/image';
import s from './styles.module.scss';

export const HeroSection = () => {
  return (
    <section className={s.hero}>
      <picture>
        <source srcSet="/assets/hero/hero-mob.png" media="(max-width: 767px)" />
        <Image priority className={s.imgBack} src="/assets/hero/hero.png" alt="hero" width={1080} height={1416} />
      </picture>
      <div className="container">
        <div className={s.wrap}>
          <h1 className={s.title}>creating a resume</h1>
          <span className={s.sutTitle}>has never been easier</span>
          <p className={s.des}>
            Create an excellent resume in minutes.
            <br />
            No more manual formatting. Fast, easy, flexible.
          </p>
          <div className={s.actionButton}>
            <button className="btn">Create Resume For Free</button>
            <Image className={s.arrow} src="/assets/hero/arrow.svg" alt="arrow" width={322} height={92} />
          </div>
        </div>
      </div>
    </section>
  );
};
