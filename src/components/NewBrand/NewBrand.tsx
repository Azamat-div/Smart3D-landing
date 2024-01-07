import React from 'react';
import DemoItem from './DemoItem';
import DoorsColor from '../../assets/icons/doorsColor.svg';
import ColorPanels from '../../assets/icons/colorPanels.svg';
import ColorStar from '../../assets/icons/colorStar.svg';
import Sell from '../../assets/icons/sell.svg';
import MADS from '../../assets/icons/mads.svg';
import Partnership from '../../assets/icons/partnership.svg';
import s from './NewBrand.module.scss';
import VideoComponent from '../VideoComponent';
import { useMainContext } from '../../context';

const NewBrand = () => {
  const { allData } = useMainContext();
  return (
    <div className={s.root}>
      <div className="title">{allData['landing.newBrand.title']}</div>
      <div className="descriptionTitle">
        {allData['landing.newBrand.description']}{' '}
        <a href={allData['landing.newBrand.siteLink'] as string} target="_blank" rel="noreferrer">
          {allData['landing.newBrand.siteLink.title']}
        </a>
      </div>

      <div className={s.infoBlock}>
        <div className={s.firstDemo}>
          <div className={s.items}>
            {creations3D.map((el) => (
              <DemoItem title={allData[el.title] as string} icon={el.image} key={el.id} />
            ))}
          </div>
          <div className={s.titleDemo}>{allData['landing.newBrand.renovation']}</div>
        </div>
        <div className={s.secondDemo}>
          <div className={s.titleDemo}>{allData['landing.newBrand.marketing']}</div>
          <div className={s.items}>
            {creationsMarketing.map((el) => (
              <DemoItem title={allData[el.title] as string} icon={el.image} key={el.id} />
            ))}
          </div>
        </div>
        <div className={s.video}>
          <div className="title">{allData['landing.videoProd.title']}</div>
          <VideoComponent id="0TC9SYu8uUw" />
        </div>
      </div>
    </div>
  );
};

const creations3D = [
  { title: 'landing.newBrand.doors', image: <DoorsColor />, id: 'creation1' },
  { title: 'landing.newBrand.panels', image: <ColorPanels />, id: 'creation2' },
  { title: 'landing.newBrand.innovations', image: <ColorStar />, id: 'creation3' },
];
const creationsMarketing = [
  { title: 'landing.newBrand.sell', image: <Sell />, id: 'creation4' },
  { title: 'landing.newBrand.mads', image: <MADS />, id: 'creation5' },
  { title: 'landing.newBrand.partnership', image: <Partnership />, id: 'creation6' },
];

export default NewBrand;
