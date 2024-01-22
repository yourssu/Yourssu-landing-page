import { graphql, useStaticQuery } from 'gatsby';
import { NodeType } from '@/types/hook';

interface SupportingData {
  iconImgData: {
    nodes: NodeType[];
  };
  buttonImgData: {
    nodes: NodeType[];
  };
  readingGlasses: {
    nodes: NodeType[];
  };
}

//
export default function useSupportingDetail() {
  const imgData: SupportingData = useStaticQuery(graphql`
    query {
      iconImgData: allFile(
        filter: { sourceInstanceName: { eq: "department_icons" } }
        sort: { order: ASC, fields: name }
      ) {
        nodes {
          publicURL
          name
        }
      }
      buttonImgData: allFile(filter: { name: { eq: "arrow-right" } }) {
        nodes {
          publicURL
          name
        }
      }
      readingGlasses: allFile(filter: { name: { eq: "reading-glasses" } }) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);

  const description = [
    {
      departmentName: `HR\nManager`,
      departmentDescription: `유어슈의 심장을\n뛰게 하는 사람들`,
    },
    {
      departmentName: `Product\nManager`,
      departmentDescription: `서비스 기획부터\n매니징까지!`,
    },
    {
      departmentName: `Legal\nOfficer`,
      departmentDescription: `권리와 의무\n사이에서\n끊임없는 고민`,
    },
    {
      departmentName: `Product\nDesigner`,
      departmentDescription: `경험을 디자인하는\n사람들`,
    },
    {
      departmentName: `IOS\nDeveloper`,
      departmentDescription: `백설공주와\n일곱 사과 농부들`,
    },
    {
      departmentName: `Android\nDeveloper`,
      departmentDescription: `유저의 사용성을\n위해 고민하는\n녹색 깡통들`,
    },
    {
      departmentName: `Frontend\nDeveloper`,
      departmentDescription: `상상을 엮어\n하나의 현실을\n만드는 거미들`,
    },
    {
      departmentName: `Backend\nDeveloper`,
      departmentDescription: `보이지 않는 곳에\n서 묵묵히 일하는\n 조용한 영웅들`,
    },
    {
      departmentName: `Contents\nMaketer`,
      departmentDescription: `유어슈의\n얼굴이자 꽃`,
    },
  ];

  const data = description.map((value, index) => {
    return {
      imgData: imgData.iconImgData.nodes[index],
      description: value,
    };
  });

  return { data, imgData };
}
