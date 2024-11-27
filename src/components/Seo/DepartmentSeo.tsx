import useSeoDetail from '@/components/Seo/hook';
import extractImageUrl from '@/utils/extractImageUrl';

interface DepartmentSeoProps {
  title: string;
  description: string;
  image: string;
}

function DepartmentSeo({ title, description, image }: DepartmentSeoProps) {
  const { site } = useSeoDetail();
  const imageUrl = extractImageUrl(image);

  return (
    <>
      <html lang="ko" />
      <title>{site.title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
    </>
  );
}

export default DepartmentSeo;
