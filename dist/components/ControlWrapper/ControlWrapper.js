"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
const controlWrapper_style_1 = require("./controlWrapper.style");
class ControlWrapperBase extends React.Component {
    render() {
        const { children, className, label, isRequired } = this.props;
        return (React.createElement("div", { className: className },
            React.createElement(controlWrapper_style_1.LabelWrapper, null,
                React.createElement("label", { htmlFor: "" }, label),
                isRequired && React.createElement("abbr", { title: "required" }, "*")),
            children));
    }
}
exports.ControlWrapper = coterminous_styled_1.styled(ControlWrapperBase) `
  ${controlWrapper_style_1.ControlWrapperStyle};
`;
