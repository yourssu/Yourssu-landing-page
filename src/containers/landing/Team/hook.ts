import { graphql, useStaticQuery } from 'gatsby';

import { TeamButtonEdge } from '@/types/hook';

export default function useTeamDetail() {
  // TODO: sort 기준을 key로 변경
  // TODO: sub_name도 가져오도록 변경
  const data = useStaticQuery(graphql`
    query {
      allSanityDepartment(sort: { basicInformation: { name: ASC } }) {
        edges {
          node {
            basicInformation {
              name
              _rawIcon
            }
          }
        }
      }
    }
  `);

  const teamsData = data.allSanityDepartment.edges;

  const teams = teamsData.map((team: TeamButtonEdge) => {
    // TODO: sub_name을 shortName으로 받아오도록
    return {
      longName: team.node.basicInformation.name,
      image: team.node.basicInformation._rawIcon.asset._ref,
    };
  });

  return teams;
}
