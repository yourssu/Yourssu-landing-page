import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import tw from 'tailwind-styled-components';
import { NodeType } from '@/types/hook';
import DepartmentLinkButton from './DepartmentLinkButton';

export default function DepartmentCard({
  data,
  buttonImgData,
}: {
  data: {
    imgData: NodeType;
    description: {
      departmentName: string;
      departmentDescription: string;
      departmentDescriptionLink: string;
    };
  };
  buttonImgData: NodeType;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex justify-center"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
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
            <DepartmentDescription>
              {data.description.departmentDescription}
            </DepartmentDescription>
            <div className="ml-auto">
              <DepartmentLinkButton
                linkData={data.description.departmentDescriptionLink}
                buttonImgData={buttonImgData}
              />
            </div>
          </Stack>
        )}

        <Stack>
          <DepartmentText>{data.description.departmentName}</DepartmentText>
          <DepartmentImg src={data.imgData.publicURL} alt={data.imgData.name} />
        </Stack>
      </Container>
    </motion.div>
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
  p-[32px]
`;

const DepartmentText = tw.span`
  whitespace-pre-line
  h3
`;

const DepartmentImg = tw.img`
  ml-auto
  w-[100px]
`;

const DepartmentDescription = tw.p`
  whitespace-pre-line
  h4
`;
