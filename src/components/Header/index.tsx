import { useState } from 'react';

import { Link } from 'gatsby';

import useHeaderDetail from '@/components/Header/hook';

interface Props {
  isMainPage: boolean;
}

function Header({ isMainPage }: Props) {
  const { data } = useHeaderDetail();
  const [isClick, setIsClick] = useState(false);
  const logoData = data.logo.nodes[0];
  const listIconData = data.listIcon.nodes[0];
  const xIconData = data.xIcon.nodes[0];

  return (
    <header
      className={`${
        !isMainPage && 'bg-bluegray4-0'
      } absolute z-10 flex w-full flex-col items-center justify-between ${
        isClick && 'bg-white-0'
      }`}
    >
      <div className="flex w-full items-center justify-between py-6 xs:px-5 xs:py-3 sm:px-5 sm:py-3 md:px-10 md:py-6 lg:px-10 lg:py-6 xl:w-[1326px] xxl:w-[1326px]">
        <Link to="/" className="flex items-center justify-between">
          <img
            src={logoData.publicURL}
            alt={logoData.name}
            className=" w-[42px] xs:w-[25px] sm:w-[28px] md:w-[37px]"
          />
          <h1 className="text-black w-[111px] text-center font-Jost text-[24px] font-semibold leading-[26px] -tracking-[0.04em] xs:w-[60px] xs:text-[14px] xs:leading-[16px] xs:-tracking-[0.02em] sm:w-[73px] sm:text-[16px] sm:leading-[16px] sm:-tracking-[0.02em] md:w-[92px] md:text-[20px] md:leading-[20px] md:-tracking-[0.02em]">
            YOURSSU
          </h1>
        </Link>
        <nav className="flex flex-row items-center gap-6 xs:hidden sm:hidden">
          <Link to="/">
            <p
              className={`font-Jost text-[18px] font-[600] leading-normal tracking-[-0.36px]${
                isMainPage ? 'text-black-0' : 'text-bluegray1-0'
              }`}
            >
              MAIN
            </p>
          </Link>
          <Link to="/recruiting">
            <p
              className={`font-Jost text-[18px] font-[600] leading-normal tracking-[-0.36px]${
                isMainPage ? 'text-black-0' : 'text-bluegray1-0'
              }`}
            >
              RECRUITING
            </p>
          </Link>
        </nav>
        <button
          aria-hidden="true"
          type="button"
          className="hidden xs:block sm:block"
          onClick={() => {
            setIsClick(!isClick);
          }}
        >
          {isClick ? (
            <img src={xIconData.publicURL} alt={xIconData.name} />
          ) : (
            <img src={listIconData.publicURL} alt={listIconData.name} />
          )}
        </button>
      </div>
      <hr
        className={`${
          isClick ? 'hidden' : null
        } block h-[1px] w-full border-none ${!isMainPage && 'bg-bluegray2-0'}`}
      />
      {isClick && (
        <nav className="flex h-auto w-full flex-col items-start justify-start bg-white-0 md:hidden lg:hidden xl:hidden xxl:hidden">
          <Link
            to="/"
            className={`
              p-5 font-Jost text-[18px] font-[600] leading-normal tracking-[-0.36px]
              ${isMainPage ? 'text-black-0' : 'text-Text_Color2-0'}`}
          >
            MAIN
          </Link>
          <Link
            to="/recruiting"
            className={`
              p-5 font-Jost text-[18px] font-[600] leading-normal tracking-[-0.36px]
              ${isMainPage ? 'text-black-0' : 'text-Text_Color2-0'}`}
          >
            RECRUITING
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
