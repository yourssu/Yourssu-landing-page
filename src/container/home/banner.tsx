import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

function Banner() {
  const bannerData = useStaticQuery(graphql`
    query {
      desktopImage: file(name: { eq: "banner-lg" }) {
        childImageSharp {
          fluid(pngQuality: 90, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(name: { eq: "banner-sm" }) {
        childImageSharp {
          fluid(pngQuality: 90, maxHeight: 557) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
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
        <span className=" font-NeoSB font-medium sm:text-[20px] sm:leading-[20px] md:text-[24px] md:leading-[24px] lg:text-[36px] lg:leading-[36px] ">
          함께 만들어가는 당신의 숭실,
        </span>
        <span className=" font-Roboto font-extrabold sm:text-[40px] md:text-[48px] lg:text-[66px]">
          YOURSSU
        </span>
      </div>
      {/* 1080, 1440, 1920 화면 */}
      <div className="flex justify-start xxl:min-w-[1280px] xl:min-w-[1160px] lg:min-w-[870px] top-[280px] absolute sm:hidden md:hidden">
        <div className=" flex flex-col items-start ">
          <span className=" font-NeoSB font-medium text-[48px] leading-[48px]">
            함께 만들어가는 당신의 숭실,
          </span>
          <span className=" font-Roboto font-extrabold text-[90px] leading-[90px]">
            YOURSSU
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
