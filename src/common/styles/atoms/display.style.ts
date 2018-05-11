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

export const visuallyHidden = css`
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;

  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
