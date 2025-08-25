// import { graphql, useStaticQuery } from 'gatsby';
// import { getImage, IGatsbyImageData } from 'gatsby-plugin-image';

// interface BannerData {
//   desktopImage: {
//     childImageSharp: {
//       gatsbyImageData: IGatsbyImageData;
//     };
//   };
//   mobileImage: {
//     childImageSharp: {
//       gatsbyImageData: IGatsbyImageData;
//     };
//   };
// }

// export default function useBannerDetail() {
//   const data = useStaticQuery<BannerData>(graphql`
//     query {
//       desktopImage: file(name: { eq: "main-desktop" }) {
//         childImageSharp {
//           gatsbyImageData(quality: 90, height: 800, placeholder: BLURRED)
//         }
//       }
//       mobileImage: file(name: { eq: "main-mobile" }) {
//         childImageSharp {
//           gatsbyImageData(quality: 90, height: 557, placeholder: BLURRED)
//         }
//       }
//     }
//   `);

//   return {
//     desktopImage: getImage(data.desktopImage),
//     mobileImage: getImage(data.mobileImage),
//   };
// }
