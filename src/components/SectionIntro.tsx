type IntroProps = {
  title: string;
  description: string;
  image: string;
  color: string;
};

function SectionIntro({ title, description, image, color }: IntroProps) {
  return (
    <div className="mb-8 flex flex-col items-center">
      <img alt="teams/Line" src={image} className="m-auto flex h-5" />
      <h1 className="mt-4 mb-2 font-Roboto text-2xl">{title}</h1>
      {description.split('<br />').map((des) => (
        <p
          key={des}
          className={`flex text-center font-NeoR text-sm leading-relaxed tracking-tighter ${color}`}
        >
          {des}
          <br />
        </p>
      ))}
    </div>
  );
}

export default SectionIntro;
