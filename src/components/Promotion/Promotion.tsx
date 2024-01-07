import React from 'react';
import { useMainContext } from '../../context';
import PromotionIcon from '../../assets/icons/promotion.svg';
import s from './Promotion.module.scss';

const Promotion = () => {
  const { allData } = useMainContext();
  return (
    <div className={s.root}>
      <div className={s.leftBlock}>
        {typeof allData['landing.promotion.title'] === 'string' && (
          <div
            dangerouslySetInnerHTML={{
              __html: allData['landing.promotion.title'].replaceAll('&lt;', '<').replaceAll('&gt;', '>'),
            }}
          />
        )}
      </div>
      <div className={s.middleBlock}>
        <div className={s.description}>{allData['landing.promotion.description']}</div>
        {/* <a href="https://smart3d-corporation.com/news">(читать)</a> */}
      </div>
      <div className={s.rightBlock}>
        <PromotionIcon />
      </div>
    </div>
  );
};

export default Promotion;
