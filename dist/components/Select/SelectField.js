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
const Select_1 = require("./Select");
class SelectFieldBase extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const _a = this.props, { name } = _a, rest = __rest(_a, ["name"]);
        return React.createElement(Select_1.Select, Object.assign({}, rest));
    }
}
const SelectFieldWithFormConsumer = coterminous_styled_1.withFormConsumer(SelectFieldBase);
exports.SelectField = (props) => (React.createElement(SelectFieldWithFormConsumer, Object.assign({}, props)));
