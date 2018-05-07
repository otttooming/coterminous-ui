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
  font-weight: ${props => props.theme.typeface.weight.bold};
`;

export const H1Style = css`
  ${common};
`;

export const H2Style = css`
  ${common};
`;

export const H3Style = css`
  ${common};
`;

export const H4Style = css`
  ${common};
`;

export const H5Style = css`
  ${common};
`;

export const H6Style = css`
  ${common};
`;
