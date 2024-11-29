export default function formatDate({
  start,
  end,
}: {
  start: string;
  end: string;
}) {
  const [startYear, startMonth, startDay] = start.split('-');
  const [, endMonth, endDay] = end.split('-');

  return `${startYear}.${startMonth}.${startDay}-${endMonth}.${endDay}`;
}
