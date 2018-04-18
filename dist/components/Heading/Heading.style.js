"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const next_styled_1 = require("next-styled");
const common = next_styled_1.css `
  margin: 0 0 0.5rem 0;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: ${props => props.theme.primaryColor};
`;
exports.H1Style = next_styled_1.css `
  ${common};
`;
exports.H2Style = next_styled_1.css `
  ${common};
`;
exports.H3Style = next_styled_1.css `
  ${common};
`;
exports.H4Style = next_styled_1.css `
  ${common};
`;
exports.H5Style = next_styled_1.css `
  ${common};
`;
exports.H6Style = next_styled_1.css `
  ${common};
`;
