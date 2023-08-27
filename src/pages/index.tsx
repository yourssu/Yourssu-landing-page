import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Seo from '@/components/Seo';
import Team from '@/container/home/Team';
import Banner from '@/container/home/banner';
import Project from '@/container/home/project';
import Ideal from '@/container/home/Ideal';
import Culture from '@/container/home/Culture';

export default function Home() {
  const [type, setType] = useState<string>('');
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
    <Layout type={type}>
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
