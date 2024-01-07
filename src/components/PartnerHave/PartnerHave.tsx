import React from 'react';
import { useMainContext } from '../../context';
import PartnersIncome from '../PartnersIncome';
import PersonalStore from '../PersonalStore';
import s from './PartnerHave.module.scss';

const PartnerHave = () => {
  const { allData } = useMainContext();
  return (
    <div className={s.root}>
      <div className="title">{allData['landing.partnerHave.title']}</div>
      <PersonalStore />
      <PartnersIncome />
    </div>
  );
};

export default PartnerHave;
