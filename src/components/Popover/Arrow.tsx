import * as React from "react";

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
import { Dropdown, arrowStyle } from "./popover.style";

interface ArrowProps {
  passedRef: (ref: HTMLElement | null) => void;
  style: React.CSSProperties;
  className?: string;
  placement: string;
}

class ArrowBase extends React.Component<ArrowProps, any> {
  render() {
    return (
      <div
        ref={this.props.passedRef}
        style={this.props.style}
        className={this.props.className}
        data-placement={this.props.placement}
      />
    );
  }
}

export const Arrow = styled(ArrowBase)`
  ${arrowStyle};
`;
