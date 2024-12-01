import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage } from 'gatsby-plugin-image';

import useBannerDetail from '@/containers/landing/Banner/hook';

function Banner() {
  const { desktopImage, mobileImage } = useBannerDetail();
  const breakpoints = useBreakpoint();

  return (
    <div className="relative flex flex-col items-center justify-center">
      {mobileImage && desktopImage && (
        <GatsbyImage
          alt="배너 이미지"
          loading="eager"
          className="h-[800px] w-full xs:h-[300px] sm:h-[557px] md:h-[557px]"
          image={breakpoints.md ? mobileImage : desktopImage}
        />
      )}
      {/* 390, 720 화면 */}
      <div className="absolute top-[132px] flex w-full flex-col items-center justify-center xs:top-[75px] lg:hidden xl:hidden xxl:hidden">
        <span className="font-apple-neo font-normal xs:text-[16px] xs:leading-[16px] sm:text-[20px] sm:leading-[20px] md:text-[24px] md:leading-[24px]">
          함께 만들어가는 당신의 숭실,
        </span>
        <span className="font-jost font-semibold -tracking-[0.02em] xs:mt-[5px] xs:text-[28px] xs:leading-[30px] sm:mt-[7px] sm:text-[40px] sm:leading-[40px] md:mt-[11px] md:text-[48px] md:leading-[48px]">
          YOURSSU
        </span>
      </div>
      {/* 1080, 1440, 1920 화면 */}
      <div className="absolute top-[330px] flex justify-start xs:hidden sm:hidden md:hidden lg:top-[278px] lg:min-w-[870px] xl:min-w-[1160px] xxl:min-w-[1280px]">
        <div className="flex flex-col items-start ">
          <span className="font-apple-neo font-normal lg:text-[36px] lg:leading-[36px] xl:text-[46px] xl:leading-[46px] xxl:text-[48px] xxl:leading-[48px]">
            함께 만들어가는 당신의 숭실,
          </span>
          <span className="font-jost font-bold -tracking-[0.02em] lg:mt-[10px] lg:text-[68px] lg:font-semibold lg:leading-[68px] xl:mt-[12px] xl:text-[86px] xl:leading-[96px] xxl:mt-[15px] xxl:text-[90px] xxl:leading-[90px]">
            YOURSSU
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
