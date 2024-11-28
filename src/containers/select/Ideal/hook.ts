import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { ImgNodeType } from '@/types/hook';

interface IdeaData {
  idealImgData: {
    nodes: ImgNodeType[];
  };
}

export default function useIdealDetail() {
  const imgData: IdeaData = useStaticQuery(graphql`
    query {
      idealImgData: allFile(
        filter: { name: { eq: "departmentSelect.ideal" } }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, quality: 90)
          }
          name
        }
      }
    }
  `);

  return {
    image: getImage(
      imgData.idealImgData.nodes[0].childImageSharp.gatsbyImageData,
    ),
    name: imgData.idealImgData.nodes[0].name,
  };
}
