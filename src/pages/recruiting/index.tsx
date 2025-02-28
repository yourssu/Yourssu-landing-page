import { graphql } from 'gatsby';
import { useRef } from 'react';

import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
// import About from '@/containers/select/About';
import Ideal from '@/containers/landing/Ideal';
import ApplyProcedure from '@/containers/select/ApplyProcedure';
import Banner from '@/containers/select/Banner';
import FAQ from '@/containers/select/FAQ';
import Supporting from '@/containers/select/Supporting';

function Recruiting() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Layout isMainPage={false}>
      <div className="flex w-full flex-col items-center justify-center gap-[180px] py-[50px]">
        <Banner />
        <Ideal />
        {/*<About />*/}
        <ApplyProcedure />
        <Supporting />
        <div id="faq" ref={sectionRef}>
          <FAQ />
        </div>
      </div>
    </Layout>
  );
}

export default Recruiting;

export const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export function Head() {
  return <Seo />;
}
