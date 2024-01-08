import { useState } from 'react';
import useHeaderDetail from '@/hooks/components/header/hook';
import '../styles/global.css';
import { OSType } from '@/types/types';

interface Props {
  type: OSType;
}

export default function Header({ type }: Props) {
  const { data, link } = useHeaderDetail();
  const [isClick, setIsClick] = useState(false);
  const logoData = data.logo.nodes[0];
  const snsData = data.social.nodes;
  const tooltip = data.tooltip.nodes[0];

  return (
    <header className="absolute top-[37px] z-10 flex w-full flex-col items-center justify-between xs:top-[15px] sm:top-[15px] md:top-[24px]">
      <div className="flex flex-row items-center justify-between xs:w-[260px] sm:w-[355px] md:w-[580px] lg:w-[870px] xl:w-[1160px] xxl:w-[1280px]">
        <div className="flex flex-row items-center justify-between">
          <img
            src={logoData.publicURL}
            alt={logoData.name}
            className=" w-[42px] xs:w-[25px] sm:w-[28px] md:w-[37px]"
          />
          {type === 'ios' ? (
            <span className="text-black w-[111px] text-center font-Jost text-[24px] font-[550] leading-[26px] -tracking-[0.04em] xs:w-[60px] xs:text-[14px] xs:leading-[16px] xs:-tracking-[0.02em] sm:w-[73px] sm:text-[16px] sm:leading-[16px] sm:-tracking-[0.02em] md:w-[92px] md:text-[20px] md:leading-[20px] md:-tracking-[0.02em]">
              YOURSSU
            </span>
          ) : (
            <span className="text-black w-[111px] text-center font-Jost text-[24px] font-semibold leading-[26px] -tracking-[0.04em] xs:w-[60px] xs:text-[14px] xs:leading-[16px] xs:-tracking-[0.02em] sm:w-[73px] sm:text-[16px] sm:leading-[16px] sm:-tracking-[0.02em] md:w-[92px] md:text-[20px] md:leading-[20px] md:-tracking-[0.02em]">
              YOURSSU
            </span>
          )}
        </div>
        <div className="flex flex-row items-center xs:hidden sm:hidden">
          {snsData.map((sns, index: number) => (
            <a href={link[index]} key={sns.name}>
              <object
                type="image/svg+xml"
                data={sns.publicURL}
                className="pointer-events-none ml-4 cursor-pointer"
              >
                {sns.name}
              </object>
            </a>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="hidden cursor-pointer xs:block sm:block"
          onClick={() => {
            setIsClick(!isClick);
          }}
        >
          •••
        </div>
      </div>
      <hr className=" mt-[21px] block h-[1px] border-none bg-[#8F8F90] xs:mt-[4px] xs:w-[260px] sm:mt-[6px] sm:w-[355px] md:mt-[12px] md:w-[580px] lg:w-[870px] xl:w-[1160px] xxl:w-[1280px]" />
      {isClick === true ? (
        <div className=" hidden w-full items-center justify-center xs:flex sm:flex">
          <div className="relative flex min-w-[373px] flex-row-reverse justify-start xs:min-w-[275px]">
            <img src={tooltip.publicURL} alt={tooltip.name} />
            <div className="absolute right-[10px] top-[15px] flex w-[150px] flex-row items-center justify-between">
              {snsData.map((sns, index: number) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <a href={link[index]}>
                    <object
                      type="image/svg+xml"
                      data={sns.publicURL}
                      className="pointer-events-none cursor-pointer"
                    >
                      {sns.name}
                    </object>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
