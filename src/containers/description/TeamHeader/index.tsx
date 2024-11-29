import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import tw from 'tailwind-styled-components';

import { BasicInformation } from '@/types/recruiting.type';

function TeamHeader({
  name,
  basicInformation,
  isRecruiting,
}: {
  name: string;
  basicInformation: BasicInformation;
  isRecruiting: boolean;
}) {
  const introduction = basicInformation.short_introduction.replaceAll(
    /\\n/g,
    '',
  );
  const icon = getImage(basicInformation.icon.asset.gatsbyImageData);

  return (
    <Container>
      <InnerContainer>
        <TeamIntroContainer>
          <TeamIntroInnerContainer>
            <Title>{introduction}</Title>
            <TeamName>{name}</TeamName>
            <Description>{basicInformation.long_introduction}</Description>
          </TeamIntroInnerContainer>
          {basicInformation.apply_link && isRecruiting ? (
            <Link to={basicInformation.apply_link}>
              <ApplyButton>바로 지원하기</ApplyButton>
            </Link>
          ) : (
            <div>
              <NoApplyButton disabled>지원 기간이 아닙니다</NoApplyButton>
            </div>
          )}
        </TeamIntroContainer>
        <TeamImageContainer>
          {icon && <TeamImage image={icon} alt={name} />}
        </TeamImageContainer>
      </InnerContainer>
    </Container>
  );
}

export default TeamHeader;

const Container = tw.section`
  flex
  items-center

  w-full
  bg-bluegray4-0

  pt-20
  md:pt-12
  sm:pt-12
  xs:pt-12
`;

const InnerContainer = tw.div`
  flex
  items-center
  justify-between
  sm:justify-center
  sm:flex-wrap
  xs:flex-wrap

  max-w-[1440px]
  w-full
  mx-auto

  p-10
  md:p-5
  sm:p-5
  xs:p-5
`;

const TeamIntroContainer = tw.div`
  flex
  flex-col
  justify-center
  sm:min-[400px]
`;

const TeamIntroInnerContainer = tw.div`
  mb-[30px]

  flex
  flex-col
  gap-[10px]
`;

const Title = tw.div`
  h4
  md:body4
  sm:body6
  xs:body6
  text-black-0
`;

const TeamName = tw.div`
  h1
  md:h2
  sm:h3
  xs:h3
  text-black-0
`;

const Description = tw.div`
  body3
  md:body7
  sm:body8
  xs:body8
  whitespace-pre-wrap
  text-gray1-0
`;

const ApplyButton = tw.button`
  body4
  md:body6
  sm:body6
  xs:body6
  text-white-0

  rounded-[50px]
  bg-gradient-to-r
  from-mainGra1-0
  to-mainGra2-0

  px-7
  py-[14px]
  md:py-3
  sm:py-3
  xs:py-3
`;

const NoApplyButton = tw.button`
  body4
  md:body6
  sm:body6
  xs:body6
  text-bluegray1-0

  rounded-[50px]
  bg-bluegray2-0

  px-7
  py-[14px]
  md:py-3
  sm:py-3
  xs:py-3
`;

const TeamImageContainer = tw.div`
  flex
  justify-center
`;

const TeamImage = tw(GatsbyImage)`
  w-[400px]
  md:w-[280px]
  sm:w-[200px]
  xs:w-[200px]
`;
