import { visuallyHidden } from "./../../../common/styles/atoms/display.style";
import * as React from "react";

// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
import {
  css,
  styled, // Required for tsconfig declaration export
  Styles, // Required for tsconfig declaration export
  StyledComponentClass, // Required for tsconfig declaration export
  InterpolationFunction, // Required for tsconfig declaration export
  ThemeProps, // Required for tsconfig declaration export
  CoterminousStyledThemeProps, // Required for tsconfig declaration export
} from "coterminous-styled";

const common = css`
  margin: 0 0 ${props => props.theme.spacing.medium} 0;
`;

export const CheckboxStyle = css`
  ${common};
`;

export const InputWrapperStyle = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: ${props => props.theme.border.radius.small};
  margin-right: ${props => props.theme.spacing.medium};
`;

export const CheckboxLabelWrapper = styled.label`
  display: flex;
  align-items: center;
`;

export const HiddenInput = styled.input`
  ${visuallyHidden};
`;
