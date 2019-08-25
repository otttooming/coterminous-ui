import * as React from 'react';
import { VisibleInput, HiddenInput, Wrapper } from './checkbox.style';

export enum CheckboxType {
  CHECKBOX = 'checkbox',
}

export type CheckedState = boolean | undefined;

type Attributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

export interface State {
  isChecked: CheckedState;
}

export type CheckboxProps = Attributes;

const Checkbox: React.FC<CheckboxProps> = ({ children }) => {
  const [isChecked, setState] = React.useState<CheckedState>(false);
  const handleChange = () => {
    setState(!isChecked);
  };

  return (
    <Wrapper>
      <VisibleInput isChecked={isChecked} />

      <HiddenInput
        type={CheckboxType.CHECKBOX}
        checked={isChecked}
        onChange={handleChange}
      />

      <span>{children}</span>
    </Wrapper>
  );
};

export default Checkbox;
