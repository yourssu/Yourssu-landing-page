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

      <SubContainer2 className="flex flex-col items-center ">
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
  w-[1376px]
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
  ${(prop) =>
    prop.$length === 9 || prop.$length === 5
      ? 'grid grid-cols-10 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12'
      : 'flex flex-col lg:flex-row xl:flex-row xxl:flex-row'}

`;

const StepWapper = tw.div<{ $index: number; $length: number }>`
  col-span-2 
  lg:col-span-4
  ${(prop) =>
    prop.$index === 5 &&
    prop.$length === 9 &&
    'col-start-2 xs:col-start-1 sm:col-start-1 md:col-start-3'}
  ${(prop) =>
    prop.$length === 5 &&
    prop.$index === 3 &&
    'xs:col-start-1 sm:col-start-1 md:col-start-3 lg:col-start-3'}
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
