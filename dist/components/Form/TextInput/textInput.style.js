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
`;
const common = coterminous_styled_1.css `
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  border-radius: ${props => props.theme.border.radius.medium};
  background-color: ${props => props.theme.background.input};
`;
exports.TextInputStyle = coterminous_styled_1.css `
  ${reset};
  ${common};
`;
