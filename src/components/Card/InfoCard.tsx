type DefaultDataType = {
  title: string;
  description: string;
};

interface IdealCardProps<T extends DefaultDataType> {
  SVGIconComponent: React.ReactNode;
  idealData: T;
  className?: string;
}

function InfoCard<T extends DefaultDataType>({
  SVGIconComponent,
  idealData,
  className = 'h-[8.5rem]',
}: IdealCardProps<T>) {
  return (
    <div
      className={`flex w-[24.25rem] flex-col gap-3 rounded-[0.75rem] border border-[#F1F1F4] p-6 font-pretendard
            xs:h-[10rem] xs:w-[22.5rem] sm:h-[10rem] sm:w-[22.5rem] md:h-[10rem] md:w-[22.5rem]
            ${className}
        `}
    >
      <div className="flex items-center gap-1.5">
        <div className="h-6 w-6">{SVGIconComponent}</div>
        <h4 className="text-xl font-semibold leading-7 tracking-[-0.02em] text-[#4B505D]">
          {idealData.title}
        </h4>
      </div>
      <p className="whitespace-pre-line text-base font-normal leading-7 tracking-[-0.02em] text-[#6E7687]">
        {idealData.description}
      </p>
    </div>
  );
}

export default InfoCard;
