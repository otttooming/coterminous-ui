"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
exports.Checkmark = coterminous_styled_1.styled.span `
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  &:after {
    content: "";
    display: block;
    width: 3px;
    height: 6px;
    border: solid #000;
    border-width: 0 2px 2px 0;
    transform: rotate(44deg) translate3d(-50%, 50%, 0);
    position: absolute;
    top: calc(50% - 6px);
    left: calc(50% + 2px);
  }
`;
