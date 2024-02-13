import { Link } from 'gatsby';
import tw from 'tailwind-styled-components';
import useSideNavigationDetail from './hook';

const KAKAO_LINK = 'http://pf.kakao.com/_AxfrxeT';

interface SideNavigationProps {
  currentTeam: {
    name: string;
    applyLink: string;
  };
  teamList: string[];
}

function SideNavigation({ currentTeam, teamList }: SideNavigationProps) {
  const data = useSideNavigationDetail();

  return (
    <Container>
      <NavigationContainer>
        <div className="h4">TEAM</div>
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
      <ApplyButton to={currentTeam.applyLink}>지원하기</ApplyButton>
      <Link to={KAKAO_LINK} className="ml-auto w-fit">
        <InquiryButtonText>문의하기</InquiryButtonText>
        <img src={data.inquiryButton.publicURL} alt="문의하기" />
      </Link>
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
  mt-[130px]
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

const ApplyButton = tw(Link)`
  h4
  w-full
  rounded-[12px]
  bg-gradient-to-r
  from-mainGra1-0
  to-mainGra2-0
  py-5
  text-center
  text-white-0
`;

const InquiryButtonText = tw.div`
  body4
  mb-[1px]
  flex
  flex-col
  items-center
  text-gray1-0
`;
