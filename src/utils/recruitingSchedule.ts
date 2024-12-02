interface RecruitingSchedule {
  recruitingType: {
    individualSchedule: boolean;
    scheduleWithAssignment: boolean;
    scheduleWithoutAssignment: boolean;
  };
  scheduleWithAssignmentData: { start: Date | null; end: Date | null } | null;
  scheduleWithoutAssignmentData: {
    start: Date | null;
    end: Date | null;
  } | null;
  scheduleIndividualData: { start: Date | null; end: Date | null } | null;
}

interface ScheduleResult {
  type: 'individual' | 'withAssignment' | 'withoutAssignment' | 'none';
  formSchedule: { start: Date | null; end: Date | null } | null;
}

export default function recruitingSchedule({
  recruitingType,
  scheduleWithAssignmentData,
  scheduleWithoutAssignmentData,
  scheduleIndividualData,
}: RecruitingSchedule): ScheduleResult | null {
  if (recruitingType.individualSchedule) {
    return {
      type: 'individual',
      formSchedule: {
        start: scheduleIndividualData?.start || null,
        end: scheduleIndividualData?.end || null,
      },
    };
  }

  if (recruitingType.scheduleWithAssignment) {
    return {
      type: 'withAssignment',
      formSchedule: {
        start: scheduleWithAssignmentData?.start || null,
        end: scheduleWithAssignmentData?.end || null,
      },
    };
  }

  if (recruitingType.scheduleWithoutAssignment) {
    return {
      type: 'withoutAssignment',
      formSchedule: {
        start: scheduleWithoutAssignmentData?.start || null,
        end: scheduleWithoutAssignmentData?.end || null,
      },
    };
  }

  return null;
}
