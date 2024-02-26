import tw from 'tailwind-styled-components';
import ApplyProcedureStep from './ApplyProcedureStep';
import useApplyProcedureDetail from './hook';

function ApplyProcedure() {
  const data = useApplyProcedureDetail();
  return (
    <Container>
      <ApplyProcedureText>합류 여정</ApplyProcedureText>
      <Text2>유어슈에 지원하면 다음과 같은 과정을 거쳐 선발돼요.</Text2>
      <ApplyProcedureStepContainer className="flex justify-between">
        {data.map((value, index) => {
          // eslint-disable-next-line react/jsx-key
          return <ApplyProcedureStep data={value} index={index} />;
        })}
      </ApplyProcedureStepContainer>
      <Text3>*세부사항은 지원 분야마다 차이가 있을 수 있습니다.</Text3>
    </Container>
  );
}

const Container = tw.div`
  flex
  flex-col
  max-w-[1280px]
  items-center
`;

const ApplyProcedureText = tw.span`
  h2
  sm:h4
  xs:h4
`;

const Text2 = tw.p`
  pt-[20px]
  sm:pt-[10px]
  xs:pt-[10px]

  text-gray1-0

  h4
  md:body1
  sm:body8
  xs:body8
`;

const ApplyProcedureStepContainer = tw.div`
  pt-[60px]
  gap-[32px]
   
  lg:grid 
  lg:grid-cols-4 
  lg:gap-x-[22px]
  lg:gap-y-[62px]

  md:grid
  md:grid-cols-2
  md:gap-[62px]

  sm:grid
  sm:grid-cols-2
  sm:gap-[62px]

  xs:grid
  xs:grid-cols-2
  xs:gap-[62px]
`;

const Text3 = tw.p`
  font-Pretendard 
  ml-auto 

  xxl:pt-[32px]
  xl:pt-[30px]
  pt-[44px]

  text-[20px] 
  sm:text-[14px]
  xs:text-[14px]

  font-[400] 
  leading-[30px] 
  sm:leading-[16.71px]
  xs:leading-[16.71px]
  tracking-[-2%] 
  text-gray1-0
`;

export default ApplyProcedure;
