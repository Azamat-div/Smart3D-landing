import React from 'react';
import cn from 'classnames';
import s from './InputNumber.module.scss';

interface IProps {
  setValue: (value: number) => void;
  quantity: number;
  className?: string;
  placeholder?: string;
  maxQuantity?: number;
}

const InputNumber: React.FC<IProps> = ({ setValue, quantity, className = '', placeholder = '', maxQuantity = 10 }) => {
  const handleButtonChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: number) => {
    e.preventDefault();
    if (quantity + value <= maxQuantity) {
      setValue(quantity + value);
    }
  };
  return (
    <div className={cn(s.root, className)}>
      <span className={s.placeholder}>{placeholder}</span>
      <div className={s.inputUI}>
        <button type="button" className={s.button} onClick={(e) => handleButtonChange(e, -1)}>
          -
        </button>
        <input type="text" onChange={(e) => e.preventDefault()} value={quantity} className={s.input} />
        <button type="button" className={s.button} onClick={(e) => handleButtonChange(e, 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default InputNumber;
