import { useState } from 'react';
import { Link } from 'gatsby';
import tw from 'tailwind-styled-components';
import { TeamButtonItem } from '@/types/landing.type';

function TeamButton({ team, img }: TeamButtonItem) {
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
        <Link
          to={`recruiting/${team[1]}`}
          className="group relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="w-[85px] xs:w-[70px] sm:w-[70px]"
            src={img}
            alt={team[0]}
          />
        </Link>
      </div>

      <div className="flex items-center justify-center gap-[4px]">
        <Team>{team[0]}</Team>
        <span className="flex-shrink-0 leading-[1px] text-Text_Color3-0">
          &#62;
        </span>
      </div>
    </div>
  );
}

const Team = tw.span`
  text-Text_Color2-0

  body3

  sm:body8
  xs:body8
`;

export default TeamButton;
