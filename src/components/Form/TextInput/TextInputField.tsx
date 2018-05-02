import * as React from "react";
import { FormContext, FormState, withFormConsumer } from "coterminous-styled";
import { TextInput, TextInputProps, TagName } from "./TextInput";

interface Props {
  name: string;
  tagName?: TagName;
}
interface State {}

export type TextInputFieldProps = Props & Partial<FormState> & TextInputProps;

class TextInputFieldBase extends React.Component<TextInputFieldProps, State> {
  constructor(props: TextInputFieldProps) {
    super(props);
  }

  render() {
    const { name, tagName, actions, ...rest } = this.props;
    const { setField } = actions;

    switch (tagName) {
      case TagName.Input:
        return (
          <TextInput.Input
            {...rest}
            onChange={value =>
              setField({
                [name]: { value },
              })
            }
          />
        );
      case TagName.TextArea:
        return (
          <TextInput.TextArea
            {...rest}
            onChange={value =>
              setField({
                [name]: { value },
              })
            }
          />
        );
      default:
        return null;
    }
  }
}

const TextInputFieldWithFormConsumer = withFormConsumer(TextInputFieldBase);

export const TextInputField = {
  Input: (props: TextInputFieldProps) => (
    <TextInputFieldWithFormConsumer {...props} tagName={TagName.Input} />
  ),
  TextArea: (props: TextInputFieldProps) => (
    <TextInputFieldWithFormConsumer {...props} tagName={TagName.TextArea} />
  ),
};
