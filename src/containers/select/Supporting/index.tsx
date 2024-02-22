import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import tw from 'tailwind-styled-components';
import DepartmentCard from './DepartmentCard';
import DepartmentSearch from './DepartmentSearch';
import useSupportingDetail from './hook';

function Supporting() {
  const { data, imgData } = useSupportingDetail();
  const [searchText, setSearchText] = useState<string>('');
  const windowSize = useMediaQuery({
    query: `(min-width: 1080px)`,
  });

  useEffect(() => {
    setSearchText('');
  }, []);

  const filterData = data.filter((item) =>
    item.description.searchKeyword.includes(searchText),
  );

  return (
    <Container>
      <div className="flex flex-col items-center gap-[20px]">
        <span className="font-Pretendard text-[50px] font-[600] leading-[59.67px] tracking-[-1%] xs:text-[32px] xs:leading-[38.19px] sm:text-[32px] sm:leading-[38.19px] ">
          지원 분야
        </span>
        {windowSize ? (
          <p className="font-Pretendard text-center text-[24px] font-[600] leading-[28.64px] text-gray1-0 xs:text-[14px] xs:leading-[16.71px] sm:text-[14px] sm:leading-[16.71px]">
            총 9개의 분야에서 지원자를 모집하고 있어요. 관심 있는 직군의 카드에
            마우스를 올려보세요!
          </p>
        ) : (
          <p className="font-Pretendard text-center text-[24px] font-[600] leading-[28.64px] text-gray1-0 xs:text-[14px] xs:leading-[16.71px] sm:text-[14px] sm:leading-[16.71px]">
            총 9개의 분야에서 지원자를 모집하고 있어요.
            <br /> 관심 있는 직군의 카드에 마우스를 올려보세요!
          </p>
        )}
      </div>

      <div className="flex flex-col items-center gap-[39px]">
        <DepartmentSearch
          setSearchText={setSearchText}
          imgData={imgData.readingGlasses.nodes[0]}
        />
        <div
          className={`gap-4 
            ${
              filterData.length === 9
                ? 'grid grid-cols-10 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-9'
                : 'flex flex-col lg:flex-row xl:flex-row xxl:flex-row'
            }
            `}
        >
          {filterData.map((value, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div
                className={`col-span-2 lg:col-span-3 ${
                  index === 5
                    ? 'col-start-2 xs:col-start-1 sm:col-start-1 md:col-start-3'
                    : null
                }`}
              >
                <DepartmentCard
                  data={value}
                  buttonImgData={imgData.buttonImgData.nodes[0]}
                />
              </div>
            );
          })}
        </div>
      </div>
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

export default Supporting;
