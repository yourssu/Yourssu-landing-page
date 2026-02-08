interface TagProps {
  name: string;
}
export function Tag({ name }: TagProps) {
  return (
    <div className="inline-flex min-h-[26px] min-w-[41px] items-center justify-center gap-[10px] rounded-[8px] bg-button-filledSecondaryEnabled px-[10px] py-[4px]">
      <p className="C1_Rg_13 text-text-brandPrimary">{name}</p>
    </div>
  );
}
