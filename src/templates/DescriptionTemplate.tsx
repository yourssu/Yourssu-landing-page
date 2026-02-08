import { graphql, Link } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';

import ApplyButton from '@/components/Button/ApplyButton';
import Layout from '@/components/Layout';
import DepartmentSeo from '@/components/Seo/DepartmentSeo';
import ApplyProcedure from '@/containers/description/ApplyProcedure';
import GrowthAndDiff from '@/containers/description/GrowthAndDiff';
// import InaWord from '@/containers/description/InaWord';
import Information from '@/containers/description/Information';
// import Medium from '@/containers/description/Medium';
import RoadToPro from '@/containers/description/RoadToPro';
import SideNavigation from '@/containers/description/SideNavigation';
import TeamHeader from '@/containers/description/TeamHeader';
import {
  BasicInformation,
  DefaultContentInformation,
  GrowthAndDiffInformation,
  InaWordInformation,
  MediumInformation,
  RoadToProInformation,
  SkillContentInformation,
} from '@/types/recruiting.type';
import isTodayInRange from '@/utils/isTodayInRange';

const KAKAO_LINK = 'http://pf.kakao.com/_AxfrxeT';

interface SanityDepartmentData {
  allSanityDepartment: {
    edges: {
      node: {
        basicInformation: BasicInformation;
        task: DefaultContentInformation;
        ideal: DefaultContentInformation;
        experience: DefaultContentInformation;
        skill: SkillContentInformation | null;
        roadToProVideo: RoadToProInformation;
        growthAndDiff: GrowthAndDiffInformation;
        inaWord: InaWordInformation;
        articleContent: MediumInformation[];
      };
    }[];
  };
}

interface DescriptionTemplateProps {
  data: SanityDepartmentData;
  pageContext: {
    name: string;
    nameList: string[];
    formSchedule: { start: Date | null; end: Date | null } | null;
    procedure:
      | {
          step: string;
          schedule: string;
        }[]
      | null;
  };
}

function DescriptionTemplate({
  data: {
    allSanityDepartment: { edges },
  },
  pageContext: { name, nameList, formSchedule, procedure },
}: DescriptionTemplateProps) {
  const [isRecruiting, setIsRecruiting] = useState(false);
  const breakpoints = useBreakpoint();

  useEffect(() => {
    if (typeof window !== 'undefined' && formSchedule) {
      const recruiting = isTodayInRange(formSchedule);
      setIsRecruiting(recruiting);
    }
  }, [formSchedule]);

  console.log(name, isRecruiting);

  return (
    <Layout isMainPage={true}>
      <TeamHeader
        name={name}
        basicInformation={edges[0].node.basicInformation}
      />
      <Container>
        <InnerContainer>
          <div className="inline-flex flex-1 flex-col items-start justify-center gap-5 self-stretch">
            <Information
              task={edges[0].node.task}
              ideal={edges[0].node.ideal}
              experience={edges[0].node.experience}
              skill={edges[0].node.skill}
            />
            <ApplyProcedure applyProcedure={procedure} />
            <GrowthAndDiff growthAndDiff={edges[0].node.growthAndDiff} />
            {/* <InaWord
                departmentImage={
                  edges[0].node.basicInformation.icon.asset.gatsbyImageData
                }
                inaWord={edges[0].node.inaWord}
              /> */}
            <RoadToPro roadToPro={edges[0].node.roadToProVideo} />
            {/*<Medium medium={edges[0].node.articleContent} />*/}
          </div>
          {!breakpoints.md && (
            <SideNavigation
              currentTeam={{
                name,
                isRecruiting,
                applyLink: edges[0].node.basicInformation.apply_link,
              }}
              teamList={nameList}
            />
          )}
        </InnerContainer>
        {breakpoints.md && (
          <ApplyButtonContainer>
            <ApplyButton
              link={edges[0].node.basicInformation.apply_link}
              isRecruiting={isRecruiting}
            />
            <div className="body8 flex flex-row-reverse gap-2 text-gray1-0">
              <Link
                to="/recruiting/#faq"
                className="flex w-fit flex-col items-center"
              >
                <div className="mb-[1px] items-center">FAQ 보러가기</div>
              </Link>
              |
              <a
                href={KAKAO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit flex-col items-center"
              >
                <div className="mb-[1px] items-center">문의하기</div>
              </a>
            </div>
          </ApplyButtonContainer>
        )}
      </Container>
    </Layout>
  );
}

export default DescriptionTemplate;

export function Head({
  data: { allSanityDepartment },
}: {
  data: SanityDepartmentData;
}) {
  const data = allSanityDepartment.edges[0].node.basicInformation;

  return (
    <DepartmentSeo
      title={`${data.short_introduction.replace(/\\n/g, '')} ${data.name}`}
      description={data.long_introduction}
      image={data.icon.asset.gatsbyImageData}
    />
  );
}

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
            icon {
              asset {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
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
          articleContent {
            url
            title
            description
            image
          }
          roadToProVideo {
            title
            roadToPro_list {
              video_thumbnail {
                asset {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
              presenter {
                presenter_nickname
                presenter_name
              }
              video_link
            }
          }
          growthAndDiff {
            title
            content
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
  bg-white-0

`;

const InnerContainer = tw.div`
  flex
  gap-5
  lg:gap-5
  md:gap-0
  sm:gap-0
  xs:gap-0

  lg:px-10
  md:px-10
  sm:px-5
  xs:px-5
  px-[120px]

  max-w-[1440px]
  h-fit

  mx-auto
  pt-5
  pb-20
  md:pb-[50px]
  sm:pb-8
  xs:pb-8
`;

const ApplyButtonContainer = tw.div`
  sticky
  bottom-0
  gap-3
  
  flex
  flex-col
  
  w-full
  p-5

  bg-gradient-to-t
  from-white-0
  from-80%
  to-transparent
`;
