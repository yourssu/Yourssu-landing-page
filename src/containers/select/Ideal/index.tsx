import { motion, transform, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import tw from 'tailwind-styled-components';

import useIdealDetail from './hook';

function Ideal() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { imgData } = useIdealDetail();
  const ideal = [
    {
      id: 1,
      title: '자발적인',
    },
    {
      id: 2,
      title: '도전적인',
    },
    {
      id: 3,
      title: '공감하는',
    },
    {
      id: 4,
      title: '당신을\n기다려왔습니다!',
    },
  ];
  const { scrollY } = useScroll();
  const [scrollBoundingBox, setScrollBoundingBox] = useState({
    top: 0,
    bottom: 0,
  });
  const [opacityValues, setOpacityValues] = useState<number[]>(
    ideal.map(() => 0),
  );

  scrollY.on('change', (value) => {
    const opacities = ideal.map((_, index) => {
      const wholeScrollAreaHeight = Math.max(
        scrollBoundingBox.bottom - scrollBoundingBox.top,
        0,
      );
      const fadeHeightRatio = 0.3;
      const eachFadeScrollAreaHeight =
        (wholeScrollAreaHeight / ideal.length) * fadeHeightRatio;
      const eachScrollAreaHeight = wholeScrollAreaHeight / ideal.length;
      const fadeInStart = scrollBoundingBox.top + eachScrollAreaHeight * index;
      const fadeInEnd = fadeInStart + eachFadeScrollAreaHeight;
      const fadeOutEnd = fadeInStart + eachScrollAreaHeight;
      const fadeOutStart = fadeOutEnd - eachFadeScrollAreaHeight;
      return transform(
        value,
        [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
        [0, 1, 1, 0],
      );
    });

    setOpacityValues(opacities);
  });

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const { top, height } = scrollContainerRef.current.getBoundingClientRect();

    setScrollBoundingBox({
      top,
      bottom: top + height,
    });
  }, []);

  return (
    <>
      <ScrollContainer ref={scrollContainerRef}>
        {ideal.map((value, index) => {
          return (
            <div key={value.id} className="sticky top-0">
              <Container>
                <Item
                  className="-translate-y-1/4"
                  style={{ opacity: opacityValues[index] }}
                >
                  <div className="text-center">
                    <IdealText>{value.title}</IdealText>
                  </div>
                  {index !== 3 ? (
                    <IdealImage
                      $index={index}
                      src={imgData.idealImgData.nodes[0].publicURL}
                      alt={imgData.idealImgData.nodes[0].name}
                    />
                  ) : null}
                </Item>
              </Container>
            </div>
          );
        })}
      </ScrollContainer>
      <ScrollAreaBottomSpace />
    </>
  );
}

const ScrollContainer = tw.div`
  relative 
  
  flex 
  flex-col
  
  w-full
  h-[800vh]
`;

const Container = tw.div`
  absolute

  w-full
  md:h-[666px]
  sm:h-[542px]
  xs:h-[542px]
`;

const Item = tw(motion.div)`
  w-full
  h-[200vh]

  flex
  justify-center
  items-center
  `;

const IdealText = tw.span`
  text-center

  h2

  md:font-family: Pretendard;
  md:font-size: 40px;
  md:font-style: normal;
  md:font-weight: 700;
  md:line-height: normal;
  md:letter-spacing: -0.4px;

  sm:h3
  sm:whitespace-pre-line
  xs:h3
  xs:whitespace-pre-line
`;

const IdealImage = tw.img<{ $index: number }>`
  absolute
  ${(prop) => (prop.$index % 2 === 0 ? 'right-0' : 'left-0 -scale-x-100 transform')}
  md:w-[260px]
  sm:w-[110px]
  xs:w-[100px]
`;

const ScrollAreaBottomSpace = tw.div`
  h-[40vh]
`;

export default Ideal;
