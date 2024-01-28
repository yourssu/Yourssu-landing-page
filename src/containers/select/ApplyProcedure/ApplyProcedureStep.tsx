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
    <div
      className={`col-span-2 flex w-full flex-col items-center justify-between gap-[40px] ${
        index === 2
          ? 'xs:col-start-1 sm:col-start-1 md:col-start-1 lg:col-start-2'
          : null
      }`}
    >
      <img
        className={`${
          index === 2
            ? 'xs:w-[174px] sm:w-[174px]'
            : 'xs:w-[200px] sm:w-[200px]'
        }`}
        src={data.imgData.publicURL}
        alt={data.imgData.name}
      />
      <div
        className={`flex  ${
          index === 2 ? 'h-[250.19px] xs:h-[157px] sm:h-[157px]' : 'h-auto'
        } flex-col justify-start gap-[12px] rounded-[20px] bg-white-0 p-[32px] xs:w-[323px] sm:w-[323px]`}
      >
        <span className="font-Pretendard text-[32px] font-[600] leading-[38.19px] tracking-[-1%] xs:text-[18px] xs:leading-[21.48px] sm:text-[18px] sm:leading-[21.48px]">
          {index + 1}. {data.description.stepTitle}
        </span>
        <hr className=" w-[340px] border-[2px] border-purple-0 xs:w-[259px] sm:w-[259px]" />
        <p className="font-Pretendard w-[340px] text-[20px] font-[400] leading-[30px] tracking-[-2%] text-gray1-0  xs:w-[259px] xs:text-[16px] xs:leading-[24px] sm:w-[259px] sm:text-[16px] sm:leading-[24px]">
          {data.description.stepDescription}
        </p>
      </div>
    </div>
  );
}
