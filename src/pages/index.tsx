import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import Banner from '@/containers/landing/Banner';
import Culture from '@/containers/landing/Culture';
import Ideal from '@/containers/landing/Ideal';
import Project from '@/containers/landing/Project';
import Team from '@/containers/landing/Team';
import { OSType } from '@/types/landing.type';

export default function Home() {
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
    <Layout pageType="main" type={type}>
      <Banner type={type} />
      <Team />
      <Ideal />
      <Project type={type} />
      <Culture />
    </Layout>
  );
}

export function Head() {
  return <Seo />;
}
