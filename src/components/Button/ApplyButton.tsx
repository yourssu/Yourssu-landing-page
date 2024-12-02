import { Link } from 'gatsby';
import tw from 'tailwind-styled-components';

interface ApplyButtonProps {
  link: string;
  isRecruiting: boolean;
  $testSize: string;
}

function ApplyButton({ link, isRecruiting, $testSize }: ApplyButtonProps) {
  // 링크가 없을 때, 지원 기간이 아닐 때, 리쿠르팅을 하지 않을 때 비활성화
  if (link && isRecruiting)
    return (
      <ActiveContainer to={link} $testSize={$testSize}>
        지원하기
      </ActiveContainer>
    );

  return (
    <NoActiveContainer $testSize={$testSize} disabled>
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
`;
