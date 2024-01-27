import { Link } from 'gatsby';
import tw from 'tailwind-styled-components';
import useSideNavigationDetail from './hook';

const dummyLink = 'https://www.naver.com';

const dummyTeamList = [
  { name: 'HR Manager', link: 'hr', active: true },
  { name: 'iOS Developer', link: 'ios', active: false },
  { name: 'Android Developer', link: 'android', active: false },
  { name: 'Frontend Developer', link: 'frontend', active: false },
  { name: 'Backend Developer', link: 'backend', active: false },
  { name: 'Product Manager', link: 'pm', active: false },
  { name: 'Product Designer', link: 'designer', active: false },
  { name: 'Contents Marketer', link: 'marketer', active: false },
  { name: 'Legal Officer', link: 'legal', active: false },
];

function SideNavigation() {
  const data = useSideNavigationDetail();

  return (
    <Container>
      <NavigationContainer>
        <div className="h4">TEAM</div>
        <NavigationList>
          {dummyTeamList.map((team) => (
            <Link to={team.link} key={team.name}>
              <NavigationItem type="button" $active={team.active}>
                <img src={data.smallArrow.publicURL} alt="small-arrow" />
                <div className="body5 text-gray1-0">{team.name}</div>
              </NavigationItem>
            </Link>
          ))}
        </NavigationList>
      </NavigationContainer>
      <Link to={dummyLink}>
        <Button type="button">지원하기</Button>
      </Link>
      <button type="button" className="ml-auto w-fit">
        <InquiryButtonText>
          <span>채용관련</span>
          <span>문의하기</span>
        </InquiryButtonText>
        <img src={data.inquiryButton.publicURL} alt="문의하기" />
      </button>
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

const NavigationItem = tw.button<{ $active: boolean }>`
  flex
  justify-between
  items-center
  rounded-[30px]
  w-full
  px-[18px]
  py-3
  ${(props) => (props.$active ? 'bg-bluegray4-0' : 'bg-white-0')}
`;

const Button = tw.button`
  bg-gradient-to-r
  from-mainGra1-0
  to-mainGra2-0
  text-white-0
  w-full
  py-5
  rounded-[12px]
  h4
`;

const InquiryButtonText = tw.div`
  body4
  mb-[1px]
  flex
  flex-col
  items-center
  text-gray1-0
`;