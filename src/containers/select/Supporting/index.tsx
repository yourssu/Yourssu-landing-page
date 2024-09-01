import { useEffect, useState } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import tw from 'tailwind-styled-components';
import DepartmentCard from './DepartmentCard';
import DepartmentSearch from './DepartmentSearch';
import useSupportingDetail from './hook';

function Supporting() {
  const { data, imgData } = useSupportingDetail();
  const [searchText, setSearchText] = useState<string>('');
  const [supportingTeam, setSupportingTeam] = useState<number>(0);
  const breakpoints = useBreakpoint();

  useEffect(() => {
    setSearchText('');
  }, []);

  useEffect(() => {
    let count = 0;

    data.forEach((value) => {
      if (value.description.deplartmentApply) {
        count += 1;
      }
    });

    setSupportingTeam(count);
  }, [data]);

  const filterData = data.filter((item) => {
    if (searchText === '') {
      return item.description.deplartmentApply;
    }
    return item.description.searchKeyword.includes(searchText);
  });

  return (
    <Container>
      <SubContainer1 className="flex flex-col items-center">
        <SupportingText>지원 분야</SupportingText>
        {breakpoints.md ? (
          <SupportingDescription>
            총 {supportingTeam}개의 분야에서 지원자를 모집하고 있어요.
            <br /> 관심 있는 직군의 카드에 마우스를 올려보세요!
          </SupportingDescription>
        ) : (
          <SupportingDescription>
            총 {supportingTeam}개의 분야에서 지원자를 모집하고 있어요. 관심 있는
            직군의 카드에 마우스를 올려보세요!
          </SupportingDescription>
        )}
      </SubContainer1>

      <SubContainer2 className="flex flex-col items-center">
        <DepartmentSearch
          setSearchText={setSearchText}
          imgData={imgData.readingGlasses.nodes[0]}
        />
        <StepBox $length={filterData.length}>
          {filterData.map((value, index) => {
            return (
              <StepWapper
                $length={filterData.length}
                $index={index}
                key={value.description.departmentName}
              >
                <DepartmentCard
                  data={value}
                  buttonImgData={imgData.buttonImgData.nodes[0]}
                />
              </StepWapper>
            );
          })}
        </StepBox>
      </SubContainer2>
    </Container>
  );
}

const Container = tw.div`
  w-[1280px]
  lg:w-[924px]
  md:w-[500px]
  sm:w-auto
  xs:w-auto
  flex
  flex-col
  gap-[60px]
`;

const SubContainer1 = tw.div`
  gap-[20px]
`;

const SubContainer2 = tw.div`
  gap-[39px]
`;

const StepBox = tw.div<{ $length: number }>`
  gap-4 
  w-full
  
  ${({ $length }) =>
    // eslint-disable-next-line no-nested-ternary
    $length >= 7
      ? 'grid grid-cols-10 lg:grid-cols-16 md:grid-cols-8'
      : 'flex md:grid md:grid-cols-8 sm:flex sm:flex-col xs:flex-col justify-center'}
`;

const StepWapper = tw.div<{ $index: number; $length: number }>`
  w-full
  max-w-[236.8px]

  col-span-2
  sm:col-span-10
  lg:col-span-4
  md:col-span-4
  xs:col-span-10

  ${({ $index }) => $index === 0 && 'col-start-2'}
  ${({ $index }) => $index === 4 && 'col-start-3 lg:col-start-3'}
  ${({ $length, $index }) => $length % 2 === 1 && $index === $length - 1 && 'md:col-start-3'}
`;

const SupportingText = tw.span`
  h2
  sm:h3
  xs:h3
`;

const SupportingDescription = tw.p`
  h4
  md:body4
  sm:body8
  xs:body8
`;

export default Supporting;
