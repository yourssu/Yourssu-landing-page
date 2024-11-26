import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useState } from 'react';
import tw from 'tailwind-styled-components';

import { NodeType } from '@/types/hook';

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
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <Container
      $windowSize={!breakpoints.query550}
      className=""
      onClick={onClick}
    >
      <div className="flex items-center justify-between xs:gap-[20px] sm:gap-[20px]">
        <div className="flex items-center gap-[12px] xs:gap-[8px] sm:gap-[8px]">
          <Q>Q</Q>
          <Text>{question}</Text>
        </div>
        <QuestionIcon
          className={`${active ? 'rotate-90' : ''} transform`}
          src={smallArrow.publicURL}
          alt={smallArrow.name}
        />
      </div>

      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="initial"
            variants={AnswerBoxVariants}
            transition={{ ease: 'easeOut', duration: 0.3 }}
          >
            <AnswerSpace />
            <AnswerBox>
              <AnswerText>{answer}</AnswerText>
            </AnswerBox>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}

const AnswerBoxVariants: Variants = {
  initial: {
    height: 0,
  },
  animate: {
    height: 'auto',
  },
};

const Container = tw.div<{ $windowSize: boolean }>`
  w-[1280px]
  lg:w-[1080px]
  md:w-[720px]
  ${(prop) => (prop.$windowSize ? 'sm:w-[530px]' : 'w-[350px]')}
  xs:w-[350px]

  rounded-[16px] 
  bg-white-0 
  p-[32px]

  sm:p-[20px]
  xs:p-[20px]

  cursor-pointer
`;

const Q = tw.span`
  h3

  sm:h4
  xs:h4

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
  font-[600]

  h4
  
  sm:body4
  xs:body4
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

const AnswerSpace = tw.div`
  h-[32px]
  sm:h-[20px]
  xs:h-[20px]
`;

const AnswerText = tw.p`
  text-gray1-0
  body2
  sm:body7
  xs:body7
`;
