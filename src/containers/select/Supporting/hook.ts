import { graphql, useStaticQuery } from 'gatsby';
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { NodeType } from '@/types/hook';
import recruitingSchedule from '@/utils/recruitingSchedule';

interface SupportingData {
  buttonImgData: {
    nodes: NodeType[];
  };
  readingGlasses: {
    nodes: NodeType[];
  };
  errorImgData: {
    nodes: NodeType[];
  };
  scheduleWithAssignmentData: {
    edges: {
      node: {
        formSchedule: {
          start: Date;
          end: Date;
        };
      };
    }[];
  };
  scheduleWithoutAssignmentData: {
    edges: {
      node: {
        formSchedule: {
          start: Date;
          end: Date;
        };
      };
    }[];
  };
  departmentData: {
    edges: {
      node: {
        applyProcedure: {
          scheduleWithoutAssignment: boolean;
          scheduleWithAssignment: boolean;
          individualSchedule: boolean;
          formSchedule: {
            start: Date;
            end: Date;
          } | null;
        };
        basicInformation: {
          name: string;
          short_introduction: string;
          icon: {
            asset: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
        searchKeyword: string;
      };
    }[];
  };
}

export default function useSupportingDetail() {
  const data: SupportingData = useStaticQuery(graphql`
    query {
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
      errorImgData: allFile(filter: { name: { eq: "error_bbussung" } }) {
        nodes {
          publicURL
          name
        }
      }
      scheduleWithAssignmentData: allSanityRecruitingSchedule(
        filter: { title: { regex: "/과제 O$/" } }
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
      scheduleWithoutAssignmentData: allSanityRecruitingSchedule(
        filter: { title: { regex: "/과제 X$/" } }
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
      departmentData: allSanityDepartment(
        sort: { basicInformation: { key: ASC } }
      ) {
        edges {
          node {
            applyProcedure {
              scheduleWithoutAssignment
              scheduleWithAssignment
              individualSchedule
              formSchedule {
                start
                end
              }
            }
            basicInformation {
              name
              short_introduction
              icon {
                asset {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
            searchKeyword
          }
        }
      }
    }
  `);

  const teamData = data.departmentData.edges.map((value) => {
    const {
      individualSchedule,
      scheduleWithAssignment,
      scheduleWithoutAssignment,
    } = value.node.applyProcedure;
    return {
      information: {
        ...value.node.basicInformation,
        icon: getImage(value.node.basicInformation.icon.asset.gatsbyImageData),
      },
      recruitingData: recruitingSchedule({
        recruitingType: {
          individualSchedule,
          scheduleWithAssignment,
          scheduleWithoutAssignment,
        },
        scheduleWithAssignmentData:
          data.scheduleWithAssignmentData.edges[0].node.formSchedule,
        scheduleWithoutAssignmentData:
          data.scheduleWithoutAssignmentData.edges[0].node.formSchedule,
        scheduleIndividualData: value.node.applyProcedure.formSchedule,
      }),
      searchKeyword: value.node.searchKeyword,
    };
  });

  return {
    imgData: {
      buttonImgData: data.buttonImgData.nodes[0],
      readingGlasses: data.readingGlasses.nodes[0],
      errorImgData: data.errorImgData.nodes[0],
    },
    teamData,
  };
}
