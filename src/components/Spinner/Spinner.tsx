import React from 'react';
import cn from 'classnames';
import styles from './Spinner.module.scss';

interface IProps {
  className?: string;
}

const Spinner: React.FC<IProps> = ({ className = '' }) => {
  return <div className={cn(styles.spinner, className)} />;
};

export default Spinner;
