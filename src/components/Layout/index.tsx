import { OSType } from '@/types/landing.type';
import Footer from '../Footer';
import Header from '../Header';

interface Props {
  children: React.ReactNode;
  type: OSType;
  pageType: string;
}

function Layout({ children, type, pageType }: Props) {
  return (
    <div
      className={`relative ${pageType === 'recruiting' && 'bg-bluegray4-0'}`}
    >
      <Header pageType={pageType} type={type} />
      {children}
      <Footer
        backgroundColor={pageType === 'recruiting' ? 'bluegray4' : 'gray4'}
        type={type}
      />
    </div>
  );
}

export default Layout;
