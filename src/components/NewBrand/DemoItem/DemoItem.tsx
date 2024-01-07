import React from 'react';
import s from './DemoItem.module.scss';

interface IProps {
  icon: React.ReactElement;
  title: string;
}

const DemoItem: React.FC<IProps> = ({ icon, title }) => {
  return (
    <div className={s.root}>
      <div className={s.icon}>{icon}</div>
      <div className={s.title}>{title}</div>
    </div>
  );
};

export default DemoItem;
