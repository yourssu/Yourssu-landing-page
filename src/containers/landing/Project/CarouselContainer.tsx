import useCarouselDetail from '@/containers/landing/Project/hook';

interface Props {
  children: React.ReactNode;
  className: string;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

function CarouselContainer({
  children,
  className,
  currentIndex,
  setCurrentIndex,
}: Props) {
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
        className="pl-10 xs:pl-2 sm:pl-[10px] lg:pl-[10px]"
      >
        <img
          className="h-[50px] w-[50px] xs:h-7 xs:w-3 sm:h-7 sm:w-3"
          src={buttonImgData.leftButtonImgData.imgUrl}
          alt={buttonImgData.leftButtonImgData.imgName}
        />
      </button>
      {children}
      <button
        type="button"
        onClick={nextSlide}
        className="pr-10 xs:pr-2 sm:pr-[10px] lg:pr-[10px]"
      >
        <img
          className="h-[50px] w-[50px] xs:h-5 xs:w-[10px] sm:h-7 sm:w-3"
          src={buttonImgData.rightButtonImgData.imgUrl}
          alt={buttonImgData.rightButtonImgData.imgName}
        />
      </button>
    </div>
  );
}

export default CarouselContainer;
