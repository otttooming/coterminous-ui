"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
const common = coterminous_styled_1.css `
  margin: 0 0 0.5rem 0;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
`;
exports.H1Style = coterminous_styled_1.css `
  ${common};
`;
exports.H2Style = coterminous_styled_1.css `
  ${common};
`;
exports.H3Style = coterminous_styled_1.css `
  ${common};
`;
exports.H4Style = coterminous_styled_1.css `
  ${common};
`;
exports.H5Style = coterminous_styled_1.css `
  ${common};
`;
exports.H6Style = coterminous_styled_1.css `
  ${common};
`;
