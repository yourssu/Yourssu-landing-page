import Layout from '../components/Layout';
import Seo from '@/components/Seo';
import Team from '@/container/home/Team';

export default function Home() {
  return (
    <Layout>
      <Team />
    </Layout>
  );
}

export function Head() {
  return <Seo title="home" />;
}
