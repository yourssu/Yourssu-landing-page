interface Props {
  title: string;
  description: string;
}

function IdealItem({ title, description }: Props) {
  return (
    <div className="my-5 flex-row">
      <div>
        <div className="absolute h-[20px] w-[102px] translate-y-[15px] bg-gradient-to-l from-gradient_color1-0 to-gradient_color2-0 opacity-50 xs:h-[14px] xs:w-[60px] xs:translate-y-[9px] sm:h-[16px] sm:w-[66px] sm:translate-y-[11px] md:w-[89px]" />
        <h3 className="absolute w-[102px] text-center font-apple-neo text-[28px] font-semibold tracking-tighter xs:w-[60px] xs:text-[16px] sm:w-[66px] sm:text-[18px] md:w-[89px] md:text-[24px]">
          {title}
        </h3>
      </div>
      <div className="text-Text_Color2-0 ml-[141px] w-[725px] font-apple-neo text-[22px] font-normal xs:ml-[70px] xs:w-[170px] xs:text-[13px] sm:ml-[86px] sm:w-[220px] sm:text-[14px] md:ml-[110px] md:w-[380px] md:text-[18px] lg:w-[455px]">
        {description}
      </div>
    </div>
  );
}

export default IdealItem;
