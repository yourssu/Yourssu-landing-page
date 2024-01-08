import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import ApplyProcedure from '@/containers/description/ApplyProcedure';
import InaWord from '@/containers/description/InaWord';
import Information from '@/containers/description/Infromation';
import RoadToPro from '@/containers/description/RoadToPro';
import SideNavigation from '@/containers/description/SideNavigation';
import TeamHeader from '@/containers/description/TeamHeader';
import { OSType } from '@/types/types';

function Test() {
  const [type, setType] = useState<OSType>();

  useEffect(() => {
    const osType = navigator.userAgent.toLowerCase();
    if (osType.indexOf('android') > -1) {
      setType('android');
    } else if (osType.indexOf('iphone') > -1 || osType.indexOf('ipad') > -1) {
      setType('ios');
    } else {
      setType('pc');
    }
  }, []);

  return (
    <Layout type={type}>
      <TeamHeader />
      <article>
        <Information />
        <ApplyProcedure />
        <RoadToPro />
        <InaWord />
      </article>
      <aside>
        <SideNavigation />
      </aside>
    </Layout>
  );
}

export default Test;
