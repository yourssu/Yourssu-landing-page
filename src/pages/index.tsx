import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import Banner from '@/containers/landing/Banner';
import Channel from '@/containers/landing/Channel';
import CoreValue from '@/containers/landing/CoreValue';
import Culture from '@/containers/landing/Culture/new';
import MissionVision from '@/containers/landing/MVC/new';
import Product from '@/containers/landing/Product';
import { ReviewCarousel } from '@/containers/landing/Review';
import ToRecruit from '@/containers/landing/ToRecruit';

export default function Home() {
  return (
    <Layout isMainPage>
      <Banner />
      <Product />
      <MissionVision />
      <CoreValue />
      <Culture />
      <Channel />
      <ReviewCarousel />
      <ToRecruit />
    </Layout>
  );
}

export function Head() {
  return <Seo />;
}
