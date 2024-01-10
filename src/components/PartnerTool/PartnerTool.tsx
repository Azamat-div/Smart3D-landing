import React from 'react';
import s from './PartnerTool.module.scss';

interface IProps {
  title: string;
  image: string;
  description: string;
}

const PartnerTool: React.FC<IProps> = ({ title, image, description }) => {
  return (
    <div className={s.root}>
      <div className={s.title}>{title}</div>
      <img src={image} alt="" className={s.image} />
      <div className={s.description}>
        <div className={s.text}>{description}</div>
      </div>
    </div>
  );
};

export default PartnerTool;
