type Culture = {
  id: string;
  title: string;
  description: string;
};

function CultureItem({ id, title, description }: Culture) {
  return (
    <div className="w-[408px] flex flex-row justify-between sm:mb-[50px] md:mb-[60px]">
      <span className="font-NeoEB sm:text-[18px] md:text-[24px] text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-gradient_color2-0 to-gradient_color1-0 sm:translate-y-0 md:translate-y-0 -translate-y-1">
        {id}
      </span>
      <div className="justify-between">
        <span className="font-NeoSB sm:text-[18px] md:text-[24px] text-[28px]">
          {title}
        </span>
        <p className="font-NeoR sm:text-[14px] md:text-[18px] text-[22px] text-justify text-Text_Color2-0 sm:w-[270px] w-[341px] mt-[11px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CultureItem;
