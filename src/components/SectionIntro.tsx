/* import image from '../images/teams/Line.png'; */

type IntroProps = {
  title: string;
  description: string;
  image: string;
};

function SectionIntro({ title, description, image }: IntroProps) {
  return (
    <div className="mb-8 flex flex-col items-center">
      <img alt="teams/Line" src={image} className="m-auto flex h-5" />
      <h1 className="mt-4 mb-2 font-Roboto text-2xl">{title}</h1>
      <p className="flex text-center font-NeoR text-sm leading-relaxed tracking-tighter text-Text_Color1-0">
        {description.split('<br />').map((des) => (
          <>
            {des}
            <br />
          </>
        ))}
      </p>
    </div>
  );
}

export default SectionIntro;
