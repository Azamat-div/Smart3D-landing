import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './Input.module.scss';

interface IProps {
  value: string;
  setValue: (value: string) => void;
  className?: string;
  placeholder?: string;
}

const Input: React.FC<IProps> = ({ value, setValue, className = '', placeholder = '' }) => {
  const [isActive, setIsActive] = useState(false);
  const InputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleFocus = () => {
    if (!isActive) {
      setIsActive(true);
    }
  };

  const handlePlaceholderClick = () => {
    if (!isActive && InputRef.current) {
      InputRef.current.focus();
    }
  };

  const handleBlur = () => {
    if (!value) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    if (value && !isActive) {
      setIsActive(true);
    } else if (!value && isActive) {
      setIsActive(false);
    }
  }, [value]);

  return (
    <div className={cn(s.root, className)}>
      {placeholder && (
        <button
          type="button"
          className={cn(s.placeholder, { [s.isActive]: isActive })}
          onClick={handlePlaceholderClick}
        >
          {placeholder}
        </button>
      )}
      <input
        type="text"
        value={value}
        onChange={handleOnChange}
        className={s.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={InputRef}
      />
    </div>
  );
};

export default Input;
