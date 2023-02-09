import Banner from '@/container/home/banner';
// import Team from '@/container/home/Team';
// import Project from '@/container/home/project';
// import Ideal from '@/container/home/Ideal';
import Layout from '../components/Layout';
import Seo from '@/components/Seo';
import Header from '@/components/Header';
import Team from '@/container/home/Team';
import Ideal from '@/container/home/Ideal';
import Culture from '@/container/home/Culture';
import Footer from '@/container/Footer';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Banner />
      <Team />
      <Ideal />
      {/* <Project /> */}
      <Culture />
      <Footer />
    </Layout>
  );
}

export function Head() {
  return <Seo title="home" />;
}
