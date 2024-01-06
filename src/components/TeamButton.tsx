import { ButtonItem } from '@/types/types';

function TeamButton({ team, img, hoverImg, notionLink }: ButtonItem) {
  return (
    <div className="mx-[15px] mb-[40px] xs:mx-[6px] sm:mx-[6px] sm:mb-[24px] md:mx-[12px]">
      <a href={notionLink} className="group relative">
        <img
          className="mb-[8px] w-[120px] xs:w-[80px] sm:w-[80px]"
          src={hoverImg}
          alt={team}
        />
        <img
          className="absolute top-0 mb-[8px] w-[120px] group-hover:invisible xs:w-[80px] sm:w-[80px]"
          src={img}
          alt={team}
        />
      </a>
      <div className="text-center text-[22px] xs:text-[13px] sm:text-[14px]">
        <span className="font-NeoR text-Text_Color2-0">{team}</span>
        <span className="ml-[2px] text-Text_Color3-0">&#62;</span>
      </div>
    </div>
  );
}

export default TeamButton;
