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
  ExternalWithFormConsumerProps;

class RadioButtonFieldBase extends React.Component<
  RadioButtonFieldProps,
  State
> {
  constructor(props: RadioButtonFieldProps) {
    super(props);
  }

  render() {
    const { ...rest } = this.props;

    return <Checkbox {...rest} type={CheckboxType.RADIO} />;
  }
}

const RadioButtonFieldWithFormConsumer = withFormConsumer<
  ExternalWithFormConsumerProps
>(RadioButtonFieldBase);

export const RadioButtonField = (props: RadioButtonFieldProps) => (
  <RadioButtonFieldWithFormConsumer {...props} />
);
