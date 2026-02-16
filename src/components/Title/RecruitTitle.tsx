interface RecruitTitleProps {
  subtitle: string;
  title: string;
  SVGIconComponent: React.ReactNode;
  className?: string;
}

function RecruitTitle({
  subtitle,
  title,
  SVGIconComponent,
  className = '',
}: RecruitTitleProps) {
  return (
    <div
      className={`flex items-center justify-center gap-6 self-stretch ${className}`}
    >
      <div className="flex flex-1 flex-col items-start gap-1">
        <p className="B3_Rg_14 text-text-basicTertiary">{subtitle}</p>
        <p className="T2_Sb_24 sm:T1_Sb_20 xs:T1_Sb_20 text-text-basicPrimary">
          {title}
        </p>
      </div>
      <div className="xs:hidden sm:hidden">{SVGIconComponent}</div>
    </div>
  );
}

export default RecruitTitle;
