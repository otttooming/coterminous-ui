import * as React from "react";
import * as styledComponents from "styled-components";

// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
import {
  ThemedStyledComponentsModule, // Required for tsconfig declaration export
  Styles, // Required for tsconfig declaration export
  StyledComponentClass, // Required for tsconfig declaration export
  InterpolationFunction, // Required for tsconfig declaration export
  ThemeProps, // Required for tsconfig declaration export
} from "styled-components";

import { NextStyledThemeProps } from "./theme";

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<NextStyledThemeProps>;

export {
  styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  Styles,
  StyledComponentClass,
  InterpolationFunction,
  ThemeProps,
  NextStyledThemeProps,
};
