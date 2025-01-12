import { graphql, useStaticQuery } from 'gatsby';

import { NodeType } from '@/types/hook';

interface BannerData {
  bannerImgData: {
    nodes: NodeType[];
  };
  recruitingSchedule: {
    edges: {
      node: {
        formSchedule: {
          end: string;
          start: string;
        };
      };
    }[];
  };
}

export default function useBannerDetail() {
  const data: BannerData = useStaticQuery(graphql`
    query {
      bannerImgData: allFile(filter: { name: { eq: "content-marketing" } }) {
        nodes {
          publicURL
          name
        }
      }
      recruitingSchedule: allSanityRecruitingSchedule(
        filter: { title: { regex: "/과제 X/" } }
      ) {
        edges {
          node {
            formSchedule {
              start
              end
            }
          }
        }
      }
    }
  `);

  return {
    imgData: data.bannerImgData.nodes[0],
    periodData: data.recruitingSchedule.edges[0].node,
  };
}
