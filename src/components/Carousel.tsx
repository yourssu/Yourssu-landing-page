import { useState } from 'react';
import { CarouselItemData } from '@/types/types';
import CarouselContainer from './CarouselContainer';
import CarouselContent from './CarouselContent';

function Carousel({ itemsData, type }: CarouselItemData) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div
      id="carouselItem"
      className="w-full h-auto mt-[539px] md:mt-[734px] sm:mt-[524px] xs:mt-[500px]"
    >
      <CarouselContainer
        className="flex justify-between items-center h-[413px] md:h-[401px] sm:h-[222px] xs:h-[210px] w-full bg-[#FBFBFB]"
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      >
        {currentIndex === 4 ? (
          <CarouselContent
            className="flex justify-between items-center md:flex-col md:h-[600px] sm:flex-col sm:h-[450px] xs:flex-col xs:h-[400px] sm:justify-between xs:justify-between xs:w-[240px]"
            itemsData={itemsData}
            currentIndex={currentIndex}
            isType={type}
          />
        ) : (
          <CarouselContent
            className="flex justify-center items-center md:flex-col md:h-[800px] sm:flex-col sm:h-[530px] xs:flex-col xs:h-[500px] md:justify-between sm:justify-between xs:justify-between xs:w-[240px]"
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
