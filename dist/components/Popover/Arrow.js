"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
const popover_style_1 = require("./popover.style");
class ArrowBase extends React.Component {
    render() {
        return (React.createElement("div", { ref: this.props.passedRef, style: this.props.style, className: this.props.className, "data-placement": this.props.placement }));
    }
}
exports.Arrow = coterminous_styled_1.styled(ArrowBase) `
  ${popover_style_1.arrowStyle};
`;
