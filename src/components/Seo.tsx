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
    </>
  );
}

export default Seo;
