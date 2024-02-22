import { Link } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import tw from 'tailwind-styled-components';
import useBannerDetail from './hook';

function Banner() {
  const { imgData, bannerDescription } = useBannerDetail();
  const windowSize = useMediaQuery({
    query: `(min-width: 669px)`,
  });
  return (
    <Container className="flex flex-col items-center">
      {windowSize ? (
        <SubContainer1 className="flex justify-between">
          <span>
            20{bannerDescription.recruitingDate.year}.0
            {bannerDescription.recruitingDate.month[0]}.0
            {bannerDescription.recruitingDate.day[0]}-0
            {bannerDescription.recruitingDate.month[1]}.
            {bannerDescription.recruitingDate.day[1]}
          </span>
          <span>유어슈 전직군 리크루팅</span>
        </SubContainer1>
      ) : (
        <SubContainer1 className="flex flex-col items-center justify-center gap-[5px]">
          <span>
            20{bannerDescription.recruitingDate.year}.0
            {bannerDescription.recruitingDate.month[0]}.0
            {bannerDescription.recruitingDate.day[0]}-0
            {bannerDescription.recruitingDate.month[1]}.
            {bannerDescription.recruitingDate.day[1]}
          </span>
          <span>유어슈 전직군 리크루팅</span>
        </SubContainer1>
      )}

      <SubContainer2 className="flex flex-col items-center text-center">
        <BannerTitle>
          {bannerDescription.recruitingDate.year}&apos;YOURSSU <br /> RECRUITING
        </BannerTitle>
        <BannerImage
          src={imgData.bannerImgData.nodes[0].publicURL}
          alt={imgData.bannerImgData.nodes[0].name}
        />
      </SubContainer2>
      <SubContainer3 className="flex flex-col items-center">
        <BannerSubTitle>
          {windowSize ? bannerDescription.title[0] : bannerDescription.title[1]}
        </BannerSubTitle>
        <Link to="/">
          <Button type="button">
            <ButtonText>지원하기</ButtonText>
          </Button>
        </Link>
      </SubContainer3>
    </Container>
  );
}

// Container component
const Container = tw.div`
  w-[1326px]
  gap-[30px]
  lg:gap-[100px]
  md:gap-[100px]
  sm:gap-[90px]

  lg:w-[980px]
  md:w-[628px]
  sm:w-[628px]
  xs:w-[337px]
`;

const SubContainer1 = tw.div`
  w-full

  flex
  font-Pretendard
  font-[600]
  text-[32px] 
  leading-[38.19px] 
  tracking-[-1%]

  md:text-[24px]
  md:leading-[28.64px]

  sm:text-[24px]
  sm:leading-[28.64px]

  xs:text-[24px]
  xs:leading-[28.64px]
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
  font-Roboto 
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

  font-Pretendard
  font-[700]
  text-[60px] 
  leading-[71.6px] 
  tracking-[-1%]

  md:font-[600]
  md:text-[43px]
  md:leading-[51.31px]

  sm:font-[600]
  sm:text-[32px]
  sm:leading-[38.19px]

  xs:font-[600]
  xs:text-[32px]
  xs:leading-[38.19px]

  text-center
`;

const ButtonText = tw.span`
  font-Pretendard
  font-[600]
  text-[26px] 
  text-white-0
  leading-[31.03px] 
  tracking-[-1%] 

  sm:text-[20px]
  sm:leading-[30px]
  sm:tracking-[-2%]

  xs:text-[20px]
  xs:leading-[30px]
  xs:tracking-[-2%]
`;

// button component
const Button = tw.button`
  h-[71px] 
  md:h-[94px]
  sm:h-[56px]
  xs:h-[56px]

  w-[191px] 
  md:w-[479px]
  sm:w-[273px]
  xs:w-[273px]

  rounded-[999px] 

  bg-gradient-to-r 
  from-mainGra2-0 
  to-mainGra1-0
`;

export default Banner;
