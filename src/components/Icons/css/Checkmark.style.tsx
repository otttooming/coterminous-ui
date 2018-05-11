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

export const Checkmark = styled.span`
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  &:after {
    content: "";
    display: block;
    width: 3px;
    height: 6px;
    border: solid #000;
    border-width: 0 2px 2px 0;
    transform: rotate(44deg) translate3d(-50%, 50%, 0);
    position: absolute;
    top: calc(50% - 6px);
    left: calc(50% + 2px);
  }
`;
