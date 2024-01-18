import { Link } from 'gatsby';
import tw from 'tailwind-styled-components';
import useBannerDetail from './hook';

function Banner() {
  const { imgData, bannerDescription } = useBannerDetail();

  return (
    <Container>
      <div className="font-Pretendard flex w-full justify-between text-[32px] font-[600] leading-[38.19px] tracking-[-1%]">
        <span>
          20{bannerDescription.recruitingDate.year}.0
          {bannerDescription.recruitingDate.month[0]}.0
          {bannerDescription.recruitingDate.day[0]}-0
          {bannerDescription.recruitingDate.month[1]}.
          {bannerDescription.recruitingDate.day[1]}
        </span>
        <span>유어슈 전직군 리크루팅</span>
      </div>
      <div className="relative flex flex-col items-center pt-[30px]">
        <p className=" font-Roboto text-[230px] font-[900] leading-[269.53px] tracking-[-1%] text-bluegray2-0">
          {bannerDescription.recruitingDate.year}&apos;YOURSSU <br /> RECRUITING
        </p>
        <img
          className=" absolute w-[580px] rotate-12 transform"
          src={imgData.bannerImgData.nodes[0].publicURL}
          alt={imgData.bannerImgData.nodes[0].name}
        />
      </div>
      <div className="flex flex-col items-center gap-[30px]">
        <span className=" font-Pretendard text-[60px] font-[700] leading-[71.6px] tracking-[-1%]">
          {bannerDescription.title}
        </span>
        <Link to="/">
          <button
            className="font-Pretendard h-[71px] w-[191px] rounded-[999px] bg-gradient-to-r from-mainGra2-0 to-mainGra1-0"
            type="button"
          >
            <span className="text-[26px] font-[600] leading-[31.03px] tracking-[1%] text-white-0">
              지원하기
            </span>
          </button>
        </Link>
      </div>
    </Container>
  );
}

const Container = tw.div`
  flex
  flex-col
  items-center
  w-[1326px]
`;

export default Banner;
