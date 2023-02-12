import Layout from '../components/Layout';
import Seo from '@/components/Seo';
import Team from '@/container/home/Team';
import Header from '@/components/Header';
import Banner from '@/container/home/banner';
import Ideal from '@/container/home/Ideal';
import Project from '@/container/home/project';
import Culture from '@/container/home/Culture';
import Footer from '@/container/Footer';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Header />
      <Team />
      <Ideal />
      <Project />
      <Culture />
      <Footer />
    </Layout>
  );
}

export function Head() {
  return <Seo title="home" />;
}
