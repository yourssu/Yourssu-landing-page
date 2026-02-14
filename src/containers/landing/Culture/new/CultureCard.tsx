import { Tag } from '@/components/Tag/Tag';

export interface CultureCardProps {
  tagName: string;
  title: string;
  description: string;
}

export function CultureCard({ tagName, title, description }: CultureCardProps) {
  return (
    <div className="flex w-[1060px] items-center gap-3 rounded-[16px] border border-[#F1F1F4] bg-[#FFFFFF] px-7 py-6 xs:w-[370px] xs:gap-2 xs:p-5 sm:w-[370px] sm:gap-2 sm:p-5 md:w-[370px]">
      <div className="flex flex-col items-start gap-7 self-stretch xs:gap-[17px] sm:gap-[17px]">
        <div className="flex flex-col items-start gap-[10px] self-stretch xs:gap-2 sm:gap-2">
          <Tag name={tagName} />
          <span className="T3_Sb_20 sm:B1_Sb_16 xs:B1_Sb_16 self-stretch text-text-basicSecondary">
            {title}
          </span>
        </div>
        <span className="B1_Rg_16 sm:B3_Rg_14 xs:B3_Rg_14 self-stretch whitespace-pre-line text-text-basicTertiary">
          {description}
        </span>
      </div>
    </div>
  );
}
