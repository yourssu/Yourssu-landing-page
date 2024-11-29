export default function isTodayInRange({
  start,
  end,
}: {
  start: Date | null;
  end: Date | null;
}) {
  // start와 end가 모두 null이면 false 반환
  if (!start && !end) {
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // start가 null이면 end와 비교
  if (!start) {
    const endDate = new Date(end!);
    endDate.setHours(0, 0, 0, 0);
    return today <= endDate;
  }

  // end가 null이면 start와 비교
  if (!end) {
    const startDate = new Date(start);
    startDate.setHours(0, 0, 0, 0);
    return startDate <= today;
  }

  // start와 end가 모두 있는 경우
  const startDate = new Date(start);
  startDate.setHours(0, 0, 0, 0);

  const endDate = new Date(end);
  endDate.setHours(0, 0, 0, 0);

  return startDate <= today && today <= endDate;
}
