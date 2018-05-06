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

const common = css`
  background-color: ${props => props.theme.background.section};
  border-radius: ${props => props.theme.border.radius.small};
  margin-bottom: ${props => props.theme.spacing.normal};
  padding: ${props => props.theme.spacing.large};
`;

export const sectionStyle = css`
  ${common};
`;
