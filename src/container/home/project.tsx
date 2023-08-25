import { useMediaQuery } from 'react-responsive';
import Carousel from '@/components/Carousel';
import SectionIntro from '@/components/SectionIntro';
import useCarouselDetail from '@/hooks/container/projects/hook';
import { OSType } from '@/types/types';

function Project({ type }: OSType) {
  const windowSize = useMediaQuery({
    query: '(min-width: 1081px)',
  });
  const { data } = useCarouselDetail();

  return (
    <div className="flex flex-col items-center relative xs:mb-[260px] sm:mb-[200px] md:mb-[300px] mb-[350px]">
      <img
        className=" absolute -z-10 w-full h-[446px] xs:h-[270px] sm:h-[357px] top-0"
        src={data.backgroundImgData.nodes[0].publicURL}
        alt={data.backgroundImgData.nodes[0].name}
      />
      <div className="absolute w-full xs:pt-[50px] sm:pt-[60px] pt-[80px]">
        {windowSize ? (
          <SectionIntro
            title="PROJECTS"
            description="유어슈는 다양한 tf팀들의 프로젝트를 통해 숨쉴때 성적표, 숨쉴때 커뮤니티, 숨실위키,<br />숨쉴때 뭐먹지, 뿌슝이 테스트, 점뿌 등의 서비스를 만들어가고 있어요."
            divStyle="bg-black"
            color="text-Text_Color2-0"
          />
        ) : (
          <SectionIntro
            title="PROJECTS"
            description="유어슈는 다양한 tf팀들의 프로젝트를 통해 숨쉴때 성적표, 숨쉴때 커뮤니티, 숨실위키, 숨쉴때 뭐먹지, 뿌슝이 테스트, 점뿌 등의 서비스를 만들어가고 있어요."
            divStyle="bg-black"
            color="text-Text_Color2-0"
          />
        )}
      </div>
      <Carousel itemsData={data.projectImgData.nodes} type={type} />
    </div>
  );
}

export default Project;
