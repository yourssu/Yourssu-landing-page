import { Link } from 'gatsby';
import tw from 'tailwind-styled-components';

interface ApplyButtonProps {
  link: string;
  $testSize: string;
}

function ApplyButton({ link, $testSize }: ApplyButtonProps) {
  if (link)
    return (
      <ActiveContainer to={link} $testSize={$testSize}>
        지원하기
      </ActiveContainer>
    );

  return (
    <NoActiveContainer $testSize={$testSize}>
      지원 기간이 아닙니다
    </NoActiveContainer>
  );
}

export default ApplyButton;

const ActiveContainer = tw(Link)<{ $testSize: string }>`
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

const NoActiveContainer = tw.button<{ $testSize: string }>`
  ${(props) => props.$testSize}
  w-full
  rounded-[12px]
  bg-bluegray3-0
  py-5
  text-center
  text-bluegray1-0

  cursor-default
`;
