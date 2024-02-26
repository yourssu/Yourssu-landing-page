import { useRef, useState } from 'react';
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
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Container
      isHovered={isHovered}
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <>
          <span className="font-Pretendard whitespace-pre-line text-[24px] font-[600] leading-[28.64px]">
            {data.description.departmentDescription}
          </span>
          <div className="ml-auto">
            <DepartmentLinkButton
              linkData={data.description.departmentDescriptionLink}
              buttonImgData={buttonImgData}
            />
          </div>
        </>
      ) : (
        <>
          <span className=" font-Pretendard whitespace-pre-line text-[32px] font-[600] leading-[38.19px] tracking-[-1%]">
            {data.description.departmentName}
          </span>
          <img
            className="ml-auto w-[100px]"
            src={data.imgData.publicURL}
            alt={data.imgData.name}
          />
        </>
      )}
    </Container>
  );
}

const Container = tw.div<{ isHovered: boolean }>`
  flex
  flex-col
  w-[236.8px]
  h-[283.5px]
  p-[32px]
  rounded-[20px]
  bg-white-0
  justify-between
  ${(prop) => (prop.isHovered ? 'bg-glass-0' : 'bg-white-0')}
`;
