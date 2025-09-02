import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  AnimatePresence,
  motion,
} from 'framer-motion';
import { useRef, useState } from 'react';

import mvcAltBackgroundImage from 'src/assets/images/mvc/bg-alt.png';
import mvcBackgroundImage from 'src/assets/images/mvc/bg.png';

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
      className="relative mb-[6.75rem] mt-40 xs:hidden sm:hidden md:hidden"
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
              className="flex size-full flex-col items-center justify-center gap-9 bg-cover bg-no-repeat text-center"
              style={{
                backgroundImage:
                  activeContent.bgImageUrl &&
                  `url(${activeContent.bgImageUrl})`,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="T3_Sb_20 text-[#4B505D]">
                  {activeContent.subTitle}
                </div>
                <div className="H2_Sb_40">{activeContent.title}</div>
              </div>
              <div className="T1_Rg_28 whitespace-pre-wrap">
                {activeContent.description}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

const contentData = [
  {
    title: '유어슈의 미션, 비전, 핵심가치',
    subTitle: 'MVC',
    description:
      '유어슈는 서비스로 세상에 의미 있는 변화를 만들기 위해,\n기존 숭실대학교를 넘어 더 넓은 무대를 바라보며 MVC 3.0을 설정했습니다.',
    bgImageUrl: undefined,
  },
  {
    title: 'MISSION',
    subTitle: 'YOURSSU',
    description:
      '유어슈는 숭실대 학생들과 함께 성장하며,\n서비스로 세상에 의미 있는 변화를 만든다.',
    bgImageUrl: mvcBackgroundImage,
  },
  {
    title: 'VISION',
    subTitle: 'YOURSSU',
    description:
      '2년 내, 유어슈가 만든 서비스 중 최소 1개 이상이\n외부 사용자 1,000명 이상에게 실제로 사용되며 가치를 인정 받는 것을 목표로 한다.',
    bgImageUrl: mvcAltBackgroundImage,
  },
] as const satisfies Array<{
  title: string;
  subTitle: string;
  description: string;
  bgImageUrl: string | undefined;
}>;

export default MissionVision;
