interface ApplyTaskChipProps {
  SVGIconComponent: React.ReactNode;
  chipTitle: string;
}

function ApplyTaskChip({ SVGIconComponent, chipTitle }: ApplyTaskChipProps) {
  return (
    <div className="flex w-full items-center justify-center gap-2 rounded-[0.75rem] bg-bg-brandSecondary px-5 py-4 xs:px-4 sm:px-4 md:px-4">
      <span>{SVGIconComponent}</span>
      <p className="B1_Rg_16 xs:B4_Rg_13 sm:B4_Rg_13 md:B4_Rg_13 break-words break-keep text-text-brandPrimary">
        {chipTitle}
      </p>
    </div>
  );
}

export default ApplyTaskChip;
