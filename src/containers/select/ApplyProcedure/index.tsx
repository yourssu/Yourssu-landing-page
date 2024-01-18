import tw from 'tailwind-styled-components';
import ApplyProcedureStep from './ApplyProcedureStep';
import useApplyProcedureDetail from './hook';

function ApplyProcedure() {
  const data = useApplyProcedureDetail();
  return (
    <Container>
      <span className="font-Pretendard text-[50px] font-[600] leading-[59.67px] tracking-[-1%]">
        합류 여정
      </span>
      <p className="pt-[20px] text-[24px] font-[600] leading-[28.64px] ">
        유어슈에 지원하면 다음과 같은 과정을 거쳐 선발돼요.
      </p>
      <div className="flex w-full justify-between pt-[40px]">
        {data.map((value, index) => {
          // eslint-disable-next-line react/jsx-key
          return <ApplyProcedureStep data={value} index={index} />;
        })}
      </div>
      <p className="font-Pretendard ml-auto pt-[32px] text-[20px] font-[400] leading-[30px] tracking-[-2%] text-gray1-0">
        *세부사항은 지원 분야마다 차이가 있을 수 있습니다.
      </p>
    </Container>
  );
}

const Container = tw.div`
  flex
  flex-col
  items-center
  w-[1276px]
`;

export default ApplyProcedure;
