import * as React from "react";

interface Props {
  onChange: (value: string) => void;
}

interface State {}

export class TextInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <input type="text" onChange={this.handleChange} />;
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    this.props.onChange(value);
  };
}
