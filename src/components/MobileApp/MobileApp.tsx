import React from 'react';
import { useMainContext } from '../../context';
import MobileLeft from '../../assets/images/mobile-img-left.png';
import AppStore from '../../assets/icons/appStore.svg';
import PlayMarket from '../../assets/icons/playMarket.svg';
import s from './MobileApp.module.scss';

const MobileApp = () => {
  const { allData } = useMainContext();
  return (
    <div className={s.root} id="app">
      <div className={s.wrapper}>
        <div className={s.imageWrapper}>
          <img src={MobileLeft} alt="" className={s.image} />
        </div>
        <div className={s.textBlock}>
          <div className={s.title}>{allData['landing.mobile.title']}</div>
          <div className={s.description}>{allData['landing.mobile.description']}</div>
          <div className={s.appLinks}>
            <a href={allData['landing.mobile.appStoreLink'] as string} className={s.appLink}>
              <AppStore />
              APP STORE
            </a>
            <a href={allData['landing.mobile.googlePlayLink'] as string} className={s.appLink}>
              <PlayMarket />
              PLAY STORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
