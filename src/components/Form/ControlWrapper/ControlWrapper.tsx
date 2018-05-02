import * as React from "react";

interface Props {
  label: React.ReactNode;
  isRequired?: boolean;
}

interface State {}

export class ControlWrapper extends React.Component<Props, State> {
  render() {
    const { children, label, isRequired } = this.props;

    return (
      <p>
        <span>
          <label htmlFor="">{label}</label>
          {isRequired && <abbr title="required">*</abbr>}
        </span>
        {children}
      </p>
    );
  }
}
