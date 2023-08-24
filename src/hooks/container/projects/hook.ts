import { graphql, useStaticQuery } from 'gatsby';

interface Node {
  publicURL: string;
  name: string;
}

type Node2 = {
  childImageSharp: {
    fluid: {
      aspectRatio: number;
      sizes: string;
      base64: string;
      src: string;
      srcSet: string;
    };
  };
};

type Carousel = {
  carouselItemButtonImgData: {
    nodes: Node[];
  };
  carouselItemLinkImgData: {
    nodes: Node[];
  };
  carouselItemListImgData: {
    nodes: Node[];
  };
  projectImgData: {
    nodes: Node2[];
  };
  backgroundImgData: {
    nodes: Node[];
  };
};

export default function useCarouselDetail() {
  const data: Carousel = useStaticQuery(graphql`
    query {
      carouselItemButtonImgData: allFile(
        filter: {
          sourceInstanceName: { eq: "projects" }
          name: { regex: "/button/" }
        }
      ) {
        nodes {
          publicURL
          name
        }
      }
      carouselItemLinkImgData: allFile(
        filter: {
          sourceInstanceName: { eq: "projects" }
          name: { eq: "project-link" }
        }
      ) {
        nodes {
          publicURL
          name
        }
      }
      carouselItemListImgData: allFile(
        filter: {
          sourceInstanceName: { eq: "projects" }
          name: { eq: "project-list" }
        }
      ) {
        nodes {
          publicURL
          name
        }
      }
      projectImgData: allFile(
        filter: { dir: { regex: "/images/projects/" } }
        sort: { name: ASC }
      ) {
        nodes {
          childImageSharp {
            fluid(pngQuality: 90, maxWidth: 750) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
      backgroundImgData: allFile(filter: { name: { eq: "gradient" } }) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);
  const projectData = [
    {
      title: '숨쉴때 커뮤니티',
      description:
        '숭실대 학생들의 소통공간을 만드는 프로젝트로, 현재 다양한 기능 개발을 진행하고 있어요.',
      list: [
        '숭실대 학생들의 클린한 커뮤니티',
        '이모지로 게시물 리액션',
        '댓글과 게시물로 소통',
      ],
      link: [
        'https://play.google.com/store/apps/details?id=com.yourssu.soomsil',
        'https://apps.apple.com/kr/app/%EC%88%A8%EC%89%B4%EB%95%8C/id1626690112',
      ],
    },
    {
      title: '숨쉴때 성적표',
      description:
        '성적표를 확인하기 번거로웠던 기존의 불편함을 해결한 숨쉴때 성적표 어플리케이션이에요.',
      list: [
        '편하게 보는 이번 학기 성적표',
        '깔끔하게 캡쳐해서 쉽고 빠르게 공유',
      ],
      link: [
        'https://apps.apple.com/kr/app/%EC%88%A8%EC%89%B4%EB%95%8C-%EC%84%B1%EC%A0%81%ED%91%9C/id1601044486',
      ],
    },
    {
      title: '숨쉴때 뭐먹지?',
      description:
        '어디서, 무엇을 먹을지 고민인 숭실대생을 위해 숭실대 근처 음식점을 추천해주는 웹페이지예요',
      list: [
        '숭실대 근처 음식점 추천',
        '먹고 싶지 않은 음식 제외 기능',
        '숭실대로부터 떨어진 거리 노출',
      ],
      link: ['https://eat.soomsil.de/'],
    },
    {
      title: '점뿌',
      description:
        '유어슈 뿌슝이 캐릭터를 활용해 만든 프로젝트로 F는 점프하고 A+을 획득하는 게임이에요.',
      list: [
        'F는 피하고 A+은 먹는 점뿌 게임',
        '게임점수 공유하여 친구들과 경쟁',
      ],
      link: ['https://jumppu.yourssu.com/'],
    },
    {
      title: '숨쉴위키',
      description:
        '숭실대만의 정보를 기록 및 공유하는 정보 아카이브 웹페이지예요',
      list: ['숭실대 필수정보부터 TMI까지', '모두가 공평하게 접근 및 편집'],
      link: ['https://wiki.soomsil.de/wiki/%EB%8C%80%EB%AC%B8'],
    },
  ];
  return { data, projectData };
}
