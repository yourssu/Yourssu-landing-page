import { navigate } from 'gatsby';

import { BasicInformation } from '@/types/recruiting.type';

import { ArrowForwardIcon } from './ArrowForwardIcon';

function TeamHeader({
  name,
  basicInformation,
}: {
  name: string;
  basicInformation: BasicInformation;
}) {
  const introduction = basicInformation.short_introduction.replaceAll(
    /\\n/g,
    '',
  );

  return (
    <section
      className="flex flex-col items-center justify-center gap-8 self-stretch bg-bg-basicDefault 
      px-[120px] pb-5 pt-40 xs:pb-5 xs:pl-0 xs:pr-[120px] xs:pt-20 sm:pb-5 sm:pl-0 sm:pr-[120px] sm:pt-20"
    >
      <div className="flex flex-col items-start gap-8 self-stretch">
        <div
          className="flex h-11 w-11 items-center justify-center gap-[0.63rem] rounded-[1.875rem] border border-line-basicLight bg-bg-basicLight"
          onClick={() => navigate('/recruiting')}
        >
          <ArrowForwardIcon />
        </div>
        <div className="flex flex-col items-start gap-3 self-stretch xs:gap-2 sm:gap-2">
          <p className="T2_Rg_24 sm:T1_Rg_20 xs:T1_Rg_20 self-stretch text-text-basicSecondary">
            {introduction}
          </p>
          <p className="H2_Sb_40 sm:H2_Sb_28 xs:H2_Sb_28 self-stretch text-text-basicPrimary">
            {name}
          </p>
        </div>
      </div>
    </section>
  );
}

export default TeamHeader;
