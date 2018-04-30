import * as React from "react";
import { FormContext } from "coterminous-styled";
import { TextInput, TagName } from "./TextInput";

interface Props {
  name: string;
  tagName?: TagName;
}
interface State {}

class TextInputFieldBase extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { name, tagName } = this.props;

    switch (tagName) {
      case TagName.Input:
        return (
          <FormContext.Consumer>
            {({ actions: { setField } }) => (
              <TextInput.Input
                onChange={value => setField({ [name]: { value } })}
              />
            )}
          </FormContext.Consumer>
        );
      case TagName.TextArea:
        return (
          <FormContext.Consumer>
            {({ actions: { setField } }) => (
              <TextInput.TextArea
                onChange={value => setField({ [name]: { value } })}
              />
            )}
          </FormContext.Consumer>
        );
      default:
        return null;
    }
  }
}

export const TextInputField = {
  Input: (props: Props) => (
    <TextInputFieldBase {...props} tagName={TagName.Input} />
  ),
  TextArea: (props: Props) => (
    <TextInputFieldBase {...props} tagName={TagName.TextArea} />
  ),
};
