import { Link } from 'gatsby';
import tw from 'tailwind-styled-components';
import useTeamHeaderDetail from './hook';

const dummy = {
  name: 'Legal Officer',
  title: '권리와 의무 사이에서의 끊임없는 고민',
  description:
    '학생들을 위한 서비스를 만들며 발생할 수 있는 문제를 검토하고,\n유어슈와 숭실대 학생 모두의 권리 보장을 위해 힘씁니다.',
  applyLink: 'https://www.naver.com',
};

function TeamHeader() {
  const data = useTeamHeaderDetail();

  return (
    <Container>
      <InnerContainer>
        <div>
          <TeamIntroContainer>
            <Title>{dummy.title}</Title>
            <TeamName>{dummy.name}</TeamName>
            <Description>{dummy.description}</Description>
          </TeamIntroContainer>
          <Link to={dummy.applyLink}>
            <ApplyButton>바로 지원하기</ApplyButton>
          </Link>
        </div>
        <img src={data.legal.publicURL} alt="legal" />
      </InnerContainer>
    </Container>
  );
}

export default TeamHeader;

const Container = tw.section`
  w-full
  bg-bluegray4-0
`;

const InnerContainer = tw.div`
  mx-auto
  my-0
  flex
  max-w-[1280px]
  items-center
  justify-between
`;

const TeamIntroContainer = tw.div`
  mb-[30px]
  flex
  flex-col
  gap-[10px]
`;

const Title = tw.div`
  body2
  text-black-0
`;

const TeamName = tw.div`
  h1
  text-black-0
`;

const Description = tw.div`
  body3
  whitespace-pre-wrap
  text-gray1-0
`;

const ApplyButton = tw.button`
  body4
  rounded-[50px]
  bg-gradient-to-r
  from-mainGra1-0
  to-mainGra2-0
  px-7
  py-[14px]
  text-white-0

`;
