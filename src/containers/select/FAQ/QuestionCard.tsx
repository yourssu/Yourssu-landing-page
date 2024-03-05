import { useState } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import tw from 'tailwind-styled-components';
import { NodeType } from '@/types/hook';

export default function QuestionCard({
  question,
  answer,
  smallArrow,
}: {
  question: string;
  answer: string;
  smallArrow: NodeType;
}) {
  const breakpoints = useBreakpoint();
  const [onClick, setOnClick] = useState(false);

  const handlerQuestionOnclick = () => {
    setOnClick((prev) => !prev);
  };

  return (
    <Container
      $windowSize={!breakpoints.query550}
      className="flex flex-col"
      onClick={handlerQuestionOnclick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[12px] sm:gap-[8px]">
          <Q>Q</Q>
          <Text>{question}</Text>
        </div>
        <QuestionIcon
          className={`${onClick ? 'rotate-90' : ''} transform`}
          src={smallArrow.publicURL}
          alt={smallArrow.name}
        />
      </div>
      {onClick && (
        <AnswerBox>
          <AnswerText>{answer}</AnswerText>
        </AnswerBox>
      )}
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

  gap-[20px]

  cursor-pointer
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

const Text = tw.p`
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

const AnswerBox = tw.div`
  bg-bluegray4-0
  rounded-[12px]
  px-[36px]
  py-[24px]
  sm:px-[20px]
  sm:py-[16px]
  xs:px-[20px]
  xs:py-[16px]
`;

const AnswerText = tw.p`
  text-gray1-0
  body2
  sm:body7
  xs:body7
`;
