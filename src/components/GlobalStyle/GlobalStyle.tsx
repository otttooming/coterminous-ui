import * as React from "react";

// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
import {
  styled,
  StyledComponentClass, // Required for tsconfig declaration export
  CoterminousStyledThemeProps, // Required for tsconfig declaration export
  Styles, // Required for tsconfig declaration export
  injectGlobal,
} from "coterminous-styled";
import { globalStyleCss } from "./globalStyle.style";

injectGlobal`
  ${globalStyleCss}
`;

export interface Props {}

export class GlobalStyle extends React.Component<Props, {}> {
  render() {
    return "";
  }
}
