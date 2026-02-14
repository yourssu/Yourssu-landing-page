import RecruitmentBanner from './RecruitBanner';
import { RECRUIT_DATA } from './mock';

function ToRecruit() {
  return (
    <section>
      <RecruitmentBanner
        imageUrl={RECRUIT_DATA.imageUrl}
        recruitTitle={RECRUIT_DATA.recruitTitle}
      />
    </section>
  );
}

export default ToRecruit;
