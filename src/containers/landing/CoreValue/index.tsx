import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import MainTitle from '@/components/Title/MainTitle';

import { ValueCard } from './ValueCard';
import { CORE_VALUES } from './mock';

function CoreValue() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative mx-auto flex w-full max-w-[65.625rem] flex-col items-center justify-center py-20">
      <AnimatePresence>
        {/* 1. 호버 상태일 때 Dim 레이어를 렌더링합니다. */}
        {hoveredIndex !== null && (
          <motion.div
            className="fixed inset-0 z-10 bg-black-0 bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <MainTitle
        title="Core Value"
        subTitle="유어슈의 핵심 가치"
        className="mb-9"
      />

      <div
        className="flex justify-center gap-4"
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
