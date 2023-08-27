import '../styles/global.css';
import Footer from './Footer';
import Header from './Header';
import { LayoutData } from '@/types/types';

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
