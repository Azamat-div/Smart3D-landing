import React from 'react';
import PartnerTool from '../PartnerTool/PartnerTool';
import MultiLang from '../../assets/images/multiLang.png';
import PromoCode from '../../assets/images/promoCode.png';
import Painting from '../../assets/images/painting.png';
import PhoneCatalog from '../../assets/images/phoneCatalog.png';
import { useMainContext } from '../../context';
import s from './PartnerTools.module.scss';

const PartnerTools = () => {
  const { allData } = useMainContext();
  return (
    <div className={s.root} id="tools">
      <div className="title">{allData['landing.tools.title']}</div>

      <div className={s.tools}>
        <PartnerTool
          title={allData['landing.tools.first.title'] as string}
          image={MultiLang}
          description={allData['landing.tools.first.description'] as string}
        />

        <PartnerTool
          title={allData['landing.tools.second.title'] as string}
          image={PromoCode}
          description={allData['landing.tools.second.description'] as string}
        />

        <PartnerTool
          title={allData['landing.tools.third.title'] as string}
          image={Painting}
          description={allData['landing.tools.first.description'] as string}
        />

        <PartnerTool
          title={allData['landing.tools.fourth.title'] as string}
          image={PhoneCatalog}
          description={allData['landing.tools.fourth.description'] as string}
        />
      </div>
    </div>
  );
};

export default PartnerTools;
