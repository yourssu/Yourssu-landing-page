import { Link } from 'gatsby';
import tw from 'tailwind-styled-components';
import { BasicInformation } from '@/types/recruiting.type';
import extractImagUrl from '@/utils/extractImageUrl';

function TeamHeader({
  basicInformation,
}: {
  basicInformation: BasicInformation;
}) {
  return (
    <Container>
      <InnerContainer>
        <div>
          <TeamIntroContainer>
            <Title>{basicInformation.short_introduction}</Title>
            <TeamName>{basicInformation.name}</TeamName>
            <Description>{basicInformation.long_introduction}</Description>
          </TeamIntroContainer>
          <Link to={basicInformation.apply_link}>
            <ApplyButton>바로 지원하기</ApplyButton>
          </Link>
        </div>
        <img
          src={extractImagUrl(basicInformation._rawIcon.asset._ref)}
          alt={basicInformation.name}
        />
      </InnerContainer>
    </Container>
  );
}

export default TeamHeader;

const Container = tw.section`
  w-full
  bg-bluegray4-0
`;

const InnerContainer = tw.div`
  mx-auto
  my-0
  flex
  max-w-[1280px]
  items-center
  justify-between
`;

const TeamIntroContainer = tw.div`
  mb-[30px]
  flex
  flex-col
  gap-[10px]
`;

const Title = tw.div`
  body2
  text-black-0
`;

const TeamName = tw.div`
  h1
  text-black-0
`;

const Description = tw.div`
  body3
  whitespace-pre-wrap
  text-gray1-0
`;

const ApplyButton = tw.button`
  body4
  rounded-[50px]
  bg-gradient-to-r
  from-mainGra1-0
  to-mainGra2-0
  px-7
  py-[14px]
  text-white-0

`;
