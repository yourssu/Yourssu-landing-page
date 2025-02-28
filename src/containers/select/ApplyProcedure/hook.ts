import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { ImgNodeType } from '@/types/hook';

interface ApplyProcedureData {
  stepImgData: {
    nodes: ImgNodeType[];
  };
}

export default function useApplyProcedureDetail() {
  const imgData: ApplyProcedureData = useStaticQuery(graphql`
    query {
      stepImgData: allFile(
        filter: { name: { glob: "departmentSelect.Apply.*" } }
        sort: { name: ASC }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
          name
        }
      }
    }
  `);

  const description = [
    {
      stepTitle: '서류 지원',
      stepDescription:
        '희망하는 공고의 지원서를 작성하여 제출해요. *Tech, Design 직군의 경우 사전과제를 통해 1차적으로 지원자의 역량을 검증해요.',
    },
    {
      stepTitle: '인터뷰',
      stepDescription:
        '인터뷰를 통해 지원자님의 잠재력과 조직 적합성을 검증해요. 1차 인터뷰 후 인큐베이팅이 진행되며, 경우에 따라 2차 인터뷰가 진행될 수 있어요.',
    },
    {
      stepTitle: '최종 합격',
      stepDescription:
        '최종 합격 발표 이후 유어슈에 보다 잘 적응할 수 있도록 온보딩이 진행돼요.',
    },
  ];

  return description.map((value, index) => {
    return {
      imgData: {
        image: getImage(
          imgData.stepImgData.nodes[index].childImageSharp.gatsbyImageData,
        ),
        name: imgData.stepImgData.nodes[index].name,
      },
      description: value,
    };
  });
}
