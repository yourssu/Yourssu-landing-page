type Ideal = {
  title: string;
  description: string;
};

function IdealItem({ title, description }: Ideal) {
  return (
    <div className="my-5 flex-row">
      <div>
        <div className="bg-gradient-to-l from-gradient_color1-0 opacity-50 to-gradient_color2-0 sm:w-[66px] md:w-[89px] w-[102px] sm:h-[16px] h-[20px] absolute translate-y-[15px]" />
        <h3 className="absolute sm:w-[66px] md:w-[89px] w-[102px] text-center font-NeoSB sm:text-[18px] md:text-[24px] text-[28px] tracking-tighter">
          {title}
        </h3>
      </div>
      <div className="sm:ml-[86px] md:ml-[110px] ml-[141px] sm:w-[220px] md:w-[380px] lg:w-[455px] w-[725px] text-justify font-NeoR sm:text-[14px] md:text-[18px] text-[22px] text-Text_Color2-0">
        {description}
      </div>
    </div>
  );
}

export default IdealItem;
