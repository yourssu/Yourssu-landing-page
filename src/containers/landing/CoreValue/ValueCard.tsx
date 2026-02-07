import { motion } from 'framer-motion';

interface ValueCardProps {
  imageBefore: string;
  imageAfter: string;
  isHovered: boolean;
  onMouseEnter: () => void;
}

export function ValueCard({
  imageBefore,
  imageAfter,
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
      <img
        src={imageBefore}
        alt="기본 상태"
        className={`absolute inset-0 h-full w-full rounded-[1rem] object-cover transition-opacity duration-300
          ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      />
      <img
        src={imageAfter}
        alt="호버된 카드"
        className={`absolute inset-0 h-full w-full rounded-[1rem] object-cover transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />
    </motion.div>
  );
}
