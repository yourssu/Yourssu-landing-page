interface RecruitingSchedule {
  recruitingType: {
    individualSchedule: boolean;
    scheduleWithAssignment: boolean;
    scheduleWithoutAssignment: boolean;
  };
  scheduleWithAssignmentData: { start: Date; end: Date } | null;
  scheduleWithoutAssignmentData: { start: Date; end: Date } | null;
  scheduleIndividualData: { start: Date; end: Date } | null;
}

export default function recruitingSchedule({
  recruitingType,
  scheduleWithAssignmentData,
  scheduleWithoutAssignmentData,
  scheduleIndividualData,
}: RecruitingSchedule) {
  if (recruitingType.individualSchedule) {
    return {
      type: 'individual',
      formSchedule: {
        start: scheduleIndividualData?.start!,
        end: scheduleIndividualData?.end!,
      },
    };
  }

  if (recruitingType.scheduleWithAssignment) {
    return {
      type: 'withAssignment',
      formSchedule: {
        start: scheduleWithAssignmentData?.start!,
        end: scheduleWithAssignmentData?.end!,
      },
    };
  }

  if (recruitingType.scheduleWithoutAssignment) {
    return {
      type: 'withoutAssignment',
      formSchedule: {
        start: scheduleWithoutAssignmentData?.start!,
        end: scheduleWithoutAssignmentData?.end!,
      },
    };
  }

  return null;
}
