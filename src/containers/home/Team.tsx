import { StaticImage } from 'gatsby-plugin-image';
import { TeamButton } from '@/components/TeamButton';

export const Team = () => {
  return (
    <div className="mt-5 py-16">
      <div className="mb-8 flex flex-col items-center">
        <StaticImage
          alt="teams/Line"
          src="../../images/teams/Line.png"
          className="m-auto flex h-5"
        />
        <h1 className="mt-4 mb-2 font-Roboto text-2xl">TEAM YOURSSU</h1>
        <p className="flex text-center font-NeoR text-sm leading-relaxed tracking-tighter text-Text_Color1-0">
          안녕하세요. 숭실인을 위한. 숭실인에 의해 당신의 숭실을 만들어가는
          동아리 유어슈입니다.
          <br />
          숭실대 학생들의 즐거운 캠퍼스 라이프를 위한 서비스를 만들고 있습니다.
        </p>
      </div>
      <div className="flex justify-center">
        <TeamButton img="../../images/teams/HR.png" name="HR" />
        <TeamButton img="../../images/teams/Marketer.png" name="Marketer" />
        <TeamButton img="../../images/teams/Legal.png" name="Legal" />
        <TeamButton img="../../images/teams/Designer.png" name="Designer" />
        <TeamButton img="../../images/teams/iOS.png" name="iOS" />
        <TeamButton img="../../images/teams/Android.png" name="Android" />
        <TeamButton img="../../images/teams/Backend.png" name="Backend" />
        <TeamButton img="../../images/teams/Frontend.png" name="Frontend" />
      </div>
    </div>
  );
};
