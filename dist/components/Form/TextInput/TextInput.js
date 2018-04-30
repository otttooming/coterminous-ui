"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const textInput_style_1 = require("./textInput.style");
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
// Enum must be exported or 'has or is using private name' error will occur
var TagName;
(function (TagName) {
    TagName["Input"] = "input";
    TagName["TextArea"] = "h1";
})(TagName = exports.TagName || (exports.TagName = {}));
class TextInputBase extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (event) => {
            const value = event.currentTarget.value;
            this.props.onChange(value);
        };
    }
    render() {
        const _a = this.props, { className, children, tagName = TagName.Input } = _a, restProps = __rest(_a, ["className", "children", "tagName"]);
        const attributes = Object.assign({}, restProps, { className });
        switch (tagName) {
            case TagName.Input:
                return (React.createElement("input", Object.assign({}, attributes, { type: "text", onChange: this.handleChange })));
            case TagName.TextArea:
                return React.createElement("textarea", Object.assign({}, attributes, { onChange: this.handleChange }));
            default:
                return null;
        }
    }
}
exports.TextInput = {
    Input: coterminous_styled_1.styled(TextInputBase).attrs({
        tagName: TagName.Input,
    }) `
    ${textInput_style_1.TextInputStyle};
  `,
    TextArea: coterminous_styled_1.styled(TextInputBase).attrs({
        tagName: TagName.TextArea,
    }) `
    ${textInput_style_1.TextInputStyle};
  `,
};
