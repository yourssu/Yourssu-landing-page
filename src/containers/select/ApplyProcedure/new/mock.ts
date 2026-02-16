export interface ApplyProcessDataType {
  title: string;
  description: string;
  detailTask: string[];
}

export const APPLY_DATAS: ApplyProcessDataType[] = [
  {
    title: '서류 지원',
    description:
      '희망하는 공고의 지원서를 작성하여 제출해요.\n일부 파트의 경우 서류 결과 발표 이후, 과제 전형을 통해 지원자의 역량을 검증해요',
    detailTask: ['지원서 접수', '과제 전형'],
  },
  {
    title: '인터뷰',
    description:
      '인터뷰 이후에는 최종 합격 발표와 함께 인큐베이팅이 진행되지만, 일부 팀의 경우 2차 인터뷰가 진행될 수 있어요.',
    detailTask: ['1차 인터뷰', '인큐베이팅 인터뷰'],
  },
  {
    title: '최종 합격',
    description:
      '최종 합격 발표 이후 유어슈에 더욱 잘 적응할 수 있도록 온보딩이 진행돼요.',
    detailTask: ['최종 합격'],
  },
];
