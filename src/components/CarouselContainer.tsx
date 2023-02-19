import { ReactNode } from 'react';
import useCarouselDetail from '@/hooks/container/projects/hook';

type CarouselContainerProp = {
  children: ReactNode;
  className: string;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

function CarouselContainer({
  children,
  className,
  currentIndex,
  setCurrentIndex,
}: CarouselContainerProp) {
  const { data, projectData } = useCarouselDetail();

  function prevSlide() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projectData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  function nextSlide() {
    const isLastSlide = currentIndex === projectData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  return (
    <div className={className}>
      <button
        type="button"
        onClick={prevSlide}
        className=" pl-10 lg:pl-[10px] sm:pl-[10px]"
      >
        <img
          className="w-[50px] h-[50px] sm:w-[12px] sm:h-[28px]"
          src={data.carouselItemData.nodes[0].publicURL}
          alt={data.carouselItemData.nodes[0].name}
        />
      </button>
      {children}
      <button
        type="button"
        onClick={nextSlide}
        className=" pr-10 lg:pr-[10px] sm:pr-[10px]"
      >
        <img
          className="w-[50px] h-[50px] sm:w-[12px] sm:h-[28px]"
          src={data.carouselItemData.nodes[1].publicURL}
          alt={data.carouselItemData.nodes[1].name}
        />
      </button>
    </div>
  );
}

export default CarouselContainer;
