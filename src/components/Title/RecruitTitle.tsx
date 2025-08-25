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
    <div className={`flex w-full justify-between ${className}`}>
      <h3 className="font-pretendard tracking-[-0.02em]">
        <p className="text-sm font-normal leading-5 text-[#6E7687]">
          {subtitle}
        </p>
        <p className=" text-2xl font-semibold leading-[34px] text-[#25262C]">
          {title}
        </p>
      </h3>
      {SVGIconComponent}
    </div>
  );
}

export default RecruitTitle;
