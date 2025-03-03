import MVC from 'src/containers/landing/MVC';

import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import Banner from '@/containers/landing/Banner';
import Culture from '@/containers/landing/Culture';
import Project from '@/containers/landing/Project';
import Team from '@/containers/landing/Team';

export default function Home() {
  return (
    <Layout isMainPage>
      <Banner />
      <Team />
      <MVC />
      <Project />
      <Culture />
    </Layout>
  );
}

export function Head() {
  return <Seo />;
}
