import { motion } from 'framer-motion';

interface ValueCardProps {
  imageBefore: string;
  imageAfter: string;
  imageBeforeMobile: string;
  imageAfterMobile: string;
  isHovered: boolean;
  onMouseEnter: () => void;
}

export function ValueCard({
  imageBefore,
  imageAfter,
  imageBeforeMobile,
  imageAfterMobile,
  isHovered,
  onMouseEnter,
}: ValueCardProps) {
  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      className={`rounded-2xl relative h-[16.25rem] w-[12.188rem] cursor-pointer overflow-hidden transition-opacity duration-0 xs:h-[152px] xs:w-[108px] sm:h-[152px] sm:w-[108px]
        ${isHovered ? 'scale-105 z-20' : 'z-0'}
      `}
    >
      {/* --- 데스크탑 버전 이미지 --- */}
      <img
        src={imageBefore}
        alt="기본 상태"
        className={`absolute inset-0 block h-full w-full rounded-[1rem] object-cover transition-opacity duration-300 xs:hidden sm:hidden
          ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      />
      <img
        src={imageAfter}
        alt="호버된 카드"
        className={`absolute inset-0 block h-full w-full rounded-[1rem] object-cover transition-opacity duration-300 xs:hidden sm:hidden
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* --- 모바일 버전 이미지 --- */}
      <img
        src={imageBeforeMobile}
        alt="기본 상태 모바일"
        className={`absolute inset-0 hidden h-full w-full rounded-[1rem] object-cover transition-opacity duration-300 xs:block sm:block
          ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      />
      <img
        src={imageAfterMobile}
        alt="호버된 카드 모바일"
        className={`absolute inset-0 hidden h-full w-full rounded-[1rem] object-cover transition-opacity duration-300 xs:block sm:block
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />
    </motion.div>
  );
}
