import { Link } from 'gatsby';
import tw from 'tailwind-styled-components';

interface ApplyButtonProps {
  link: string;
  $testSize: string;
}

function ApplyButton({ link, $testSize }: ApplyButtonProps) {
  return (
    <Container to={link} $testSize={$testSize}>
      지원하기
    </Container>
  );
}

export default ApplyButton;

const Container = tw(Link)<{ $testSize: string }>`
  ${(props) => props.$testSize}
  w-full
  rounded-[12px]
  bg-gradient-to-r
  from-mainGra1-0
  to-mainGra2-0
  py-5
  text-center
  text-white-0
`;
