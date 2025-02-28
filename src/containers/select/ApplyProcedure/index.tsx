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
        {data.map((value, index) => (
          <ApplyProcedureStep
            data={value}
            key={value.description.stepTitle}
            index={index}
          />
        ))}
      </ApplyProcedureStepContainer>
      <Text3>*세부사항은 지원 분야마다 차이가 있을 수 있어요.</Text3>
    </Container>
  );
}

const Container = tw.div`
  flex
  flex-col
  w-fit
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
  ml-auto

  xxl:pt-[32px]
  xl:pt-[30px]
  pt-[44px]

  text-gray1-0

  body3

  sm:body8
  xs:body8
`;

export default ApplyProcedure;
