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
      className="flex w-[332px] flex-col items-start justify-end gap-[32px]"
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
      <div className="flex flex-col items-start gap-2 self-stretch px-2">
        <span
          className={`T3_Sb_20 ${
            isHovered ? 'text-text-brandPrimary' : 'text-text-basicPrimary'
          }`}
        >
          {title}
        </span>
        <span className="T3_Rg_20 text-text-basicSecondary">{description}</span>
      </div>
    </div>
  );
}
