import { graphql, useStaticQuery } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import TeamButton from '@/components/TeamButton';
import SectionIntro from '@/components/SectionIntro';

type TeamButtonData = {
  publicURL: string;
  name: string;
};

function Team() {
  const windowSize = useMediaQuery({
    query: '(min-width: 1081px)',
  });

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
    <div className="flex flex-col items-center xs:py-[50px] sm:py-[70px] md:py-[90px] lg:py-[90px] py-[105px]">
      {windowSize ? (
        <SectionIntro
          title="TEAM YOURSSU"
          description="안녕하세요. 숭실인을 위한. 숭실인에 의해 당신의 숭실을 만들어가는 동아리 유어슈입니다.<br />숭실대 학생들의 즐거운 캠퍼스 라이프를 위한 서비스를 만들고 있습니다."
          divStyle="bg-gradient-to-t from-gradient_color1-0 to-gradient_color2-0"
          color="text-Text_Color1-0"
        />
      ) : (
        <SectionIntro
          title="TEAM YOURSSU"
          description="안녕하세요. 숭실인을 위한. 숭실인에 의해 당신의 숭실을 만들어가는 동아리 유어슈입니다. 숭실대 학생들의 즐거운 캠퍼스 라이프를 위한 서비스를 만들고 있습니다."
          divStyle="bg-gradient-to-t from-gradient_color1-0 to-gradient_color2-0"
          color="text-Text_Color1-0"
        />
      )}
      <div className="flex flex-row flex-wrap justify-center xs:w-[220px] sm:w-[330px] md:w-[460px] lg:w-[600px] xs:mt-[30px] sm:mt-[40px] md:mt-[83px] mt-[52px]">
        {teamData.map((data: TeamButtonData) => (
          <TeamButton key={data.name} img={data.publicURL} name={data.name} />
        ))}
      </div>
    </div>
  );
}

export default Team;
