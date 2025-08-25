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
}

function ApplyProcedure({ applyProcedure }: ApplyProcedureProps) {
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

  // 리쿠르팅을 안하면 null 반환
  if (!applyProcedure || applyProcedure.length === 0) return null;

  return (
    <section className="inline-flex flex-col items-start justify-start gap-6 self-stretch rounded-[12px] p-6 outline outline-1 outline-offset-[-1px] outline-[#F1F1F4]">
      <TitleContainer>
        <div className="T3_Sb_20">지원 절차</div>
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
      <div className="inline-flex flex-col items-start justify-start gap-2 rounded-[12px] bg-[#F7F8F8] p-4">
        <div className="inline-flex items-center justify-start gap-2 self-stretch">
          <img src={data.warningDarkIcon.publicURL} alt="정보 더보기" />
          <div className="text-text-basic-primary justify-start font-['Pretendard'] text-base font-semibold leading-normal">
            지원 시 유의사항
          </div>
        </div>
        <div className="text-text-basic-secondary justify-start font-['Pretendard'] text-base font-normal leading-normal">
          기재된 내용이 사실과 다를 경우 합격이 취소될 수 있음을 유의하여 주시길
          바랍니다.
          <br />
          전형 일정 및 결과는 지원서 작성 시 기재해주신 이메일을 통해 일주일
          이내로 안내드립니다.
          <br />
          인큐베이팅 기간은 유동적으로 변경 될수 있음을 알려드립니다.
        </div>
      </div>
    </section>
  );
}

export default ApplyProcedure;

const TitleContainer = tw.div`
  relative

  flex
  items-center
  flex-wrap
  gap-3
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

  font-pretendard
  font-[600]
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
  
  font-pretendard
  font-[400]
  text-xl
  leading-9
  text-gray1-0

  md:body7
  sm:body7
  xs:body7
`;
