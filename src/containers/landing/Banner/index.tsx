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
          alt="유어슈 배너 이미지"
          loading="eager"
          className="h-[650px] w-full xs:h-[300px] sm:h-[557px] md:h-[557px]"
          image={breakpoints.md ? mobileImage : desktopImage}
        />
      )}
      {/* 390, 720 화면 */}
      <div className="absolute top-[132px] flex w-full flex-col items-center justify-center xs:top-[75px] lg:hidden xl:hidden xxl:hidden">
        <span className="font-pretendard font-normal text-white-0 xs:text-[16px] xs:leading-[16px] sm:text-[20px] sm:leading-[20px] md:text-[24px] md:leading-[24px]">
          좋아서 몰입하는 사람들과 함께하세요
        </span>
      </div>

      {/* 1080, 1440, 1920 화면 */}
      <div className="absolute top-[330px] flex justify-center xs:hidden   sm:hidden md:hidden lg:top-[278px] lg:min-w-[870px] xl:min-w-[1160px] xxl:min-w-[1280px]">
        <span className="font-pretendard font-semibold text-white-0 lg:text-[36px] lg:leading-[36px] xl:text-[46px] xl:leading-[46px] xxl:text-[48px] xxl:leading-[48px]">
          좋아서 몰입하는 사람들과 함께하세요
        </span>
      </div>
    </div>
  );
}

export default Banner;
