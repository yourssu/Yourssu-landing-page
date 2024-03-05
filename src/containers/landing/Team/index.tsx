import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import tw from 'tailwind-styled-components';
import SectionIntro from '@/components/Intro/SectionIntro';
import useTeamDetail from '@/containers/landing/Team/hook';
import { TeamButtonItem } from '@/types/landing.type';
import TeamButton from './TeamButton';

function Team() {
  const breakpoints = useBreakpoint();
  const teams = useTeamDetail();

  return (
    <div className="flex flex-col items-center py-[105px] xs:py-[40px] sm:py-[70px] md:py-[90px] lg:py-[90px]">
      {breakpoints.md ? (
        <SectionIntro
          title="TEAM YOURSSU"
          description="안녕하세요. 숭실인을 위한. 숭실인에 의해 당신의 숭실을 만들어가는 동아리 유어슈입니다. 숭실대 학생들의 즐거운 캠퍼스 라이프를 위한 서비스를 만들고 있습니다."
          linerColor="gra"
          textColor="ver1"
        />
      ) : (
        <SectionIntro
          title="TEAM YOURSSU"
          description="안녕하세요. 숭실인을 위한. 숭실인에 의해 당신의 숭실을 만들어가는 동아리 유어슈입니다.<br />숭실대 학생들의 즐거운 캠퍼스 라이프를 위한 서비스를 만들고 있습니다."
          linerColor="gra"
          textColor="ver1"
        />
      )}
      <TeamButtonBox>
        {teams.map((team: TeamButtonItem, index) => (
          <TeamButtonWapper $index={index} key={team.team[0]}>
            <TeamButton team={team.team} img={team.img} />
          </TeamButtonWapper>
        ))}
      </TeamButtonBox>
    </div>
  );
}

const TeamButtonBox = tw.div`
  mt-[52px]

  grid
  grid-cols-8
  md:grid-cols-12
  sm:grid-cols-12
  xs:grid-cols-12
  justify-center
`;

const TeamButtonWapper = tw.div<{ $index: number }>`
  col-span-1
  lg:col-span-2
  md:col-span-4
  sm:col-span-4
  ${(prop) => prop.$index === 6 && 'md:col-start-3 sm:col-start-3 xs:col-start-3'}
  xs:col-span-4
`;

export default Team;
