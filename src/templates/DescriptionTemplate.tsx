import { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import tw from 'tailwind-styled-components';
import Layout from '@/components/Layout';
import ApplyProcedure from '@/containers/description/ApplyProcedure';
import InaWord from '@/containers/description/InaWord';
import Information from '@/containers/description/Information';
import RoadToPro from '@/containers/description/RoadToPro';
import SideNavigation from '@/containers/description/SideNavigation';
import TeamHeader from '@/containers/description/TeamHeader';
import { OSType } from '@/types/landing.type';
import { BasicInformation, DefaultContent } from '@/types/recruiting.type';

interface DescriptionTemplateProps {
  data: {
    allSanityDepartment: {
      edges: {
        node: {
          basicInformation: BasicInformation;
          task: DefaultContent;
          ideal: DefaultContent;
          experience: DefaultContent;
        };
      }[];
    };
  };
}

function DescriptionTemplate({
  data: {
    allSanityDepartment: { edges },
  },
}: DescriptionTemplateProps) {
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
      <TeamHeader basicInformation={edges[0].node.basicInformation} />
      <InnerContainer>
        <SectionContainer>
          <Information
            task={edges[0].node.task}
            ideal={edges[0].node.ideal}
            experience={edges[0].node.experience}
          />
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

export const querySanityDataByName = graphql`
  query querySanityDataByName($name: String) {
    allSanityDepartment(filter: { basicInformation: { name: { eq: $name } } }) {
      edges {
        node {
          basicInformation {
            name
            short_introduction
            long_introduction
            apply_link
            _rawIcon
          }
          task {
            title
            content
          }
          ideal {
            title
            content
          }
          experience {
            title
            content
          }
        }
      }
    }
  }
`;

/* export const querySanityDataByName = graphql`
  query querySanityDataByName($name: String) {
    allSanityDepartment(filter: { basicInformation: { name: { eq: $name } } }) {
      edges {
        node {
          basicInformation {
            name
            short_introduction
            long_introduction
            apply_link
          }
          task {}
          ideal {}
          experience {}
          applyProcedure {}
          roadToPro {}
          inaWord {}
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
