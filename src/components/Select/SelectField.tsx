import * as React from "react";
import {
  FormContext,
  FormState,
  withFormConsumer,
  withFormConsumerProps,
} from "coterminous-styled";
import { Select, SelectProps } from "./Select";

export interface Props {}
interface State {}

export type SelectFieldProps = Props &
  Partial<FormState> &
  SelectProps &
  withFormConsumerProps;

class SelectFieldBase extends React.Component<SelectFieldProps, State> {
  constructor(props: SelectFieldProps) {
    super(props);
  }

  render() {
    const { name, actions, ...rest } = this.props;
    const { setField } = actions;

    return (
      <Select
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

const SelectFieldWithFormConsumer = withFormConsumer(SelectFieldBase);

export const SelectField = (props: SelectFieldProps) => (
  <SelectFieldWithFormConsumer {...props} />
);
