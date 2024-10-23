import { graphql, useStaticQuery } from 'gatsby';

import { TeamButtonEdge } from '@/types/hook';

export default function useTeamDetail() {
  const data = useStaticQuery(graphql`
    query {
      allSanityDepartment(sort: { basicInformation: { key: ASC } }) {
        edges {
          node {
            basicInformation {
              name
              sub_name
              _rawIcon
            }
          }
        }
      }
    }
  `);

  const teamsData = data.allSanityDepartment.edges;

  const teams = teamsData.map((team: TeamButtonEdge) => {
    return {
      longName: team.node.basicInformation.name,
      shortName: team.node.basicInformation.sub_name,
      image: team.node.basicInformation._rawIcon.asset._ref,
    };
  });

  return teams;
}
