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
      category: '지원 관련',
      list: [
        {
          question: '유어슈의 활동 기간은 얼마나 되나요?',
          answer: '기본 활동 기간은 1년이며, 이후에도 계속 활동할 수 있어요.',
        },
        {
          question: '두 개 이상의 직군을 중복 지원할 수 있나요?',
          answer:
            '아니요. 하나의 직군만 선택해 지원해야 해요. 중복 지원 시 불이익이 있을 수 있으니 신중하게 선택해주세요!',
        },
        {
          question: '휴학생도 지원할 수 있나요?',
          answer: '네! 숭실대학교 재학생과 휴학생 모두 지원할 수 있어요.',
        },
        {
          question: '지난 학기에 지원했다가 탈락했는데, 다시 지원할 수 있나요?',
          answer: '네! 이전 지원 여부는 선발 결과에 영향을 미치지 않아요.',
        },
        {
          question: '지원서를 제출했는데, 접수 확인은 어떻게 하나요?',
          answer:
            '지원서 제출 후, 입력한 이메일로 사본 메일이 자동으로 발송돼요. 혹시 못 받았다면 스팸함도 확인해주세요!',
        },
      ],
    },
    {
      category: '전형 관련',
      list: [
        {
          question: '개발 직군의 경우 코딩 테스트가 있나요?',
          answer:
            '별도의 코딩 테스트는 없지만, 일부 직군은 과제나 테스트가 포함돼요.',
        },
        {
          question: '개발 직군의 경우 권장 노트북 사양이 있나요?',
          answer:
            '특별한 권장 사양은 없지만, 개발 직군의 경우 Mac 또는 Windows 환경에서 개발이 가능한 노트북이 필요해요.',
        },
        {
          question: '면접은 온라인으로 진행되나요?',
          answer:
            '기본적으로 대면 면접을 원칙으로 하지만, 예외적인 경우 지원자와 협의 후 온라인 면접이 가능해요.',
        },
        {
          question: '스펙이 부족한데, 지원해도 될까요?',
          answer:
            '당연하죠! 유어슈에는 인큐베이팅 시스템이 있어서, 배우려는 의지만 있다면 누구든 성장할 수 있어요.',
        },
        {
          question: '면접은 어떤 방식으로 진행되나요?',
          answer:
            '직무 적합도(Job-fit)와 문화 적합도(Culture-fit)를 중심으로 평가해요.',
        },
        {
          question: '면접 시간은 얼마나 걸리나요?',
          answer: '약 30~40분 정도 소요돼요.',
        },
      ],
    },
    {
      category: '활동 관련',
      list: [
        {
          question: '동아리 회비가 있나요?',
          answer: '네, 학기당 20,000원의 회비가 있어요.',
        },
        {
          question: '유어슈는 정기 모임 요일이 정해져 있나요?',
          answer:
            '팀마다 다르지만, 보통 주 1회 1~2시간 정도 진행돼요. 일정은 팀원들과 조율할 수 있어요.',
        },
        {
          question: '활동 중 휴학/졸업 예정이어도 계속 참여할 수 있나요?',
          answer: '네, 휴학이나 졸업과 관계없이 활동을 이어갈 수 있어요.',
        },
      ],
    },
    {
      category: '기타 문의',
      list: [
        {
          question: '기타 문의사항이 있을 경우 어디로 연락하면 되나요?',
          answer: (
            <>
              유어슈 카카오톡 채널로 문의해주세요!{' '}
              <a
                href="http://pf.kakao.com/_AxfrxeT/chat"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://pf.kakao.com/_AxfrxeT/chat
              </a>
            </>
          ),
        },
      ],
      category: '전형 관련',
      list: [
        {
          question: '개발 직군의 경우 코딩 테스트가 있나요?',
          answer:
            '별도의 코딩 테스트는 없지만, 일부 직군은 과제나 테스트가 포함돼요.',
        },
        {
          question: '개발 직군의 경우 권장 노트북 사양이 있나요?',
          answer:
            '특별한 권장 사양은 없지만, 개발 직군의 경우 Mac 또는 Windows 환경에서 개발이 가능한 노트북이 필요해요.',
        },
        {
          question: '면접은 온라인으로 진행되나요?',
          answer:
            '기본적으로 대면 면접을 원칙으로 하지만, 예외적인 경우 지원자와 협의 후 온라인 면접이 가능해요.',
        },
        {
          question: '스펙이 부족한데, 지원해도 될까요?',
          answer:
            '당연하죠! 유어슈에는 인큐베이팅 시스템이 있어서, 배우려는 의지만 있다면 누구든 성장할 수 있어요.',
        },
        {
          question: '면접은 어떤 방식으로 진행되나요?',
          answer:
            '직무 적합도(Job-fit)와 문화 적합도(Culture-fit)를 중심으로 평가해요.',
        },
        {
          question: '면접 시간은 얼마나 걸리나요?',
          answer: '약 30~40분 정도 소요돼요.',
        },
      ],
    },
    {
      category: '활동 관련',
      list: [
        {
          question: '동아리 회비가 있나요?',
          answer: '네, 학기당 20,000원의 회비가 있어요.',
        },
        {
          question: '유어슈는 정기 모임 요일이 정해져 있나요?',
          answer:
            '팀마다 다르지만, 보통 주 1회 1~2시간 정도 진행돼요. 일정은 팀원들과 조율할 수 있어요.',
        },
        {
          question: '활동 중 휴학/졸업 예정이어도 계속 참여할 수 있나요?',
          answer: '네, 휴학이나 졸업과 관계없이 활동을 이어갈 수 있어요.',
        },
      ],
    },
    {
      category: '기타 문의',
      list: [
        {
          question: '기타 문의사항이 있을 경우 어디로 연락하면 되나요?',
          answer: (
            <>
              유어슈 카카오톡 채널로 문의해주세요!{' '}
              <a
                href="http://pf.kakao.com/_AxfrxeT/chat"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://pf.kakao.com/_AxfrxeT/chat
              </a>
            </>
          ),
        },
      ],
    },
  ];

  return { imgData, faq };
}
