import { graphql, useStaticQuery } from 'gatsby';
import { NodeType } from '@/types/hook';

interface FAQData {
  smallarrow: {
    nodes: NodeType[];
  };
}

export default function useFAQDetail() {
  const imgData: FAQData = useStaticQuery(graphql`
    query {
      smallarrow: allFile(filter: { name: { eq: "smallarrow-left" } }) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);

  const faq = [
    {
      question: '유어슈 활동 기간은 얼마나 되나요?',
      answer: '유어슈는 1년 이상의 활동을 권장하고 있습니다.',
    },
    {
      question: '두 개 이상의 직군을 중복으로 지원해도 되나요?',
      answer:
        '중복 지원은 불가능합니다. 활동하고자 하는 직군을 선택하여 지원해주세요.',
    },
    {
      question: '휴학생도 지원이 가능한가요?',
      answer:
        '가능합니다. 숭실대학교 재학생과 휴학생이 모두 지원 자격을 충족합니다.',
    },
    {
      question: '지난 기수 탈락자의 경우 지원에 제한이 있나요?',
      answer:
        '지난 기수 지원 여부는 재지원과 선발 결과에 영향을 주지 않습니다.',
    },
    {
      question: '지원 접수 확인은 어떻게 하나요?',
      answer:
        '지원서를 제출하시면 수집한 이메일을 통해 작성한 지원서를 자동으로 전송하고 있습니다.',
    },
    {
      question: '개발 직군의 경우 코딩테스트를 하나요?',
      answer:
        '개발 직군은 모두 1차 서류 합격 후 개발 기술을 포함한 면접을 진행합니다. 개발 직군 중 Backend팀은 과제가 요구되고 있으며, Android팀은 면접 중 간단한 테스트가 예정되어 있습니다. 그 후 면접 합격자들은 인큐베이팅 과정을 거쳐 최종 면접 인터뷰를 진행합니다.',
    },
    {
      question: '개발 직군의 경우 권장 노트북 사양이 있나요?',
      answer:
        '별도의 권장 사양은 없습니다. 개발에 지장이 없도록 준비 부탁드립니다.',
    },
    {
      question: '면접은 온라인으로 진행되나요?',
      answer:
        '면접은 대면을 원칙으로 진행됩니다.(단, 예외적인 상황의 경우에는 지원자와 평가자가 조율하여 온라인으로 면접이 진행될 수 있습니다.)',
    },
    {
      question: '스펙이 부족해 보입니다. 지원해도 될까요?',
      answer:
        '유어슈에는 본격 프로젝트 돌입 전 교육 기간인 인큐베이팅 시스템이 존재합니다. 교육에 열정적으로 참여할 자신이 있으면 지원해 주세요!',
    },
    {
      question: '동아리 회비가 있나요?',
      answer: '동아리 회비는 이번 학기 기준 학기 당 20,000원입니다.',
    },
  ];

  return { imgData, faq };
}
