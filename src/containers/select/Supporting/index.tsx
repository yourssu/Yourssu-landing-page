import tw from 'tailwind-styled-components';
import DepartmentCard from './DepartmentCard';
import DepartmentSearch from './DepartmentSearch';
import useSupportingDetail from './hook';

function Supporting() {
  const { data, imgData } = useSupportingDetail();
  return (
    <Container>
      <div className="flex flex-col items-center gap-[20px]">
        <span className="font-Pretendard text-[50px] font-[600] leading-[59.67px] tracking-[-1%]">
          지원 분야
        </span>
        <p className="font-Pretendard text-[24px] font-[600] leading-[28.64px] text-gray1-0">
          총 9개의 분야에서 지원자를 모집하고 있어요. 관심 있는 직군의 카드에
          마우스를 올려보세요!
        </p>
      </div>

      <div className="flex flex-col items-center gap-[39px]">
        <DepartmentSearch imgData={imgData.readingGlasses.nodes[0]} />
        <div className=" grid grid-cols-5 gap-4">
          {data.map((value) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <DepartmentCard
                data={value}
                buttonImgData={imgData.buttonImgData.nodes[0]}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

const Container = tw.div`
  w-[1376px]
  flex
  flex-col
  gap-[60px]
`;

export default Supporting;
