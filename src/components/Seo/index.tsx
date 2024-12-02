import useSeoDetail from '@/components/Seo/hook';

function Seo() {
  const { site, file } = useSeoDetail();
  const srcSet = file?.images?.fallback?.srcSet || '';

  return (
    <>
      <html lang="ko" />
      <title>{site.title}</title>
      <meta name="description" content={site.description} />
      <meta property="og:title" content={site.title} />
      <meta property="og:description" content={site.description} />
      <meta property="og:image" content={srcSet} />
      <meta property="og:type" content="website" />
    </>
  );
}

export default Seo;
