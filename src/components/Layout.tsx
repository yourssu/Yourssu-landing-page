import { ReactNode } from 'react';
import '../styles/global.css';

type LayoutProp = {
  children: ReactNode;
};

function Layout({ children }: LayoutProp) {
  return <div className="relative">{children}</div>;
}

export default Layout;
