interface MainTitleProps {
  title: string;
  subTitle: string;
}

function MainTitle({ title, subTitle }: MainTitleProps) {
  return (
    <div className="mx-auto mb-8 flex w-full max-w-[1060px] flex-col items-start gap-[4px]">
      <span className="font-pretendard text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-text-basicTertiary">
        {title}
      </span>
      <div className="flex w-full items-center justify-between">
        <span className="font-pretendard text-[24px] font-semibold leading-[38px] tracking-[-0.48px]">
          {subTitle}
        </span>
      </div>
    </div>
  );
}

export default MainTitle;
