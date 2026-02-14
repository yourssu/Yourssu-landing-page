import RecruitmentBanner from './RecruitBanner';
import { RECRUIT_DATA } from './mock';

function ToRecruit() {
  return (
    <section className="-mx-5 w-[calc(100%+40px)] xs:pb-10 sm:pb-10">
      <RecruitmentBanner
        imageUrl={RECRUIT_DATA.imageUrl}
        recruitTitle={RECRUIT_DATA.recruitTitle}
        buttonText={RECRUIT_DATA.buttonText}
      />
    </section>
  );
}

export default ToRecruit;
