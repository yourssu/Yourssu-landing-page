import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import tw from 'tailwind-styled-components';
import SectionIntro from '@/components/Intro/SectionIntro';
import useTeamDetail from '@/containers/landing/Team/hook';
import { TeamButtonItem } from '@/types/landing.type';
import TeamButton from './TeamButton';

function Team() {
  const breakpoints = useBreakpoint();
  const teams = useTeamDetail();
  const descriptions = [
    '안녕하세요. 숭실인을 위한. 숭실인에 의해 당신의 숭실을 만들어나가는 동아리 유어슈입니다.',
    '유어슈의 힘으로, 숭실대학교의 재학생 모두가 사용하는 서비스를 만들고자 합니다.',
  ];

  return (
    <div className="flex flex-col items-center py-[105px] xs:py-[40px] sm:py-[70px] md:py-[90px] lg:py-[90px]">
      {breakpoints.md ? (
        <SectionIntro
          title="TEAM YOURSSU"
          description={descriptions.join(' ')}
          linerColor="gra"
          textColor="ver1"
        />
      ) : (
        <SectionIntro
          title="TEAM YOURSSU"
          description={descriptions.join('<br />')}
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
