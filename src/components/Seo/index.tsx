import useSeoDetail from '@/components/Seo/hook';

function Seo() {
  const { site, file } = useSeoDetail();
  return (
    <>
      <html lang="ko" />
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
      <meta property="og:title" content={site.siteMetadata.title} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta property="og:image" content={file.childImageSharp.fixed.srcSet} />
      <meta property="og:type" content="website" />
    </>
  );
}

export default Seo;
