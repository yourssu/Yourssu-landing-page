import { Tag } from '@/components/Tag/Tag';

export interface CultureCardProps {
  tagName: string;
  title: string;
  description: string;
}

export function CultureCard({ tagName, title, description }: CultureCardProps) {
  return (
    <div className="flex w-[1060px] items-center gap-[12px] rounded-[16px] border border-[#F1F1F4] bg-[#FFFFFF] px-[28px] py-[24px] xs:w-[343px] sm:w-[343px] md:w-[343px]">
      <div className="flex flex-col items-start gap-[28px] self-stretch">
        <div className="flex flex-col items-start gap-[10px] self-stretch">
          <Tag name={tagName} />
          <span className="T3_Sb_20 self-stretch text-text-basicSecondary">
            {title}
          </span>
        </div>
        <span className="B1_Rg_16 self-stretch whitespace-pre-line text-text-basicTertiary">
          {description}
        </span>
      </div>
    </div>
  );
}
