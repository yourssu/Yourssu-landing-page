import Banner from '@/container/home/banner';
// import Team from '@/container/home/Team';
// import Project from '@/container/home/project';
// import Ideal from '@/container/home/Ideal';
import Layout from '../components/Layout';
import Seo from '@/components/Seo';
import Header from '@/components/Header';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Banner />
      {/* <Project /> */}
    </Layout>
  );
}

export function Head() {
  return <Seo title="home" />;
}
