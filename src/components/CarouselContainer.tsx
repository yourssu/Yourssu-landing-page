import useCarouselDetail from '@/hooks/container/projects/hook';
import { CarouselContainerData } from '@/types/types';

function CarouselContainer({
  children,
  className,
  currentIndex,
  setCurrentIndex,
}: CarouselContainerData) {
  const { data, projectData } = useCarouselDetail();
  const buttonImgData = {
    leftButtonImgData: {
      imgUrl: data.carouselItemButtonImgData.nodes[0].publicURL,
      imgName: data.carouselItemButtonImgData.nodes[0].name,
    },
    rightButtonImgData: {
      imgUrl: data.carouselItemButtonImgData.nodes[1].publicURL,
      imgName: data.carouselItemButtonImgData.nodes[1].name,
    },
  };

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
        className=" pl-10 xs:pl-[8px] sm:pl-[10px] lg:pl-[10px]"
      >
        <img
          className="h-[50px] w-[50px] xs:h-[28px] xs:w-[12px] sm:h-[28px] sm:w-[12px]"
          src={buttonImgData.leftButtonImgData.imgUrl}
          alt={buttonImgData.leftButtonImgData.imgName}
        />
      </button>
      {children}
      <button
        type="button"
        onClick={nextSlide}
        className=" pr-10 xs:pr-[8px] sm:pr-[10px] lg:pr-[10px]"
      >
        <img
          className="h-[50px] w-[50px] xs:h-[20px] xs:w-[10px] sm:h-[28px] sm:w-[12px]"
          src={buttonImgData.rightButtonImgData.imgUrl}
          alt={buttonImgData.rightButtonImgData.imgName}
        />
      </button>
    </div>
  );
}

export default CarouselContainer;
