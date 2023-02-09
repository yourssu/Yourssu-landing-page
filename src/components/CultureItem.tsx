type Culture = {
  id: string;
  title: string;
  description: string;
};

function CultureItem({ id, title, description }: Culture) {
  return (
    <div className="w-[408px] h-[219px] flex flex-row justify-between">
      <span className="font-NeoEB text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-gradient_color2-0 to-gradient_color1-0">
        {id}
      </span>
      <div className="justify-between">
        <span className="font-NeoSB text-[28px]">{title}</span>
        <p className="font-NeoR text-[22px] text-justify text-Text_Color2-0 w-[341px] mt-[11px]">
          {description}
        </p>
      </div>
    </div>
  );

  /* return (
    <div>
      <div>{id}</div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  ); */
}

export default CultureItem;
