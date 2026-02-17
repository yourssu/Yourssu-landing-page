import { InaWordInformation } from '@/types/recruiting.type';

import { SpeakerIcon } from './SpeakerIcon';

interface InaWordProps {
  inaWord: InaWordInformation;
}

function InaWord({ inaWord }: InaWordProps) {
  // inaWord 정보가 없는 경우 해당 섹션을 보여주지 않음
  if (!inaWord || !inaWord.word) return null;

  return (
    <section className="flex flex-col items-start gap-3 self-stretch rounded-[12px] p-6 xs:gap-6 xs:p-5 sm:gap-6 sm:p-5">
      <div className="flex items-center gap-2 self-stretch">
        <SpeakerIcon className="h-5 w-6 xs:h-4 sm:h-4" />
        <p className="T3_Sb_20 sm:T2_Sb_18 xs:T2_Sb_18 text-text-basicPrimary">
          {inaWord.title}
        </p>
      </div>
      <div className="m:p-5 flex flex-col items-start gap-6 self-stretch rounded-[12px] bg-bg-brandSecondary p-6 xs:p-5">
        <p className="B1_Sb_16 text-text-brandPrimary">{inaWord.word}</p>
      </div>
    </section>
  );
}

export default InaWord;
