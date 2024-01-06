import { useMediaQuery } from 'react-responsive';
import IdealItem from '@/components/IdealItem';
import useIdealDetail from '@/hooks/container/ideal/hook';

function Ideal() {
  const { items } = useIdealDetail();

  const windowSize = useMediaQuery({
    query: '(min-width: 1081px)',
  });

  return (
    <div className="bg-[#F5F5F5] py-[160px] xs:py-[80px] sm:py-[110px] md:py-[120px]">
      <div className="flex flex-row items-center justify-center xs:flex-col sm:flex-col md:flex-col">
        {windowSize ? (
          <h2 className="h-[284px] min-w-max pt-1 font-NeoSB text-[36px] lg:h-[390px]">
            이런 사람을
            <br />
            지향해요
          </h2>
        ) : (
          <h2 className="h-fit pb-2 font-NeoSB xs:text-[20px] sm:text-[24px] md:text-[32px]">
            이런 사람을 지향해요
          </h2>
        )}
        <div className="mx-[39px] h-[284px] w-[3px] bg-gradient-to-t from-gradient_color1-0 to-gradient_color2-0 xs:h-[2px] xs:w-[250px] xs:bg-gradient-to-r sm:mb-[40px] sm:h-[3px] sm:w-[310px] sm:bg-gradient-to-r md:mb-[50px] md:h-[3px] md:w-[500px] md:bg-gradient-to-r lg:h-[390px]" />
        <div className="flex flex-col">
          {items.map((item) => (
            <IdealItem
              title={item.title}
              description={item.description}
              key={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ideal;
