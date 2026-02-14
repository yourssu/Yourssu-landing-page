interface MainTitleProps {
  title: string;
  subTitle: string;
  rightElement?: React.ReactNode; // 우측에 들어갈 요소 선택적으로 받음
}

function MainTitle({ title, subTitle, rightElement }: MainTitleProps) {
  return (
    <div className="mx-auto flex w-full max-w-[1060px] flex-col items-start gap-[4px]">
      <span className="B3_Rg_14 text-text-basicTertiary">{title}</span>
      <div className="flex w-full items-center justify-between">
        <span className="T2_Sb_24 sm:T1_Sb_20 xs:T1_Sb_20">{subTitle}</span>
        {rightElement && <div>{rightElement}</div>}
      </div>
    </div>
  );
}

export default MainTitle;
