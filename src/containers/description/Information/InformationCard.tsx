import { DefaultContentInformation } from '@/types/recruiting.type';

interface InformationCardProps {
  data: DefaultContentInformation;
}

function InformationCard({ data }: InformationCardProps) {
  // 0. 데이터가 없다면, 해당 섹션을 보여주지 않음
  if (!data?.content || data.content.length === 0) return null;

  // 1. 데이터를 소제목 기준으로 그룹화
  const groups: { title?: string; items: string[] }[] = [];

  data.content.forEach((content) => {
    const isHeader = content.startsWith('[') && content.endsWith(']');

    if (isHeader) {
      // 새로운 소제목을 만나면 새로운 그룹 생성
      groups.push({
        title: content.substring(1, content.length - 1),
        items: [],
      });
    } else {
      // 일반 항목이면 가장 최근 그룹의 items에 추가 (그룹이 없으면 기본 그룹 생성)
      if (groups.length === 0) groups.push({ items: [] });
      groups[groups.length - 1].items.push(content);
    }
  });

  return (
    <section className="flex flex-col items-start gap-6 self-stretch rounded-[12px] border border-line-basicLight p-6 xs:p-5 sm:p-5">
      <div className="T3_Sb_20 sm:T2_Sb_18 xs:T2_Sb_18 text-text-basicPrimary">
        {data.title}
      </div>

      {/* 2. 그룹별로 렌더링 */}
      <div className="flex flex-col items-start gap-3 self-stretch">
        {/* 각 그룹 간의 간격 */}
        {groups.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className="flex flex-col items-start gap-1 self-stretch"
          >
            {/* 소제목이 있는 경우에만 렌더링 */}
            {group.title && (
              <div className="T4_Sb_18 sm:B1_Sb_16 xs:B1_Sb_16 text-text-basicSecondary">
                {group.title}
              </div>
            )}

            {/* 해당 소제목에 속하는 리스트 항목들 */}
            <ul className="B1_Rg_16 list-outside list-disc whitespace-pre-wrap pl-7 text-text-basicSecondary xs:pl-6 sm:pl-5 md:pl-5">
              {group.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  {item.split('\\n').map((line, lineIdx) => (
                    <div key={lineIdx}>{line}</div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InformationCard;
