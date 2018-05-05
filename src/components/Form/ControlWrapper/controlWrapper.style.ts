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
  margin: 0 0 1rem 0;
`;

export const LabelWrapper = styled.div`
  margin-bottom: 1em;
`;

export const ControlWrapperStyle = css`
  ${common};
`;
