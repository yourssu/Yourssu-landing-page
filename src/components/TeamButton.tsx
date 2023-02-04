type ButtonItem = {
  img: string;
  name: string;
};

function TeamButton({ img, name }: ButtonItem) {
  return (
    <div className="mx-3">
      <img src={img} alt={img} className="relative mb-2 w-20" />
      <p className="text-center font-NeoR text-sm text-Text_Color2-0">{name}</p>
    </div>
  );
}

export default TeamButton;
