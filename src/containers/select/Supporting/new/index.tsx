import { Link } from 'gatsby';

import RecruitSectionLayout from '@/components/Layout/RecruitSectionLayout';
import RecruitTitle from '@/components/Title/RecruitTitle';

import { HandsUpPeopleIcon } from './icons';
import { POSITIONS_DATA } from './mock';

function Supporting() {
  return (
    <RecruitSectionLayout>
      <RecruitTitle
        title="지원 분야"
        subtitle="현재 유어슈에 지원할 수 있는 분야들이에요"
        SVGIconComponent={<HandsUpPeopleIcon />}
      />

      <div className="grid grid-cols-3 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
        {POSITIONS_DATA.map(({ title, IconComponent, value }) => (
          <Link
            to={value}
            key={title}
            className="flex items-center justify-between rounded-[0.75rem] border border-[#F1F1F4] p-6"
          >
            <h3 className="whitespace-pre-wrap text-2xl font-semibold text-gray-700">
              {title}
            </h3>
            <IconComponent />
          </Link>
        ))}
      </div>
    </RecruitSectionLayout>
  );
}

export default Supporting;
