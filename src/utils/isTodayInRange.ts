export default function isTodayInRange({
  start,
  end,
}: {
  start: string;
  end: string;
}) {
  const startDate = new Date(start);
  startDate.setHours(0, 0, 0, 0);

  const endDate = new Date(end);
  endDate.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return startDate <= today && today <= endDate;
}
