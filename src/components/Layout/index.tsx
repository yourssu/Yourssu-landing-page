import { OSType } from '@/types/landing.type';
import Footer from '../Footer';
import Header from '../Header';

interface Props {
  children: React.ReactNode;
  type: OSType;
}

function Layout({ children, type }: Props) {
  return (
    <div className="relative">
      <Header type={type} />
      {children}
      <Footer type={type} />
    </div>
  );
}

export default Layout;
