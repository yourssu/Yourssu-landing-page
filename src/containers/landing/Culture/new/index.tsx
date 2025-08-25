import { useState } from 'react';

import MainTitle from '@/components/Title/MainTitle';

import ContentBlock from './ContentBlock';
import { CULTURE_DATA } from './mock';

function Culture() {
  const [activeTab, setActiveTab] = useState(CULTURE_DATA[0].tabName);

  const activeContent = CULTURE_DATA.find((item) => item.tabName === activeTab);

  return (
    <section className="mb-[9.5rem] w-full bg-[#F7F8F8] py-[4.625rem]">
      <div className="mx-auto w-full max-w-[65.625rem]">
        <MainTitle
          title="Culture"
          subTitle="함께 즐기는 문화"
          className="mb-9"
        />

        <div className="mb-6 flex items-center gap-3">
          {CULTURE_DATA.map((tab) => (
            <button
              key={tab.tabName}
              onClick={() => setActiveTab(tab.tabName)}
              className={`rounded-[1rem] px-4 py-2 text-xl font-semibold transition-colors
              ${
                activeTab === tab.tabName
                  ? 'bg-[#ECEFFF] text-[#6B5CFF]'
                  : 'text-[#6E7687]'
              }
            `}
            >
              {tab.tabName}
            </button>
          ))}
        </div>

        <div>
          {activeContent && (
            <ContentBlock key={activeTab} content={activeContent} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Culture;
