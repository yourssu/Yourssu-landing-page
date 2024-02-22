import { graphql, type GatsbyNode } from 'gatsby';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

interface QueryResult {
  allSanityDepartment: {
    edges: {
      node: {
        basicInformation: {
          name: string;
        };
      };
    }[];
  };
}

const path = require('path');
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;

  const queryAllSanityData = await graphql<QueryResult>(`
    {
      allSanityDepartment(sort: { num: ASC }) {
        edges {
          node {
            basicInformation {
              name
            }
          }
        }
      }
    }
  `);

  if (queryAllSanityData.errors) {
    reporter.panicOnBuild(`Error while running query`);
    return;
  }

  const DescriptionTemplateComponent = path.resolve(
    __dirname,
    'src/templates/DescriptionTemplate.tsx',
  );

  const nameList = queryAllSanityData.data?.allSanityDepartment.edges.map(
    (edge) => edge.node.basicInformation.name,
  );

  const generateDescriptionPage = ({
    node: {
      basicInformation: { name },
    },
  }: {
    node: {
      basicInformation: {
        name: string;
      };
    };
  }) => {
    const pageOptions = {
      path: `recruiting/${name.toLowerCase().replaceAll(' ', '_')}`,
      component: DescriptionTemplateComponent,
      context: { name, nameList },
    };

    createPage(pageOptions);
  };

  queryAllSanityData.data &&
    queryAllSanityData.data.allSanityDepartment.edges.forEach(
      generateDescriptionPage,
    );
};
