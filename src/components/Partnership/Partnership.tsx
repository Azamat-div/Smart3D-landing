import React, { useState } from 'react';
import cn from 'classnames';
import PC from '../../assets/icons/pc.svg';
import Wallet from '../../assets/icons/wallet.svg';
import Deals from '../../assets/icons/deals.svg';
import Finance from '../../assets/icons/finance.svg';
import Team from '../../assets/icons/team.svg';
import Cube from '../../assets/icons/cube.svg';
import ThinArrow from '../../assets/icons/thinArrow.svg';
import AppStore from '../../assets/icons/appStore.svg';
import PlayMarket from '../../assets/icons/playMarket.svg';
import MobileLeft from '../../assets/images/mobile-img-left.png';
import DesignPhone from '../../assets/images/screen-01.png';
import MarketPhone from '../../assets/images/screen-02.png';
import DealsPhone from '../../assets/images/screen-04.png';
import FinancePhone from '../../assets/images/screen-05.png';
import WalletPhone from '../../assets/images/screen-03.png';
import TeamPhone from '../../assets/images/screen-06.png';
import s from './Partnership.module.scss';
import { useMainContext } from '../../context';

const Partnership = () => {
  const [sliderTab, setSliderTab] = useState(0);
  const { allData } = useMainContext();

  const handleArrowClick = (direction: number) => {
    if (direction === 1) {
      if (sliderTab >= galleryData.length - 1) {
        setSliderTab(0);
        return;
      }
    } else if (sliderTab <= 0) {
      return;
    }

    setSliderTab((prev) => prev + direction);
  };
  return (
    <div className={s.root} id="company">
      <div className="title">{allData['landing.partnership.title']}</div>
      <div className="descriptionTitle">{allData['landing.partnership.description']}</div>
      <div className={s.sliderWrapper}>
        <div className={s.switchersBlock}>
          {galleryData.slice(0, 3).map((el, index) => (
            <button
              type="button"
              className={cn(s.switcher, { [s.active]: sliderTab === index })}
              onClick={() => setSliderTab(index)}
              key={`${el.title}$${el.id}button`}
            >
              {el.icon} {allData[el.title]}
            </button>
          ))}
        </div>
        <div className={s.gallery}>
          <div className={s.galleryItem}>
            <img src={MobileLeft} alt="" />
            <img src={galleryData[sliderTab].image} alt="" />
          </div>
        </div>
        <div className={s.switchersBlock}>
          {galleryData.slice(3, 6).map((el, index) => (
            <button
              type="button"
              className={cn(s.switcher, { [s.active]: sliderTab === index + 3 })}
              onClick={() => setSliderTab(index + 3)}
              key={`${el.title}$${el.id}button`}
            >
              {el.icon} {allData[el.title]}
            </button>
          ))}
        </div>
        <button className={cn(s.arrow, s.left)} type="button" onClick={() => handleArrowClick(-1)}>
          <ThinArrow />
        </button>
        <button className={cn(s.arrow, s.right)} type="button" onClick={() => handleArrowClick(1)}>
          <ThinArrow />
        </button>
      </div>
      <div className={s.appLinks}>
        <a href="https://google.com" className={s.appLink}>
          <AppStore />
          APP STORE
        </a>
        <a href="https://google.com" className={s.appLink}>
          <PlayMarket />
          PLAY STORE
        </a>
      </div>
    </div>
  );
};

const galleryData = [
  {
    title: 'landing.partnership.wallet',
    icon: <Wallet />,
    image: WalletPhone,
    id: 'galleryPartner2',
  },
  {
    title: 'landing.partnership.deals',
    icon: <Deals />,
    image: DealsPhone,
    id: 'galleryPartner3',
  },
  {
    title: 'landing.partnership.design',
    icon: <Cube />,
    image: DesignPhone,
    id: 'galleryPartner6',
  },
  {
    title: 'landing.partnership.finance',
    icon: <Finance />,
    image: FinancePhone,
    id: 'galleryPartner4',
  },
  {
    title: 'landing.partnership.market',
    icon: <PC />,
    image: MarketPhone,
    id: 'galleryPartner1',
  },
  {
    title: 'landing.partnership.team',
    icon: <Team />,
    image: TeamPhone,
    id: 'galleryPartner5',
  },
];

export default Partnership;
