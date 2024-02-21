import { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import tw from 'tailwind-styled-components';
import ApplyButton from '@/components/Button/ApplyButton';
import Layout from '@/components/Layout';
import ApplyProcedure from '@/containers/description/ApplyProcedure';
import InaWord from '@/containers/description/InaWord';
import Information from '@/containers/description/Information';
import RoadToPro from '@/containers/description/RoadToPro';
import SideNavigation from '@/containers/description/SideNavigation';
import TeamHeader from '@/containers/description/TeamHeader';
import { OSType } from '@/types/landing.type';
import {
  ApplyProcedureInformation,
  BasicInformation,
  DefaultContentInformation,
  InaWordInformation,
  RoadToProInformation,
  SkillContentInformation,
} from '@/types/recruiting.type';

interface DescriptionTemplateProps {
  data: {
    allSanityDepartment: {
      edges: {
        node: {
          basicInformation: BasicInformation;
          task: DefaultContentInformation;
          ideal: DefaultContentInformation;
          experience: DefaultContentInformation;
          skill: SkillContentInformation | null;
          applyProcedure: ApplyProcedureInformation[];
          roadToProVideo: RoadToProInformation;
          inaWord: InaWordInformation;
        };
      }[];
    };
  };
  pageContext: {
    name: string;
    nameList: string[];
  };
}

function DescriptionTemplate({
  data: {
    allSanityDepartment: { edges },
  },
  pageContext: { name, nameList },
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

  const windowSize = useMediaQuery({
    query: '(min-width: 1081px)',
  });

  return (
    <Layout type={type}>
      <TeamHeader basicInformation={edges[0].node.basicInformation} />
      <Container>
        <InnerContainer>
          <SectionContainer>
            <DefaultInformationContainer>
              <Information
                task={edges[0].node.task}
                ideal={edges[0].node.ideal}
                experience={edges[0].node.experience}
                skill={edges[0].node.skill}
              />
              <ApplyProcedure applyProcedure={edges[0].node.applyProcedure} />
            </DefaultInformationContainer>
            <Line />
            <RoadToPro roadToPro={edges[0].node.roadToProVideo} />
            <InaWord
              departmentImage={
                edges[0].node.basicInformation._rawIcon.asset._ref
              }
              inaWord={edges[0].node.inaWord}
            />
          </SectionContainer>
          {windowSize && (
            <SideNavigation
              currentTeam={{
                name,
                applyLink: edges[0].node.basicInformation.apply_link,
              }}
              teamList={nameList}
            />
          )}
        </InnerContainer>
      </Container>
      <ApplyButtonContainer>
        {!windowSize && (
          <ApplyButton
            link={edges[0].node.basicInformation.apply_link}
            $testSize="body4"
          />
        )}
      </ApplyButtonContainer>
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
          skill {
            title
            content
            notice
          }
          applyProcedure {
            schedule
            step
          }
          roadToProVideo {
            title
            roadToPro_list {
              video_thumbnail {
                _rawAsset
              }
              presenter {
                presenter_nickname
                presenter_name
              }
              video_link
            }
          }
          inaWord {
            title
            word
            content
          }
        }
      }
    }
  }
`;

const Container = tw.div`
  flex
  justify-center
  
  md:pb-20
  sm:pb-20
  xs:pb-20
`;

const InnerContainer = tw.div`
  flex
  gap-[100px]
  lg:gap-[50px]
  md:gap-0
  sm:gap-0
  xs:gap-0

  max-w-[1364px]
  h-fit

  mx-10
  sm:mx-5

  my-20
  md:my-[50px]
  sm:my-8
  xs:my-8 
`;

const SectionContainer = tw.div`
  flex
  flex-1
  flex-col
  gap-[70px]
  md:gap-[50px]
  sm:gap-[50px]
  xs:gap-[50px]
`;

const DefaultInformationContainer = tw.div`
  flex
  flex-col
  gap-[60px]
  lg:gap-[50px]
  md:gap-[50px]
  sm:gap-[50px]
  xs:gap-[50px]
`;

const Line = tw.hr`
  h-[2px]
  my-4
  border-none
  bg-gray3-0
`;

const ApplyButtonContainer = tw.div`
  fixed
  bottom-0
  
  flex
  
  w-full
  p-5
`;
