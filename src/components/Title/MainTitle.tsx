interface MainTitleProps {
  title: string;
  subTitle: string;
}

function MainTitle({ title, subTitle }: MainTitleProps) {
  return (
    <div className="mx-auto mb-8 flex w-full max-w-[1060px] flex-col items-start gap-[4px]">
      <span className="B3_Rg_14 text-text-basicTertiary">{title}</span>
      <div className="flex w-full items-center justify-between">
        <span className="T2_Sb_24">{subTitle}</span>
      </div>
    </div>
  );
}

export default MainTitle;
