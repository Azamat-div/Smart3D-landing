import React from 'react';
import { useMainContext } from '../../context';
import Globe from '../../assets/images/globe.png';
import s from './Add.module.scss';

const Add = () => {
  const { allData } = useMainContext();
  return (
    <div className={s.root} id="add">
      <div className="title">{allData['landing.add.title']}</div>
      <div className={s.description}>{allData['landing.add.description']}</div>

      <img src={Globe} alt="" />
    </div>
  );
};

export default Add;
