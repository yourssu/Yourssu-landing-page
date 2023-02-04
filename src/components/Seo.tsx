import { useStaticQuery, graphql } from 'gatsby';

type SeoDataProp = {
  title: string;
};

function Seo({ title }: SeoDataProp) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <title>
      {data.site.siteMetadata.title} | {title}
    </title>
  );
}

export default Seo;
