import { useRef } from 'react';
import { NodeType } from '@/types/hook';

export default function DepartmentSearch({
  imgData,
  setSearchText,
}: {
  imgData: NodeType;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}) {
  const Ref = useRef<HTMLInputElement>(null);

  return (
    <div className="flex h-auto w-[1280px] justify-between rounded-[14px] bg-bluegray3-0 px-[32px] py-[17px]">
      <input
        ref={Ref}
        className="font-Pretendard w-[800px] border-none bg-bluegray3-0 text-[24px] font-[600] leading-[28.64px] text-bluegray1-0"
        placeholder="관심있는 분야에 대해 검색해보세요 ex) 인사, 기획, ..."
        onChange={() => {
          setTimeout(() => {
            setSearchText(Ref.current!.value);
          }, 500);
        }}
      />
      <button
        type="button"
        onClick={() => {
          setSearchText(Ref.current!.value);
        }}
      >
        <img className="w-[32px]" src={imgData.publicURL} alt={imgData.name} />
      </button>
    </div>
  );
}
