interface Props {
  id: string;
  title: string;
  description: string;
}

function CultureItem({ id, title, description }: Props) {
  return (
    <div className="flex w-fit flex-row justify-between xs:mb-[30px] sm:mb-[50px] md:mb-[60px]">
      <span className="mr-6 -translate-y-1 bg-gradient-to-r from-gradient_color2-0 to-gradient_color1-0 bg-clip-text font-NeoEB text-[32px] text-transparent xs:mr-4 xs:translate-y-0 xs:text-[16px] sm:mr-4 sm:translate-y-0 sm:text-[18px] md:translate-y-0 md:text-[24px]">
        {id}
      </span>
      <div className="justify-between">
        <span className="font-NeoSB text-[28px] xs:text-[16px] sm:text-[18px] md:text-[24px]">
          {title}
        </span>
        <p className="mt-[11px] w-[341px] text-justify font-NeoR text-[22px] text-Text_Color2-0 xs:w-[215px] xs:text-[14px] sm:w-[270px] sm:text-[14px] md:text-[18px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CultureItem;
