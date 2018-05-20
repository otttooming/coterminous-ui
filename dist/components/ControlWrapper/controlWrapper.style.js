"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
const common = coterminous_styled_1.css `
  margin: 0 0 ${props => props.theme.spacing.medium} 0;
`;
exports.LabelWrapper = coterminous_styled_1.styled.div `
  margin-bottom: ${props => props.theme.spacing.normal};
`;
exports.ControlWrapperStyle = coterminous_styled_1.css `
  ${common};
`;
