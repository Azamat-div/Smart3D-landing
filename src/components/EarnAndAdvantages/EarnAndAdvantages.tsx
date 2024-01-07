import React, { useState } from 'react';
import cn from 'classnames';
import s from './EarnAndAdvantages.module.scss';
import { useMainContext } from '../../context';

interface IProps {
  data: {
    title: string;
    description: string;
    image: string;
  }[];

  title: string;
  description: string;
  id?: string;
}

const EarnAndAdvantages: React.FC<IProps> = ({ data, title, description, id = '' }) => {
  const [selected, setSelected] = useState(0);
  const { allData } = useMainContext();
  return (
    <div className={s.root} id={id}>
      <div className="title">{title}</div>
      <div className="descriptionTitle">{description}</div>
      <div className={s.infoBlock}>
        <div className={s.ways}>
          <button className={cn(s.way, { [s.active]: selected === 0 })} type="button" onClick={() => setSelected(0)}>
            <div className={s.wayTitle}>{allData[data[0].title]}</div>
            <div className={s.wayDescription}>{allData[data[0].description]}</div>
          </button>

          <button className={cn(s.way, { [s.active]: selected === 1 })} type="button" onClick={() => setSelected(1)}>
            <div className={s.wayTitle}>{allData[data[1].title]}</div>
            <div className={s.wayDescription}>{allData[data[1].description]}</div>
          </button>

          <button className={cn(s.way, { [s.active]: selected === 2 })} type="button" onClick={() => setSelected(2)}>
            <div className={s.wayTitle}>{allData[data[2].title]}</div>
            <div className={s.wayDescription}>{allData[data[2].description]}</div>
          </button>
        </div>
        <div className={s.imageWrapper}>
          <img src={images[selected]} alt="" />
          <a href="#questions" className={s.linkQuestions}>
            {allData['landing.questions.knowMoreIn']}
          </a>
        </div>
      </div>
    </div>
  );
};

const images = [
  'https://env-3884663.jcloud.kz/upload/iblock/bf0/bf03b10b8aec6d7e19ab062716b0102c.jpg',
  'https://env-3884663.jcloud.kz/upload/iblock/84e/84ed331144fc2ef2d096eb252fb7a863.jpg',
  'https://env-3884663.jcloud.kz/upload/iblock/087/087e5d309e6b6f5be1ee57944769b044.jpg',
];

export default EarnAndAdvantages;
