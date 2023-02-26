import { ReactNode } from 'react';
import '../styles/global.css';
import Footer from './Footer';
import Header from './Header';

type LayoutProp = {
  children: ReactNode;
  isType: string | undefined;
};

function Layout({ children, isType }: LayoutProp) {
  return (
    <div className="relative">
      <Header isType={isType} />
      {children}
      <Footer isType={isType} />
    </div>
  );
}

export default Layout;
