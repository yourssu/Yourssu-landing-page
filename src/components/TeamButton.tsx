import { useState } from 'react';
import { ButtonItem } from '@/types/types';

function TeamButton({ team, img, hoverImg, notionLink }: ButtonItem) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="xs:mx-[6px] sm:mx-[6px] md:mx-[12px] mx-[15px] sm:mb-[24px] mb-[40px]">
      <a
        href={notionLink}
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="mb-[8px] xs:w-[80px] sm:w-[80px] w-[120px]"
          src={isHover ? hoverImg : img}
          alt={team}
        />
      </a>
      <div className="text-center xs:text-[13px] sm:text-[14px] text-[22px]">
        <span className="font-NeoR text-Text_Color2-0">{team}</span>
        <span className="text-Text_Color3-0 ml-[2px]">&#62;</span>
      </div>
    </div>
  );
}

export default TeamButton;
