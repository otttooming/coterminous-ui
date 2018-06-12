"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const coterminous_styled_1 = require("coterminous-styled");
const Checkbox_1 = require("../Checkbox/Checkbox");
class RadioButtonFieldBase extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { fields, name, value, label, inputLabel, onChange } = this.props;
        const checked = fields && fields[name] ? value === fields[name].state : false;
        return (React.createElement(coterminous_styled_1.Checkbox, { type: Checkbox_1.CheckboxType.RADIO, name: name, label: label, value: value, inputLabel: inputLabel, checked: checked, onChange: onChange }));
    }
}
const RadioButtonFieldWithFormConsumer = coterminous_styled_1.withFormConsumer(RadioButtonFieldBase);
exports.RadioButtonField = (props) => (React.createElement(RadioButtonFieldWithFormConsumer, Object.assign({}, props)));
