import Layout from '../components/Layout';
import Seo from '@/components/Seo';
import Header from '@/components/Header';

export default function Home() {
  return (
    <Layout>
      <Header />
    </Layout>
  );
}

export function Head() {
  return <Seo title="home" />;
}
