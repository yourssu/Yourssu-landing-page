import tw from 'tailwind-styled-components';
import { NodeType } from '@/types/hook';

export default function ApplyProcedureStep({
  data,
  index,
}: {
  data: {
    imgData: NodeType;
    description: {
      stepTitle: string;
      stepDescription: string;
    };
  };
  index: number;
}) {
  return (
    <Container
      className="flex flex-col items-center justify-between"
      index={index}
    >
      <StepImage
        index={index}
        src={data.imgData.publicURL}
        alt={data.imgData.name}
      />
      <StepBox index={index} className="flex flex-col justify-start">
        <StepText>
          {index + 1}. {data.description.stepTitle}
        </StepText>
        <Line />
        <StepDescription>{data.description.stepDescription}</StepDescription>
      </StepBox>
    </Container>
  );
}

const Container = tw.div<{ index: number }>`
  col-span-2
  w-auto
  gap-[40px]
  ${(prop) => (prop.index === 2 ? 'xs:col-start-1 sm:col-start-1 md:col-start-1 lg:col-start-2' : null)}
`;

const StepImage = tw.img<{ index: number }>`
  ${(prop) => (prop.index === 2 ? 'xs:w-[174px] sm:w-[174px]' : 'xs:w-[200px] sm:w-[200px]')}
`;

const StepBox = tw.div<{ index: number }>`
  ${(prop) => (prop.index === 2 ? 'xs:h-[157px] sm:h-[157px]' : 'sm:h-[205px] xs:h-[205px]')}
  rounded-[20px] 
  bg-white-0
  p-[32px]
  gap-[12px] 

  w-[456px]
  h-[248px]
  sm:w-[323px]
  xs:w-[323px]
`;

const Line = tw.hr`
  w-[340px]
  sm:w-[259px]
  xs:w-[259px] 
  
  border-[2px] 
  border-purple-0 
`;

const StepText = tw.span`
  h3
  sm:body4
  xs:body4
`;

const StepDescription = tw.p`
  body3
  sm:body7
  xs:body7
`;
