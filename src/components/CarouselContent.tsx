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

type CarouselContentProp = {
  className: string;
  currentIndex: number;
  itemsData: Node[];
  isType: string | undefined;
};

function CarouselContent({
  className,
  currentIndex,
  itemsData,
  isType,
}: CarouselContentProp) {
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
      {currentIndex % 2 !== 0 ? (
        <Img
          className="md:hidden sm:hidden xs:hidden xxl:w-[732px] xl:w-[732px] lg:w-[530px] h-auto"
          fluid={itemsData[currentIndex].childImageSharp.fluid}
        />
      ) : null}
      <div className="flex flex-col justify-center items-start relative md:mb-[10px] sm:mb-[5px] xs:mb-[5px]">
        <span className="text-[#000000] opacity-10 font-normal font-NeoEB absolute text-[70px] -top-[75px] left-[5px] leading-[115px] -tracking-[0.03em] sm:text-[48px] sm:-left-[20px] sm:-top-[65px] sm:-tracking-[0.05em] xs:text-[40px] xs:left-[10px] xs:-top-[60px] xs:-tracking-[0.05em] ">
          0{currentIndex + 1}
        </span>
        <div className="flex flex-col px-[50px] sm:px-[10px] xs:px-[32px]">
          <div className="flex flex-row justify-start items-center">
            {/* 여기 작업 중 */}
            <span className=" text-black font-NeoSB text-[36px] sm:text-[24px] xs:text-[24px] leading-[36px] -tracking-[0.01em]">
              {projectData[currentIndex].title}
            </span>
            <div>
              {projectData[currentIndex].link.length === 1 ? (
                <a href={projectData[currentIndex].link[0]}>
                  <object
                    className="w-[26px] h-[26px] ml-[5px] sm:w-[21.46px] sm:h-[18px] xs:w-[15px] xs:h-[15px] cursor-pointer pointer-events-none"
                    data={linkImgData.imgUrl}
                  >
                    {linkImgData.imgName}
                  </object>
                </a>
              ) : null}
              {projectData[currentIndex].link.length === 2 &&
              isType === 'android' ? (
                <a href={projectData[currentIndex].link[0]}>
                  <object
                    className="w-[26px] h-[26px] ml-[5px] sm:w-[21.46px] sm:h-[18px] xs:w-[15px] xs:h-[15px] cursor-pointer pointer-events-none"
                    data={linkImgData.imgUrl}
                  >
                    {linkImgData.imgName}
                  </object>
                </a>
              ) : null}
              {projectData[currentIndex].link.length === 2 &&
              isType === 'ios' ? (
                <a href={projectData[currentIndex].link[1]}>
                  <object
                    className="w-[26px] h-[26px] ml-[5px] sm:w-[21.46px] sm:h-[18px] xs:w-[15px] xs:h-[15px] cursor-pointer pointer-events-none"
                    data={linkImgData.imgUrl}
                  >
                    {linkImgData.imgName}
                  </object>
                </a>
              ) : null}
              {projectData[currentIndex].link.length === 2 &&
              isType === 'pc' ? (
                <a href={projectData[currentIndex].link[1]}>
                  <object
                    className="w-[26px] h-[26px] ml-[5px] sm:w-[21.46px] sm:h-[18px] xs:w-[15px] xs:h-[15px] cursor-pointer pointer-events-none"
                    data={linkImgData.imgUrl}
                  >
                    {linkImgData.imgName}
                  </object>
                </a>
              ) : null}
            </div>
          </div>
          <span className=" text-[22px] sm:text-[14px] xs:text-[13px] w-[405px] sm:w-[266px] xs:w-fit text-[#525252] leading-[32px] sm:leading-[22px] xs:leading-[20px] -tracking-wider font-NeoR mt-[15px] md:mt-5">
            {projectData[currentIndex].description}
          </span>
          {currentIndex === 1 || currentIndex === 3 || currentIndex === 4 ? (
            <div className="mt-[35px] flex flex-col justify-between h-[80px] md:hidden sm:hidden xs:hidden">
              {projectData[currentIndex].list.map((listData) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div
                    className="flex flex-row justify-start items-center"
                    key={listData}
                  >
                    <img src={listImgData.imgUrl} alt={listImgData.imgName} />
                    <p className="text-[24px] ml-[7px] text-[#525252] font-NeoSB leading-[24px] -tracking-wider">
                      {listData}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mt-[35px] flex flex-col justify-between h-[132px] md:hidden sm:hidden xs:hidden">
              {projectData[currentIndex].list.map((listData) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div
                    className="flex flex-row justify-start items-center"
                    key={listData}
                  >
                    <img src={listImgData.imgUrl} alt={listImgData.imgName} />
                    <p className="text-[24px] ml-[7px] text-[#525252] font-NeoSB leading-[24px] -tracking-wider">
                      {listData}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="md:hidden sm:hidden xs:hidden">
        {currentIndex % 2 === 0 && currentIndex !== 4 ? (
          <Img
            className="xxl:w-[750px] xl:w-[750px] lg:w-[530px] h-auto"
            fluid={itemsData[currentIndex].childImageSharp.fluid}
          />
        ) : null}
        {currentIndex % 2 === 0 && currentIndex === 4 ? (
          <Img
            className="xxl:w-[750px] xl:w-[750px] lg:w-[550px] h-auto"
            fluid={itemsData[currentIndex].childImageSharp.fluid}
          />
        ) : null}
      </div>
      <div className="xxl:hidden xl:hidden lg:hidden md:mb-[10px] sm:mb-[5px] xs:mb-[5px]">
        <Img
          className="md:w-[400px] sm:w-[300px] xs:w-[220px] h-auto"
          fluid={itemsData[currentIndex].childImageSharp.fluid}
        />
      </div>
      <div className="flex flex-col justify-start xxl:hidden xl:hidden lg:hidden w-[405px] sm:w-[266px] xs:w-[210px] md:mb-[10px] sm:mb-[5px] xs:mb-[5px]">
        {projectData[currentIndex].list.map((listData) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div
              className="flex flex-row justify-start items-center mb-5"
              key={listData}
            >
              <img
                className="sm:w-[18px] sm:h-[18px] xs:w-[15px] xs:h-[15px]"
                src={listImgData.imgUrl}
                alt={listImgData.imgName}
              />
              <p className="text-[24px] sm:text-[16px] xs:text-[14px] ml-[7px] text-[#525252] font-NeoSB md:leading-[24px] sm:leading-[16px] xs:leading-[14px] -tracking-wider">
                {listData}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CarouselContent;
