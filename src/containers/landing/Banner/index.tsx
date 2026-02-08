import mainCard1 from '../../../assets/images/banner/main-card-1.png';
import mainCard2 from '../../../assets/images/banner/main-card-2.png';
import mainCard3 from '../../../assets/images/banner/main-card-3.png';

import { MainCard } from './MainCard';

function Banner() {
  return (
    <div className="flex flex-col items-center gap-[10px] self-stretch px-5 py-10 md:py-[80px]">
      <MainCard
        images={[mainCard1, mainCard2, mainCard3]}
        text={`좋아서 몰입하는
사람들과 함께하세요`}
      />
    </div>
  );
}

export default Banner;
