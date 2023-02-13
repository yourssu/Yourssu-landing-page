import { useMediaQuery } from 'react-responsive';
import IdealItem from '@/components/IdealItem';
import useIdealDetail from '@/hooks/container/ideal/hook';

function Ideal() {
  const { items } = useIdealDetail();

  const windowSize = useMediaQuery({
    query: '(min-width: 1081px)',
  });

  return (
    <div className="bg-[#F5F5F5] xs:py-[80px] sm:py-[110px] md:py-[120px] py-[160px]">
      <div className="flex xs:flex-col sm:flex-col md:flex-col flex-row justify-center items-center">
        {windowSize ? (
          <h2 className="min-w-max lg:h-[390px] h-[284px] pt-1 font-NeoSB text-[36px]">
            이런 사람을
            <br />
            지향해요
          </h2>
        ) : (
          <h2 className="h-fit font-NeoSB xs:text-[20px] sm:text-[24px] md:text-[32px] pb-2">
            이런 사람을 지향해요
          </h2>
        )}
        <div className="xs:bg-gradient-to-r sm:bg-gradient-to-r md:bg-gradient-to-r bg-gradient-to-t from-gradient_color1-0 to-gradient_color2-0 mx-[39px] xs:w-[250px] sm:w-[310px] md:w-[500px] w-[3px] xs:h-[2px] sm:h-[3px] md:h-[3px] lg:h-[390px] h-[284px] sm:mb-[40px] md:mb-[50px]" />
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
