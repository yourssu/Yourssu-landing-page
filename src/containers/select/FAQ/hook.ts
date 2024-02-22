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
      question: '24-1 리크루팅을 진행하는 팀은 어느 곳인가요?',
      answer: '',
    },
    {
      question: '팀별 모집 인원은 어떻게 되나요?',
      answer: '',
    },
    {
      question: '정기적으로 모이는 시간이 있나요?',
      answer: '',
    },
    {
      question: '면접 진행 시간이 어떻게 되나요?',
      answer: '',
    },
    {
      question: '활동 기간을 알 수 있을까요?',
      answer: '',
    },
    {
      question: '동아리 회비는 얼마인가요?',
      answer: '',
    },
    {
      question: '지난 기수 탈락자 입니다. 다시 지원할 수 있나요?',
      answer: '',
    },
    {
      question: '24-1 리크루팅을 진행하는 팀은 어느 곳인가요?',
      answer: '',
    },
  ];

  return { imgData, faq };
}
