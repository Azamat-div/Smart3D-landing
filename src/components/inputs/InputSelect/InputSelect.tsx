/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import cn from 'classnames';
import s from './InputSelect.module.scss';
import ArrowDown from '../../../assets/icons/arrowDown.svg';
import { ItemTexturesObjects } from '../../../types';

interface IInputSelect {
  options: ItemTexturesObjects[];
  className?: string;
  setValue: (params: any) => void;
  nominalIndex: number;
  placeholder?: string;
}

const InputSelect: React.FC<IInputSelect> = ({ options, className = '', setValue, nominalIndex, placeholder = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetCurrent = (index: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setValue(index);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={cn(s.root, className)} onClick={() => setIsOpen(!isOpen)}>
      <span className={s.Placeholder}>{placeholder}</span>
      <div className={s.InputUI}>
        <input
          type="text"
          onChange={(e) => e.preventDefault()}
          value={options?.[nominalIndex]?.NAME.split(' - ')[1]}
          className={cn(s.Input, className)}
        />
        <div className={cn(s.Trigger, { [s.isOpen]: isOpen })}>
          <div className={s.IconWrapper}>
            <ArrowDown />
          </div>
        </div>
        <ul className={cn(s.OptionsList, { [s.isOpen]: isOpen })}>
          {options?.map((item, index) => (
            <li key={item.ID}>
              <button onClick={(e) => handleSetCurrent(index, e)} type="button">
                {item.NAME.split(' - ')[1]}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputSelect;
