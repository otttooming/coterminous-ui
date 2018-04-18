"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// To use ThemedStyledComponentsModule, instead of importing the styled functions from the styled-components module, we import it from our custom module
var styledComponents_1 = require("./common/styles/styledComponents");
exports.styled = styledComponents_1.styled;
exports.css = styledComponents_1.css;
exports.injectGlobal = styledComponents_1.injectGlobal;
exports.keyframes = styledComponents_1.keyframes;
exports.ThemeProvider = styledComponents_1.ThemeProvider;
var keyframes_1 = require("./common/styles/keyframes");
exports.rotate360 = keyframes_1.rotate360;
var Heading_1 = require("./components/Heading/Heading");
exports.Heading = Heading_1.Heading;
