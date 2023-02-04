import { graphql, useStaticQuery } from 'gatsby';

type ProjectData = {
  publicURL: string;
  name: string;
};

function Project() {
  const data = useStaticQuery(graphql`
    query {
      projectImage: allFile(
        filter: { name: { regex: "/project/", ne: "project-gradient" } }
      ) {
        nodes {
          name
          publicURL
        }
      }
      projectTop: allFile(
        filter: {
          extension: { eq: "png" }
          name: { regex: "/project/", eq: "project-gradient" }
        }
      ) {
        nodes {
          name
          publicURL
        }
      }
    }
  `);

  const projectData = data.projectImage.nodes;
  const projectData2 = data.projectTop.nodes[0];
  return (
    <div className=" relative">
      <div className="h-[300px]">
        <img
          src={projectData2.publicURL}
          alt={projectData2.name}
          className=" opacity-20 w-full h-[280px] absolute"
        />
        <div className="absolute -z-10 bg-gradient-to-b from-slate-100 to-white h-full w-full" />
      </div>
      <div className="flex flex-col justify-center items-center w-full absolute top-6">
        <div className=" bg-black h-[39px] w-[2px] " />
        <h1 className=" text-2xl font-medium mt-4 mb-2 text-black">Project</h1>
        <p className=" text-center text-gray-500 text-sm mt-3 leading-relaxed -tracking-tighter">
          유어슈는 다양한 tf팀들의 프로젝트를 통해 숨쉴때 성적표, 숨쉴때
          커뮤니티, 숭실위키,
          <br /> 숨쉴때 뭐먹지, 뿌슝이 테스트, 점뿌 등의 서비스를 만들어가가고
          있어요.
        </p>
        <div className=" mt-8 flex flex-row justify-center items-center w-full px-52">
          {projectData.map((imgData: ProjectData) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className=" border-violet-300 border-4 rounded-project">
                <img src={imgData.publicURL} alt={imgData.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
