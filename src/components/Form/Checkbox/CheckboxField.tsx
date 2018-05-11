import * as React from "react";
import {
  FormContext,
  FormState,
  withFormConsumer,
  FormComponentProps,
} from "coterminous-styled";
import { Checkbox, CheckboxProps } from "./Checkbox";

export interface Props {}
interface State {}

export type CheckboxFieldProps = Props &
  Partial<FormState> &
  CheckboxProps &
  FormComponentProps;

class CheckboxFieldBase extends React.Component<CheckboxFieldProps, State> {
  constructor(props: CheckboxFieldProps) {
    super(props);
  }

  render() {
    const { name, actions, ...rest } = this.props;
    const { setField } = actions;

    return (
      <Checkbox
        {...rest}
        onChange={value =>
          setField({
            [name]: { value },
          })
        }
      />
    );
  }
}

const CheckboxFieldWithFormConsumer = withFormConsumer(CheckboxFieldBase);

export const CheckboxField = (props: CheckboxFieldProps) => (
  <CheckboxFieldWithFormConsumer {...props} />
);
