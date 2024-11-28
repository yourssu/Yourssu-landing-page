import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

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
              icon {
                asset {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                }
              }
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
      image: getImage(team.node.basicInformation.icon.asset.gatsbyImageData),
    };
  });

  return teams;
}
