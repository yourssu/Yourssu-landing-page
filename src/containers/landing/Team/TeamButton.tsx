import { useState } from 'react';

import { Link } from 'gatsby';
import tw from 'tailwind-styled-components';

import { TeamButtonItem } from '@/types/landing.type';
import extractImageUrl from '@/utils/extractImageUrl';

// TODO: shortName 추가
function TeamButton({ longName, image }: TeamButtonItem) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="mx-[15px] mb-[40px] flex flex-col items-center xs:mx-[6px] sm:mx-[6px] sm:mb-[24px] md:mx-[12px]">
      <div
        className={`mb-[8px] flex h-[120px] w-[120px] items-center justify-center rounded-[999px] xs:h-[80px] xs:w-[80px] sm:h-[80px] sm:w-[80px] ${isHover ? 'bg-[#F2E4FF]' : 'bg-[#F5F5F5]'}`}
      >
        <Link
          to={`recruiting/${longName}`}
          className="group relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* TODO: alt를 shortName으로 변경 */}
          <img
            className="w-[85px] xs:w-[60px] sm:w-[60px]"
            src={extractImageUrl(image)}
            alt={longName}
          />
        </Link>
      </div>

      {/* TODO: longName -> shortName으로 변경 */}
      <Link
        to={`recruiting/${longName}`}
        className="flex w-fit items-center justify-center gap-[4px]"
      >
        <Team>{longName}</Team>
        <p className="flex-shrink-0 text-Text_Color3-0">&#62;</p>
      </Link>
    </div>
  );
}

const Team = tw.p`
  text-Text_Color2-0

  body3

  sm:body8
  xs:body8
`;

export default TeamButton;
