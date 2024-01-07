import React from 'react';
import AppStore from '../../assets/icons/appStore.svg';
import PanelsStore from '../../assets/images/panelsStore.png';
import DoorsStore from '../../assets/images/doorsStore.png';
import s from './PersonalStore.module.scss';
import { useMainContext } from '../../context';

const PersonalStore = () => {
  const { allData } = useMainContext();
  return (
    <div className={s.root}>
      <div className={s.title}>{allData['landing.partnerHave.storeTitle']}</div>
      <div className={s.firstLine}>
        <div className={s.centerImage}>
          <img src="https://env-3884663.jcloud.kz/upload/iblock/087/087e5d309e6b6f5be1ee57944769b044.jpg" alt="" />
        </div>
        <div className={s.rightBlock}>
          <div className={s.blocksWrapper}>
            <div className={s.block}>
              <div className={s.imageWrapper}>
                <img src={PanelsStore} alt="" />
              </div>
              <div className={s.blueText}>300 м²</div>
              <div className={s.blockDescription}>3D панелей</div>
            </div>
            <div className={s.block}>
              <div className={s.imageWrapper}>
                <img src={DoorsStore} alt="" />
              </div>
              <div className={s.blueText}>300 м²</div>
              <div className={s.blockDescription}>3D дверей</div>
            </div>
          </div>

          <div className={s.secondLine}>{allData['landing.partnerHave.storeDescription']}</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalStore;
