import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  AnimatePresence,
  motion,
} from 'framer-motion';
import { useRef, useState } from 'react';

import missionImage from 'src/assets/images/mvc/MISSON.png';
import mvcImage from 'src/assets/images/mvc/MVC.png';
import visionImage from 'src/assets/images/mvc/VISION.png';

const contentData = [
  {
    imageUrl: mvcImage,
    altText: '유어슈의 미션, 비전, 핵심가치 설명 이미지',
  },
  {
    imageUrl: missionImage,
    altText: '유어슈의 미션 설명 이미지',
  },
  {
    imageUrl: visionImage,
    altText: '유어슈의 비전 설명 이미지',
  },
];

function MissionVision() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'], // 대상의 시작점이 뷰포트 시작점에 닿을 때 시작, 대상의 끝이 뷰포트 끝에 닿을 때 끝
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const newIndex = Math.min(
      Math.floor(latest * contentData.length),
      contentData.length - 1,
    );
    setCurrentIndex(newIndex);
  });

  // 현재 인덱스에 맞는 콘텐츠를 가져옵니다.
  const activeContent = contentData[currentIndex];

  const height = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    ['37.5rem', '100vh', '100vh', '37.5rem'],
  );

  return (
    <section
      ref={scrollRef}
      style={{ height: `${contentData.length * 100}vh` }}
      className="relative mb-[6.75rem] mt-40"
    >
      <motion.div
        style={{ height }}
        className="sticky top-0 flex w-full items-center justify-center bg-white-0"
      >
        {/* 비전 콘텐츠가 들어가는 div */}
        <div className="flex h-[37.5rem] w-full min-w-96 max-w-full flex-col items-center justify-center bg-[#F6F6F6]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex flex-col items-center justify-start gap-9 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={activeContent.imageUrl}
                alt={activeContent.altText}
                className="h-full w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

export default MissionVision;
