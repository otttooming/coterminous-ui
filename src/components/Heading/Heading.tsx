import * as React from "react";
import { H1Style } from "./Heading.style";

// TS error if Styles and StyledComponentClass not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
import styled, { StyledComponentClass } from "styled-components";

export interface Props
  extends Partial<React.HTMLAttributes<HTMLHeadingElement>> {
  children?: React.ReactChild;
  className?: string;
}

// type Props = Props1 & Partial<React.HTMLAttributes<HTMLHeadingElement>>;

export class H1 extends React.Component<Props, {}> {
  render() {
    const { className, children, ...restProps } = this.props;

    return (
      <h1 {...restProps} className={className}>
        {children}
      </h1>
    );
  }
}

export const Heading = {
  H1: styled(H1)`
    ${H1Style};
  `,
};
