import useIdealDetail from './hook';

function Ideal() {
  const { imgData } = useIdealDetail();
  const ideal = ['자발적인', '도전적인', '능동적인', '당신을 기다려왔습니다!'];

  return (
    <>
      {ideal.map((value, index) => {
        return (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="relative flex h-[982px] w-full items-center  justify-center xs:h-[542px] sm:h-[542px] md:h-[666px]"
          >
            <div className="overflow-y-auto">
              <span className=" font-Pretendard h-full w-full text-[50px] font-[700] leading-[59.67px] tracking-[-1%] xs:text-[15px] xs:font-[600] xs:leading-[20.19px] sm:text-[15px] sm:font-[600] sm:leading-[20.19px] md:text-[40px] md:leading-[47.74px]">
                {value}
              </span>
            </div>
            <img
              className={`absolute ${
                index % 2 === 0 ? 'right-0' : 'left-0 -scale-x-100 transform'
              } xs:w-[128px] sm:w-[128px] md:w-[260px]`}
              src={imgData.idealImgData.nodes[0].publicURL}
              alt={imgData.idealImgData.nodes[0].name}
            />
          </div>
        );
      })}
    </>
  );
}

export default Ideal;
