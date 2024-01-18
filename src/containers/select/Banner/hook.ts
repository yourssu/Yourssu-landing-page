import { graphql, useStaticQuery } from 'gatsby';
import { NodeType } from '@/types/hook';

interface BannerData {
  bannerImgData: {
    nodes: NodeType[];
  };
}

export default function useBannerDetail() {
  const imgData: BannerData = useStaticQuery(graphql`
    query {
      bannerImgData: allFile(filter: { name: { eq: "content-marketing" } }) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);

  const bannerDescription = {
    recruitingDate: {
      year: 24,
      month: [4, 4],
      day: [1, 20],
    },
    title: '당신의 손으로 바꿔나갈, 당신의 숭실',
  };
  return { imgData, bannerDescription };
}
