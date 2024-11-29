import tw from 'tailwind-styled-components';

import { GrowthAndDiffInformation } from '@/types/recruiting.type';

interface GrowthAndDiffProps {
  growthAndDiff: GrowthAndDiffInformation;
}

function GrowthAndDiff({ growthAndDiff }: GrowthAndDiffProps) {
  const { title, content } = growthAndDiff;

  // 콘텐츠가 없다면, 이 섹션을 보여주지 않을게요.
  if (!content) return null;

  return (
    <section>
      <Title>{title}</Title>
      <DescriptionContainer>{content}</DescriptionContainer>
    </section>
  );
}

const Title = tw.div`
  body1
  md:body4
  sm:body4
  xs:body4

  pb-6
  text-black-0
`;

const DescriptionContainer = tw.div`
  body3
  md:body7
  sm:body7
  xs:body7

  whitespace-pre-wrap
  sm:whitespace-normal
  xs:whitespace-normal
  text-gray1-0
`;

export default GrowthAndDiff;
