import { useEffect, useState } from 'react';

import { OSType } from '@/types/landing.type';

import CarouselContainer from './CarouselContainer';
import CarouselContent from './CarouselContent';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [type, setType] = useState<OSType>();

  useEffect(() => {
    const osType = navigator.userAgent.toLowerCase();
    if (osType.indexOf('android') > -1) {
      setType('android');
    } else if (osType.indexOf('iphone') > -1 || osType.indexOf('ipad') > -1) {
      setType('ios');
    } else {
      setType('pc');
    }
  }, []);

  return (
    <div
      id="carouselItem"
      className="mt-[539px] h-auto w-full xs:mt-[500px] sm:mt-[524px] md:mt-[734px]"
    >
      <CarouselContainer
        className="flex h-[413px] w-full items-center justify-between bg-[#FBFBFB] xs:h-[210px] sm:h-[222px] md:h-[401px]"
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      >
        <CarouselContent currentIndex={currentIndex} isType={type} />
      </CarouselContainer>
    </div>
  );
}

export default Carousel;
