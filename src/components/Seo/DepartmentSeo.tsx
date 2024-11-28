import { getSrc, IGatsbyImageData } from 'gatsby-plugin-image';

import useSeoDetail from '@/components/Seo/hook';

interface DepartmentSeoProps {
  title: string;
  description: string;
  image: IGatsbyImageData;
}

function DepartmentSeo({ title, description, image }: DepartmentSeoProps) {
  const { site } = useSeoDetail();
  const imageUrl = getSrc(image) || '';

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
