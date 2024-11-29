import { motion, Variants } from 'framer-motion';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useState } from 'react';
import tw from 'tailwind-styled-components';

import { NodeType } from '@/types/hook';

import DepartmentLinkButton from './DepartmentLinkButton';

export default function DepartmentCard({
  data,
  buttonImgData,
}: {
  data: {
    name: string;
    short_introduction: string;
    icon: IGatsbyImageData | undefined;
  };
  buttonImgData: NodeType;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const fixedDescription = data.short_introduction.replace(/\\n/g, '\n');

  return (
    <div
      className="flex justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Container>
        {isHovered && (
          <Stack
            className="z-20 bg-[#ffffff80] backdrop-blur-[40px]"
            initial="initial"
            animate="animate"
            variants={FadeVariants}
            transition={{
              ease: 'easeOut',
              duration: 0.3,
            }}
          >
            <DepartmentDescription>{fixedDescription}</DepartmentDescription>
            <div className="ml-auto">
              <DepartmentLinkButton
                linkData={data.name.toLowerCase().replaceAll(' ', '_')}
                buttonImgData={buttonImgData}
              />
            </div>
          </Stack>
        )}

        <Stack>
          <DepartmentText>{data.name}</DepartmentText>
          {data.icon && <DepartmentImg image={data.icon} alt={data.name} />}
        </Stack>
      </Container>
    </div>
  );
}

const FadeVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const Container = tw.div`
  relative
  flex
  flex-col
  w-full
  h-[283.5px]
  rounded-[20px]
  bg-white-0
  justify-between
  overflow-hidden
  `;

const Stack = tw(motion.div)`
  absolute
  flex
  flex-col
  justify-between
  w-full
  h-full
  p-8
`;

const DepartmentText = tw.span`
  whitespace-pre-line
  h3
`;

const DepartmentImg = tw(GatsbyImage)`
  ml-auto
  w-[100px]
`;

const DepartmentDescription = tw.p`
  whitespace-pre-line
  tracking-tight
  h4
`;
