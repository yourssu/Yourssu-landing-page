import tw from 'tailwind-styled-components';

import { BasicInformation } from '@/types/recruiting.type';

function TeamHeader({
  name,
  basicInformation,
}: {
  name: string;
  basicInformation: BasicInformation;
}) {
  const introduction = basicInformation.short_introduction.replaceAll(
    /\\n/g,
    '',
  );

  return (
    <Container>
      <InnerContainer>
        <TeamIntroContainer>
          <TeamIntroInnerContainer>
            <Title>{introduction}</Title>
            <TeamName>{name}</TeamName>
          </TeamIntroInnerContainer>
        </TeamIntroContainer>
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
  flex
  flex-col
  gap-[12px]
`;

const Title = tw.div`
  T2_Rg_24
  md:body4
  sm:body6
  xs:body6
  text-[#4B505D]
`;

const TeamName = tw.div`
  H2_Sb_40
  md:h2
  sm:h3
  xs:h3
  text-black-0
`;
