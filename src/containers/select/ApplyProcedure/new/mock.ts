export interface ApplyProcessDataType {
  title: string;
  description: string;
  detailTask: string[];
}

export const APPLY_DATAS: ApplyProcessDataType[] = [
  {
    title: '서류 지원',
    description:
      '희망하는 공고의 지원서를 작성하여 제출해요.일부 직군의 경우 사전과제를 통해 1차적으로 지원자의 역량을 검증해요.',
    detailTask: ['지원서 접수', '사전 과제'],
  },
  {
    title: '인터뷰',
    description:
      '인터뷰를 통해 지원자님의 잠재력과 조직 적합성을 검증해요. 1차 인터뷰 후 인큐베이팅이 진행되며, 경우에 따라 2차 인터뷰가 진행될 수 있어요.',
    detailTask: ['1차 인터뷰', '인큐베이팅 인터뷰'],
  },
  {
    title: '최종 합격',
    description:
      '최종 합격 발표 이후 유어슈에 보다 잘 적응할 수 있도록 온보딩이 진행돼요.',
    detailTask: ['최종 합격'],
  },
];
