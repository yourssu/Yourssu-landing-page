import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import tw from 'tailwind-styled-components';
import { NodeType } from '@/types/hook';

export default function QuestionCard({
  question,
  smallArrow,
}: {
  question: string;
  smallArrow: NodeType;
}) {
  const breakpoints = useBreakpoint();

  return (
    <Container
      $windowSize={!breakpoints.query550}
      className="flex items-center justify-between"
    >
      <div className="flex items-center gap-[12px] sm:gap-[8px]">
        <Q>Q</Q>
        <Question>{question}</Question>
      </div>
      <QuestionIcon src={smallArrow.publicURL} alt={smallArrow.name} />
    </Container>
  );
}

const Container = tw.div<{ $windowSize: boolean }>`
  w-[1280px]
  lg:w-[1080px]
  md:w-[720px]
  ${(prop) => (prop.$windowSize ? 'sm:w-[530px]' : 'w-[330px]')}
  xs:w-[330px]

  rounded-[16px] 
  bg-white-0 
  p-[32px]
`;

const Q = tw.span`
  font-PretendardSB
  text-[32px] 
  font-[700] 
  leading-[28px] 
  tracking-[-0.64px] 

  bg-gradient-to-r 
  from-mainGra2-0 
  to-mainGra1-0 
  bg-clip-text
  text-transparent
`;

const Question = tw.p`
  w-full
  h-auto
  text-gray1-0
  font-PretendardR
  text-[24px]
  font-[500] 
  leading-[24px] 
  tracking-[-2%] 
  
  sm:text-[21px]
  sm:font
  sm:leading-[24px]
  sm:tracking-[-0.42px]

  xs:text-[21px]
  xs:font
  xs:leading-[24px]
  xs:tracking-[-0.42px]
`;

const QuestionIcon = tw.img`
  w-[12px]
  h-auto
  sm:h-[12px]
  md:h-[12px]
  -rotate-90
`;
