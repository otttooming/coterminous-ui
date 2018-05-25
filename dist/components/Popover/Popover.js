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
const react_popper_1 = require("react-popper");
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
const popover_style_1 = require("./popover.style");
class PopoverBase extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const restProps = __rest(this.props, []);
        const attributes = Object.assign({}, restProps);
        return (React.createElement(react_popper_1.Manager, null,
            React.createElement(react_popper_1.Reference, null, props => this.props.children(props)),
            this.props.isOpen && (React.createElement(react_popper_1.Popper, { placement: "bottom" }, ({ ref, style, placement, arrowProps }) => (React.createElement("aside", { ref: ref, style: style, "data-placement": placement },
                React.createElement(Arrow, { passedRef: arrowProps.ref, style: arrowProps.style, placement: placement }),
                React.createElement(popover_style_1.Dropdown, { "data-placement": placement }, this.props.popoverChildren())))))));
    }
}
exports.PopoverBase = PopoverBase;
exports.Popover = PopoverBase;
class ArrowBase extends React.Component {
    render() {
        return (React.createElement("div", { ref: this.props.passedRef, style: this.props.style, className: this.props.className, "data-placement": this.props.placement }));
    }
}
const Arrow = coterminous_styled_1.styled(ArrowBase) `
  ${popover_style_1.arrowStyle};
`;
