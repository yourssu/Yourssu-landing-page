import Layout from '../components/Layout';
import Seo from '@/components/Seo';
import Team from '@/container/home/Team';
import Banner from '@/container/home/banner';
import Project from '@/container/home/project';
import Ideal from '@/container/home/Ideal';
import Culture from '@/container/home/Culture';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Team />
      <Ideal />
      <Project />
      <Culture />
    </Layout>
  );
}

export function Head() {
  return <Seo title="home" />;
}
