import { Link } from 'gatsby';

interface ApplyButtonProps {
  link: string;
  isRecruiting: boolean;
}

function ApplyButton({ link, isRecruiting }: ApplyButtonProps) {
  // 링크가 없을 때, 지원 기간이 아닐 때, 리쿠르팅을 하지 않을 때 비활성화
  const active = link && isRecruiting;
  const content = active ? '지원하기' : '지원 기간이 아닙니다';

  return (
    <Link
      to={link}
      activeClassName="active"
      className={`${active && 'active'} B1_Sb_16 inline-flex h-12 items-center justify-center gap-1 self-stretch rounded-[16px] bg-[#6B5CFF] px-5 text-[#FFFFFF]`}
    >
      {content}
    </Link>
  );
}

export default ApplyButton;
