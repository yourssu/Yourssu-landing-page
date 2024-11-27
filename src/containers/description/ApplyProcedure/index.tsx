import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useEffect, useRef, useState } from 'react';
import tw from 'tailwind-styled-components';

import { ApplyProcedureInformation } from '@/types/recruiting.type';

import ProcedureLargeSVG from './ProcedureLargeSVG';
import ProcedureSmallSVG from './ProcedureSmallSVG';
import WarningDescription from './WarningDescription';
import useApplyProcedureDetail from './hook';

interface ApplyProcedureProps {
  applyProcedure: ApplyProcedureInformation[] | null;
  isRecruiting: boolean;
}

function ApplyProcedure({ applyProcedure, isRecruiting }: ApplyProcedureProps) {
  const data = useApplyProcedureDetail();
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const warningRef = useRef<HTMLDivElement>(null);
  const breakpoints = useBreakpoint();

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (
        isWarningOpen &&
        !warningRef.current?.contains(e.target as HTMLDivElement)
      )
        setIsWarningOpen(false);
    };
    document.addEventListener('mousedown', handleClose);

    return () => document.removeEventListener('mousedown', handleClose);
  }, [isWarningOpen]);

  // 리쿠르팅을 안하거나, 일정이 지나면 null 반환
  if (!applyProcedure || !isRecruiting) return null;

  return (
    <section>
      <TitleContainer>
        <Title>지원절차</Title>
        <NoticeButton
          type="button"
          onClick={() => {
            setIsWarningOpen((prev) => !prev);
          }}
        >
          <img src={data.warningLightIcon.publicURL} alt="정보 더보기" />
          <NoticeText>주의사항을 반드시 읽어주세요</NoticeText>
        </NoticeButton>
        {isWarningOpen && (
          <WarningDescription
            iconURL={data.warningDarkIcon.publicURL}
            warningRef={warningRef}
          />
        )}
      </TitleContainer>
      <ProcedureContainer>
        <ProcedureDate>
          {applyProcedure.map((item) => (
            <div key={item.schedule}>{item.schedule}</div>
          ))}
        </ProcedureDate>
        {breakpoints.md ? (
          <ProcedureSmallSVG count={applyProcedure.length} />
        ) : (
          <ProcedureLargeSVG count={applyProcedure.length} />
        )}
        <ProcedureStep>
          {applyProcedure.map((item) => (
            <div key={item.schedule}>{item.step}</div>
          ))}
        </ProcedureStep>
      </ProcedureContainer>
    </section>
  );
}

export default ApplyProcedure;

const TitleContainer = tw.div`
  relative
  pb-6

  flex
  items-center
  flex-wrap
  gap-3
`;

const Title = tw.div`
  body1
  md:body4
  sm:body4
  xs:body4
  text-black-0
`;

const NoticeText = tw.span`
  body4
  md:body6
  sm:body6
  xs:body6
  text-gray2-0
`;

const NoticeButton = tw.button`
  flex
  gap-1
  items-center
`;

const ProcedureContainer = tw.div`
  relative
  flex
  gap-[27px]
  md:gap-3
  sm:gap-3
  xs:gap-3
`;

const ProcedureDate = tw.div`
  flex
  flex-col
  gap-[22px]

  min-w-fit
  bg-gradient-to-b
  from-mainGra1-0
  to-mainGra2-0
  bg-clip-text

  font-PretendardSB
  text-xl
  md:text-base
  sm:text-base
  xs:text-base
  text-end
  leading-9
  text-transparent
`;

const ProcedureStep = tw.div`
  flex
  flex-col
  gap-[22px]
  
  min-w-max
  
  font-PretendardR
  text-xl
  leading-9
  text-gray1-0

  md:body7
  sm:body7
  xs:body7
`;
