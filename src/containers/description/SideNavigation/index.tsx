import { Link } from 'gatsby';
import tw from 'tailwind-styled-components';

import ApplyButton from '@/components/Button/ApplyButton';

import useSideNavigationDetail from './hook';

const KAKAO_LINK = 'http://pf.kakao.com/_AxfrxeT';

interface SideNavigationProps {
  currentTeam: {
    name: string;
    isRecruiting: boolean;
    applyLink: string;
  };
  teamList: string[];
}

function SideNavigation({ currentTeam, teamList }: SideNavigationProps) {
  const data = useSideNavigationDetail();

  return (
    <Container>
      <NavigationContainer>
        <h2 className="T3_Sb_20">TEAM</h2>
        <NavigationList>
          {teamList.map((team) => (
            <NavigationItem
              to={`/recruiting/${team.toLowerCase().replaceAll(' ', '_')}`}
              key={team}
              $active={currentTeam.name === team}
            >
              <img src={data.smallArrow.publicURL} alt="small-arrow" />
              <div className="body5 text-gray1-0">{team}</div>
            </NavigationItem>
          ))}
        </NavigationList>
      </NavigationContainer>
      <ApplyButton
        link={currentTeam.applyLink}
        isRecruiting={currentTeam.isRecruiting}
      />
      <div className="flex gap-5">
        <Link
          to="/recruiting/#faq"
          className="inline-flex h-32 flex-col items-center justify-between self-stretch overflow-hidden rounded-[12px] px-6 pt-3 outline outline-1 outline-offset-[-1px] outline-[#F1F1F4]"
        >
          <div className="B3_Sb_14 mb-[1px] items-center text-gray1-0">
            FAQ 보러가기
          </div>
          <img
            className="h-24 w-32"
            src={data.inquiryButton.publicURL}
            alt="FAQ 보러가기"
          />
        </Link>
        <a
          href={KAKAO_LINK}
          className="inline-flex flex-col items-center justify-between self-stretch overflow-hidden rounded-[12px] px-6 pt-3 outline outline-1 outline-offset-[-1px] outline-[#F1F1F4]"
        >
          <div className="B3_Sb_14 mb-[1px] items-center text-gray1-0">
            문의하기
          </div>
          <img
            className="h-24 w-32"
            src={data.inquiryButton.publicURL}
            alt="문의하기"
          />
        </a>
      </div>
    </Container>
  );
}

export default SideNavigation;

const Container = tw.aside`
  w-[320px]
  flex
  flex-col
  gap-6
  sticky
  top-[50px]
  h-fit
`;

const NavigationContainer = tw.div`
  flex
  flex-col
  gap-6
  rounded-[16px]
  border-[1px]
  border-gray3-0
  bg-white-0
  p-6
`;

const NavigationList = tw.div`
  flex
  flex-col
  gap-[10px]
`;

const NavigationItem = tw(Link)<{ $active: boolean }>`
  flex
  justify-between
  items-center
  rounded-[30px]
  w-full
  px-[18px]
  py-3
  ${(props) => (props.$active ? 'bg-bluegray4-0' : 'bg-white-0')}
`;
