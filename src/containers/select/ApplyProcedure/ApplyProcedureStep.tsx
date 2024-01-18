import { NodeType } from '@/types/hook';

export default function ApplyProcedureStep({
  data,
  index,
}: {
  data: {
    imgData: NodeType;
    description: {
      stepTitle: string;
      stepDescription: string;
    };
  };
  index: number;
}) {
  return (
    <div className="flex w-[404px] flex-col items-center gap-[40px]">
      <img src={data.imgData.publicURL} alt={data.imgData.name} />
      <div className=" flex flex-col justify-start gap-[12px] rounded-[20px] bg-white-0 p-[32px]">
        <span className="font-Pretendard text-[32px] font-[600] leading-[38.19px] tracking-[-1%]">
          {index + 1}. {data.description.stepTitle}
        </span>
        <hr className=" w-[340px] border-[2px] border-purple-0" />
        <p className="font-Pretendard w-[340px] text-[20px] font-[400] leading-[30px] tracking-[-2%] text-gray1-0">
          {data.description.stepDescription}
        </p>
      </div>
    </div>
  );
}
