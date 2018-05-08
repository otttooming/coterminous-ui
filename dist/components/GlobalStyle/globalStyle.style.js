"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
const constants_1 = require("../../common/styles/constants");
exports.globalStyleCss = coterminous_styled_1.css `
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;

    -webkit-text-size-adjust: none;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    overflow-x: hidden;
    margin: 0;
    line-height: 1.2;
    font-family: ${constants_1.typeface.name.primary};
    color: ${constants_1.color.white};
  }
`;
