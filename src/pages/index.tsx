import Layout from '../components/Layout';
import Seo from '@/components/Seo';
import Team from '@/container/home/Team';
import Header from '@/components/Header';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Team />
    </Layout>
  );
}

export function Head() {
  return <Seo title="home" />;
}
