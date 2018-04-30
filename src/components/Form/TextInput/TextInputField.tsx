import * as React from "react";
import { FormContext, FormState, withFormConsumer } from "coterminous-styled";
import { TextInput, TagName } from "./TextInput";

export interface Props extends Partial<FormState> {
  name: string;
  tagName?: TagName;
}
interface State {}

class TextInputFieldBase extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { name, tagName, actions } = this.props;
    const { setField } = actions;

    switch (tagName) {
      case TagName.Input:
        return (
          <TextInput.Input
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
  Input: (props: Props) => (
    <TextInputFieldWithFormConsumer {...props} tagName={TagName.Input} />
  ),
  TextArea: (props: Props) => (
    <TextInputFieldWithFormConsumer {...props} tagName={TagName.TextArea} />
  ),
};
