import { graphql, useStaticQuery } from 'gatsby';
import TeamButton from '@/components/TeamButton';
import SectionIntro from '@/components/SectionIntro';

type TeamButtonData = {
  publicURL: string;
  name: string;
};

function Team() {
  /* const teamdata = useStaticQuery(graphql`
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
  `); */
  /* const teamData = useStaticQuery(graphql`
    query {
      team: allFile( filter: { sourceInstanceName: { eq: "teams } } ) {
        nodes {
          publicURL
          name
        }
      }
    }
  `); */
  const imgData = useStaticQuery(graphql`
    query {
      teams: allFile(filter: { sourceInstanceName: { eq: "teams" } }) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);
  const teamData = imgData.teams.nodes;
  return (
    <div className="flex flex-col items-center py-20 h-[630px]">
      <SectionIntro
        title="TEAM YOURSSU"
        description="안녕하세요. 숭실인을 위한. 숭실인에 의해 당신의 숭실을 만들어가는 동아리 유어슈입니다.<br />숭실대 학생들의 즐거운 캠퍼스 라이프를 위한 서비스를 만들고 있습니다."
        divStyle="bg-gradient-to-t from-gradient_color1-0 to-gradient_color2-0 w-[2px] h-[39px]"
        color="text-Text_Color1-0"
      />
      <div className="flex flex-row flex-wrap justify-center">
        {teamData.map((data: TeamButtonData) => (
          <TeamButton key={data.name} img={data.publicURL} name={data.name} />
        ))}
      </div>
    </div>
  );
}

export default Team;
