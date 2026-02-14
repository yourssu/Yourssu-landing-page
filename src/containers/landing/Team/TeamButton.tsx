import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useState } from 'react';
import tw from 'tailwind-styled-components';

import { TeamButtonItem } from '@/types/landing.type';

function TeamButton({ longName, shortName, image }: TeamButtonItem) {
  const [isHover, setIsHover] = useState(false);
  const pathName = longName.toLowerCase().replaceAll(' ', '_');

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="mx-[15px] mb-10 flex flex-col items-center xs:mx-[6px] sm:mx-[6px] sm:mb-4 md:mx-3">
      <div
        className={`mb-2 flex h-[120px] w-[120px] items-center justify-center rounded-[999px] xs:h-20 xs:w-20 sm:h-20 sm:w-20 ${isHover ? 'bg-[#F2E4FF]' : 'bg-[#F5F5F5]'}`}
      >
        <Link
          to={`recruiting/${pathName}`}
          className="group relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {image && (
            <GatsbyImage
              className="w-[85px] xs:w-[60px] sm:w-[60px]"
              image={image}
              alt={longName}
            />
          )}
        </Link>
      </div>
      <Link
        to={`recruiting/${pathName}`}
        className="flex w-fit items-center justify-center gap-1"
      >
        <Team>{shortName}</Team>
        <p className="text-Text_Color3-0 flex-shrink-0">&#62;</p>
      </Link>
    </div>
  );
}

const Team = tw.p`
  text-Text_Color2-0

  body2

  sm:body8
  xs:body8
`;

export default TeamButton;
