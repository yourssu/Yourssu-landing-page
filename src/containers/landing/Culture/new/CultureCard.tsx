import { Tag } from '@/components/Tag/Tag';

export interface CultureCardProps {
  tagName: string;
  title: string;
  description: string;
}

export function CultureCard({ tagName, title, description }: CultureCardProps) {
  return (
    <div className="flex w-[1060px] items-center gap-[12px] rounded-[16px] border border-[#F1F1F4] bg-[#FFFFFF] px-[28px] py-[24px]">
      <div className="flex flex-col items-start gap-[28px] self-stretch">
        <div className="flex flex-col items-start gap-[10px] self-stretch">
          <Tag name={tagName} />
          <span className="self-stretch font-pretendard text-[20px] font-semibold leading-[28px] tracking-[-0.4px] text-text-basicSecondary">
            {title}
          </span>
        </div>
        <span className="self-stretch whitespace-pre-line font-pretendard text-[16px] leading-[24px] tracking-[-0.32px] text-text-basicTertiary">
          {description}
        </span>
      </div>
    </div>
  );
}
