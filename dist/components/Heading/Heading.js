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
const Heading_style_1 = require("./Heading.style");
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
// Enum must be exported or 'has or is using private name' error will occur
var TagName;
(function (TagName) {
    TagName["H1"] = "h1";
    TagName["H2"] = "h2";
    TagName["H3"] = "h3";
    TagName["H4"] = "h4";
    TagName["H5"] = "h5";
    TagName["H6"] = "h6";
})(TagName = exports.TagName || (exports.TagName = {}));
// type Props = Props1 & Partial<React.HTMLAttributes<HTMLHeadingElement>>;
class HeadingBase extends React.Component {
    constructor() {
        super(...arguments);
        this.renderChildren = () => {
            const { children } = this.props;
            return children;
        };
    }
    render() {
        const _a = this.props, { className, children, tagName = TagName.H1 } = _a, restProps = __rest(_a, ["className", "children", "tagName"]);
        const attributes = Object.assign({}, restProps, { className });
        switch (tagName) {
            case TagName.H1:
                return React.createElement("h1", Object.assign({}, attributes), this.renderChildren());
            case TagName.H2:
                return React.createElement("h2", Object.assign({}, attributes), this.renderChildren());
            case TagName.H3:
                return React.createElement("h3", Object.assign({}, attributes), this.renderChildren());
            case TagName.H4:
                return React.createElement("h4", Object.assign({}, attributes), this.renderChildren());
            case TagName.H5:
                return React.createElement("h5", Object.assign({}, attributes), this.renderChildren());
            case TagName.H6:
                return React.createElement("h6", Object.assign({}, attributes), this.renderChildren());
            default:
                return null;
        }
    }
}
exports.Heading = {
    H1: coterminous_styled_1.styled(HeadingBase).attrs({
        tagName: TagName.H1,
    }) `
    ${Heading_style_1.H1Style};
  `,
    H2: coterminous_styled_1.styled(HeadingBase).attrs({
        tagName: TagName.H2,
    }) `
    ${Heading_style_1.H2Style};
  `,
    H3: coterminous_styled_1.styled(HeadingBase).attrs({
        tagName: TagName.H3,
    }) `
    ${Heading_style_1.H3Style};
  `,
    H4: coterminous_styled_1.styled(HeadingBase).attrs({
        tagName: TagName.H4,
    }) `
    ${Heading_style_1.H4Style};
  `,
    H5: coterminous_styled_1.styled(HeadingBase).attrs({
        tagName: TagName.H5,
    }) `
    ${Heading_style_1.H5Style};
  `,
    H6: coterminous_styled_1.styled(HeadingBase).attrs({
        tagName: TagName.H6,
    }) `
    ${Heading_style_1.H6Style};
  `,
};
