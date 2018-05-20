"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const display_style_1 = require("./../../common/styles/atoms/display.style");
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
const common = coterminous_styled_1.css `
  margin: 0 0 ${props => props.theme.spacing.medium} 0;
`;
exports.CheckboxStyle = coterminous_styled_1.css `
  ${common};
`;
exports.InputWrapperStyle = coterminous_styled_1.styled.span `
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: ${props => props.theme.border.radius.small};
  margin-right: ${props => props.theme.spacing.medium};
`;
exports.CheckboxLabelWrapper = coterminous_styled_1.styled.label `
  display: flex;
  align-items: center;
`;
exports.HiddenInput = coterminous_styled_1.styled.input `
  ${display_style_1.visuallyHidden};
`;
