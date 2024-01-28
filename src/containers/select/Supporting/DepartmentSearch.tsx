import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NodeType } from '@/types/hook';

export default function DepartmentSearch({
  imgData,
  setSearchText,
}: {
  imgData: NodeType;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}) {
  const Ref = useRef<HTMLInputElement>(null);
  const windowSize = useMediaQuery({
    query: `(min-width: 1080px)`,
  });
  return (
    <div className="flex h-auto w-[1280px] justify-between rounded-[14px] bg-bluegray3-0 px-[32px] py-[17px] xs:w-[200px] sm:w-[200px] md:w-[500px] lg:w-[924px]">
      <input
        ref={Ref}
        className="font-Pretendard w-[800px] border-none bg-bluegray3-0 text-[24px] font-[600] leading-[28.64px] text-bluegray1-0 xs:w-[100px] xs:text-[14px] xs:font-[400] xs:leading-[16.71px] sm:w-[100px] sm:text-[14px] sm:font-[400] sm:leading-[16.71px] md:w-[350px] lg:w-[600px]"
        placeholder={
          windowSize
            ? `관심있는 분야에 대해 검색해보세요 ex) 인사, 기획, ...`
            : '키워드 검색'
        }
        onChange={() => {
          setTimeout(() => {
            setSearchText(Ref.current!.value);
          }, 2000);
        }}
      />
      <button
        type="button"
        onClick={() => {
          setSearchText(Ref.current!.value);
        }}
      >
        <img
          className="w-[32px] xs:w-[21px] sm:w-[21px]"
          src={imgData.publicURL}
          alt={imgData.name}
        />
      </button>
    </div>
  );
}
