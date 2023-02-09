type ButtonItem = {
  img: string;
  name: string;
};

function TeamButton({ img, name }: ButtonItem) {
  return (
    <div className="mx-[15px] mb-[30px]">
      <img src={img} alt={img} className="mb-[8px] w-[120px]" />
      <div className="text-center h-[22px] text-[22px]">
        <span className="font-NeoR text-Text_Color2-0">
          {name.split('_')[1]}
        </span>
        <span className="text-Text_Color3-0 ml-[2px]">&#62;</span>
      </div>
    </div>
  );
}

export default TeamButton;
