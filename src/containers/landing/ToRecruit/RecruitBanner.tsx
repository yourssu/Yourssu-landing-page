import { Link } from 'gatsby';

interface RecruitmentBannerProps {
  imageUrl: string;
  recruitTitle: string;
}

function RecruitmentBanner({ imageUrl, recruitTitle }: RecruitmentBannerProps) {
  return (
    <div
      className="relative flex h-96 w-full flex-col items-center justify-end gap-9 bg-cover bg-center py-32"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div
        className="absolute inset-0 bg-black-0 bg-opacity-50"
        aria-hidden="true"
      />

      <h2 className="relative text-center text-4xl font-semibold leading-[52px] text-white-0 sm:text-xl sm:leading-8 md:text-2xl md:leading-9 lg:text-3xl lg:leading-10">
        {recruitTitle}
      </h2>

      <Link
        to="/recruiting"
        className="relative flex items-center justify-center rounded-[1rem] bg-[#6B5CFF] px-5 py-3.5 text-base font-semibold leading-normal text-white-0 transition-colors"
      >
        지원하러 가기
      </Link>
    </div>
  );
}

export default RecruitmentBanner;
