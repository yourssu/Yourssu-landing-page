import { Culture } from '@/types/types';

function CultureItem({ id, title, description }: Culture) {
  return (
    <div className="w-fit flex flex-row justify-between xs:mb-[30px] sm:mb-[50px] md:mb-[60px]">
      <span className="font-NeoEB xs:mr-4 sm:mr-4 mr-6 xs:text-[16px] sm:text-[18px] md:text-[24px] text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-gradient_color2-0 to-gradient_color1-0 xs:translate-y-0 sm:translate-y-0 md:translate-y-0 -translate-y-1">
        {id}
      </span>
      <div className="justify-between">
        <span className="font-NeoSB xs:text-[16px] sm:text-[18px] md:text-[24px] text-[28px]">
          {title}
        </span>
        <p className="font-NeoR xs:text-[14px] sm:text-[14px] md:text-[18px] text-[22px] text-justify text-Text_Color2-0 xs:w-[215px] sm:w-[270px] w-[341px] mt-[11px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CultureItem;
