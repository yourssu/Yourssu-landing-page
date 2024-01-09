import SectionIntro from '@/components/Intro/SectionIntro';
import useCultureDetail from '@/hooks/container/culture/hook';
import CultureItem from './CultureItem';

function Culture() {
  const items = useCultureDetail();
  return (
    <div className="flex flex-col items-center justify-center pb-[200px] pt-[35px] xs:pb-[50px] sm:pb-[100px] sm:pt-[100px] md:pb-[170px]">
      <SectionIntro
        title="CULTURE"
        description="유어슈는 서로를 존중하며 커뮤니케이션하는 동아리입니다.<br />성장하는 문화를 통해 같이 있는 것만으로도 즐겁고 배울 수 있는 동아리로 나아갑니다."
        linerColor="gra"
        textColor="ver1"
      />
      <div className="mt-[110px] flex h-[492px] w-[958px] flex-wrap content-between items-center justify-between xs:mt-[50px] xs:h-fit xs:w-[250px] sm:mt-[80px] sm:h-fit sm:w-[310px] md:mt-[80px] md:h-fit md:w-[400px]">
        {items.map((item) => (
          <CultureItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Culture;
