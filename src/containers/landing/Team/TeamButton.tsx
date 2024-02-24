import { useState } from 'react';
import { TeamButtonItem } from '@/types/landing.type';

function TeamButton({ team, img, notionLink }: TeamButtonItem) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="mx-[15px] mb-[40px] xs:mx-[6px] sm:mx-[6px] sm:mb-[24px] md:mx-[12px]">
      <div
        className={`mb-[8px] flex h-[120px] w-[120px] items-center justify-center rounded-[999px] ${isHover ? 'bg-[#F2E4FF]' : 'bg-[#F5F5F5]'}`}
      >
        <a
          href={notionLink}
          className="group relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="w-[80px] xs:w-[70px] sm:w-[70px]"
            src={img}
            alt={team}
          />
        </a>
      </div>

      <div className="flex items-center justify-center text-[22px] xs:text-[13px] sm:text-[14px]">
        <span className=" font-NeoR text-Text_Color2-0">{team}</span>
        <span className=" ml-[2px]  text-Text_Color3-0">&#62;</span>
      </div>
    </div>
  );
}

export default TeamButton;
