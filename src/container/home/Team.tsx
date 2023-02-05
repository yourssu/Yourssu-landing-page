import { graphql, useStaticQuery } from 'gatsby';
import TeamButton from '@/components/TeamButton';
import SectionIntro from '@/components/SectionIntro';
import lineImg from '../../images/teams/Line.png';

type TeamButtonData = {
  node: {
    publicURL: string;
    name: string;
  };
};

function Team() {
  const teamdata = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "image" }
          dir: { regex: "/teams/" }
          name: { ne: "Line" }
        }
      ) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);
  const data = teamdata.allFile.edges;
  return (
    <div className="flex flex-col items-center py-20">
      <SectionIntro
        title="TEAM YOURSSU"
        description="안녕하세요. 숭실인을 위한. 숭실인에 의해 당신의 숭실을 만들어가는 동아리 유어슈입니다.<br />숭실대 학생들의 즐거운 캠퍼스 라이프를 위한 서비스를 만들고 있습니다."
        image={lineImg}
        color="text-Text_Color1-0"
      />
      <div className="flex flex-row flex-wrap justify-center">
        {data.map((data1: TeamButtonData) => (
          <TeamButton
            key={data1.node.publicURL}
            img={data1.node.publicURL}
            name={data1.node.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
