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
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
const StyledButton = coterminous_styled_1.css `
  border: 0;
  box-shadow: 0 4px 16px 0 rgba(44, 44, 44, 0.26);
  border-radius: 4px;
  background: #7f00ff;
  background: linear-gradient(to right, #7f00ff, #e100ff);
  color: #fff;
  cursor: pointer;
  padding: 12px 24px;
  font: 400 12px/24px sans-serif;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
const StyledGlow = coterminous_styled_1.css `
  opacity: 0.25;
  position: absolute;
  background: radial-gradient(circle closest-side, #fff, transparent);
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
`;
class ButtonBase extends React.Component {
    constructor() {
        super(...arguments);
        this.buttonElement = React.createRef();
        this.state = {
            x: 0,
            y: 0,
            size: 0,
        };
        this.onMouseMove = (e) => {
            if (!this.buttonElement.current) {
                return;
            }
            const x = e.nativeEvent.offsetX - this.buttonElement.current.clientLeft;
            const y = e.nativeEvent.offsetY - this.buttonElement.current.clientTop;
            this.setState(state => {
                return Object.assign({}, state, { x,
                    y });
            });
        };
        this.handleClick = (e) => {
            const { onClick } = this.props;
            if (onClick) {
                onClick();
            }
        };
    }
    onMouseEnter(e) {
        console.log("enter");
        this.setState(state => {
            return Object.assign({}, state, { size: 100 });
        });
    }
    onMouseLeave(e) {
        console.log("leave");
        this.setState(state => {
            return Object.assign({}, state, { size: 0 });
        });
    }
    render() {
        const _a = this.props, { children } = _a, other = __rest(_a, ["children"]);
        return (React.createElement("button", Object.assign({ ref: this.buttonElement, onMouseMove: e => this.onMouseMove(e), onMouseEnter: e => this.onMouseEnter(e), onMouseLeave: e => this.onMouseLeave(e), onClick: this.handleClick }, other),
            children,
            React.createElement(exports.Glow, Object.assign({}, this.state))));
    }
}
const GlowBase = props => {
    const inlineStyle = {
        left: `${props.x}px`,
        top: `${props.y}px`,
        width: `${props.size}px`,
        height: `${props.size}px`,
    };
    return (React.createElement("span", { className: props.className, style: inlineStyle }, props.children));
};
exports.Glow = coterminous_styled_1.styled(GlowBase) `
  ${StyledGlow};
`;
exports.Button = coterminous_styled_1.styled(ButtonBase) `
  ${StyledButton};
`;
