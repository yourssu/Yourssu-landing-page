import { useEffect, useRef, useState } from 'react';

import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import About from '@/containers/select/About';
import ApplyProcedure from '@/containers/select/ApplyProcedure';
import Banner from '@/containers/select/Banner';
import FAQ from '@/containers/select/FAQ';
import Ideal from '@/containers/select/Ideal';
import Supporting from '@/containers/select/Supporting';
import { OSType } from '@/types/landing.type';

function Recruiting() {
  const [type, setType] = useState<OSType>();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const osType = navigator.userAgent.toLowerCase();
    if (osType.indexOf('android') > -1) {
      setType('android');
    } else if (osType.indexOf('iphone') > -1 || osType.indexOf('ipad') > -1) {
      setType('ios');
    } else {
      setType('pc');
    }
  }, []);

  const moveSupporting = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <Layout pageType="recruiting" type={type}>
      <div className="flex w-full flex-col items-center justify-center gap-[180px] py-[50px]">
        <Banner moveSupporting={moveSupporting} />
        <Ideal />
        <About />
        <ApplyProcedure />
        <div ref={sectionRef}>
          <Supporting />
        </div>
        <FAQ />
      </div>
    </Layout>
  );
}

export default Recruiting;

export function Head() {
  return <Seo />;
}
