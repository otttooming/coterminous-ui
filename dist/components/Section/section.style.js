"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
const common = coterminous_styled_1.css `
  background-color: ${props => props.theme.background.section};
  border-radius: ${props => props.theme.border.radius.small};
  margin-bottom: ${props => props.theme.spacing.normal};
  padding: ${props => props.theme.spacing.large};
`;
exports.sectionStyle = coterminous_styled_1.css `
  ${common};
`;
