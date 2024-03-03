import { Link } from 'gatsby';
import tw from 'tailwind-styled-components';
import { BasicInformation } from '@/types/recruiting.type';
import extractImageUrl from '@/utils/extractImageUrl';

function TeamHeader({
  basicInformation,
}: {
  basicInformation: BasicInformation;
}) {
  return (
    <Container>
      <InnerContainer>
        <TeamIntroContainer>
          <TeamIntroInnerContainer>
            <Title>{basicInformation.short_introduction}</Title>
            <TeamName>{basicInformation.name}</TeamName>
            <Description>{basicInformation.long_introduction}</Description>
          </TeamIntroInnerContainer>
          {basicInformation.apply_link ? (
            <Link to={basicInformation.apply_link}>
              <ApplyButton>바로 지원하기</ApplyButton>
            </Link>
          ) : (
            <div>
              <NoApplyButton>지원 기간이 아닙니다</NoApplyButton>
            </div>
          )}
        </TeamIntroContainer>
        <TeamImageContainer>
          <TeamImage
            src={extractImageUrl(basicInformation._rawIcon.asset._ref)}
            alt={basicInformation.name}
          />
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
  body2
  md:body5
  sm:body8
  xs:body8
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

  cursor-default
`;

const TeamImageContainer = tw.div`
  flex
  justify-center
`;

const TeamImage = tw.img`
  w-[400px]
  md:w-[280px]
  sm:w-[200px]
  xs:w-[200px]
`;
