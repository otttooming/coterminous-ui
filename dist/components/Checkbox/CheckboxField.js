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
const Checkbox_1 = require("./Checkbox");
class CheckboxFieldBase extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const rest = __rest(this.props, []);
        return React.createElement(Checkbox_1.Checkbox, Object.assign({}, rest));
    }
}
const CheckboxFieldWithFormConsumer = coterminous_styled_1.withFormConsumer(CheckboxFieldBase);
exports.CheckboxField = (props) => (React.createElement(CheckboxFieldWithFormConsumer, Object.assign({}, props)));
