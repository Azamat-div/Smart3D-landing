import React from 'react';
import cn from 'classnames';
import ArrowDown from '../../assets/icons/arrowDown.svg';
import s from './Question.module.scss';

interface IProps {
  title: string;
  description: string;
  position: number;
  isActive: boolean;
  className?: string;
}

const Question: React.FC<IProps> = ({ title, description, position, isActive, className = '' }) => {
  return (
    <div className={cn(s.root, className, { [s.active]: isActive })}>
      <div className={s.topLine}>
        <div className={s.title}>
          {position}. {title}
        </div>
        <div className={s.showIcon}>
          <ArrowDown />
        </div>
      </div>
      <div className={s.description}>{description}</div>
    </div>
  );
};

export default Question;
