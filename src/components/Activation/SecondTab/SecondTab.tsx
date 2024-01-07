import React, { useEffect, useRef } from 'react';
import s from './SecondTab.module.scss';

interface IProps {
  paymentUrl: string;
}

const SecondTab: React.FC<IProps> = ({ paymentUrl }) => {
  const payRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (payRef.current) {
      payRef.current.scrollIntoView({ block: 'center' });
    }
  }, [payRef.current]);

  return (
    <div className={s.root} ref={payRef}>
      <iframe title="Payment" src={paymentUrl} frameBorder="none" allow="payment" />
    </div>
  );
};

export default SecondTab;
