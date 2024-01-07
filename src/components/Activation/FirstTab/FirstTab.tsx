/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useGetCoupons } from '../../../api/requests/getLicense';
import Input from '../../inputs/Input';
import InputNumber from '../../inputs/InputNumber';
import InputSelect from '../../inputs/InputSelect';
import s from './FirstTab.module.scss';
import Spinner from '../../Spinner';
import ApplePay from '../../../assets/images/applepay.png';
import Visa from '../../../assets/images/visa.png';
import MasterCard from '../../../assets/images/mastercard-logo.png';
import Contract from '../../../assets/images/contract.png';
import KeyIcon from '../../../assets/icons/key.svg';
import Phone from '../../../assets/images/mobile-img-left.png';
import { useMainContext } from '../../../context';

type FormState = {
  nominalIndex: number;
  quantity: number;
  email: string;
  paymentWay: string;
  privacyAccepted: boolean;
};

interface IProps {
  makeOrder: (id: number, name: string, price: string, quantity: number, email: string) => void;
  pending: boolean;
  setPending: (value: boolean) => void;
  formState: FormState;
  setFormState: (newState: FormState) => void;
}

const FirstTab: React.FC<IProps> = ({ makeOrder, setPending, pending, formState, setFormState }) => {
  const { coupons, getCoupons } = useGetCoupons();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { allData } = useMainContext();

  const handleSetCoupon = (nominalIndex: number) => {
    setFormState({ ...formState, nominalIndex });
  };

  const handleSetQuantity = (quantity: number) => {
    if (quantity > 0) {
      setFormState({ ...formState, quantity });
    }
  };

  const handleSetEmail = (email: string) => {
    setFormState({ ...formState, email });
    if (errors.email) {
      delete errors.email;
    }
  };

  const handleSetPrivacy = () => {
    setFormState({ ...formState, privacyAccepted: !formState.privacyAccepted });
    if (errors.privacy) {
      delete errors.privacy;
    }
  };

  const handleSubmit = () => {
    // eslint-disable-next-line no-useless-escape
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formState.email)) {
      setErrors((prev) => ({ ...prev, email: 'Некорректный почтовый адрес' }));
      return;
    }

    if (!formState.privacyAccepted) {
      setErrors((prev) => ({ ...prev, privacy: 'Нужно принять соглашение' }));
      return;
    }

    setPending(true);
  };

  const handleMakeOrder = async () => {
    await makeOrder(
      +coupons[formState.nominalIndex].ID,
      coupons[formState.nominalIndex].NAME,
      coupons[formState.nominalIndex].PRICE,
      formState.quantity,
      formState.email,
    );
  };

  useEffect(() => {
    if (pending) {
      handleMakeOrder();
    }
  }, [pending]);

  useEffect(() => {
    getCoupons();
  }, []);

  return (
    <>
      <div className={s.root} id="activation">
        <div className={s.descriptionBlock}>
          <div className={s.phoneWrapper}>
            <img src={Phone} alt="" className={s.phoneImage} />
            <div className={s.keyIcon}>
              <KeyIcon />
            </div>
          </div>
          <div className={s.descriptionTitle}>{allData['landing.activation.phoneTitle']}</div>
          <div className={s.descriptionText}>{allData['landing.activation.phoneDescription']}</div>
        </div>

        {coupons.length > 0 && (
          <div className={s.formWrapper}>
            <form className={s.form}>
              <InputSelect
                options={coupons}
                setValue={handleSetCoupon}
                nominalIndex={formState.nominalIndex}
                className={s.input}
                placeholder={allData['landing.activation.chooseNominal'] as string}
              />
              <div className={s.sumBlock}>
                <InputNumber
                  setValue={handleSetQuantity}
                  quantity={formState.quantity}
                  placeholder={allData['landing.activation.chooseQuantity'] as string}
                />
                <div className={s.sum}>{+coupons[formState.nominalIndex].PRICE * formState.quantity}$</div>
              </div>
              <Input
                setValue={handleSetEmail}
                value={formState.email}
                placeholder={allData['landing.activation.insertEmail'] as string}
                className={s.emailInput}
              />
              {errors.email && <span className={s.error}>{errors.email}</span>}
              <div className={s.hint}>{allData['landing.activation.keysWillBeSent']}</div>
              <div className={s.chooseText}>{allData['landing.activation.choosePayment']}</div>
              <div className={s.radioGroup}>
                <div className={s.radioWrapper}>
                  <div
                    className={cn(s.pseudoRadio, {
                      [s.checked]: formState.paymentWay === '2checkout',
                    })}
                  />
                  <input type="radio" name="payment" id="2checkout" />
                  <label htmlFor="2checkout">{allData['landing.activation.2checkout']}</label>
                  <div className={s.payIcons}>
                    <img src={Visa} alt="Visa" className={s.payIcon} />
                    <img src={MasterCard} alt="MasterCard" className={s.payIcon} />
                    <img src={ApplePay} alt="ApplePay" className={s.payIcon} />
                  </div>
                </div>
                <div className={s.radioWrapper}>
                  <div className={cn(s.pseudoRadio)} />
                  <input type="radio" name="payment" id="crypto" />
                  <label htmlFor="2checkout">
                    {allData['landing.activation.crypto']} <br />
                    <div className={s.hint}>{allData['landing.activation.cryptoFor']}</div>
                  </label>
                </div>
              </div>
            </form>
          </div>
        )}
        {!coupons.length && (
          <div className={s.spinnerForm}>
            <Spinner />
          </div>
        )}
        <div className={s.contractWrapper}>
          <img src={Contract} alt="" />
          <div className={s.contractTitle}>{allData['landing.activation.contractTitle']}</div>
          <div className={s.contractDescription}>{allData['landing.activation.contractDescription']}</div>

          <div className={s.bottomText}>
            {allData['landing.activation.appRegistration.first']}{' '}
            <b>{allData['landing.activation.appRegistration.second']}</b>
            {allData['landing.activation.appRegistration.third']}
          </div>
        </div>
      </div>
      <div className={s.checkboxWrapper}>
        <input
          type="checkbox"
          name=""
          id="privacyAccepted"
          className={s.privacyCheck}
          checked={formState.privacyAccepted === true}
          onChange={handleSetPrivacy}
        />
        <label htmlFor="privacyAccepted">
          {allData['landing.activation.agreeFor']}{' '}
          <a href="https://smart3d-corporation.com//privacy-policy" className={s.Link}>
            {allData['landing.activation.personalData']}
          </a>
        </label>
        <br />
      </div>
      {errors.privacy && <span className={s.error}>{errors.privacy}</span>}
      <div className={s.bottomLine}>
        <button
          type="submit"
          className={cn(s.submitButton, { [s.disabled]: pending })}
          onClick={handleSubmit}
          disabled={pending}
        >
          {allData['landing.activation.buyKey']}{' '}
          {pending && (
            <div className={s.spinner}>
              <Spinner />
            </div>
          )}
          <div className={s.oneTime}>{allData['landing.activation.onePurchase']}</div>
        </button>
      </div>
    </>
  );
};

export default FirstTab;
