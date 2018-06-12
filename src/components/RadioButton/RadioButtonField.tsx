import * as React from "react";
import {
  FormContext,
  FormState,
  withFormConsumer,
  ExternalWithFormConsumerProps,
  Checkbox,
  CheckboxProps,
} from "coterminous-styled";
import { CheckboxType } from "../Checkbox/Checkbox";

export interface Props {}
interface State {}

export type RadioButtonFieldProps = Props &
  CheckboxProps &
  ExternalWithFormConsumerProps &
  Partial<FormState>;

class RadioButtonFieldBase extends React.Component<
  RadioButtonFieldProps,
  State
> {
  constructor(props: RadioButtonFieldProps) {
    super(props);
  }

  render() {
    const { fields, name, value, label, inputLabel, onChange } = this.props;

    const checked: boolean =
      fields && fields[name] ? value === fields[name].state : false;

    return (
      <Checkbox
        type={CheckboxType.RADIO}
        name={name}
        label={label}
        value={value}
        inputLabel={inputLabel}
        checked={checked}
        onChange={onChange}
      />
    );
  }
}

const RadioButtonFieldWithFormConsumer = withFormConsumer<
  ExternalWithFormConsumerProps
>(RadioButtonFieldBase);

export const RadioButtonField = (props: RadioButtonFieldProps) => (
  <RadioButtonFieldWithFormConsumer {...props} />
);
