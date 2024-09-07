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
      month: [9, 9],
      day: [2, 8],
    },
    title: [
      '당신의 손으로 바꿔나갈, 당신의 숭실',
      '당신의 손으로 바꿔나갈,\n 당신의 숭실',
    ],
  };
  return { imgData, bannerDescription };
}
