import { Footer, Header } from '@/components';
import { FC } from 'react';
import { clsx } from 'clsx';
import s from './styles.module.scss';

interface Props {
  children: React.ReactNode;
  isContainer?: boolean;
}

export const MainLayout: FC<Props> = ({ children, isContainer }) => {
  return (
    <>
      <Header />
      <main className={clsx(s.main, isContainer && 'container')}>{children}</main>
      <Footer />
    </>
  );
};
