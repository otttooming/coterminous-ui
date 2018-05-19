import { border } from "./../../common/styles/constants";
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

const reset = css`
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  color: inherit;
  font-size: inherit;
  &:focus {
    outline: none;
  }
`;

const common = css`
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  padding-left: ${props => props.theme.spacing.medium};
  border-radius: ${props => props.theme.border.radius.small};
  background-color: ${props => props.theme.background.input};
`;

export const selectInputStyle = css`
  ${reset};
  ${common};
  line-height: 48px;
  height: 48px;
`;
