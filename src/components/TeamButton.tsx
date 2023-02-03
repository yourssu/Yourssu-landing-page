import { StaticImage } from 'gatsby-plugin-image';

type ButtonItem = {
  img: string;
  name: string;
};

export const TeamButton = ({ img, name }: ButtonItem) => {
  return (
    <div className="mx-3">
      <StaticImage alt={img} src={img} className="relative mb-2 w-20" />
      <p className="text-center font-NeoR text-sm text-Text_Color2-0">{name}</p>
    </div>
  );
};
