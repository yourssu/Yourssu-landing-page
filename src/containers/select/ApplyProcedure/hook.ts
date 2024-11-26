import { graphql, useStaticQuery } from 'gatsby';

import { NodeType } from '@/types/hook';

interface ApplyProcedureData {
  stepImgData: {
    nodes: NodeType[];
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
          publicURL
          name
        }
      }
    }
  `);

  const description = [
    {
      stepTitle: '서류 지원',
      stepDescription:
        '희망하는 공고의 지원서를 작성하여 제출합니다. *Tech, Design 직군의 경우 사전과제를 통해 1차적으로 지원자의 역량을 검증합니다.',
    },
    {
      stepTitle: '인터뷰',
      stepDescription:
        '인터뷰를 통해 지원자님의 잠재력과 조직 적합성을 검증합니다. 1차 인터뷰 후 인큐베이팅이 진행되며, 경우에 따라 2차 인터뷰가 진행될 수 있습니다.',
    },
    {
      stepTitle: '최종 합격',
      stepDescription:
        '최종 합격 발표 이후 유어슈에 보다 잘 적응할 수 있도록 온보딩이 진행됩니다.',
    },
  ];

  const data = description.map((value, index) => {
    return {
      imgData: imgData.stepImgData.nodes[index],
      description: value,
    };
  });

  return data;
}
