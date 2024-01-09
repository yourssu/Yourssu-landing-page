import { useMediaQuery } from 'react-responsive';
import SectionIntro from '@/components/Intro/SectionIntro';
import useCarouselDetail from '@/containers/landing/Project/hook';
import { OSType } from '@/types/landing.type';
import Carousel from './Carousel';

interface Props {
  type: OSType;
}

function Project({ type }: Props) {
  const windowSize = useMediaQuery({
    query: '(min-width: 1081px)',
  });
  const { data } = useCarouselDetail();

  return (
    <div className="relative mb-[350px] flex flex-col items-center xs:mb-[260px] sm:mb-[200px] md:mb-[300px]">
      <img
        className=" absolute top-0 -z-10 h-[446px] w-full xs:h-[270px] sm:h-[357px]"
        src={data.backgroundImgData.nodes[0].publicURL}
        alt={data.backgroundImgData.nodes[0].name}
      />
      <div className="absolute w-full pt-[80px] xs:pt-[50px] sm:pt-[60px]">
        {windowSize ? (
          <SectionIntro
            title="PROJECTS"
            description="유어슈는 다양한 tf팀들의 프로젝트를 통해 숨쉴때 성적표, 숨쉴때 커뮤니티, 숨실위키,<br />숨쉴때 뭐먹지, 뿌슝이 테스트, 점뿌 등의 서비스를 만들어가고 있어요."
            linerColor="black"
            textColor="ver2"
          />
        ) : (
          <SectionIntro
            title="PROJECTS"
            description="유어슈는 다양한 tf팀들의 프로젝트를 통해 숨쉴때 성적표, 숨쉴때 커뮤니티, 숨실위키, 숨쉴때 뭐먹지, 뿌슝이 테스트, 점뿌 등의 서비스를 만들어가고 있어요."
            linerColor="black"
            textColor="ver2"
          />
        )}
      </div>
      <Carousel itemsData={data.projectImgData.nodes} type={type} />
    </div>
  );
}

export default Project;
