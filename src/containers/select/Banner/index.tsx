import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import tw from 'tailwind-styled-components';

import '@/styles/global.css';
import formatDate from '@/utils/formatDate';

import useBannerDetail from './hook';

function Banner({}: { moveSupporting: () => void }) {
  const bannerData = useBannerDetail();
  const breakpoints = useBreakpoint();

  return (
    <Container
      $breakPoint={breakpoints.query669 as boolean}
      className="z-40 flex flex-col items-center"
    >
      <SubContainer1
        className={`flex ${(breakpoints.query669 as boolean) ? 'mt-12 flex-col items-center justify-center gap-[5px]' : 'mt-20 justify-between'}`}
      >
        <span>{formatDate(bannerData.periodData.formSchedule)}</span>
        <span>유어슈 정기 리크루팅</span>
      </SubContainer1>
      <SubContainer2 className="flex flex-col items-center text-center font-roboto">
        <BannerTitle>
          {bannerData.periodData.formSchedule.start.slice(2, 4)}’YOURSSU <br />{' '}
          RECRUITING
        </BannerTitle>
        <BannerImage
          src={bannerData.imgData.publicURL}
          alt={bannerData.imgData.name}
        />
      </SubContainer2>
      <SubContainer3 className="flex flex-col items-center">
        <BannerSubTitle
          className={`${breakpoints.query669 ? 'whitespace-pre-wrap' : 'whitespace-normal'}`}
        >
          {`당신의 손으로 바꿔나갈,\n당신의 숭실`}
        </BannerSubTitle>
        {/*<Button type="button" onClick={moveSupporting}>*/}
        {/*  <ButtonText>지원하기</ButtonText>*/}
        {/*</Button>*/}
      </SubContainer3>
    </Container>
  );
}

// Container component
const Container = tw.div<{ $breakPoint: boolean }>`
  w-[1326px]
  gap-[30px]
  lg:gap-[100px]
  md:gap-[100px]
  sm:gap-[90px]

  lg:w-[980px]
  md:w-[628px]
  ${(prop) => (prop.$breakPoint ? 'sm:w-[337px]' : 'sm:w-[628px]')}
  xs:w-[337px]
`;

const SubContainer1 = tw.div`
  w-full
  h3

  md:h4
  sm:h4
  xs:h4
`;

const SubContainer2 = tw.div`
  relative
`;

const SubContainer3 = tw.div`
  gap-[40px]
  md:gap-[60px]
`;

// image component
const BannerImage = tw.img`
  absolute
  w-[600px]
  lg:w-[474.86px]
  md:w-[316.3px]
  sm:w-[192px]
  xs:w-[192px]
  rotate-12
  transform
  top-[-10px]
`;

// text component
const BannerTitle = tw.p`
  font-[900] 
  text-[230px]
  text-bluegray2-0
  leading-[269.53px] 
  tracking-[-1%] 

  lg:text-[170px]
  lg:leading-[199.22px]
  lg:tracking-[-2%]

  md:text-[110px]
  md:leading-[128.91px]
  md:tracking-[-2%]

  sm:text-[60px]
  sm:leading-[70.31px]
  sm:tracking-[-2%]

  xs:text-[60px]
  xs:leading-[70.31px]
  xs:tracking-[-2%]
`;

const BannerSubTitle = tw.span`
  whitespace-pre-line

  h1

  md:font-[600]
  md:text-[43px]
  md:leading-[51.31px]

  sm:h3
  xs:h3

  text-center
`;

// const ButtonText = tw.span`
//   text-white-0
//
//   body1
//
//   sm:text-[20px]
//   sm:leading-[30px]
//   sm:tracking-[-2%]
//   sm:font-[700]
//
//   xs:text-[20px]
//   xs:leading-[30px]
//   xs:tracking-[-2%]
//   xsw:font-[700]
// `;
//
// // button component
// const Button = tw.button`
//   h-[71px]
//   md:h-[94px]
//   sm:h-[56px]
//   xs:h-[56px]
//
//   w-[191px]
//   md:w-[479px]
//   sm:w-[273px]
//   xs:w-[273px]
//
//   rounded-[999px]
//
//   bg-gradient-to-r
//   from-mainGra2-0
//   to-mainGra1-0
// `;

export default Banner;
