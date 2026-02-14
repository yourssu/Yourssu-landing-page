import Footer from '@/components/Footer';
import Header from '@/components/Header';

interface Props {
  children: React.ReactNode;
  isMainPage: boolean;
}

function Layout({ children, isMainPage }: Props) {
  return (
    <div className="relative">
      <Header isMainPage={isMainPage} />
      {children}
      <Footer backgroundColor="#ffffff" />
    </div>
  );
}

export default Layout;
