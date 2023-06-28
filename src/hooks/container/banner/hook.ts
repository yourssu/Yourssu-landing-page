import { graphql, useStaticQuery } from 'gatsby';

export default function useBannerDetail() {
  const data = useStaticQuery(graphql`
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
  return data;
}
