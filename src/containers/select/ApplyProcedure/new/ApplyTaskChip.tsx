interface ApplyTaskChipProps {
  SVGIconComponent: React.ReactNode;
  chiptitle: string;
}

function ApplyTaskChip({ SVGIconComponent, chiptitle }: ApplyTaskChipProps) {
  return (
    <div className="flex h-14 flex-1 items-center justify-center gap-2 rounded-[0.75rem] bg-[#ECEFFF]">
      <span>{SVGIconComponent}</span>
      <p className="font-pretendard text-base font-normal leading-6 tracking-[-0.02em] text-[#6B5CFF]">
        {chiptitle}
      </p>
    </div>
  );
}

export default ApplyTaskChip;
