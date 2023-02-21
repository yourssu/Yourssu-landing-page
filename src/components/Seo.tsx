import useSeoDetail from '@/hooks/components/seo/hook';

function Seo() {
  const { site } = useSeoDetail();
  return (
    <>
      <html lang="ko" />
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
      <meta property="og:title" content={site.siteMetadata.title} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
    </>
  );
}

export default Seo;
