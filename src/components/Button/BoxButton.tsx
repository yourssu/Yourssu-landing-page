interface BoxButtonProps {
  children: React.ReactNode;
  width?: string | number;
  onClick?: () => void;
}

export function BoxButton({ children, width, onClick }: BoxButtonProps) {
  return (
    <div
      className="B1_Sb_16 xs:B3_Sb_14 sm:B3_Sb_14 inline-flex h-[52px] cursor-pointer items-center justify-center gap-1 self-stretch rounded-[16px] bg-bg-brandPrimary px-[20px] text-text-basicWhite"
      style={{ width }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
