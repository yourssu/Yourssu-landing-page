import { useState } from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function ProductCard({
  title,
  description,
  imageUrl,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex w-[332px] flex-col items-start justify-end gap-8 xs:gap-5 sm:gap-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-[330px] w-[330px] items-center justify-center overflow-hidden rounded-[16px]">
        <img
          src={imageUrl}
          alt={`${title} thumbnail`}
          className="group-hover:scale-105 h-full w-full object-cover transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col items-start gap-2 self-stretch px-2 xs:gap-1 sm:gap-1">
        <span
          className={`T3_Sb_20 sm:T2_Sb_18 xs:T2_Sb_18 ${
            isHovered ? 'text-text-brandPrimary' : 'text-text-basicPrimary'
          }`}
        >
          {title}
        </span>
        <span className="T3_Rg_20 sm:B3_Rg_14 xs:B3_Rg_14 text-text-basicSecondary">
          {description}
        </span>
      </div>
    </div>
  );
}
