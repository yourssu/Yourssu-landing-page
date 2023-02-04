<<<<<<< HEAD
import Title from '../components/Title';

export default function Home() {
  return (
    <main>
      <Title>dfdfdf</Title>
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
      </p>
    </main>
  );
}
=======
import Banner from '@/container/home/banner';
import Team from '@/container/home/Team';
import Project from '@/container/home/project';
import Ideal from '@/container/home/Ideal';
import Layout from '../components/Layout';
import Seo from '@/components/Seo';

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

export function Head() {
  return <Seo title="home" />;
}
>>>>>>> 0dd8100 (추가 - 부서별 섹션, 인재상 섹션)
