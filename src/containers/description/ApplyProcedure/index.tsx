import tw from 'tailwind-styled-components';
import { ApplyProcedureInformation } from '@/types/recruiting.type';
import ProcedureSVG from './ProcedureSVG';
import useApplyProcedureDetail from './hook';

interface ApplyProcedureProps {
  applyProcedure: ApplyProcedureInformation[];
}

function ApplyProcedure({ applyProcedure }: ApplyProcedureProps) {
  const data = useApplyProcedureDetail();

  return (
    <section>
      <TitleContainer>
        <div className="body1 text-black-0">지원절차</div>
        <NoticeButton type="button">
          <img src={data.noticeIcon.publicURL} alt="정보 더보기" />
          <span className="body4 text-gray2-0">
            주의사항을 반드시 읽어주세요
          </span>
        </NoticeButton>
      </TitleContainer>
      <ProcedureContainer>
        <ProcedureDate>
          {applyProcedure.map((item) => (
            <div key={item.schedule}>{item.schedule}</div>
          ))}
        </ProcedureDate>
        <ProcedureSVG count={applyProcedure.length} />
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
  flex
  items-center
  gap-3
  pb-6
`;

const NoticeButton = tw.button`
  flex
  items-center
  gap-1
`;

const ProcedureContainer = tw.div`
  relative
  flex
  gap-[27px]
`;

const ProcedureDate = tw.div`
  flex
  min-w-28
  flex-col
  gap-[22px]
  bg-gradient-to-b
  from-mainGra1-0
  to-mainGra2-0
  bg-clip-text
  text-end
  font-PretendardSB
  text-xl
  leading-9
  text-transparent
`;

const ProcedureStep = tw.div`
  font-PrtendardR
  flex
  min-w-max
  flex-col
  gap-[22px]
  text-xl
  leading-9
  text-gray1-0
`;
