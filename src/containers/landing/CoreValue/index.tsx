import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import MainTitle from '@/components/Title/MainTitle';

import { ValueCard } from './ValueCard';
import { CORE_VALUES } from './mock';

function CoreValue() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative z-0 mx-auto flex w-full max-w-[1060px] flex-col items-center justify-center py-20 xs:px-5 sm:px-5 md:px-5">
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-10 bg-black-0 bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <MainTitle
        title="Core Value"
        subTitle="유어슈가 중요하게 생각하는 것들"
      />

      <div
        className="relative flex flex-wrap justify-center gap-4"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {CORE_VALUES.map((value, index) => (
          <ValueCard
            key={index}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
            imageAfter={value.coreValueDescription}
            imageBefore={value.coreValue}
          />
        ))}
      </div>
    </section>
  );
}

export default CoreValue;
