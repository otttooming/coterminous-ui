import * as React from "react";
import { FormContext } from "coterminous-styled";
import { TextInput } from "./TextInput";

interface Props {
  name: string;
}
interface State {}

export class TextInputField extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { name } = this.props;

    return (
      <FormContext.Consumer>
        {({ actions: { setField } }) => (
          <TextInput onChange={value => setField({ [name]: { value } })} />
        )}
      </FormContext.Consumer>
    );
  }
}
