type Ideal = {
  title: string;
  description: string;
};

function IdealItem({ title, description }: Ideal) {
  return (
    <div className="my-5 flex-row">
      <div>
        <div className="bg-gradient-to-l from-gradient_color1-0 opacity-50 to-gradient_color2-0 w-[102px] h-[20px] absolute translate-y-[15px]" />
        <h3 className="absolute w-[102px] text-center font-NeoSB text-[28px] tracking-tighter">
          {title}
        </h3>
      </div>
      <div className="ml-[141px] size2:max-w-[725px] size3:max-w-[452px] text-justify font-NeoR text-[22px] text-Text_Color2-0">
        {description}
      </div>
    </div>
  );
}

export default IdealItem;
