"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
exports.arrowCorrection = "15px";
exports.dropdownStyle = coterminous_styled_1.css `
  background: #fff;
  border-radius: ${props => props.theme.border.radius.small};
  padding: ${props => props.theme.spacing.medium};
  color: ${props => props.theme.color.dark};
  position: relative;
  min-width: 300px;
  box-shadow: 0 41px 66px 0 rgba(0, 0, 0, 0.2);
  &[data-placement*="bottom"] {
    top: ${exports.arrowCorrection};
  }
  &[data-placement*="top"] {
    bottom: ${exports.arrowCorrection};
  }
  &[data-placement*="right"] {
    left: ${exports.arrowCorrection};
  }
  &[data-placement*="left"] {
    right: ${exports.arrowCorrection};
  }
`;
exports.Dropdown = coterminous_styled_1.styled("div") `
  ${exports.dropdownStyle};
`;
exports.arrowStyle = coterminous_styled_1.css `
  position: absolute;
  width: 3em;
  height: 3em;
  &[data-placement*="bottom"] {
    top: ${exports.arrowCorrection};
    left: 0;
    margin-top: -0.9em;
    width: 3em;
    height: 1em;
    &::before {
      border-width: 0 1.5em 1em 1.5em;
      border-color: transparent transparent #fff transparent;
    }
  }
  &[data-placement*="top"] {
    bottom: ${exports.arrowCorrection};
    left: 0;
    margin-bottom: -0.9em;
    width: 3em;
    height: 1em;
    &::before {
      border-width: 1em 1.5em 0 1.5em;
      border-color: #fff transparent transparent transparent;
    }
  }
  &[data-placement*="right"] {
    left: ${exports.arrowCorrection};
    margin-left: -0.9em;
    height: 3em;
    width: 1em;
    &::before {
      border-width: 1.5em 1em 1.5em 0;
      border-color: transparent #fff transparent transparent;
    }
  }
  &[data-placement*="left"] {
    right: ${exports.arrowCorrection};
    margin-right: -0.9em;
    height: 3em;
    width: 1em;
    &::before {
      border-width: 1.5em 0 1.5em 1em;
      border-color: transparent transparent transparent#fff;
    }
  }
  &::before {
    content: "";
    margin: auto;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
  }
`;
