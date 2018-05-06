"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
const globalStyle_style_1 = require("./globalStyle.style");
coterminous_styled_1.injectGlobal `
  ${globalStyle_style_1.globalStyleCss}
`;
class GlobalStyle extends React.Component {
    render() {
        return "";
    }
}
exports.GlobalStyle = GlobalStyle;
