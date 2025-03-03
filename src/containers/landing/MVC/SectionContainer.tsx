import { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

function SectionContainer({ title, children }: Props) {
  return (
    <div className="flex flex-1 flex-col gap-7">
      <div className="relative">
        <div className="absolute bottom-0.5 h-[20px] w-full bg-gradient-to-l from-gradient_color1-0 to-gradient_color2-0 opacity-50 xs:bottom-1.5" />
        <h3 className="h4 xs:body4 relative z-10 h-9 w-full text-center">
          {title}
        </h3>
      </div>
      <div className="text-gray1-0">{children}</div>
    </div>
  );
}

export default SectionContainer;
