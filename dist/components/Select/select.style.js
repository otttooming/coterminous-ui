"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
const reset = coterminous_styled_1.css `
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
const common = coterminous_styled_1.css `
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  padding-left: ${props => props.theme.spacing.medium};
  border-radius: ${props => props.theme.border.radius.small};
  background-color: ${props => props.theme.background.input};
`;
exports.selectInputStyle = coterminous_styled_1.css `
  ${reset};
  ${common};
  line-height: 48px;
  height: 48px;
`;
