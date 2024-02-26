import { Link } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import tw from 'tailwind-styled-components';
import useBannerDetail from './hook';
import '@/styles/global.css';

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

  h1

  md:font-[600]
  md:text-[43px]
  md:leading-[51.31px]

  sm: h3
  xs: h3

  text-center
`;

const ButtonText = tw.span`
  text-white-0

  body1

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
