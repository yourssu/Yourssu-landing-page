import Banner from '@/container/home/banner';
import Team from '@/container/home/Team';
import Project from '@/container/home/project';
import Ideal from '@/container/home/Ideal';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout pageTypes="home">
      <Banner />
      <Team />
      <Ideal />
      <Project />
    </Layout>
  );
}
