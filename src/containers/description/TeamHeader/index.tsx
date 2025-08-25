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
    <section className="flex items-center justify-center">
      <div className="mt-[74px] inline-flex w-full max-w-[1440px] flex-col justify-center gap-8 self-stretch overflow-hidden bg-[#FFFFFF] px-[120px] pb-5 pt-20 xs:px-5 sm:px-5 md:px-10 lg:px-10">
        <TeamIntroContainer>
          <TeamIntroInnerContainer>
            <Title>{introduction}</Title>
            <TeamName>{name}</TeamName>
          </TeamIntroInnerContainer>
        </TeamIntroContainer>
      </div>
    </section>
  );
}

export default TeamHeader;

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
