import InfoCard from '@/components/Card/InfoCard';
import RecruitSectionLayout from '@/components/Layout/RecruitSectionLayout';
import RecruitTitle from '@/components/Title/RecruitTitle';

import ApplyTaskChip from './ApplyTaskChip';
import {
  ApplyOneIcon,
  ApplyThreeIcon,
  ApplyTwoIcon,
  BraceIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  DocumentIcon,
  HandshakeIcon,
  ScheduleIcon,
} from './icons';
import { APPLY_DATAS, ApplyProcessDataType } from './mock';

function ApplyProcess() {
  return (
    <RecruitSectionLayout>
      <RecruitTitle
        title="합류 여정"
        subtitle="유어슈에 지원하면 다음과 같은 과정을 거쳐 선발돼요"
        SVGIconComponent={<ScheduleIcon />}
      />

      <div className="flex w-full items-center justify-center gap-5 xs:flex-col sm:flex-col md:flex-col">
        <div>
          <div className="mb-3 flex w-[24.25rem] items-center justify-center gap-3 xs:w-[22.5rem] sm:w-[22.5rem] md:w-[22.5rem]">
            <ApplyTaskChip
              SVGIconComponent={<DocumentIcon />}
              chiptitle={APPLY_DATAS[0].detailTask[0]}
            />
            <ApplyTaskChip
              SVGIconComponent={<BriefcaseIcon />}
              chiptitle={APPLY_DATAS[0].detailTask[1]}
            />
          </div>

          <InfoCard<ApplyProcessDataType>
            SVGIconComponent={<ApplyOneIcon />}
            idealData={APPLY_DATAS[0]}
            className="h-[10rem]"
          />
        </div>

        <div>
          <div className="mb-3 flex w-[24.25rem] items-center justify-center gap-3 xs:w-[22.5rem] sm:w-[22.5rem] md:w-[22.5rem]">
            <ApplyTaskChip
              SVGIconComponent={<HandshakeIcon />}
              chiptitle={APPLY_DATAS[1].detailTask[0]}
            />
            <ApplyTaskChip
              SVGIconComponent={<BraceIcon />}
              chiptitle={APPLY_DATAS[1].detailTask[1]}
            />
          </div>

          <InfoCard<ApplyProcessDataType>
            SVGIconComponent={<ApplyTwoIcon />}
            idealData={APPLY_DATAS[1]}
            className="h-[10rem]"
          />
        </div>

        <div>
          <div className="mb-3 flex w-[24.25rem] items-center justify-center gap-3 xs:w-[22.5rem] sm:w-[22.5rem] md:w-[22.5rem]">
            <ApplyTaskChip
              SVGIconComponent={<CheckCircleIcon />}
              chiptitle={APPLY_DATAS[2].detailTask[0]}
            />
          </div>

          <InfoCard<ApplyProcessDataType>
            SVGIconComponent={<ApplyThreeIcon />}
            idealData={APPLY_DATAS[2]}
            className="h-[10rem]"
          />
        </div>
      </div>

      <p className="text-sm font-normal leading-5 tracking-[-0.02em] text-[#6E7687]">
        *세부사항은 지원 분야마다 차이가 있을 수 있어요.
      </p>
    </RecruitSectionLayout>
  );
}

export default ApplyProcess;
