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
const coterminous_styled_1 = require("coterminous-styled");
const TextInput_1 = require("./TextInput");
class TextInputFieldBase extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const _a = this.props, { name, tagName, actions } = _a, rest = __rest(_a, ["name", "tagName", "actions"]);
        const { setField } = actions;
        switch (tagName) {
            case TextInput_1.TagName.Input:
                return (React.createElement(TextInput_1.TextInput.Input, Object.assign({}, rest, { onChange: value => setField({
                        [name]: { value },
                    }) })));
            case TextInput_1.TagName.TextArea:
                return (React.createElement(TextInput_1.TextInput.TextArea, Object.assign({}, rest, { onChange: value => setField({
                        [name]: { value },
                    }) })));
            default:
                return null;
        }
    }
}
const TextInputFieldWithFormConsumer = coterminous_styled_1.withFormConsumer(TextInputFieldBase);
exports.TextInputField = {
    Input: (props) => (React.createElement(TextInputFieldWithFormConsumer, Object.assign({}, props, { tagName: TextInput_1.TagName.Input }))),
    TextArea: (props) => (React.createElement(TextInputFieldWithFormConsumer, Object.assign({}, props, { tagName: TextInput_1.TagName.TextArea }))),
};
