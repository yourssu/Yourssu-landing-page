import Banner from '@/container/home/banner';
import Project from '@/container/home/project';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout pageTypes="home">
      <Banner />
      <Project />
    </Layout>
  );
}
