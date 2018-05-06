"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rootSize = 16;
function convertNumberToPx(px) {
    return `${px}px`;
}
function convertPxToRem(px, root) {
    return `${px / root}rem`;
}
function convertPxToEm(px, root) {
    return `${px / root}em`;
}
exports.color = {
    dark: "#000",
    red: "#a30000",
    warm: "#ffc000",
    white: "#fff",
};
exports.background = {
    main: "rgba(186, 0, 251, .15)",
    input: "rgba(186, 0, 251, .15)",
    section: "#670b88",
};
exports.border = {
    radius: { small: "4px", medium: "16px", large: "24px" },
};
exports.spacing = {
    small: convertPxToRem(4, rootSize),
    normal: convertPxToRem(8, rootSize),
    medium: convertPxToRem(16, rootSize),
    large: convertPxToRem(24, rootSize),
};
exports.typeface = {
    name: {
        primary: `'Oswald', 'Helvetica Neue', Arial, sans-serif`,
        secondary: `'Helvetica Neue', Arial, sans-serif`,
    },
    weight: { thin: 100, light: 300, normal: 400, bold: 700 },
    size: {
        small: convertPxToEm(12, rootSize),
        normal: convertPxToEm(16, rootSize),
    },
};
exports.transition = { speed: { normal: 500 } };
exports.shadow = { main: "none" };
