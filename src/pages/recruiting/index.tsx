import { graphql } from 'gatsby';
import { useRef } from 'react';

import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
// import About from '@/containers/select/About';
import ApplyProcess from '@/containers/select/ApplyProcedure/new';
import RecruitBanner from '@/containers/select/Banner/new';
import FAQ from '@/containers/select/FAQ';
import Ideal from '@/containers/select/Ideal/new';
import Supporting from '@/containers/select/Supporting/new';

function Recruiting() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Layout isMainPage={false}>
      <div className="flex w-full flex-col items-center justify-center pb-[50px] pt-[75px] xs:pt-[51px] sm:pt-[51px]">
        <RecruitBanner />
        <Supporting />
        <Ideal />
        {/*<About />*/}
        <ApplyProcess />
        <div id="faq" ref={sectionRef} className="flex w-full justify-center">
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
