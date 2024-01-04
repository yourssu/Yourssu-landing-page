import CultureItem from '@/components/CultureItem';
import SectionIntro from '@/components/SectionIntro';
import useCultureDetail from '@/hooks/container/culture/hook';

function Culture() {
  const items = useCultureDetail();
  return (
    <div className="flex flex-col justify-center items-center xs:pb-[50px] sm:pb-[100px] md:pb-[170px] sm:pt-[100px] pt-[35px] pb-[200px]">
      <SectionIntro
        title="CULTURE"
        description="유어슈는 서로를 존중하며 커뮤니케이션하는 동아리입니다.<br />성장하는 문화를 통해 같이 있는 것만으로도 즐겁고 배울 수 있는 동아리로 나아갑니다."
        divStyle="bg-gradient-to-t from-gradient_color1-0 to-gradient_color2-0"
        color="text-Text_Color1-0"
      />
      <div className="xs:w-[250px] sm:w-[310px] md:w-[400px] w-[958px] xs:h-fit sm:h-fit md:h-fit h-[492px] flex flex-wrap justify-between content-between items-center xs:mt-[50px] sm:mt-[80px] md:mt-[80px] mt-[110px]">
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
