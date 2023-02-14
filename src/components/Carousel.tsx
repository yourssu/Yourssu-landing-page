import { useEffect, useState } from 'react';
import Img from 'gatsby-image';
import useCarouselDetail from '@/hooks/container/projects/hook';

interface Node {
  childImageSharp: {
    fluid: {
      aspectRatio: number;
      sizes: string;
      base64: string;
      src: string;
      srcSet: string;
    };
  };
}

type CarouselItemDataProp = {
  itemsData: Node[];
};

function Carousel({ itemsData }: CarouselItemDataProp) {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [isAndroid, setIsAndroid] = useState<boolean>();
  const { data, projectData } = useCarouselDetail();

  useEffect(() => {
    const mobileType = navigator.userAgent.toLowerCase();
    if (mobileType.indexOf('android') > -1) {
      setIsAndroid(true);
    }
    if (mobileType.indexOf('iphone') > -1 || mobileType.indexOf('ipad') > -1) {
      setIsAndroid(false);
    }
  }, []);

  function prevSlide() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? itemsData.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  }
  function nextSlide() {
    const isLastSlide = currentIndex === itemsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  }

  return (
    <div id="carouselItem" className="w-full h-auto mt-[450px] sm:mt-[300px]">
      <div className="flex justify-between items-center h-[400px] md:h-[300px] sm:h-[300px] w-full bg-[#FBFBFB]">
        <button
          type="button"
          onClick={prevSlide}
          className=" pl-10 sm:pl-[10px]"
        >
          <img
            className="w-[50px] h-[50px] sm:w-[12px] sm:h-[28px]"
            src={data.carouselItemData.nodes[0].publicURL}
            alt={data.carouselItemData.nodes[0].name}
          />
        </button>
        <div className="flex justify-center items-center md:flex-col sm:flex-col">
          <div className=" md:hidden sm:hidden">
            {currentIndex % 2 === 0 && currentIndex === 0 ? (
              <Img
                className="xxl:w-[656px] xl:w-[656px] lg:w-[550px] h-auto"
                fluid={itemsData[currentIndex].childImageSharp.fluid}
              />
            ) : null}
            {currentIndex % 2 === 0 && currentIndex !== 0 ? (
              <Img
                className="w-[500px] h-auto"
                fluid={itemsData[currentIndex].childImageSharp.fluid}
              />
            ) : null}
          </div>
          <div className="flex flex-col justify-center items-start relative md:mb-[10px] sm:mb-[5px]">
            <span className="text-[70px] text-[#000000] opacity-10 font-NeoSB absolute -top-[60px] sm:-top-[38px] sm:-left-[20px] -tracking-[1%] sm:text-[48px]">
              0{currentIndex + 1}
            </span>
            <div className="flex flex-col px-[50px] sm:px-[10px]">
              <div className="flex flex-row justify-start items-center">
                <span className=" text-[36px] sm:text-[24px] font-NeoSB text-black leading-[36px] -tracking-wide">
                  {projectData[currentIndex].title}
                </span>
                <div>
                  {projectData[currentIndex].link.length === 1 ? (
                    <a href={projectData[currentIndex].link[0]}>
                      <img
                        className="w-[26px] h-[26px] ml-[5px] sm:w-[21.46px] sm:h-[18px] cursor-pointer"
                        src={data.carouselItemData.nodes[3].publicURL}
                        alt={data.carouselItemData.nodes[3].name}
                      />
                    </a>
                  ) : null}
                  {projectData[currentIndex].link.length === 2 &&
                  isAndroid === true ? (
                    <a href={projectData[currentIndex].link[0]}>
                      <img
                        className="w-[26px] h-[26px] ml-[5px] sm:w-[21.46px] sm:h-[18px] cursor-pointer"
                        src={data.carouselItemData.nodes[3].publicURL}
                        alt={data.carouselItemData.nodes[3].name}
                      />
                    </a>
                  ) : null}
                  {projectData[currentIndex].link.length === 2 &&
                  isAndroid === false ? (
                    <a href={projectData[currentIndex].link[1]}>
                      <img
                        className="w-[26px] h-[26px] ml-[5px] sm:w-[21.46px] sm:h-[18px] cursor-pointer"
                        src={data.carouselItemData.nodes[3].publicURL}
                        alt={data.carouselItemData.nodes[3].name}
                      />
                    </a>
                  ) : null}
                </div>
              </div>
              <span className=" text-[22px] sm:text-[14px] w-[405px] sm:w-[266px] text-[#525252] leading-[32px] sm:leading-[22px] -tracking-wider font-NeoR xxl:mt-5 xl:mt-5 lg:mt-5 md:mt-5">
                {projectData[currentIndex].description}
              </span>
              <div className="mt-5 flex flex-col md:hidden sm:hidden">
                {projectData[currentIndex].list.map((listData) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div className="flex flex-row justify-start items-center mt-5">
                      <img
                        src={data.carouselItemData.nodes[2].publicURL}
                        alt={data.carouselItemData.nodes[2].name}
                      />
                      <p className="text-[24px] ml-[7px] text-[#525252] font-NeoSB leading-[24px] -tracking-wider">
                        {listData}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="md:hidden sm:hidden">
            {currentIndex % 2 !== 0 ? (
              <Img
                className="w-[500px] h-auto"
                fluid={itemsData[currentIndex].childImageSharp.fluid}
              />
            ) : null}
          </div>
          <div className="xxl:hidden xl:hidden lg:hidden md:mb-[10px] sm:mb-[5px]">
            <Img
              className="md:w-[400px] sm:w-[300px] h-auto"
              fluid={itemsData[currentIndex].childImageSharp.fluid}
            />
          </div>
          <div className="flex flex-col justify-start xxl:hidden xl:hidden lg:hidden w-[405px] sm:w-[266px] md:mb-[10px] sm:mb-[5px]">
            {projectData[currentIndex].list.map((listData) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="flex flex-row justify-start items-center mb-5">
                  <img
                    className="sm:w-[18px] sm:h-[18px]"
                    src={data.carouselItemData.nodes[2].publicURL}
                    alt={data.carouselItemData.nodes[2].name}
                  />
                  <p className="text-[24px] sm:text-[16px] ml-[7px] text-[#525252] font-NeoSB md:leading-[24px] sm:leading-[16px] -tracking-wider">
                    {listData}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <button
          type="button"
          onClick={nextSlide}
          className=" pr-10 sm:pr-[10px]"
        >
          <img
            className="w-[50px] h-[50px] sm:w-[12px] sm:h-[28px]"
            src={data.carouselItemData.nodes[1].publicURL}
            alt={data.carouselItemData.nodes[1].name}
          />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
