import * as React from "react";
import {
  FormContext,
  FormState,
  withFormConsumer,
  ExternalWithFormConsumerProps,
} from "coterminous-styled";
import { Select, SelectProps } from "./Select";

export interface Props {}
interface State {}

export type SelectFieldProps = Props &
  SelectProps &
  ExternalWithFormConsumerProps;

class SelectFieldBase extends React.Component<SelectFieldProps, State> {
  constructor(props: SelectFieldProps) {
    super(props);
  }

  render() {
    const { name, ...rest } = this.props;

    return <Select {...rest} />;
  }
}

const SelectFieldWithFormConsumer = withFormConsumer<SelectFieldProps>(
  SelectFieldBase,
);

export const SelectField = (props: SelectFieldProps) => (
  <SelectFieldWithFormConsumer {...props} />
);
