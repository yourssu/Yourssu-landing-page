import tw from 'tailwind-styled-components';
import ProcedureSVG from './ProcedureSVG';
import useApplyProcedureDetail from './hook';

const dummy = [
  { date: '9.02 ~ 9.10', step: '지원서 접수' },
  { date: '9.13', step: '서류 합불 전달' },
  { date: '9.14 ~ 9.20', step: '1차 인터뷰' },
  { date: '9.21', step: '1차 인터뷰 합불 전달' },
  { date: '9.22 ~ 11.09', step: '인큐베이팅 (중간고사 기간 제외)' },
  { date: '11.10 ~ 11.12', step: '최종 인터뷰' },
  { date: '11.13', step: '최종 합불 안내' },
  { date: '11.14 ~', step: '온보딩, 유어슈 활동 시작' },
];

function ApplyProcedure() {
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
          {dummy.map((item) => (
            <div key={item.date}>{item.date}</div>
          ))}
        </ProcedureDate>
        <ProcedureSVG count={dummy.length} />
        <ProcedureStep>
          {dummy.map((item) => (
            <div key={item.date}>{item.step}</div>
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
