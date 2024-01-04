import '../styles/global.css';
import { LayoutData } from '@/types/types';
import Footer from './Footer';
import Header from './Header';

function Layout({ children, type }: LayoutData) {
  return (
    <div className="relative">
      <Header type={type} />
      {children}
      <Footer type={type} />
    </div>
  );
}

export default Layout;
