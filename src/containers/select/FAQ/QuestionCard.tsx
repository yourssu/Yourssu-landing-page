import { NodeType } from '@/types/hook';

export default function QuestionCard({
  question,
  smallArrow,
}: {
  question: string;
  smallArrow: NodeType;
}) {
  return (
    <div className="flex w-[1280px] items-center justify-between rounded-[16px] bg-white-0 p-[32px]">
      <div className="flex">
        <span className="font-Pretendard bg-gradient-to-r from-mainGra2-0 to-mainGra1-0 bg-clip-text text-[32px] font-[700] leading-[24px] tracking-[-2%] text-transparent">
          Q
        </span>
        <p className="font-Pretendard pl-[12px] text-[24px] font-[500] leading-[24px] tracking-[-2%] text-gray1-0">
          {question}
        </p>
      </div>
      <img
        className="h-auto w-[12px] -rotate-90"
        src={smallArrow.publicURL}
        alt={smallArrow.name}
      />
    </div>
  );
}
