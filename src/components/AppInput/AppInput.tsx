import React, { FC } from 'react';

type InputTypes = 'text';

interface InputProps {
  type?: InputTypes;
  onChangeHandler?: Function;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
}

export const AppInput: FC<InputProps> = ({
  type, defaultValue, placeholder, onChangeHandler, className,
}: InputProps) => {
  const changeHandler = (value: string) => {
    if (onChangeHandler) onChangeHandler(value);
  };

  return (
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={className}
      onChange={(event) => { changeHandler(event.target.value); }}
    />
  );
};

AppInput.defaultProps = {
  type: 'text',
  onChangeHandler: null,
  defaultValue: '',
  placeholder: '',
  className: '',
};

export default AppInput;
