import * as React from "react";
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
import {
  styled,
  StyledComponentClass, // Required for tsconfig declaration export
  NextStyledThemeProps, // Required for tsconfig declaration export
  Styles, // Required for tsconfig declaration export
} from "coterminous-styled";
import { ControlWrapperStyle, LabelWrapper } from "./controlWrapper.style";

interface Props extends Partial<React.HTMLAttributes<HTMLDivElement>> {
  label: React.ReactNode;
  isRequired?: boolean;
}

interface State {}

class ControlWrapperBase extends React.Component<Props, State> {
  render() {
    const { children, className, label, isRequired } = this.props;

    return (
      <div className={className}>
        <LabelWrapper>
          <label htmlFor="">{label}</label>
          {isRequired && <abbr title="required">*</abbr>}
        </LabelWrapper>
        {children}
      </div>
    );
  }
}

export const ControlWrapper = styled(ControlWrapperBase)`
  ${ControlWrapperStyle};
`;
