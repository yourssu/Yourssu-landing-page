import { useRef } from 'react';
import useIdealDetail from './hook';

function Ideal() {
  const { imgData } = useIdealDetail();
  const ideal = ['자발적인', '도전적인', '능동적인', '당신을 기다려왔습니다!'];
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="relative flex h-[982px] w-full items-center justify-center"
    >
      <div className="h-full w-full overflow-y-auto">
        <span className=" font-Pretendard h-full w-full text-[50px] font-[600] leading-[59.67px] tracking-[-1%]">
          {ideal[0]}
        </span>
      </div>
      <img
        className="absolute right-0"
        src={imgData.idealImgData.nodes[0].publicURL}
        alt={imgData.idealImgData.nodes[0].name}
      />
    </div>
  );
}

export default Ideal;
