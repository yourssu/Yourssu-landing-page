import { useState } from 'react';
import { CarouselNode, OSType } from '@/types/landing.type';
import CarouselContainer from './CarouselContainer';
import CarouselContent from './CarouselContent';

interface Props {
  itemsData: CarouselNode[];
  type: OSType;
}

function Carousel({ itemsData, type }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
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
        {currentIndex === 4 ? (
          <CarouselContent
            className="flex items-center justify-between xs:h-[400px] xs:w-[240px] xs:flex-col xs:justify-between sm:h-[450px] sm:flex-col sm:justify-between md:h-[600px] md:flex-col"
            itemsData={itemsData}
            currentIndex={currentIndex}
            isType={type}
          />
        ) : (
          <CarouselContent
            className="flex items-center justify-center xs:h-[500px] xs:w-[240px] xs:flex-col xs:justify-between sm:h-[530px] sm:flex-col sm:justify-between md:h-[800px] md:flex-col md:justify-between"
            itemsData={itemsData}
            currentIndex={currentIndex}
            isType={type}
          />
        )}
      </CarouselContainer>
    </div>
  );
}

export default Carousel;
