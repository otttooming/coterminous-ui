"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const coterminous_styled_1 = require("coterminous-styled");
const TextInput_1 = require("./TextInput");
class TextInputFieldBase extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, tagName } = this.props;
        switch (tagName) {
            case TextInput_1.TagName.Input:
                return (React.createElement(coterminous_styled_1.FormContext.Consumer, null, ({ actions: { setField } }) => (React.createElement(TextInput_1.TextInput.Input, { onChange: value => setField({ [name]: { value } }) }))));
            case TextInput_1.TagName.TextArea:
                return (React.createElement(coterminous_styled_1.FormContext.Consumer, null, ({ actions: { setField } }) => (React.createElement(TextInput_1.TextInput.TextArea, { onChange: value => setField({ [name]: { value } }) }))));
            default:
                return null;
        }
    }
}
exports.TextInputField = {
    Input: (props) => (React.createElement(TextInputFieldBase, Object.assign({}, props, { tagName: TextInput_1.TagName.Input }))),
    TextArea: (props) => (React.createElement(TextInputFieldBase, Object.assign({}, props, { tagName: TextInput_1.TagName.TextArea }))),
};
