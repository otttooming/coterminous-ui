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
import { typeface, color } from "../../common/styles/constants";
import { legacy } from "./legacy.style";

export const globalStyleCss = css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;

    -webkit-text-size-adjust: none;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    overflow-x: hidden;
    margin: 0;
    line-height: 1.2;
    font-family: ${typeface.name.primary};
    color: ${color.white};
  }

  ${legacy};
`;
