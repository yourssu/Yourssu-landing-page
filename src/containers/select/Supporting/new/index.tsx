import { Link } from 'gatsby';

import RecruitSectionLayout from '@/components/Layout/RecruitSectionLayout';
import RecruitTitle from '@/components/Title/RecruitTitle';

import { HandsUpPeopleIcon } from './icons';
import { POSITIONS_DATA } from './mock';

function Supporting() {
  return (
    <RecruitSectionLayout>
      <RecruitTitle
        title="8개의 팀에서 합류를 기다리고 있어요"
        subtitle="완벽하지 않아도 괜찮아요"
        SVGIconComponent={<HandsUpPeopleIcon />}
      />

      <div className="grid grid-cols-3 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
        {POSITIONS_DATA.map(({ title, IconComponent, value, isRecruiting }) =>
          isRecruiting ? (
            <Link
              to={value}
              key={title}
              className="flex items-center justify-between rounded-[0.75rem] border border-line-basicLight p-6 xs:p-5 sm:p-5"
            >
              <h3 className="whitespace-pre-wrap text-2xl font-semibold text-text-basicSecondary">
                {title}
              </h3>
              <IconComponent />
            </Link>
          ) : (
            <div
              key={title}
              className="flex cursor-not-allowed items-center justify-between rounded-[0.75rem] border border-line-basicLight p-6 xs:p-5 sm:p-5"
            >
              <h3 className="whitespace-pre-wrap text-2xl font-semibold text-text-basicDisabled">
                {title}
              </h3>
            </div>
          ),
        )}
      </div>
    </RecruitSectionLayout>
  );
}

export default Supporting;
