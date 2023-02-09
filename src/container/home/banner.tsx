import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

function Banner() {
  const bannerData = useStaticQuery(graphql`
    query {
      desktopImage: file(name: { eq: "banner-desktop" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sm: file(name: { eq: "banner-sm" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className="relative">
      <Img
        className="sm:h-[557px] md:h-[557px] lg:h-[800px]"
        fluid={[
          bannerData.sm.childImageSharp.fluid,
          {
            ...bannerData.desktopImage.childImageSharp.fluid,
            media: `(min-width: 1160px)`,
          },
        ]}
      />
      <div className=" flex flex-col justify-center items-center w-full absolute top-[132px] xl:hidden xxl:hidden">
        <span className=" font-NeoSB font-medium sm:text-[20px] sm:leading-[20px] md:text-[24px] md:leading-[24px] lg:text-[36px] lg:leading-[36px] ">
          함께 만들어가는 당신의 숭실,
        </span>
        <span className=" font-Roboto font-extrabold sm:text-[40px] md:text-[48px] lg:text-[66px]">
          YOURSSU
        </span>
      </div>
      <div className="flex justify-start absolute xxl:top-[280px] xl:top-[220px] xxl:left-[320px] xl:left-[140px] sm:hidden md:hidden lg:hidden">
        <div className=" flex flex-col justify-start items-start">
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
