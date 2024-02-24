import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import Banner from '@/containers/select/Banner';
import { OSType } from '@/types/landing.type';

function Recruiting() {
  const [type, setType] = useState<OSType>();
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
  return (
    <Layout pageType="recruiting" type={type}>
      <div className="flex w-full flex-col items-center justify-center gap-[180px] py-[50px]">
        <Banner />
      </div>
    </Layout>
  );
}

export default Recruiting;

export function Head() {
  return <Seo />;
}
