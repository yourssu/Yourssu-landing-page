import Img from 'gatsby-image';
import useBannerDetail from '@/hooks/container/banner/hook';

function Banner() {
  const bannerData = useBannerDetail();
  return (
    <div className="relative flex flex-col justify-center items-center">
      <Img
        className=" sm:h-[557px] md:h-[557px] h-[800px] w-full"
        fluid={[
          bannerData.mobileImage.childImageSharp.fluid,
          {
            ...bannerData.desktopImage.childImageSharp.fluid,
            media: `(min-width: 1080px)`,
          },
        ]}
      />
      {/* 390, 720 화면 */}
      <div className=" flex flex-col justify-center items-center w-full absolute top-[132px] xxl:hidden xl:hidden lg:hidden">
        <span className=" font-NeoM00 font-normal md:text-[24px] sm:text-[20px] md:leading-[24px] sm:leading-[20px]">
          함께 만들어가는 당신의 숭실,
        </span>
        <span className=" font-Jost font-semibold md:text-[48px] sm:text-[40px] md:leading-[48px] sm:leading-[40px] -tracking-[0.02em] md:mt-[11px] sm:mt-[7px]">
          YOURSSU
        </span>
      </div>
      {/* 1080, 1440, 1920 화면 */}
      <div className="flex justify-start xxl:min-w-[1280px] xl:min-w-[1160px] lg:min-w-[870px] top-[330px] lg:top-[278px] absolute sm:hidden md:hidden">
        <div className=" flex flex-col items-start ">
          <span className=" font-NeoM00 font-normal xxl:text-[48px] xl:text-[46px] lg:text-[36px] xxl:leading-[48px] xl:leading-[46px] lg:leading-[36px]">
            함께 만들어가는 당신의 숭실,
          </span>
          <span className=" font-Jost font-bold lg:font-semibold xxl:text-[90px] xl:text-[86px] lg:text-[68px] xxl:leading-[90px] xl:leading-[96px] lg:leading-[68px] -tracking-[0.02em] xxl:mt-[15px] xl:mt-[12px] lg:mt-[10px]">
            YOURSSU
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
