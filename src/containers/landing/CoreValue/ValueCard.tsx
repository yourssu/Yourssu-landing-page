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
      className={`rounded-2xl relative h-[16.25rem] w-[12.188rem] cursor-pointer overflow-hidden transition-opacity duration-0
        ${isHovered ? 'scale-105 z-20' : 'z-0'}
      `}
    >
      {/* --- 데스크탑 버전 이미지 (sm 이상에서 block, 기본적으로는 hidden) --- */}
      <img
        src={imageBefore}
        alt="기본 상태"
        className={`/* 수정한 부분: 평소엔 숨기고 sm 이상에서 보이기
          */ absolute  inset-0 hidden h-full w-full rounded-[1rem] object-cover transition-opacity duration-300 sm:block
          ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      />
      <img
        src={imageAfter}
        alt="호버된 카드"
        className={`/* 수정한 부분: 평소엔 숨기고 sm 이상에서 보이기
          */ absolute  inset-0 hidden h-full w-full rounded-[1rem] object-cover transition-opacity duration-300 sm:block
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* --- 모바일 버전 이미지 (sm 이상에서는 hidden, 기본적으로는 block) --- */}
      <img
        src={imageBeforeMobile}
        alt="기본 상태 모바일"
        className={`/* 수정한 부분: 평소엔 보이고 sm 이상에서 숨기기
          */ absolute  inset-0 block h-full w-full rounded-[1rem] object-cover transition-opacity duration-300 sm:hidden
          ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      />
      <img
        src={imageAfterMobile}
        alt="호버된 카드 모바일"
        className={`/* 수정한 부분: 평소엔 보이고 sm 이상에서 숨기기
          */ absolute  inset-0 block h-full w-full rounded-[1rem] object-cover transition-opacity duration-300 sm:hidden
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />
    </motion.div>
  );
}
