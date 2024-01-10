/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import cn from 'classnames';
import { useMakeOrder } from '../../../api/requests/getLicense';
import FirstTab from '../FirstTab';
import SecondTab from '../SecondTab';
import s from './Activation.module.scss';

const initialState = {
  nominalIndex: 0,
  quantity: 1,
  email: '',
  paymentWay: '2checkout',
  privacyAccepted: false,
};

const Activation = () => {
  const { makeOrder } = useMakeOrder();
  const [pending, setPending] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState('');
  const [formState, setFormState] = useState(initialState);

  const handleMakeOrder = async (id: number, name: string, price: string, quantity: number, email: string) => {
    const response = await makeOrder(
      {
        PRODUCT_ID: id,
        NAME: name,
        PRICE: price,
        QUANTITY: quantity,
      },
      email,
    );

    setPending(false);
    if (typeof response === 'string') {
      setPaymentUrl(response);
    }
  };

  return (
    <div className={s.root}>
      <div className={s.tabSwitcher}>
        <span className={s.active} onClick={() => setPaymentUrl('')}>
          1
        </span>
        <div className={s.divider} />
        <span className={cn({ [s.active]: paymentUrl })}>2</span>
      </div>
      {!paymentUrl && (
        <FirstTab
          makeOrder={handleMakeOrder}
          pending={pending}
          setPending={setPending}
          formState={formState}
          setFormState={setFormState}
        />
      )}
      {paymentUrl && <SecondTab paymentUrl={paymentUrl} />}
    </div>
  );
};

export default Activation;
