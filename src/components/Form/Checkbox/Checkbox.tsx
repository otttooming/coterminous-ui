import * as React from "react";
import { CheckboxStyle } from "./checkbox.style";

// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
import {
  styled,
  StyledComponentClass, // Required for tsconfig declaration export
  CoterminousStyledThemeProps, // Required for tsconfig declaration export
  Styles, // Required for tsconfig declaration export
} from "coterminous-styled";
import {
  ControlWrapperInternalProps, // Required due to TS export requirements. https://github.com/Microsoft/TypeScript/issues/9944
  ControlWrapper,
  ControlWrapperProps,
} from "../ControlWrapper/ControlWrapper";
import { extractControlWrapperProps } from "../ControlWrapper/controlWrapperHelper";

export interface Props {
  onChange?: (value: boolean) => void;
  className?: string;
}

interface State {}

export type CheckboxProps = Props & ControlWrapperProps;

class CheckboxBase extends React.Component<CheckboxProps, State> {
  constructor(props: CheckboxProps) {
    super(props);
  }

  render() {
    const { className, children, ...restProps } = this.props;

    const attributes = { ...restProps, className };

    return this.renderControlWrapper(
      <input type="checkbox" {...attributes} onChange={this.handleChange} />,
    );
  }

  renderControlWrapper = (element: React.ReactNode) => {
    const { label } = this.props;

    return (
      <ControlWrapper {...extractControlWrapperProps(this.props)}>
        {element}
      </ControlWrapper>
    );
  };

  handleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value: boolean = !!event.currentTarget.value;

    this.props.onChange(value);
  };
}

export const Checkbox = styled(CheckboxBase)`
  ${CheckboxStyle};
`;
