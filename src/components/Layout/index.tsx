import Footer from '@/components/Footer';
import Header from '@/components/Header';

interface Props {
  children: React.ReactNode;
  isMainPage: boolean;
}

function Layout({ children, isMainPage }: Props) {
  return (
    <div className={`relative ${!isMainPage && 'bg-bluegray4-0'}`}>
      <Header isMainPage={isMainPage} />
      {children}
      <Footer backgroundColor={isMainPage ? 'gray4' : 'bluegray4'} />
    </div>
  );
}

export default Layout;
