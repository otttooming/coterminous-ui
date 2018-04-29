import * as React from "react";

interface Props {
  onChange: () => void;
}

interface State {}

export class TextInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <input type="text" onChange={this.handleChange} />;
  }

  handleChange = () => {
    this.props.onChange();
  };
}
