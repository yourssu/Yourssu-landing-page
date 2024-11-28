import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { ImgNodeType, NodeType } from '@/types/hook';

interface AboutData {
  aboutImgData: {
    nodes: ImgNodeType[];
  };
  smallarrow: {
    nodes: NodeType[];
  };
  listImgData: {
    nodes: NodeType[];
  };
}

export default function useAboutDetail() {
  const imgData: AboutData = useStaticQuery(graphql`
    query {
      aboutImgData: allFile(
        filter: { name: { eq: "departmentSelect.about" } }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, quality: 90, width: 498)
          }
        }
      }
      smallarrow: allFile(filter: { name: { eq: "smallarrow-right" } }) {
        nodes {
          publicURL
          name
        }
      }
      listImgData: allFile(
        filter: {
          sourceInstanceName: { eq: "projects" }
          name: { eq: "project-list" }
        }
      ) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);

  const aboutDescription = [
    '숭실대 학생들 간의 원활한 소통을 위합니다.',
    '학생생활 속 유익하고 재밌는 콘텐츠를 지향합니다.',
    '서로를 존중하며 유어슈의 성장과 함께 스스로 발전합니다.',
  ];

  return {
    aboutImgData: {
      image: getImage(
        imgData.aboutImgData.nodes[0].childImageSharp.gatsbyImageData,
      ),
      name: imgData.aboutImgData.nodes[0].name,
    },
    smallarrow: imgData.smallarrow.nodes[0],
    listImgData: imgData.listImgData.nodes[0],
    aboutDescription,
  };
}
