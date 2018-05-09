import * as React from "react";
import { FormContext, FormState, withFormConsumer } from "coterminous-styled";
import { Checkbox, CheckboxProps } from "./Checkbox";

export interface Props {
  name: string;
}
interface State {}

export type CheckboxFieldProps = Props & Partial<FormState> & CheckboxProps;

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
