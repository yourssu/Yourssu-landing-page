import { DATASET, PROJECT_ID } from '@/constants/sanity';
import { GatsbyConfig } from 'gatsby';

const path = require('path');
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules',
);

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'YOURSSU',
    description:
      '숭실대 학우들이 캠퍼스 라이프를 자유롭게 즐기는 모습을 꿈꾸다! 유어슈 동아리원들의 활동성을 원동력으로 숭실대 학우들에게 활동성을 발휘할 공간을 제공합니다.',
    siteUrl: 'https://yourssu.com',
  },
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp', // Needed for dynamic images
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be omitted or customized
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
        // Any additional eslint-webpack-plugin options below
        // ...
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'yourssu',
        short_name: 'yourssu',
        start_url: '/',
        icon: 'src/assets/logo/logo.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: '/assets/', // See below to configure properly
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        // The unique name for each instance
        name: 'logo',
        // Path to the directory
        path: `${__dirname}/src/assets/logo`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        // The unique name for each instance
        name: 'social',
        // Path to the directory
        path: `${__dirname}/src/assets/social/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        // The unique name for each instance
        name: 'projects',
        // Path to the directory
        path: `${__dirname}/src/assets/projects`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        // The unique name for each instance
        name: 'image',
        // Path to the directory
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        // The unique name for each instance
        name: 'teams',
        // Path to the directory
        path: `${__dirname}/src/assets/icons/teams`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        // The unique name for each instance
        name: 'hovers',
        // Path to the directory
        path: `${__dirname}/src/assets/icons/hovers`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'icons',
        path: `${__dirname}/src/assets/icons/`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        /* projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET, */
        projectId: 'xsbgojh6',
        dataset: 'production',
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
  jsxRuntime: 'automatic',
};

export default config;
