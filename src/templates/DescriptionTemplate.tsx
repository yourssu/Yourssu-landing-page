// import { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import tw from 'tailwind-styled-components';
// import Layout from '@/components/Layout';
import ApplyProcedure from '@/containers/description/ApplyProcedure';
import InaWord from '@/containers/description/InaWord';
import Information from '@/containers/description/Information';
import RoadToPro from '@/containers/description/RoadToPro';
import SideNavigation from '@/containers/description/SideNavigation';
import TeamHeader from '@/containers/description/TeamHeader';
// import { OSType } from '@/types/landing.type';
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
  /* const [type, setType] = useState<OSType>();

  useEffect(() => {
    const osType = navigator.userAgent.toLowerCase();
    if (osType.indexOf('android') > -1) {
      setType('android');
    } else if (osType.indexOf('iphone') > -1 || osType.indexOf('ipad') > -1) {
      setType('ios');
    } else {
      setType('pc');
    }
  }, []); */

  return (
    <>
      <TeamHeader basicInformation={edges[0].node.basicInformation} />
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
            departmentImage={edges[0].node.basicInformation._rawIcon.asset._ref}
            inaWord={edges[0].node.inaWord}
          />
        </SectionContainer>
        <SideNavigation
          currentTeam={{
            name,
            applyLink: edges[0].node.basicInformation.apply_link,
          }}
          teamList={nameList}
        />
      </InnerContainer>
    </>
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

const InnerContainer = tw.div`
  flex
  gap-[100px]

  max-w-[1364px]
  h-fit
  mx-auto
  my-20
`;

const SectionContainer = tw.div`
  flex
  flex-1
  flex-col
  gap-[70px]
`;

const DefaultInformationContainer = tw.div`
  flex
  flex-col
  gap-[60px]
`;

const Line = tw.hr`
  my-4
  h-[2px]
  border-none
  bg-gray3-0
`;
