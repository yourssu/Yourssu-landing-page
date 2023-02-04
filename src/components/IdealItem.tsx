type Ideal = {
  title: string;
  description: string;
  img: {
    publicURL: string;
    name: string;
  };
};

function IdealItem({ img, title, description }: Ideal) {
  return (
    <div className="my-4 flex-row">
      <div>
        <img
          alt={img.name}
          src={img.publicURL}
          className="absolute w-[71px] translate-y-3"
        />
        <h3 className="absolute w-[71px] text-center font-NeoSB text-lg tracking-tighter">
          {title}
        </h3>
      </div>
      <div className="ml-[71px] max-w-[505px] px-5 text-justify font-NeoR text-sm text-Text_Color2-0">
        {description}
      </div>
    </div>
  );
}

export default IdealItem;
