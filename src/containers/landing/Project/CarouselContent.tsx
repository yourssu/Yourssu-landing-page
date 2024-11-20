import Img from 'gatsby-image';

import useCarouselDetail from '@/containers/landing/Project/hook';
import { CarouselNode, OSType } from '@/types/landing.type';

interface Props {
  className: string;
  currentIndex: number;
  itemsData: CarouselNode[];
  isType: OSType;
}

function CarouselContent({
  className,
  currentIndex,
  itemsData,
  isType,
}: Props) {
  const { data, projectData } = useCarouselDetail();
  const linkImgData = {
    imgUrl: data.carouselItemLinkImgData.nodes[0].publicURL,
    imgName: data.carouselItemLinkImgData.nodes[0].name,
  };
  const listImgData = {
    imgUrl: data.carouselItemListImgData.nodes[0].publicURL,
    imgName: data.carouselItemListImgData.nodes[0].name,
  };

  return (
    <div className={className}>
      {currentIndex % 2 !== 0 && (
        <Img
          className="h-auto xs:hidden sm:hidden md:hidden lg:w-[530px] xl:w-[732px] xxl:w-[732px]"
          fluid={itemsData[currentIndex].childImageSharp.fluid}
        />
      )}
      <div className="relative flex flex-col items-start justify-center xs:mb-[5px] sm:mb-[5px] md:mb-[10px]">
        <span className="absolute -top-[75px] left-[5px] font-NeoEB text-[70px] font-normal leading-[115px] -tracking-[0.03em] text-[#000000] opacity-10 xs:-top-[60px] xs:left-[10px] xs:text-[40px] xs:-tracking-[0.05em] sm:-left-[20px] sm:-top-[65px] sm:text-[48px] sm:-tracking-[0.05em] ">
          0{currentIndex + 1}
        </span>
        <div className="flex flex-col px-[50px] xs:px-[32px] sm:px-[10px]">
          <div className="flex flex-row items-center justify-start">
            <span className="text-black font-NeoSB text-[36px] leading-[36px] -tracking-[0.01em] xs:text-[24px] sm:text-[24px]">
              {projectData[currentIndex].title}
            </span>
            <div>
              {projectData[currentIndex].link.length === 1 && (
                <a href={projectData[currentIndex].link[0]}>
                  <img
                    className="pointer-events-none ml-[5px] h-[26px] w-[26px] cursor-pointer xs:h-[15px] xs:w-[15px] sm:h-[18px] sm:w-[21.46px]"
                    src={linkImgData.imgUrl}
                    alt={linkImgData.imgName}
                  />
                </a>
              )}
              {projectData[currentIndex].link.length === 2 && (
                <a
                  href={
                    isType === 'android'
                      ? projectData[currentIndex].link[0]
                      : projectData[currentIndex].link[1]
                  }
                >
                  <img
                    className="pointer-events-none ml-[5px] h-[26px] w-[26px] cursor-pointer xs:h-[15px] xs:w-[15px] sm:h-[18px] sm:w-[21.46px]"
                    src={linkImgData.imgUrl}
                    alt={linkImgData.imgName}
                  />
                </a>
              )}
            </div>
          </div>
          <span className="mt-[15px] w-[405px] font-NeoR text-[22px] leading-[32px] -tracking-wider text-[#525252] xs:w-fit xs:text-[13px] xs:leading-[20px] sm:w-[266px] sm:text-[14px] sm:leading-[22px] md:mt-5">
            {projectData[currentIndex].description}
          </span>
          <div
            className={`mt-[35px] flex h-[132px] flex-col justify-between xs:hidden sm:hidden md:hidden ${currentIndex === 1 || currentIndex === 3 || currentIndex === 4 ? 'h-20' : 'h-[132px]'}`}
          >
            {projectData[currentIndex].list.map((listData) => (
              <div
                className="flex flex-row items-center justify-start"
                key={listData}
              >
                <img src={listImgData.imgUrl} alt={listImgData.imgName} />
                <p className="ml-[7px] font-NeoSB text-[24px] leading-[24px] -tracking-wider text-[#525252]">
                  {listData}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="xs:hidden sm:hidden md:hidden">
        {currentIndex % 2 === 0 && currentIndex !== 4 && (
          <Img
            className="h-auto lg:w-[530px] xl:w-[750px] xxl:w-[750px]"
            fluid={itemsData[currentIndex].childImageSharp.fluid}
          />
        )}
        {currentIndex % 2 === 0 && currentIndex === 4 && (
          <Img
            className="h-auto lg:w-[550px] xl:w-[750px] xxl:w-[750px]"
            fluid={itemsData[currentIndex].childImageSharp.fluid}
          />
        )}
      </div>
      <div className="xs:mb-[5px] sm:mb-[5px] md:mb-[10px] lg:hidden xl:hidden xxl:hidden">
        <Img
          className="h-auto xs:w-[220px] sm:w-[300px] md:w-[400px]"
          fluid={itemsData[currentIndex].childImageSharp.fluid}
        />
      </div>
      <div className="flex w-[405px] flex-col justify-start xs:mb-[5px] xs:w-[210px] sm:mb-[5px] sm:w-[266px] md:mb-[10px] lg:hidden xl:hidden xxl:hidden">
        {projectData[currentIndex].list.map((listData) => (
          <div
            className="mb-5 flex flex-row items-center justify-start"
            key={listData}
          >
            <img
              className="xs:h-[15px] xs:w-[15px] sm:h-[18px] sm:w-[18px]"
              src={listImgData.imgUrl}
              alt={listImgData.imgName}
            />
            <p className="ml-[7px] font-NeoSB text-[24px] -tracking-wider text-[#525252] xs:text-[14px] xs:leading-[14px] sm:text-[16px] sm:leading-[16px] md:leading-[24px]">
              {listData}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselContent;
