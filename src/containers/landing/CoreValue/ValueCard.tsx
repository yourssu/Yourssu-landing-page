import { motion, AnimatePresence } from 'framer-motion';

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
        ${isHovered ? 'z-20' : 'z-0'}
      `}
    >
      <AnimatePresence>
        {isHovered ? (
          <motion.img
            key="after"
            src={imageAfter}
            alt="호버된 카드"
            className="absolute inset-0 h-full w-full rounded-[1rem] object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        ) : (
          <motion.img
            key="before"
            src={imageBefore}
            alt="기본 상태"
            className="absolute inset-0 h-full w-full rounded-[1rem] object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
