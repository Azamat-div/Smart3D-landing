import React from 'react';
import { useMainContext } from '../../context';
import Download from '../../assets/icons/download.svg';
import Key from '../../assets/icons/key.svg';
import PhoneCompany from '../../assets/icons/phoneCompany.svg';
import s from './How.module.scss';

const How = () => {
  const { allData } = useMainContext();
  return (
    <div className={s.root}>
      <div className="title">{allData['landing.how.title']}</div>
      <div className="descriptionTitle">{allData['landing.how.description']}</div>
      <div className={s.line}>
        <div className={s.iconWrapper}>
          <Download />
          <div className={s.text}>{allData['landing.how.first']}</div>
        </div>
        <div className={s.divider} />
        <div className={s.iconWrapper}>
          <Key />
          <div className={s.text}>{allData['landing.how.second']}</div>
        </div>
        <div className={s.divider} />
        <div className={s.iconWrapper}>
          <PhoneCompany />
          <div className={s.text}>{allData['landing.how.third']}</div>
        </div>
      </div>
    </div>
  );
};

export default How;
