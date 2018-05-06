"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const section_style_1 = require("./section.style");
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
exports.Section = coterminous_styled_1.styled.section `
  ${section_style_1.sectionStyle};
`;
