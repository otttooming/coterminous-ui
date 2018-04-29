import * as React from "react";
import { FormContext } from "coterminous-styled";
import { TextInput } from "./TextInput";

interface Props {}
interface State {}

export class TextInputField extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <FormContext.Consumer>
        {({ actions: { setField } }) => (
          <TextInput
            onChange={() => setField({ field1: { value: Math.random() } })}
          />
        )}
      </FormContext.Consumer>
    );
  }
}
