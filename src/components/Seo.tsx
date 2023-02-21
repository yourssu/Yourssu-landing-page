import useSeoDetail from '@/hooks/components/seo/hook';

type SeoDataProp = {
  title: string;
};

function Seo({ title }: SeoDataProp) {
  const { site } = useSeoDetail();
  return (
    <>
      <html lang="ko" />
      <title>
        {site.siteMetadata.title} | {title}
      </title>
      <meta
        name="image"
        content={`${site.siteMetadata.siteUrl}${site.siteMetadata.image}`}
      />
      <meta name="description" content={site.siteMetadata.description} />
      <meta property="og:title" content={site.siteMetadata.title} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <link
        rel="icon"
        href="data:image/svg+xml, <svg xmlns='http://www.w3.org/2000/svg' width='42' height='19' viewBox='0 0 42 19' fill='none' </svg>"
      />
    </>
  );
}

export default Seo;
