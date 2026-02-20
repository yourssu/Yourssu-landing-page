import RecruitSectionLayout from '@/components/Layout/RecruitSectionLayout';
import RecruitTitle from '@/components/Title/RecruitTitle';

import ApplyStepItem from './ApplyStepItem';
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
import { APPLY_DATAS } from './mock';

function ApplyProcess() {
  return (
    <RecruitSectionLayout>
      <RecruitTitle
        title="합류 여정"
        subtitle="유어슈에 지원하면 다음과 같은 과정을 거쳐 선발돼요"
        SVGIconComponent={<ScheduleIcon />}
      />

      <div className="flex w-full gap-5 self-stretch xs:flex-col sm:flex-col md:flex-col">
        {/* 1단계: 서류 전형 */}
        <ApplyStepItem
          data={APPLY_DATAS[0]}
          cardIcon={<ApplyOneIcon />}
          chips={[
            { icon: <DocumentIcon />, title: APPLY_DATAS[0].detailTask[0] },
            { icon: <BriefcaseIcon />, title: APPLY_DATAS[0].detailTask[1] },
          ]}
        />

        {/* 2단계: 면접 전형 */}
        <ApplyStepItem
          data={APPLY_DATAS[1]}
          cardIcon={<ApplyTwoIcon />}
          chips={[
            { icon: <HandshakeIcon />, title: APPLY_DATAS[1].detailTask[0] },
            { icon: <BraceIcon />, title: APPLY_DATAS[1].detailTask[1] },
          ]}
        />

        {/* 3단계: 최종 합류 */}
        <ApplyStepItem
          data={APPLY_DATAS[2]}
          cardIcon={<ApplyThreeIcon />}
          chips={[
            { icon: <CheckCircleIcon />, title: APPLY_DATAS[2].detailTask[0] },
          ]}
        />
      </div>

      <p className="sm:B4_Rg_13 xs:B4_Rg_13 B3_Rg_14 text-text-basicTertiary">
        *세부사항은 지원 분야마다 차이가 있을 수 있어요.
      </p>
    </RecruitSectionLayout>
  );
}

export default ApplyProcess;
