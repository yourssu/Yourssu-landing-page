import { graphql, useStaticQuery } from 'gatsby';
import Carousel from '@/components/Carousel';

function Project() {
  const data = useStaticQuery(graphql`
    query {
      projectImage: allFile(filter: { dir: { regex: "/images/project/" } }) {
        nodes {
          name
          publicURL
        }
      }
    }
  `);
  const projectData = data.projectImage.nodes;
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center w-full mb-80">
        <div className=" bg-black h-[39px] w-[2px] " />
        <h1 className=" text-2xl font-medium mt-4 mb-2 text-black">Project</h1>
        <p className=" text-center text-gray-500 text-sm mt-3 leading-relaxed -tracking-tighter">
          유어슈는 다양한 tf팀들의 프로젝트를 통해 숨쉴때 성적표, 숨쉴때
          커뮤니티, 숨실위키,
          <br /> 숨쉴때 뭐먹지, 뿌슝이 테스트, 점뿌 등의 서비스를 만들어가가고
          있어요.
        </p>
      </div>
      <Carousel itemsData={projectData} />
    </div>
  );
}

export default Project;
