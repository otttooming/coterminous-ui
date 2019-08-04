import * as React from 'react';
import { Wrapper } from './input.style';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ ...restProps }) => {
  return <Wrapper {...restProps} />;
};

export default Input;
