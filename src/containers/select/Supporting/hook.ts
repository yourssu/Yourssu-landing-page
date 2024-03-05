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
      searchKeyword:
        '인사 운영 채용 경영 사회복지 관리 직원온보딩 성과관리 노사관계 복지 조직문화 직원만족도 인재유치 다양성 포용',
      departmentDescriptionLink: 'hr_manager',
      deplartmentApply: false,
    },
    {
      departmentName: `IOS\nDeveloper`,
      departmentDescription: `백설공주와\n일곱 사과 농부들`,
      searchKeyword: '모바일 개발자 swift mac Xcode apple 애플',
      departmentDescriptionLink: 'ios_developer',
      deplartmentApply: true,
    },
    {
      departmentName: `Android\nDeveloper`,
      departmentDescription: `유저의 사용성을\n위해 고민하는\n녹색 깡통들`,
      searchKeyword: '모바일 개발자 kotlin java 안드로이드스튜디오 Android SDK',
      departmentDescriptionLink: 'android_developer',
      deplartmentApply: false,
    },
    {
      departmentName: `Frontend\nDeveloper`,
      departmentDescription: `상상을 엮어\n하나의 현실을\n만드는 거미들`,
      searchKeyword:
        '개발자 프론트엔드 웹 html css javascript react typescript',
      departmentDescriptionLink: 'frontend_developer',
      deplartmentApply: true,
    },
    {
      departmentName: `Backend\nDeveloper`,
      departmentDescription: `보이지 않는 곳에\n서 묵묵히 일하는\n 조용한 영웅들`,
      searchKeyword: 'java 서버 DB API AWS 서버 최적화 spring 인프라',
      departmentDescriptionLink: 'backend_developer',
      deplartmentApply: false,
    },
    {
      departmentName: `Product\nDesigner`,
      departmentDescription: `경험을 디자인하는\n사람들`,
      searchKeyword:
        '디자인 UI UX 3D 프로토타이핑 인터랙션디자인 Figma 디자인시스템 ',
      departmentDescriptionLink: 'product_designer',
      deplartmentApply: true,
    },
    {
      departmentName: `Contents\nMarketer`,
      departmentDescription: `유어슈의\n얼굴이자 꽃`,
      searchKeyword:
        '마케팅 SNS 뿌슝이 일러스트 광고 모션그래픽 콘텐츠제작 소셜미디어 블로그 브랜딩',
      departmentDescriptionLink: 'contents_marketer',
      deplartmentApply: true,
    },
    {
      departmentName: `Legal\nOfficer`,
      departmentDescription: `권리와 의무\n사이에서\n끊임없는 고민`,
      searchKeyword:
        '법률 법학 계약 법규 지적 재산권 기업 법률 자문 사용자 약관 법조문 개인정보처리방침 소송 관리 정책 연구 규정 해석 규제 준수 내부 규정 기업 윤리 ',
      departmentDescriptionLink: 'legal_officer',
      deplartmentApply: true,
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
