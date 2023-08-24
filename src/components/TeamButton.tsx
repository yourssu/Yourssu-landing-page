type ButtonItem = {
  team: string;
  img: string;
  hoverImg: string;
  notionLink: string;
};

function TeamButton({ team, img, hoverImg, notionLink }: ButtonItem) {
  return (
    <div className="xs:mx-[6px] sm:mx-[6px] md:mx-[12px] mx-[15px] sm:mb-[24px] mb-[40px]">
      <a href={notionLink} className="relative group">
        <img
          className="mb-[8px] xs:w-[80px] sm:w-[80px] w-[120px]"
          src={hoverImg}
          alt={team}
        />
        <img
          className="mb-[8px] xs:w-[80px] sm:w-[80px] w-[120px] absolute top-0 group-hover:invisible"
          src={img}
          alt={team}
        />
      </a>
      <div className="text-center xs:text-[13px] sm:text-[14px] text-[22px]">
        <span className="font-NeoR text-Text_Color2-0">{team}</span>
        <span className="text-Text_Color3-0 ml-[2px]">&#62;</span>
      </div>
    </div>
  );
}

export default TeamButton;
