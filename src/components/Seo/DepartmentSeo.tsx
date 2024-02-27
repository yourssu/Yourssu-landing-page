import useSeoDetail from '@/components/Seo/hook';
import extractImageUrl from '@/utils/extractImageUrl';

interface DepartmentSeoProps {
  image: string;
}

function DepartmentSeo({ image }: DepartmentSeoProps) {
  const { site } = useSeoDetail();
  return (
    <>
      <html lang="ko" />
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
      <meta property="og:title" content={site.siteMetadata.title} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta property="og:image" content={extractImageUrl(image)} />
      <meta property="og:type" content="website" />
    </>
  );
}

export default DepartmentSeo;
