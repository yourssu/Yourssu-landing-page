import { useEffect, useState } from 'react';

import { CarouselNode, OSType } from '@/types/landing.type';

import CarouselContainer from './CarouselContainer';
import CarouselContent from './CarouselContent';

interface Props {
  itemsData: CarouselNode[];
}

function Carousel({ itemsData }: Props) {
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
        <CarouselContent
          className={`flex items-center justify-between xs:w-[240px] xs:flex-col xs:justify-between sm:flex-col sm:justify-between md:flex-col ${currentIndex === 4 ? 'xs:h-[400px] sm:h-[450px] md:h-[600px]' : 'xs:h-[500px] sm:h-[530px] md:h-[800px] md:justify-between'}`}
          itemsData={itemsData}
          currentIndex={currentIndex}
          isType={type}
        />
      </CarouselContainer>
    </div>
  );
}

export default Carousel;
