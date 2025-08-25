import InfoCard from '@/components/Card/InfoCard';
import RecruitSectionLayout from '@/components/Layout/RecruitSectionLayout';
import RecruitTitle from '@/components/Title/RecruitTitle';

import { IdealProfileIcon } from './icons';
import { HandIcon } from './icons';
import { IdealHeartIcon } from './icons';
import { TrophyIcon } from './icons';
import { IDEAL_DATAS, IdealDataType } from './mock';

function Ideal() {
  return (
    <RecruitSectionLayout>
      <RecruitTitle
        title="이런 사람을 지향해요"
        subtitle="새로운 도전을 재미로 바꾸는 우리들"
        SVGIconComponent={<IdealProfileIcon />}
      />

      <div className="flex w-full items-center justify-center gap-5 xs:flex-col sm:flex-col md:flex-col">
        <InfoCard<IdealDataType>
          idealData={IDEAL_DATAS[0]}
          SVGIconComponent={<HandIcon />}
        />
        <InfoCard<IdealDataType>
          idealData={IDEAL_DATAS[1]}
          SVGIconComponent={<IdealHeartIcon />}
        />
        <InfoCard<IdealDataType>
          idealData={IDEAL_DATAS[2]}
          SVGIconComponent={<TrophyIcon />}
        />
      </div>
    </RecruitSectionLayout>
  );
}

export default Ideal;
