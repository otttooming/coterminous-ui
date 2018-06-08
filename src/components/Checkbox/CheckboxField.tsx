import * as React from "react";
import {
  FormContext,
  FormState,
  withFormConsumer,
  ExternalWithFormConsumerProps,
} from "coterminous-styled";
import { Checkbox, CheckboxProps } from "./Checkbox";

export interface Props {}
interface State {}

export type CheckboxFieldProps = Props &
  CheckboxProps &
  ExternalWithFormConsumerProps;

class CheckboxFieldBase extends React.Component<CheckboxFieldProps, State> {
  constructor(props: CheckboxFieldProps) {
    super(props);
  }

  render() {
    const { ...rest } = this.props;

    return <Checkbox {...rest} />;
  }
}

const CheckboxFieldWithFormConsumer = withFormConsumer<
  ExternalWithFormConsumerProps
>(CheckboxFieldBase);

export const CheckboxField = (props: CheckboxFieldProps) => (
  <CheckboxFieldWithFormConsumer {...props} />
);
