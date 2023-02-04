import { ReactNode } from 'react';
import Header from './Header';
import '../styles/global.css';

type LayoutProp = {
  children: ReactNode;
  pageTypes: string;
};

function Layout({ children, pageTypes }: LayoutProp) {
  return (
    <div className="relative">
      {pageTypes === 'home' ? <Header /> : null}
      {children}
    </div>
  );
}

export default Layout;
