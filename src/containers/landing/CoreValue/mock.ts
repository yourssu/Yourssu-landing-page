import bgImage1 from 'src/assets/images/core-value/core-value-1-bg.png';
import bgImage2 from 'src/assets/images/core-value/core-value-2-bg.png';
import bgImage3 from 'src/assets/images/core-value/core-value-3-bg.png';
import bgImage4 from 'src/assets/images/core-value/core-value-4-bg.png';
import bgImage5 from 'src/assets/images/core-value/core-value-5-bg.png';

export interface MVCContent {
  id: number;
  title: {
    // 앞면에 들어가는 제목
    desktop: string;
    mobile: string;
  };
  summary: {
    // 앞면에 들어가는 문구
    desktop: string;
    mobile: string;
  };
  description: {
    // 뒷면에 들어가는 설명
    desktop: string[];
    mobile: string;
  };
  bgImageUrl: string; // 배경 이미지 URL
}

export const mvcData: MVCContent[] = [
  {
    id: 1,
    title: {
      desktop: 'Make it Yours',
      mobile: 'Make\nit Yours',
    },
    summary: {
      desktop: '기회를 스스로 만들고, 내 일처럼 몰입합니다.',
      mobile: '',
    },
    description: {
      desktop: [
        '유어슈에서는 기회를 기다리기보다 스스로 만듭니다.',
        '주어진 일 뿐 아니라 하고 싶은 일을 찾아 내 일처럼 몰입합니다.',
        '이렇듯 우리는 자율적으로 움직이며 즐겁게 몰입합니다.',
      ],
      mobile: '기회를 만들고\n내 일처럼\n몰입합니다',
    },
    bgImageUrl: bgImage1,
  },
  {
    id: 2,
    title: {
      desktop: 'Start with Why',
      mobile: 'Start\nwith Why',
    },
    summary: {
      desktop: '모든 결정은 목적에서 시작됩니다.',
      mobile: '',
    },
    description: {
      desktop: [
        '“왜?” 라는 질문은 방향을 정하고 속도를 높입니다.',
        '우리는 모든 기획과 실행에서 목적이 명확해야 한다고 믿습니다.',
        '이유가 분명한 결정은 더 좋은 결과로 이어집니다.',
      ],
      mobile: '모든 결정은\n목적에서\n시작됩니다',
    },
    bgImageUrl: bgImage2,
  },
  {
    id: 3,
    title: {
      desktop: 'Own your\nChoice',
      mobile: 'Own your\nChoice',
    },
    summary: {
      desktop: '선택한 일은 끝까지 파고듭니다.',
      mobile: '',
    },
    description: {
      desktop: [
        '모든 문제를 해결할 수는 없습니다.',
        '전략적으로 우선순위를 정하고, 선택한 일은 끝까지 책임집니다.',
        '끊임없이 질문하고 디테일까지 챙기며 끝까지 책임을 다하여 완성합니다.',
      ],
      mobile: '선택한 일은\n끝까지\n파고듭니다',
    },
    bgImageUrl: bgImage3,
  },
  {
    id: 4,
    title: {
      desktop: 'Embrace\nthe Mess',
      mobile: 'Embrace\nthe Mess',
    },
    summary: {
      desktop: '구르면서 배웁니다.',
      mobile: '',
    },
    description: {
      desktop: [
        '유어슈는 완벽보다는 시도를 응원합니다.',
        '넘어짐으로부터 얻는 교훈을 소중히 여깁니다.',
        '우리는 실패를 통해 더 나은 선택을 배워가고,',
        '구르며 배우는 과정을 즐기는 사람들과 함께 성장합니다.',
      ],
      mobile: '구르면서\n배웁니다',
    },
    bgImageUrl: bgImage4,
  },
  {
    id: 5,
    title: {
      desktop: 'Share &\nCreate Together',
      mobile: 'Share\n&Create\nTogether',
    },
    summary: {
      desktop: '투명한 소통으로 시너지를 만듭니다.',
      mobile: '',
    },
    description: {
      desktop: [
        '좋은 협업은 맥락을 나누는 데에서 시작됩니다.',
        '진행 상황의 투명한 공유를 넘어, 피드백을 지속하며 서로의 성장을 돕습니다.',
        '따뜻함과 솔직함 사이의 균형이 유어슈의 대화 방식입니다.',
      ],
      mobile: '투명한\n소통으로\n시너지를\n만듭니다',
    },
    bgImageUrl: bgImage5,
  },
];
