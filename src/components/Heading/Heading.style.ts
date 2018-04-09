// TS error if Styles and StyledComponentClass not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
import { css, Styles, StyledComponentClass } from "styled-components";

const common = css`
  margin: 0 0 0.5rem 0;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
`;

export const H1Style = css`
  ${common};
`;
