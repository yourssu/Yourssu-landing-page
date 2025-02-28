import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';

import isTodayInRange from '@/utils/isTodayInRange';

import DepartmentCard from './DepartmentCard';
import DepartmentSearch from './DepartmentSearch';
import useSupportingDetail from './hook';

function Supporting() {
  const { teamData, imgData } = useSupportingDetail();
  const [searchText, setSearchText] = useState<string>('');
  const [supportingTeam, setSupportingTeam] = useState<number>(0);

  useEffect(() => {
    setSearchText('');
  }, []);

  useEffect(() => {
    let count = 0;

    teamData.forEach((value) => {
      if (!value.recruitingData || !value.recruitingData.formSchedule) {
        return;
      }
      if (isTodayInRange(value.recruitingData.formSchedule)) {
        count += 1;
      }
    });

    setSupportingTeam(count);
  }, [teamData]);

  const filterData = teamData.filter((item) => {
    if (searchText === '') {
      return (
        item.recruitingData &&
        item.recruitingData.formSchedule &&
        isTodayInRange(item.recruitingData.formSchedule)
      );
    }
    return item.searchKeyword.includes(searchText);
  });

  return (
    <Container>
      <SubContainer1 className="flex flex-col items-center">
        <SupportingText>지원 분야</SupportingText>
        <SupportingDescription>
          {supportingTeam > 0
            ? `총 ${supportingTeam}개의 분야에서 지원자를 모집하고 있어요.\n관심 있는 직군의 카드에 마우스를 올려보세요!`
            : '현재 지원자를 모집하고 있는 분야가 없어요.'}
        </SupportingDescription>
      </SubContainer1>

      <SubContainer2 className="flex flex-col items-center">
        <DepartmentSearch
          setSearchText={setSearchText}
          imgData={imgData.readingGlasses}
        />
        <StepBox $length={filterData.length}>
          {filterData.map((value, index) => (
            <StepWrapper
              $length={filterData.length}
              $index={index}
              key={value.information.name}
            >
              <DepartmentCard
                data={value.information}
                buttonImgData={imgData.buttonImgData}
              />
            </StepWrapper>
          ))}
        </StepBox>
        {supportingTeam === 0 && filterData.length === 0 && (
          <ErrorImage
            src={imgData.errorImgData.publicURL}
            alt="뿌슝이 이미지"
          />
        )}
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
    $length >= 5
      ? 'grid grid-cols-10 lg:grid-cols-16 md:grid-cols-8'
      : 'flex md:grid md:grid-cols-8 sm:flex sm:flex-col xs:flex-col justify-center'}
`;

const StepWrapper = tw.div<{ $index: number; $length: number }>`
  w-full
  max-w-[236.8px]

  col-span-2
  sm:col-span-10
  lg:col-span-4
  md:col-span-4
  xs:col-span-10

  ${({ $index }) => $index === 0 && 'col-start-2'}
  ${({ $index }) => $index === 4 && 'col-start-1 lg:col-start-1'}
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
  
  md:whitespace-pre-wrap
  sm:whitespace-pre-wrap
  xs:whitespace-pre-wrap
`;

const ErrorImage = tw.img`
  h-[285px]
  md:h-[200px]
  sm:h-[150px]
  xs:h-[150px]
`;

export default Supporting;
