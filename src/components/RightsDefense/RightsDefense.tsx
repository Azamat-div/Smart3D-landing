import React from 'react';
import { useMainContext } from '../../context';
import s from './RightsDefense.module.scss';

const RightsDefense = () => {
  const { allData } = useMainContext();
  return (
    <div className={s.root} id="law">
      <div className={s.title}>Защита авторских прав</div>
      <div className={s.imageWrapper}>
        <img src="https://env-3884663.jcloud.kz/upload/iblock/087/087e5d309e6b6f5be1ee57944769b044.jpg" alt="" />
      </div>
      <div className={s.textBlock}>
        <div className={s.title}>{allData['landing.rights.title']}</div>
        <div className={s.description}>{allData['landing.rights.description']}</div>
      </div>
    </div>
  );
};

export default RightsDefense;
