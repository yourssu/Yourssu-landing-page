import { GrowthAndDiffInformation } from '@/types/recruiting.type';

interface GrowthAndDiffProps {
  growthAndDiff: GrowthAndDiffInformation;
}

function GrowthAndDiff({ growthAndDiff }: GrowthAndDiffProps) {
  const { title, content } = growthAndDiff;

  // 콘텐츠가 없다면, 이 섹션을 보여주지 않을게요.
  if (!content) return null;

  return (
    <section className="inline-flex flex-col items-start justify-start gap-6 self-stretch rounded-[12px] p-6 outline outline-1 outline-offset-[-1px] outline-[#F1F1F4]">
      <div className="T3_Sb_20">{title}</div>
      <div className="B1_Rg_16">
        <dl>
          {content
            .trim()
            .split('-')
            .filter((item) => item.trim().length > 0)
            .map((item) => (
              <li key={item}>{item.trim()}</li>
            ))}
        </dl>
      </div>
    </section>
  );
}

export default GrowthAndDiff;
