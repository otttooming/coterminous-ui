import * as React from "react";
import {
  FormContext,
  FormState,
  withFormConsumer,
  ExternalWithFormConsumerProps,
} from "coterminous-styled";
import { TextInput, TextInputProps, TagName } from "./TextInput";

export interface Props {}

interface State {}

export type TextInputFieldProps = Props &
  TextInputProps &
  ExternalWithFormConsumerProps;

class TextInputFieldBase extends React.Component<TextInputFieldProps, State> {
  constructor(props: TextInputFieldProps) {
    super(props);
  }

  render() {
    const { name, tagName, ...rest } = this.props;

    switch (tagName) {
      case TagName.Input:
        return <TextInput.Input {...rest} />;
      case TagName.TextArea:
        return <TextInput.TextArea {...rest} />;
      default:
        return null;
    }
  }
}

const TextInputFieldWithFormConsumer = withFormConsumer<TextInputFieldProps>(
  TextInputFieldBase,
);

export const TextInputField = {
  Input: (props: TextInputFieldProps) => (
    <TextInputFieldWithFormConsumer {...props} tagName={TagName.Input} />
  ),
  TextArea: (props: TextInputFieldProps) => (
    <TextInputFieldWithFormConsumer {...props} tagName={TagName.TextArea} />
  ),
};
