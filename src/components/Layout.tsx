import { ReactNode } from 'react';
import '../styles/global.css';
import Footer from './Footer';
import Header from './Header';

type LayoutProp = {
  children: ReactNode;
};

function Layout({ children }: LayoutProp) {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
