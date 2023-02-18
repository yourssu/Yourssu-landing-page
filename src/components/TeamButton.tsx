type ButtonItem = {
  img: string;
  name: string;
};

function TeamButton({ img, name }: ButtonItem) {
  return (
    <div className="mx-[15px] sm:mb-[24px] mb-[40px]">
      <object
        type="image/svg+xml"
        data={img}
        className="mb-[8px] xs:w-[80px] sm:w-[80px] w-[120px]"
      >
        {img}
      </object>
      <div className="text-center xs:text-[13px] sm:text-[14px] text-[22px]">
        <span className="font-NeoR text-Text_Color2-0">
          {name.split('_')[1]}
        </span>
        <span className="text-Text_Color3-0 ml-[2px]">&#62;</span>
      </div>
    </div>
  );
}

export default TeamButton;
