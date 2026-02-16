import recruitBannerImage from 'src/assets/images/recruit/banner/recruit-top-banner-2026-1.png';

function RecruitBanner() {
  return (
    <section className="w-screen">
      <div
        className="flex h-[102px] w-full flex-col items-center justify-center gap-1 self-stretch bg-cover bg-center bg-no-repeat px-5"
        style={{ backgroundImage: `url(${recruitBannerImage})` }}
      >
        <span className="T3_Sb_20 sm:T1_Sb_20 xs:T1_Sb_20 text-center text-text-basicWhite">
          26-1 유어슈 정기 리크루팅
        </span>
        <span className="B3_Rg_14 sm:B3_Rg_14 xs:B3_Rg_14 text-center text-text-basicWhite">
          새로운 도전을 재미로 바꾸는 사람들과 함께하고 싶다면?
        </span>
      </div>
    </section>
  );
}

export default RecruitBanner;
