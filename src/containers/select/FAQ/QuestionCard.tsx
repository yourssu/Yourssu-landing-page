import * as Accordion from '@radix-ui/react-accordion';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import tw from 'tailwind-styled-components';

import { NodeType } from '@/types/hook';

import { QuestionEmptyIcon, QuestionFillIcon } from './icons';

export default function QuestionCard({
  question,
  answer,
  smallArrow,
}: {
  question: string;
  answer: React.ReactNode;
  smallArrow: NodeType;
}) {
  const breakpoints = useBreakpoint();

  return (
    <Accordion.Item value={question}>
      <Accordion.Trigger className="group">
        <Container $windowSize={!breakpoints.query550}>
          <div className="flex items-center justify-between xs:gap-[20px] sm:gap-[20px]">
            <div className="flex items-center gap-[12px] text-left xs:gap-[8px] sm:gap-[8px]">
              <div className="relative h-6 w-6 flex-shrink-0">
                <QuestionEmptyIcon
                  className="absolute inset-0 transition-opacity duration-300
                           group-data-[state=closed]:opacity-100 
                           group-data-[state=open]:opacity-0"
                />
                <QuestionFillIcon
                  className="absolute inset-0 transition-opacity duration-300
                           group-data-[state=closed]:opacity-0 
                           group-data-[state=open]:opacity-100"
                />
              </div>
              <p
                className="text-xl leading-7 tracking-[-0.02em]
                group-data-[state=closed]:font-normal group-data-[state=open]:font-semibold
                group-data-[state=closed]:text-[#4B505D] group-data-[state=open]:text-[#25262C]"
              >
                {question}
              </p>
            </div>
            <QuestionIcon
              className="group-data-[state=open]:rotate-90"
              src={smallArrow.publicURL}
              alt={smallArrow.name}
            />
          </div>

          <Accordion.Content className="overflow-hidden text-left data-[state=closed]:animate-accordion-slide-up data-[state=open]:animate-accordion-slide-down">
            <AnswerSpace />
            <AnswerBox>
              <p className="text-base font-normal leading-6 tracking-[-0.02em] text-[#4B505D]">
                {answer}
              </p>
            </AnswerBox>
          </Accordion.Content>
        </Container>
      </Accordion.Trigger>
    </Accordion.Item>
  );
}

const Container = tw.div<{ $windowSize: boolean }>`
  w-[1200px]
  lg:w-[1200px]
  md:w-[720px]
  ${(prop) => (prop.$windowSize ? 'sm:w-[530px]' : 'w-[350px]')}
  xs:w-[350px]

  rounded-[16px] 
  bg-white-0 
  p-6

  border
  border-[#F1F1F4]

  cursor-pointer
`;

const QuestionIcon = tw.img`
  h-[12px]
  
  -rotate-90
`;

const AnswerBox = tw.div`
  // bg-[#F7F8F8]
  bg-bluegray4-0
  rounded-[12px]
  px-[36px]
  py-[24px]
  sm:px-[20px]
  sm:py-[16px]
  xs:px-[20px]
  xs:py-[16px]
`;

const AnswerSpace = tw.div`
  h-6
`;
