import { graphql, useStaticQuery } from 'gatsby';
import { SeoData } from '@/types/hook';

export default function useSeoDetail() {
  const data: SeoData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      file(name: { eq: "banner-sm" }) {
        childImageSharp {
          fixed(height: 630, width: 1200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return data;
}
