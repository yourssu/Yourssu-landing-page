import { useEffect, useState } from 'react';
// import { graphql } from 'gatsby';
import tw from 'tailwind-styled-components';
import Layout from '@/components/Layout';
import ApplyProcedure from '@/containers/description/ApplyProcedure';
import InaWord from '@/containers/description/InaWord';
import Information from '@/containers/description/Information';
import RoadToPro from '@/containers/description/RoadToPro';
import SideNavigation from '@/containers/description/SideNavigation';
import TeamHeader from '@/containers/description/TeamHeader';
import { OSType } from '@/types/landing.type';

function DescriptionTemplate() {
  const [type, setType] = useState<OSType>();

  useEffect(() => {
    const osType = navigator.userAgent.toLowerCase();
    if (osType.indexOf('android') > -1) {
      setType('android');
    } else if (osType.indexOf('iphone') > -1 || osType.indexOf('ipad') > -1) {
      setType('ios');
    } else {
      setType('pc');
    }
  }, []);

  return (
    <Layout type={type}>
      <TeamHeader />
      <InnerContainer>
        <SectionContainer>
          <Information />
          <ApplyProcedure />
          <RoadToPro />
          <InaWord />
        </SectionContainer>
        <SideNavigation />
      </InnerContainer>
    </Layout>
  );
}

export default DescriptionTemplate;

/* export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`; */

const InnerContainer = tw.div`
  mx-auto
  my-0
  flex
  max-w-[1280px]
  gap-[100px]
  h-fit
`;

const SectionContainer = tw.div`
  mb-[180px]
  mt-[88px]
  flex w-[902px]
  flex-col gap-[60px]
`;
