import React, { useState } from 'react';
import cn from 'classnames';
import Sell from '../../assets/icons/sell.svg';
import MADS from '../../assets/icons/mads.svg';
import Partnership from '../../assets/icons/partnership.svg';
import Video from '../../assets/icons/video.svg';
import PanelDiagram from '../../assets/icons/panelDiagram.svg';
import RichBoy from '../../assets/images/richBoy.png';
import Arrow from '../../assets/icons/rightTopArrow.svg';
import s from './PartnersIncome.module.scss';

const PartnersIncome = () => {
  const [activeWay, setActiveWay] = useState(0);
  const [selected, setSelected] = useState('panels');
  return (
    <div className={s.root} id="ways">
      <div className={s.leftBlock}>
        {ways.map((el, index) => (
          <div className={s.wayWrapper} key={el.id}>
            <button
              type="button"
              className={cn(s.way, { [s.active]: activeWay === index })}
              onClick={() => setActiveWay(index)}
              style={{ backgroundColor: el.backgroundColor }}
            >
              <div className={s.wayNumber}>
                <span>{index + 1}</span>
                <span>способ</span>
              </div>
              <div className={s.wayTitle}>{el.title}</div>
              <div className={s.iconWrapper}>{el.icon}</div>
            </button>
            {activeWay === index && (
              <div className={s.sideLinks}>
                <a href={el.links.knowMore}>
                  УЗНАТЬ
                  <br />
                  БОЛЬШЕ
                </a>
                <a href={el.links.video}>
                  СМОТРЕТЬ
                  <br />
                  ВИДЕО
                </a>
              </div>
            )}
          </div>
        ))}
        <div className={s.switchers}>
          <button
            type="button"
            className={cn(s.switcher, { [s.active]: selected === 'panels' })}
            onClick={() => setSelected('panels')}
          >
            3D ПАНЕЛИ
          </button>
          <div className={s.divider} />
          <button
            type="button"
            className={cn(s.switcher, { [s.active]: selected === 'doors' })}
            onClick={() => setSelected('doors')}
          >
            3D ДВЕРИ
          </button>
        </div>
      </div>
      <div className={s.rightBlock}>
        <div className={s.rightTitle}>{ways[activeWay].diagramTitle[selected]}</div>
        <div className={s.diagramWrapper}>{ways[activeWay].diagram}</div>
        <div className={s.bottomLine}>
          <div className={s.incomeCalculation}>
            <div className={s.partnerReceive}>
              Получает партнёр за <b>3D панели</b>
            </div>
            <div className={s.calculationsText}>
              <b>22</b> $/м² x <b>300</b> м² = <b>6 600</b> $
              <Arrow />
            </div>
            <div className={s.partnerReceive}>
              Получает партнёр за <b>3D двери</b>
            </div>
            <div className={s.calculationsText}>
              <b>22</b> $ x <b>300</b> шт = <b>3 000</b> $
              <Arrow />
            </div>
            <div className={s.partnerReceive}>
              Получает партнёр за <b>3D двери</b>
            </div>
            <div className={s.totalIncome}>
              <b>6 600</b> $ + <b>3 000</b> $ = <b>9 600</b> $
              <Arrow />
            </div>
          </div>
          <img src={RichBoy} alt="" className={s.richBoyImage} />
        </div>
      </div>
    </div>
  );
};

const ways = [
  {
    title: 'Продай\nсам',
    icon: <Sell />,
    links: {
      knowMore: 'https://google.com',
      video: '#video-program',
    },
    diagramTitle: {
      panels: 'РАСЧЁТ ПРИБЫЛИ ЗА 1 м² ПАНЕЛИ',
      doors: 'РАСЧЁТ ПРИБЫЛИ ЗА 1 ДВЕРЬ',
    },
    diagram: <PanelDiagram />,
    backgroundColor: '#0d7af3',
    id: 'way1SellByYourself',
  },
  {
    title: 'МАДС',
    icon: <MADS />,
    links: {
      knowMore: 'https://google.com',
      video: '#video-program',
    },
    diagramTitle: {
      panels: 'РАСЧЁТ ПРИБЫЛИ ЗА 1 м² ПАНЕЛИ',
      doors: 'РАСЧЁТ ПРИБЫЛИ ЗА 1 ДВЕРЬ',
    },
    diagram: <PanelDiagram />,
    backgroundColor: '#8fd826',
    id: 'way2MADS',
  },
  {
    title: 'Партнёрская\nпрограмма',
    icon: <Partnership />,
    links: {
      knowMore: 'https://google.com',
      video: '#video-program',
    },
    diagramTitle: {
      panels: 'РАСЧЁТ ПРИБЫЛИ ЗА 1 м² ПАНЕЛИ',
      doors: 'РАСЧЁТ ПРИБЫЛИ ЗА 1 ДВЕРЬ',
    },
    diagram: <PanelDiagram />,
    backgroundColor: '#e6621a',
    id: 'way3PartnerProgram',
  },
  {
    title: 'Видеоканал',
    icon: <Video />,
    links: {
      knowMore: 'https://google.com',
      video: '#video-program',
    },
    diagramTitle: {
      panels: 'РАСЧЁТ ПРИБЫЛИ ЗА 1 м² ПАНЕЛИ',
      doors: 'РАСЧЁТ ПРИБЫЛИ ЗА 1 ДВЕРЬ',
    },
    diagram: <PanelDiagram />,
    backgroundColor: '#d926a4',
    id: 'way4VideoChannel',
  },
];

export default PartnersIncome;
