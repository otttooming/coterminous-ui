"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
const coterminous_styled_1 = require("coterminous-styled");
exports.legacy = coterminous_styled_1.css `
  @font-face {
    font-family: "Oswald";
    src: url("/static/fonts/oswald-extralight.woff2") format("woff2"),
      url("/static/fonts/oswald-extralight.woff") format("woff");
    font-style: normal;
    font-weight: 200;
  }

  @font-face {
    font-family: "Oswald";
    src: url("/static/fonts/oswald-light.woff2") format("woff2"),
      url("/static/fonts/oswald-light.woff") format("woff");
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: "Oswald";
    src: url("/static/fonts/oswald-regular.woff2") format("woff2"),
      url("/static/fonts/oswald-regular.woff") format("woff");
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: "Oswald";
    src: url("/static/fonts/oswald-medium.woff2") format("woff2"),
      url("/static/fonts/oswald-medium.woff") format("woff");
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: "Oswald";
    src: url("/static/fonts/oswald-demibold.woff2") format("woff2"),
      url("/static/fonts/oswald-demibold.woff") format("woff");
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: "Oswald";
    src: url("/static/fonts/oswald-bold.woff2") format("woff2"),
      url("/static/fonts/oswald-bold.woff") format("woff");
    font-style: normal;
    font-weight: 700;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 1em;
    -webkit-text-size-adjust: none;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  @media screen and (max-width: 767px) {
    html {
      font-size: 0.75em;
    }
  }

  body {
    overflow-x: hidden;
    margin: 0;
    text-shadow: none;
    font-family: "Oswald", "Helvetica Neue", Arial, sans-serif;
    color: #fff;
    font-size: 0.875rem;
  }

  a {
    display: inline-block;
    max-width: 100%;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 8px 0;
    font-weight: 400;
    line-height: 1.2;
  }

  h1,
  h2 {
    text-transform: uppercase;
    font-weight: 400;
  }

  p,
  td {
    font-family: "Helvetica Neue", Arial, sans-serif;
  }

  p {
    margin: 8px 0;
    line-height: 1.4;
  }
  p a {
    color: #ffc000;
  }

  div {
    box-sizing: border-box;
  }

  fieldset {
    margin: 4px 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-family: "Helvetica Neue", Arial, sans-serif;
  }

  tr.alt {
    background: rgba(186, 0, 251, 0.15);
  }

  th,
  td {
    padding: 10px;
    text-align: left;
    border: 0;
    font-weight: 400;
  }
  @media (max-width: 767px) {
    th,
    td {
      padding: 5px;
    }
  }

  dl {
    margin: 0;
  }

  dt,
  dd {
    display: inline-block;
    margin: 0;
  }

  figure {
    margin: 0;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  .img--shadow {
    box-shadow: none;
  }

  .img--rounded {
    border-radius: 4px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  input {
    margin: 8px 0;
    padding: 0;
  }
  input[type="text"] {
    min-height: 30px;
  }
  input[type="number"] {
    text-align: center;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="checkbox"],
  input[type="radio"] {
    position: relative;
    width: 20px;
    height: 20px;
    color: #fff;
    border: 1px solid #00b31a;
    border-radius: 50%;
    background: rgba(52, 6, 68, 0.5);
    box-shadow: none;
    text-shadow: none;
    -webkit-appearance: none;
  }
  input[type="checkbox"]:checked,
  input[type="radio"]:checked {
    background: #00b31a;
  }
  input[type="checkbox"]:checked:after,
  input[type="radio"]:checked:after {
    position: absolute;
    top: 50%;
    left: 50%;
    content: "✔";
    transform: translate3d(-50%, -50%, 0);
  }

  textarea::-webkit-input-placeholder,
  input::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  textarea::-moz-placeholder,
  input::-moz-placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  textarea:-ms-input-placeholder,
  input:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  select,
  input[type="text"],
  input[type="tel"],
  input[type="email"],
  input[type="password"],
  input[type="number"] {
    box-sizing: border-box;
    margin: 8px 0;
    padding: 0 10px;
    vertical-align: middle;
    color: inherit;
    border: none;
    border-radius: 15px;
    outline: none;
    background: rgba(186, 0, 251, 0.15);
    box-shadow: none;
    font-size: 0.875em;
    line-height: 30px;
    height: 30px;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  select {
    cursor: pointer;
    font-family: "Oswald", "Helvetica Neue", Arial, sans-serif;
    background: #ffc000;
    color: #340644;
    border-radius: 4px;
    max-width: 100%;
  }

  label {
    display: block;
    margin-top: 4px;
    margin-bottom: 4px;
    font-family: "Helvetica Neue", Arial, sans-serif;
  }

  textarea {
    box-sizing: border-box;
    color: #fff;
    border: 0;
    border-radius: 4px;
    background: rgba(52, 6, 68, 0.5);
    box-shadow: none;
    text-shadow: none;
    width: 100%;
    min-height: 300px;
    padding: 10px;
  }

  hr {
    width: 100%;
    margin: 15px 0;
    border-width: 0;
    border-top: 1px solid rgba(52, 6, 68, 0.5);
  }

  del,
  ins {
    white-space: nowrap;
    text-decoration: none;
  }

  del {
    position: relative;
  }
  del:before {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 75%;
    content: "";
    transform: translate3d(-50%, 0, 0);
    border-top: 3px solid #340644;
    border-radius: 4px;
    box-shadow: none;
  }

  mark {
    color: inherit;
    background: transparent;
  }

  address {
    font-family: "Helvetica Neue", Arial, sans-serif;
  }

  blockquote {
    position: relative;
    font-size: 1em;
    background-color: rgba(186, 0, 251, 0.15);
    border-radius: 4px;
    padding: 4px 16px;
    margin: 16px 0;
    padding-left: 48px;
  }
  blockquote:before {
    content: "\“";
    position: absolute;
    left: 16px;
    font-size: 40px;
    top: 6px;
  }

  .required {
    color: #a30000;
  }

  .edit {
    color: #ffc000;
  }

  .amount {
    display: inline-block;
    padding: 4px 8px;
    color: #fff;
    border-radius: 4px;
    background: linear-gradient(to left, #9f2af8, #f82a53);
    box-shadow: none;
    font-family: "Oswald", "Helvetica Neue", Arial, sans-serif;
    line-height: normal;
  }
  .product__price-block .amount {
    padding: 0;
    box-shadow: none;
  }

  .qty {
    width: 50px;
  }

  .d-inlineblock {
    display: inline-block;
  }

  .ws-wrap {
    white-space: normal !important;
  }

  .content__common {
    font-family: "Helvetica Neue", Arial, sans-serif;
    text-shadow: none;
  }

  .bg__common {
    border-radius: 4px;
    background: rgba(186, 0, 251, 0.15);
    box-shadow: none;
  }
  .bg__common--light {
    background: rgba(255, 255, 255, 0.85);
    color: #000;
  }

  .bg__site {
    position: fixed;
    background-image: radial-gradient(
      circle at 50%,
      rgba(17, 52, 181, 0.9) 40%,
      rgba(234, 0, 64, 0.9) 100%
    );
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transform: translate3d(0, 0, 0);
    z-index: -1;
    backface-visibility: hidden;
  }

  .container {
    box-sizing: border-box;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 16px;
    padding-left: 16px;
  }
  .container--no-gutters {
    padding-right: 0;
    padding-left: 0;
  }

  .row {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    margin-right: -8px;
    margin-left: -8px;
    flex: 0 1 auto;
    flex-wrap: wrap;
  }
  .row--no-gutters {
    margin: 0;
  }
  .row--reverse {
    flex-direction: row-reverse;
  }

  .col--reverse {
    flex-direction: column-reverse;
  }

  .col-xs,
  .col-xs-1,
  .col-xs-2,
  .col-xs-3,
  .col-xs-4,
  .col-xs-5,
  .col-xs-6,
  .col-xs-7,
  .col-xs-8,
  .col-xs-9,
  .col-xs-10,
  .col-xs-11,
  .col-xs-12,
  .col-xs-offset-0,
  .col-xs-offset-1,
  .col-xs-offset-2,
  .col-xs-offset-3,
  .col-xs-offset-4,
  .col-xs-offset-5,
  .col-xs-offset-6,
  .col-xs-offset-7,
  .col-xs-offset-8,
  .col-xs-offset-9,
  .col-xs-offset-10,
  .col-xs-offset-11,
  .col-xs-offset-12 {
    padding: 8px;
    flex: 0 0 auto;
  }

  .col-xs {
    max-width: 100%;
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xs-1 {
    max-width: 8.33333333%;
    flex-basis: 8.33333333%;
  }

  .col-xs-2 {
    max-width: 16.66666667%;
    flex-basis: 16.66666667%;
  }

  .col-xs-3 {
    max-width: 25%;
    flex-basis: 25%;
  }

  .col-xs-4 {
    max-width: 33.33333333%;
    flex-basis: 33.33333333%;
  }

  .col-xs-5 {
    max-width: 41.66666667%;
    flex-basis: 41.66666667%;
  }

  .col-xs-6 {
    max-width: 50%;
    flex-basis: 50%;
  }

  .col-xs-7 {
    max-width: 58.33333333%;
    flex-basis: 58.33333333%;
  }

  .col-xs-8 {
    max-width: 66.66666667%;
    flex-basis: 66.66666667%;
  }

  .col-xs-9 {
    max-width: 75%;
    flex-basis: 75%;
  }

  .col-xs-10 {
    max-width: 83.33333333%;
    flex-basis: 83.33333333%;
  }

  .col-xs-11 {
    max-width: 91.66666667%;
    flex-basis: 91.66666667%;
  }

  .col-xs-12 {
    max-width: 100%;
    flex-basis: 100%;
  }

  .col-xs-offset-0 {
    margin-left: 0;
  }

  .col-xs-offset-1 {
    margin-left: 8.33333333%;
  }

  .col-xs-offset-2 {
    margin-left: 16.66666667%;
  }

  .col-xs-offset-3 {
    margin-left: 25%;
  }

  .col-xs-offset-4 {
    margin-left: 33.33333333%;
  }

  .col-xs-offset-5 {
    margin-left: 41.66666667%;
  }

  .col-xs-offset-6 {
    margin-left: 50%;
  }

  .col-xs-offset-7 {
    margin-left: 58.33333333%;
  }

  .col-xs-offset-8 {
    margin-left: 66.66666667%;
  }

  .col-xs-offset-9 {
    margin-left: 75%;
  }

  .col-xs-offset-10 {
    margin-left: 83.33333333%;
  }

  .col-xs-offset-11 {
    margin-left: 91.66666667%;
  }

  .start-xs {
    text-align: start;
    justify-content: flex-start;
  }

  .center-xs-col-standalone {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .center-xs-row-standalone {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .center-xs {
    text-align: center;
    justify-content: center;
  }

  .end-xs {
    text-align: end;
    justify-content: flex-end;
  }

  .top-xs {
    align-items: flex-start;
  }

  .middle-xs {
    align-items: center;
  }

  .bottom-xs {
    align-items: flex-end;
  }

  .around-xs {
    justify-content: space-around;
  }

  .between-xs {
    justify-content: space-between;
  }

  .first-xs {
    order: -1;
  }

  .last-xs {
    order: 1;
  }

  @media only screen and (min-width: 544px) {
    .col-sm,
    .col-sm-1,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-offset-0,
    .col-sm-offset-1,
    .col-sm-offset-2,
    .col-sm-offset-3,
    .col-sm-offset-4,
    .col-sm-offset-5,
    .col-sm-offset-6,
    .col-sm-offset-7,
    .col-sm-offset-8,
    .col-sm-offset-9,
    .col-sm-offset-10,
    .col-sm-offset-11,
    .col-sm-offset-12 {
      padding: 8px;
      flex: 0 0 auto;
    }
    .col-sm {
      max-width: 100%;
      flex-basis: 0;
      flex-grow: 1;
    }
    .col-sm-1 {
      max-width: 8.33333333%;
      flex-basis: 8.33333333%;
    }
    .col-sm-2 {
      max-width: 16.66666667%;
      flex-basis: 16.66666667%;
    }
    .col-sm-3 {
      max-width: 25%;
      flex-basis: 25%;
    }
    .col-sm-4 {
      max-width: 33.33333333%;
      flex-basis: 33.33333333%;
    }
    .col-sm-5 {
      max-width: 41.66666667%;
      flex-basis: 41.66666667%;
    }
    .col-sm-6 {
      max-width: 50%;
      flex-basis: 50%;
    }
    .col-sm-7 {
      max-width: 58.33333333%;
      flex-basis: 58.33333333%;
    }
    .col-sm-8 {
      max-width: 66.66666667%;
      flex-basis: 66.66666667%;
    }
    .col-sm-9 {
      max-width: 75%;
      flex-basis: 75%;
    }
    .col-sm-10 {
      max-width: 83.33333333%;
      flex-basis: 83.33333333%;
    }
    .col-sm-11 {
      max-width: 91.66666667%;
      flex-basis: 91.66666667%;
    }
    .col-sm-12 {
      max-width: 100%;
      flex-basis: 100%;
    }
    .col-sm-offset-0 {
      margin-left: 0;
    }
    .col-sm-offset-1 {
      margin-left: 8.33333333%;
    }
    .col-sm-offset-2 {
      margin-left: 16.66666667%;
    }
    .col-sm-offset-3 {
      margin-left: 25%;
    }
    .col-sm-offset-4 {
      margin-left: 33.33333333%;
    }
    .col-sm-offset-5 {
      margin-left: 41.66666667%;
    }
    .col-sm-offset-6 {
      margin-left: 50%;
    }
    .col-sm-offset-7 {
      margin-left: 58.33333333%;
    }
    .col-sm-offset-8 {
      margin-left: 66.66666667%;
    }
    .col-sm-offset-9 {
      margin-left: 75%;
    }
    .col-sm-offset-10 {
      margin-left: 83.33333333%;
    }
    .col-sm-offset-11 {
      margin-left: 91.66666667%;
    }
    .start-sm {
      text-align: start;
      justify-content: flex-start;
    }
    .center-sm {
      text-align: center;
      justify-content: center;
    }
    .end-sm {
      text-align: end;
      justify-content: flex-end;
    }
    .top-sm {
      align-items: flex-start;
    }
    .middle-sm {
      align-items: center;
    }
    .bottom-sm {
      align-items: flex-end;
    }
    .around-sm {
      justify-content: space-around;
    }
    .between-sm {
      justify-content: space-between;
    }
    .first-sm {
      order: -1;
    }
    .last-sm {
      order: 1;
    }
  }

  @media only screen and (min-width: 768px) {
    .col-md,
    .col-md-1,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-offset-0,
    .col-md-offset-1,
    .col-md-offset-2,
    .col-md-offset-3,
    .col-md-offset-4,
    .col-md-offset-5,
    .col-md-offset-6,
    .col-md-offset-7,
    .col-md-offset-8,
    .col-md-offset-9,
    .col-md-offset-10,
    .col-md-offset-11,
    .col-md-offset-12 {
      padding: 8px;
      flex: 0 0 auto;
    }
    .col-md {
      max-width: 100%;
      flex-basis: 0;
      flex-grow: 1;
    }
    .col-md-1 {
      max-width: 8.33333333%;
      flex-basis: 8.33333333%;
    }
    .col-md-2 {
      max-width: 16.66666667%;
      flex-basis: 16.66666667%;
    }
    .col-md-3 {
      max-width: 25%;
      flex-basis: 25%;
    }
    .col-md-4 {
      max-width: 33.33333333%;
      flex-basis: 33.33333333%;
    }
    .col-md-5 {
      max-width: 41.66666667%;
      flex-basis: 41.66666667%;
    }
    .col-md-6 {
      max-width: 50%;
      flex-basis: 50%;
    }
    .col-md-7 {
      max-width: 58.33333333%;
      flex-basis: 58.33333333%;
    }
    .col-md-8 {
      max-width: 66.66666667%;
      flex-basis: 66.66666667%;
    }
    .col-md-9 {
      max-width: 75%;
      flex-basis: 75%;
    }
    .col-md-10 {
      max-width: 83.33333333%;
      flex-basis: 83.33333333%;
    }
    .col-md-11 {
      max-width: 91.66666667%;
      flex-basis: 91.66666667%;
    }
    .col-md-12 {
      max-width: 100%;
      flex-basis: 100%;
    }
    .col-md-offset-0 {
      margin-left: 0;
    }
    .col-md-offset-1 {
      margin-left: 8.33333333%;
    }
    .col-md-offset-2 {
      margin-left: 16.66666667%;
    }
    .col-md-offset-3 {
      margin-left: 25%;
    }
    .col-md-offset-4 {
      margin-left: 33.33333333%;
    }
    .col-md-offset-5 {
      margin-left: 41.66666667%;
    }
    .col-md-offset-6 {
      margin-left: 50%;
    }
    .col-md-offset-7 {
      margin-left: 58.33333333%;
    }
    .col-md-offset-8 {
      margin-left: 66.66666667%;
    }
    .col-md-offset-9 {
      margin-left: 75%;
    }
    .col-md-offset-10 {
      margin-left: 83.33333333%;
    }
    .col-md-offset-11 {
      margin-left: 91.66666667%;
    }
    .start-md {
      text-align: start;
      justify-content: flex-start;
    }
    .center-md {
      text-align: center;
      justify-content: center;
    }
    .end-md {
      text-align: end;
      justify-content: flex-end;
    }
    .top-md {
      align-items: flex-start;
    }
    .middle-md {
      align-items: center;
    }
    .bottom-md {
      align-items: flex-end;
    }
    .around-md {
      justify-content: space-around;
    }
    .between-md {
      justify-content: space-between;
    }
    .first-md {
      order: -1;
    }
    .last-md {
      order: 1;
    }
  }

  @media only screen and (min-width: 992px) {
    .container {
      width: 100%;
      max-width: 1200px;
    }
    .col-lg,
    .col-lg-1,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-offset-0,
    .col-lg-offset-1,
    .col-lg-offset-2,
    .col-lg-offset-3,
    .col-lg-offset-4,
    .col-lg-offset-5,
    .col-lg-offset-6,
    .col-lg-offset-7,
    .col-lg-offset-8,
    .col-lg-offset-9,
    .col-lg-offset-10,
    .col-lg-offset-11,
    .col-lg-offset-12 {
      padding: 8px;
      flex: 0 0 auto;
    }
    .col-lg {
      max-width: 100%;
      flex-basis: 0;
      flex-grow: 1;
    }
    .col-lg-1 {
      max-width: 8.33333333%;
      flex-basis: 8.33333333%;
    }
    .col-lg-2 {
      max-width: 16.66666667%;
      flex-basis: 16.66666667%;
    }
    .col-lg-3 {
      max-width: 25%;
      flex-basis: 25%;
    }
    .col-lg-4 {
      max-width: 33.33333333%;
      flex-basis: 33.33333333%;
    }
    .col-lg-5 {
      max-width: 41.66666667%;
      flex-basis: 41.66666667%;
    }
    .col-lg-6 {
      max-width: 50%;
      flex-basis: 50%;
    }
    .col-lg-7 {
      max-width: 58.33333333%;
      flex-basis: 58.33333333%;
    }
    .col-lg-8 {
      max-width: 66.66666667%;
      flex-basis: 66.66666667%;
    }
    .col-lg-9 {
      max-width: 75%;
      flex-basis: 75%;
    }
    .col-lg-10 {
      max-width: 83.33333333%;
      flex-basis: 83.33333333%;
    }
    .col-lg-11 {
      max-width: 91.66666667%;
      flex-basis: 91.66666667%;
    }
    .col-lg-12 {
      max-width: 100%;
      flex-basis: 100%;
    }
    .col-lg-offset-0 {
      margin-left: 0;
    }
    .col-lg-offset-1 {
      margin-left: 8.33333333%;
    }
    .col-lg-offset-2 {
      margin-left: 16.66666667%;
    }
    .col-lg-offset-3 {
      margin-left: 25%;
    }
    .col-lg-offset-4 {
      margin-left: 33.33333333%;
    }
    .col-lg-offset-5 {
      margin-left: 41.66666667%;
    }
    .col-lg-offset-6 {
      margin-left: 50%;
    }
    .col-lg-offset-7 {
      margin-left: 58.33333333%;
    }
    .col-lg-offset-8 {
      margin-left: 66.66666667%;
    }
    .col-lg-offset-9 {
      margin-left: 75%;
    }
    .col-lg-offset-10 {
      margin-left: 83.33333333%;
    }
    .col-lg-offset-11 {
      margin-left: 91.66666667%;
    }
    .start-lg {
      text-align: start;
      justify-content: flex-start;
    }
    .center-lg {
      text-align: center;
      justify-content: center;
    }
    .end-lg {
      text-align: end;
      justify-content: flex-end;
    }
    .top-lg {
      align-items: flex-start;
    }
    .middle-lg {
      align-items: center;
    }
    .bottom-lg {
      align-items: flex-end;
    }
    .around-lg {
      justify-content: space-around;
    }
    .between-lg {
      justify-content: space-between;
    }
    .first-lg {
      order: -1;
    }
    .last-lg {
      order: 1;
    }
  }

  .align-self-center {
    align-self: center;
  }

  .f-center {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    background: rgba(52, 6, 68, 0.4);
    box-shadow: none;
  }

  .container__content {
    flex-grow: 1;
  }

  .container__footer {
    background: rgba(186, 0, 251, 0.15);
    box-shadow: none;
  }

  .m-10-0-10-0 {
    margin: 8px 0 8px 0;
  }

  .m-0-0-20-0 {
    margin: 0 0 16px 0;
  }

  .m-20-0-20-0 {
    margin: 16px 0 16px 0;
  }

  .col2-set {
    display: flex;
    flex-wrap: wrap;
  }
  .col2-set .col-1,
  .col2-set .col-2 {
    padding: 16px;
    flex: 1 0 270px;
  }

  .is-disabled {
    display: none;
  }

  .f-center {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .w-100 {
    width: 100%;
  }

  .c-warm {
    color: #ffc000 !important;
  }

  @media only screen and (min-width: 980px) {
    .hidden-desktop {
      display: none !important;
    }
  }

  .hidden-xs-up {
    display: none !important;
  }

  @media (max-width: 543px) {
    .hidden-xs-down {
      display: none !important;
    }
  }

  @media (min-width: 544px) {
    .hidden-sm-up {
      display: none !important;
    }
  }

  @media (max-width: 767px) {
    .hidden-sm-down {
      display: none !important;
    }
  }

  @media (min-width: 768px) {
    .hidden-md-up {
      display: none !important;
    }
  }

  @media (max-width: 991px) {
    .hidden-md-down {
      display: none !important;
    }
  }

  @media (min-width: 992px) {
    .hidden-lg-up {
      display: none !important;
    }
  }

  @media (max-width: 1199px) {
    .hidden-lg-down {
      display: none !important;
    }
  }

  @media (min-width: 1200px) {
    .hidden-xl-up {
      display: none !important;
    }
  }

  .hidden-xl-down {
    display: none !important;
  }

  .header {
    position: relative;
  }
  .header__cart {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .cart-links {
    display: flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    height: 42px;
    box-sizing: border-box;
  }
  .cart-links__title {
    text-transform: uppercase;
    margin: 0 10px;
  }
  .cart-links svg {
    flex: 0 0 18px;
  }

  .header-variant2__wrap {
    display: flex;
    box-sizing: border-box;
    padding: 10px 15px;
    align-items: center;
    justify-content: center;
  }

  .main-nav-top-right {
    display: flex;
    float: right;
    justify-content: flex-end;
  }
  .main-nav-top-right li:last-child {
    border-radius: 4px;
    background: rgba(52, 6, 68, 0.5);
    box-shadow: none;
  }

  .list-style-none {
    list-style: none;
  }

  .list-reset {
    padding-left: 0;
    list-style: none;
  }

  .p1 {
    padding: 16px;
  }

  .pt1 {
    padding-top: 16px;
  }

  .pr1 {
    padding-right: 16px;
  }

  .pb1 {
    padding-bottom: 16px;
  }

  .pl1 {
    padding-left: 16px;
  }

  .py1 {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .px1 {
    padding-right: 16px;
    padding-left: 16px;
  }

  .pt10 {
    padding-top: 8px;
  }

  .m1 {
    margin: 16px;
  }

  .mt1 {
    margin-top: 16px;
  }

  .mr1 {
    margin-right: 16px;
  }

  .mb1 {
    margin-bottom: 16px;
  }

  .ml1 {
    margin-left: 16px;
  }

  .mx1 {
    margin-right: 16px;
    margin-left: 16px;
  }

  .my1 {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .m-10-0-0-0 {
    margin-top: 8px;
  }

  .left-align {
    text-align: left;
  }

  .center {
    text-align: center;
  }

  .right-align {
    text-align: right;
  }

  .justify {
    text-align: justify;
  }

  .w100 {
    width: 100%;
  }

  .d__block {
    display: block;
  }

  .d__flex {
    display: flex;
    flex-wrap: wrap;
  }

  .grid__slider {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    margin: 0 0 16px;
    text-align: center;
    border-radius: 4px;
    background: rgba(52, 6, 68, 0.5);
    box-shadow: none;
  }
  .grid__slider .textwidget {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .aspect-ratio {
    position: relative;
    width: 100%;
  }
  .aspect-ratio__img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .product-grid {
    width: 100%;
    margin: 0;
  }

  .slider-promo__wrapper {
    align-items: center;
  }
  .slider-promo__wrapper img {
    width: 100%;
  }

  .slider-conf__v-cent {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .swiper-slide {
    height: auto;
  }

  .woocommerce-error,
  .woocommerce-message {
    display: flex;
    margin: 8px 0;
    padding: 8px 16px;
    list-style: none;
    border-radius: 4px;
    background: #340644;
    box-shadow: none;
    align-items: center;
    flex-wrap: wrap;
  }
  .woocommerce-error li,
  .woocommerce-message li {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .woocommerce-error .button,
  .woocommerce-message .button {
    margin-right: 16px;
  }

  .woocommerce-error {
    background: #a30000;
  }

  .woocommerce-message,
  .woocommerce-success {
    background: #00b31a;
  }

  .products-listing__item {
    position: relative;
    border-radius: 4px;
    padding: 0;
    margin-bottom: 16px;
    border-right: 1px solid #340644;
    background: #fff;
    overflow: hidden;
    box-shadow: none;
  }

  .products-listing__link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .products-listing__name {
    color: #000;
    background: rgba(255, 255, 255, 0.85);
    padding: 4px;
    width: 100px;
    white-space: nowrap;
    border-radius: 0 4px 0 0;
    overflow: hidden;
    text-transform: uppercase;
    text-overflow: ellipsis;
    font-size: 0.75em;
    font-weight: 300;
    text-shadow: none;
    margin: 0;
    position: absolute;
    bottom: 0;
  }

  .products-listing__price-block {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 4px 16px;
    text-align: center;
    color: #fff;
    border-radius: 4px 0 0 0;
    background: linear-gradient(to left, #9f2af8, #f82a53);
    box-shadow: none;
    font-size: 0.75em;
    flex: 1;
  }
  .products-listing__price-block del,
  .products-listing__price-block ins {
    display: block;
  }
  .products-listing__price-block .amount {
    padding: 0;
    color: #fff !important;
    box-shadow: none;
    font-size: 0.75em;
  }
  .products-listing__price-block-big .amount {
    font-size: 1rem;
  }
  .products-listing__price-block + .button {
    margin: 0 0 0 4px;
  }

  .product__title {
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid rgba(52, 6, 68, 0.5);
  }

  .product__mainblock {
    padding: 16px;
    border-radius: 4px;
    background: rgba(186, 0, 251, 0.15);
    box-shadow: none;
    flex: 1 0 310px;
  }

  .product__left-wrap {
    height: 100%;
  }
  @media only screen and (min-width: 768px) {
    .product__left-wrap {
      position: sticky;
      top: 0;
    }
  }

  .product__main-image {
    display: block;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: none;
  }
  .product__main-image img {
    border-radius: 4px;
  }

  .product__banner {
    margin-bottom: 16px;
    padding: 16px;
    border-radius: 4px;
    background: rgba(186, 0, 251, 0.15);
    flex: 1 0 180px;
  }

  .product__gallery-control {
    display: none;
    margin: 16px 0 0;
  }

  .product .swiper-wrapper {
    align-items: center;
  }

  .product__image {
    box-sizing: border-box;
    padding: 1px;
  }

  .product__price-block {
    text-align: center;
    color: #fff !important;
    border-radius: 4px;
    background: linear-gradient(to left, #9f2af8, #f82a53);
    box-shadow: none;
    font-size: 13px;
    line-height: normal;
    flex: 1;
    padding: 1rem;
  }
  .product__price-block del,
  .product__price-block ins {
    display: block;
  }
  .product__price-block .amount {
    color: #fff !important;
    font-size: 0.75em;
  }
  .product__price-block-big {
    font-size: 1.5rem;
  }
  .product__price-block + .button {
    margin: 0 0 0 4px;
  }

  .product__buy-btn {
    overflow: hidden;
    max-width: 80px;
    text-overflow: ellipsis;
    flex: 1;
  }

  .product__details-wrap {
    padding: 16px;
    border-radius: 4px;
    background: rgba(186, 0, 251, 0.15);
    box-shadow: none;
  }
  .product__details-wrap > div:last-child {
    margin-bottom: 0;
  }

  .product__details-block {
    margin-bottom: 16px;
  }

  .product__attributes td,
  .product__attributes p {
    letter-spacing: 1px;
  }

  .product__attributes td {
    width: 100%;
  }

  .product__attributes p {
    margin: 0;
  }

  .addto {
    display: flex;
    width: 100%;
    width: calc(100% + 2 * 8px);
    margin: 0 -8px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .addto td {
    padding: 0;
    font-family: "Oswald", "Helvetica Neue", Arial, sans-serif;
  }
  .addto td.value {
    text-align: right;
  }
  .addto input[type="submit"] {
    display: none;
  }
  .addto .qty-block {
    flex: 1 0 150px;
  }
  .addto .button {
    display: flex;
    margin: 0 8px;
    align-items: center;
    flex: 1 0 150px;
    justify-content: center;
  }
  .addto .variations_button {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .addto__icon {
    margin: 0 4px 0 0;
  }

  .product-stock {
    margin: 16px 0;
  }

  .product-meta a {
    display: inline-block;
    display: inline-block;
    margin: 0 8px 8px 0;
    padding: 4px 16px;
    text-transform: uppercase;
    color: #333;
    border-radius: 15px;
    background: #ffc000;
    box-shadow: none;
    text-shadow: none;
    font-size: 0.75em;
  }

  .product-qty__wrap {
    display: flex;
    margin: 8px;
    padding: 0 8px;
    border-radius: 4px;
    background: rgba(52, 6, 68, 0.5);
    box-shadow: none;
    align-items: center;
    justify-content: center;
  }
  .product-qty__wrap label {
    height: 42px;
    text-transform: none;
    line-height: 42px;
  }
  .product-qty__wrap input {
    display: flex;
    border: 0 !important;
    background: none;
    box-shadow: none;
    font-size: 17px;
  }

  .sale {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    padding: 4px 8px;
    border-radius: 0 0 0 4px;
    background: linear-gradient(to left, #9f2af8, #f82a53);
    align-items: center;
  }
  .sale__label {
    margin-right: 8px;
  }

  .product-thumb__gallery {
    margin-top: 16px;
    column-count: 4;
    column-gap: 4px;
    padding: 4px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: none;
  }

  .product-thumb__link {
    width: 100%;
  }

  .related {
    overflow: hidden;
  }
  .related__wrapper {
    padding-right: 0;
    padding-left: 0;
  }

  .product-variations__attribute {
    display: inline-block;
    margin: 0 8px 8px 0;
    padding: 4px 16px;
    text-transform: uppercase;
    color: #333;
    border-radius: 15px;
    background: #ffc000;
    box-shadow: none;
    text-shadow: none;
    font-size: 0.75em;
  }

  .product-variations__cart {
    display: flex;
  }

  .product-variations__price {
    display: inline-block;
    padding: 4px 16px;
    text-align: center;
    color: #fff;
    border-radius: 4px;
    background: linear-gradient(to left, #9f2af8, #f82a53);
    box-shadow: none;
    font-size: 0.75em;
  }

  .control__items {
    user-select: none;
  }

  .control__up,
  .control__down,
  .control__prev,
  .control__next {
    padding: 5px;
    cursor: pointer;
    transition: color 500ms;
    border-radius: 4px;
    background: rgba(52, 6, 68, 0.5);
    box-shadow: none;
  }
  .control__up path,
  .control__down path,
  .control__prev path,
  .control__next path {
    transition: transform 500ms;
    transform-origin: 50% 50%;
  }

  .control__up path {
    transform: rotate(-90deg);
  }

  .control__down path {
    transform: rotate(90deg);
  }

  .swiper-button-disabled {
    cursor: not-allowed;
    color: #340644;
  }

  .lazyload,
  .lazyloading {
    opacity: 0;
  }

  .lazyloaded {
    transition: opacity 300ms;
    opacity: 1;
  }

  .img-padding-ratio__wrap {
    position: relative;
    width: 100%;
  }
  .img-padding-ratio__wrap a,
  .img-padding-ratio__wrap img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .skaala_paremale {
    display: flex;
    flex-wrap: wrap;
  }

  .progress-bar {
    width: 100%;
    padding: 16px;
    margin-bottom: 4px;
    background-color: rgba(186, 0, 251, 0.15);
    border-radius: 4px;
  }
  .progress-bar__title {
    margin-bottom: 8px;
  }
  .progress-bar__graph {
    position: relative;
    background-color: rgba(186, 0, 251, 0.15);
    border-radius: 15px;
  }
  .progress-bar__percentage {
    position: relative;
    z-index: 1;
    color: #000;
    left: 16px;
    text-shadow: none;
  }
  .progress-bar__value {
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: #ffc000;
    border-radius: 15px;
  }

  .button {
    display: inline-block;
    overflow: hidden;
    box-sizing: border-box;
    max-width: 100%;
    height: auto;
    padding: 8px 24px;
    margin: 8px 0;
    cursor: pointer;
    user-select: none;
    transition: background-color 500ms;
    text-align: center;
    text-transform: uppercase;
    text-overflow: ellipsis;
    color: #fff;
    border: none;
    border-radius: 4px;
    background: linear-gradient(45deg, #ff00f6, #00a99d);
    box-shadow: none;
    text-shadow: none;
    font-family: "Oswald", "Helvetica Neue", Arial, sans-serif;
    font-size: 0.875em;
    line-height: 1.5;
    -webkit-appearance: none;
  }
  .button:hover {
    background: #00b31a;
  }
  .button.active {
    background: linear-gradient(to left, #9f2af8, #f82a53);
  }
  .button.medium {
    padding: 8px 16px;
    font-size: 0.875em;
  }
  .button.alt,
  .button.big {
    font-size: 1.5rem;
    padding: 1rem;
  }
  .button__icon {
    width: 1em;
    height: 1em;
    margin: 0 0 0 1em;
  }
  .button__disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .button__disabled:hover {
    background: linear-gradient(45deg, #ff00f6, #00a99d);
  }

  .menu {
    list-style: none;
    text-transform: uppercase;
  }
  .menu li {
    list-style: none;
  }
  .menu > li:last-child {
    margin-right: 0;
  }
  .menu img {
    width: 15px;
  }
  .menu__item {
    display: inline-block;
    margin-right: 8px;
    transition: background 500ms;
    border-radius: 4px;
    background: rgba(52, 6, 68, 0.5);
    box-shadow: none;
    line-height: 42px;
  }
  .menu__item:hover {
    background: linear-gradient(45deg, #ff00f6, #00a99d);
  }
  .menu__item--selected {
    color: #fff;
    border-radius: 4px;
    background: linear-gradient(45deg, #ff00f6, #00a99d);
    box-shadow: none;
  }
  .menu__link {
    padding: 0 24px;
  }

  .sub-menu {
    display: none;
  }
  .sub-menu__item {
    display: block;
    text-align: left;
    margin-bottom: 4px;
  }
  .sub-menu__item img {
    display: inline-block;
    width: 20px;
    margin-right: 8px;
  }
  .sub-menu__link {
    padding: 16px 8px;
  }

  .bc {
    overflow: hidden;
    white-space: nowrap;
    text-transform: uppercase;
    font-size: 0.75em;
    border-radius: 4px;
    box-shadow: none;
    padding: 16px;
  }
  .bc a {
    color: #ffc000;
  }
  .bc__delim {
    margin: 0 3px;
  }
  .bc__item {
    padding: 0 4px;
  }

  .woocommerce-MyAccount-navigation {
    margin-bottom: 16px;
  }
  .woocommerce-MyAccount-navigation ul {
    display: flex;
    list-style: none;
  }
  .woocommerce-MyAccount-navigation li {
    margin: 4px 4px 4px 0;
    border-radius: 4px;
    box-shadow: none;
  }
  .woocommerce-MyAccount-navigation a {
    padding: 4px 16px;
  }
  .woocommerce-MyAccount-navigation .is-active {
    background: linear-gradient(45deg, #ff00f6, #00a99d);
  }

  .filters-menu__wrap {
    display: flex;
    position: relative;
  }

  .cat-list__title {
    position: relative;
    display: flex;
    height: 35px;
    margin: 0 0 10px 0;
    padding: 0 70px 0 0;
    text-align: left;
    color: #ffc000;
    font-size: 14px;
    align-items: center;
  }

  .cat-list__name {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cat-list__desc {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-transform: none;
    text-overflow: ellipsis;
    color: #fff;
    font-size: 0.75em;
  }

  .cat-list__count {
    position: absolute;
    top: 50%;
    right: 35px;
    display: inline-block;
    padding: 2px 11px;
    transform: translateY(-50%);
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.5);
    font-size: 0.7em;
  }

  .cat-list__subcat {
    display: none;
    padding: 0 0 0 24px;
    list-style: none;
    border-left: 1px solid #a30000;
  }
  .cat-list__group-open .cat-list__subcat {
    display: block;
  }

  .cat-list__subcat-control {
    position: absolute;
    top: 0;
    right: -10px;
  }
  .cat-list__subcat-control svg {
    border-radius: 50%;
  }

  .subcat__grid {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  .subcat__item {
    border-radius: 4px;
    background-color: #340644;
    box-shadow: none;
    margin-right: 16px;
    margin-bottom: 16px;
  }

  .subcat__title {
    position: relative;
    display: flex;
    height: 20px;
    margin: 0;
    padding: 8px 70px 8px 16px;
    text-align: left;
    color: #ffc000;
    font-size: 14px;
    align-items: center;
  }

  .subcat__name {
    display: block;
    overflow: hidden;
    padding: 0 16px 0 0;
    text-overflow: ellipsis;
  }

  .subcat__desc {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-transform: none;
    text-overflow: ellipsis;
    color: #fff;
    font-size: 0.75em;
  }

  .subcat__count {
    position: absolute;
    top: 50%;
    right: 20px;
    display: inline-block;
    padding: 2px 11px;
    transform: translateY(-50%);
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.5);
    font-size: 0.7em;
  }

  .subcat__subcat {
    display: none;
    margin: 0 -20px;
    padding: 0 0 0 25px;
    list-style: none;
    border-left: 1px solid #a30000;
  }
  .cat-list__group-open .subcat__subcat {
    display: block;
  }

  .subcat__subcat-control {
    position: absolute;
    top: 0;
    right: -10px;
  }
  .subcat__subcat-control svg {
    border-radius: 50%;
  }

  .menu-mobile {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    width: 320px;
    padding: 16px;
    transition: transform 500ms linear;
    transform: translate3d(320px, 0, 0);
    background: rgba(52, 6, 68, 0.5);
  }
  .menu-mobile_open .menu-mobile {
    transform: translate3d(0, 0, 0);
  }
  .menu-mobile__toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    right: 20px;
    height: 42px;
    cursor: pointer;
    line-height: 1;
    font-size: 1em;
    margin-left: 10px;
  }
  .menu-mobile__toggle svg {
    margin-left: 10px;
    flex: 0 0 16px;
  }
  .menu-mobile__primary,
  .menu-mobile__secondary,
  .menu-mobile__categories {
    margin: 0 0 16px;
  }

  .wrapper {
    transition: transform 500ms linear, opacity 500ms;
  }
  .menu-mobile_open .wrapper {
    transform: translate3d(-320px, 0, 0);
    opacity: 0.5;
  }

  .search__form {
    display: flex;
  }

  .search__field,
  .search__select {
    box-sizing: border-box;
    height: 48px !important;
    padding: 0 16px;
    box-shadow: none;
    line-height: 48px;
  }

  .search__field {
    border-radius: 4px 0 0 4px !important;
    flex: 4;
  }

  .search__select {
    text-transform: uppercase;
    border-radius: 0;
    background: #340644;
    color: #fff;
    flex: 2;
    max-width: 130px;
  }

  .search__button {
    height: 48px;
    padding: 0 10px 0 30px;
    border-radius: 0 4px 4px 0;
    background: linear-gradient(45deg, #ff00f6, #00a99d);
    flex: 1;
    position: relative;
  }
  .search__button svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  .cart__collaterals td,
  .cart__collaterals span {
    text-align: right;
  }

  .cart__thumbnail {
    width: 55px;
    margin-right: 8px;
  }

  .cart__product-name {
    display: flex;
    align-items: center;
  }

  .shop_table thead {
    background: rgba(186, 0, 251, 0.15);
  }

  .shop_table tr:nth-child(2) {
    background: rgba(186, 0, 251, 0.15);
  }

  .shop_table tfoot {
    background: rgba(186, 0, 251, 0.15);
  }
  .shop_table tfoot tr:last-child {
    background: rgba(186, 0, 251, 0.15);
  }

  .shop_table td:last-child,
  .shop_table th:last-child {
    text-align: right;
  }

  .cart__form-head {
    background: rgba(186, 0, 251, 0.15);
  }

  .cart__form-body img {
    border-radius: 4px;
  }

  .cart__form-body tr:nth-child(2) {
    background: rgba(186, 0, 251, 0.15);
  }

  .cart__form-footer {
    background: rgba(186, 0, 251, 0.15);
  }

  .cart .product-price,
  .cart .product-quantity,
  .cart .product-subtotal,
  .cart .product-remove {
    text-align: center;
  }

  .cart_totals tr:nth-child(2) {
    background: rgba(186, 0, 251, 0.15);
  }

  .cart-checkout__place-order {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
  .cart-checkout__place-order .terms {
    margin: 0;
    padding: 16px;
    border-radius: 4px;
    background-color: rgba(52, 6, 68, 0.5);
    box-shadow: none;
  }

  .cart-checkout__place-order-button {
    float: right;
  }

  .checkout {
    font-size: 1rem;
  }
  .checkout__tab-content {
    box-sizing: border-box;
    padding: 16px;
    background: rgba(52, 6, 68, 0.3);
  }
  @media (max-width: 767px) {
    .checkout__tab-content.tap-order {
      padding: 16px 4px;
    }
  }

  .checkout_cart .product-total {
    text-align: right;
  }

  #shipping_method li {
    display: flex;
    flex-direction: row-reverse;
    margin: 0 0 16px;
  }
  #shipping_method li label {
    display: flex;
    margin-right: 16px;
    align-items: center;
  }

  #shipping_method .amount {
    margin-left: 10px;
  }

  .coupon {
    margin: 0 0 16px;
  }

  .wc-terms-and-conditions,
  .wc_payment_method {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
  .wc-terms-and-conditions img,
  .wc_payment_method img {
    width: 50px;
    margin: 8px 0;
    display: block;
  }
  .wc-terms-and-conditions input,
  .wc_payment_method input {
    margin-right: 16px;
  }

  .payment_box {
    margin: 8px 0;
    padding: 16px;
    width: 100%;
    border-radius: 4px;
    background: rgba(52, 6, 68, 0.5);
    box-shadow: none;
  }

  .checkout input[type="email"],
  .checkout input[type="tel"],
  .checkout input[type="text"] {
    width: 50%;
  }

  .sidebar_grid > .widget-container {
    margin: 0 0 16px;
    padding: 16px 24px;
    border-radius: 4px;
    background-color: rgba(186, 0, 251, 0.15);
    box-shadow: none;
  }

  .form-login {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .form-login__col {
    box-sizing: border-box;
    padding: 16px;
    background: rgba(52, 6, 68, 0.5);
    box-shadow: none;
  }

  .pagination {
    margin-right: -8px;
    margin-left: -8px;
    user-select: none;
  }
  .pagination__btn {
    margin-left: 8px;
    margin-right: 8px;
  }

  .txt-center {
    text-align: center;
  }

  .price__block {
    margin: 0 5px;
  }

  .pswp__top-bar .pswp__button,
  .pswp__button--arrow--left:before,
  .pswp__button--arrow--right:before {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY0IiBoZWlnaHQ9Ijg4IiB2aWV3Qm94PSIwIDAgMjY0IDg4 IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5kZWZh dWx0LXNraW4gMjwvdGl0bGU+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVu b2RkIj48cGF0aCBkPSJNNjcuMDAyIDU5LjV2My43NjhjLTYuMzA3Ljg0LTkuMTg0 IDUuNzUtMTAuMDAyIDkuNzMyIDIuMjItMi44MyA1LjU2NC01LjA5OCAxMC4wMDIt NS4wOThWNzEuNUw3MyA2NS41ODUgNjcuMDAyIDU5LjV6TTEzIDI5di01aDJ2M2gz djJoLTV6bTAtMTRoNXYyaC0zdjNoLTJ2LTV6bTE4IDB2NWgtMnYtM2gtM3YtMmg1 em0wIDE0aC01di0yaDN2LTNoMnY1em0zMS01djVoLTJ2LTNoLTN2LTJoNXptMC00 aC01di0yaDN2LTNoMnY1em04IDB2LTVoMnYzaDN2MmgtNXptMCA0aDV2MmgtM3Yz aC0ydi01ek0yMC41ODYgNjZsLTUuNjU2LTUuNjU2IDEuNDE0LTEuNDE0TDIyIDY0 LjU4Nmw1LjY1Ni01LjY1NiAxLjQxNCAxLjQxNEwyMy40MTQgNjZsNS42NTYgNS42 NTYtMS40MTQgMS40MTRMMjIgNjcuNDE0bC01LjY1NiA1LjY1Ni0xLjQxNC0xLjQx NEwyMC41ODYgNjZ6bTkxLjItLjk3TDExMCA2My41bDMtMy41aC0xMHYtMmgxMGwt My0zLjUgMS43ODUtMS40NjhMMTE3IDU5bC01LjIxNSA2LjAzem00MC40MyAwTDE1 NCA2My41bC0zLTMuNWgxMHYtMmgtMTBsMy0zLjUtMS43ODUtMS40NjhMMTQ3IDU5 bDUuMjE1IDYuMDN6bTguNzQtMzYuNDg3bC0zLjI1LTMuMjUtMS40MTIgMS40MTQg My4yNSAzLjI1eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNTIuNSAyN2E1LjUg NS41IDAgMCAwIDAtMTEgNS41IDUuNSAwIDAgMCAwIDExeiIgc3Ryb2tlPSIjZmZm IiBzdHJva2Utd2lkdGg9IjEuNSIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNTAg MjFoNXYxaC01em0tMzMuMDQzIDcuNTQzbC0xLjQxNCAxLjQxNC0zLjI1LTMuMjUg MS40MTQtMS40MTQgMy4yNSAzLjI1eiIvPjxwYXRoIGQ9Ik0xMDguNSAyN2E1LjUg NS41IDAgMCAwIDAtMTEgNS41IDUuNSAwIDAgMCAwIDExeiIgc3Ryb2tlPSIjZmZm IiBzdHJva2Utd2lkdGg9IjEuNSIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMDYg MjFoNXYxaC01eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMDkuMDQzIDE5LjAw OGwtLjA4NSA1LTEtLjAxNy4wODUtNXoiLz48L2c+PC9zdmc+") !important;
    background-size: 264px 88px;
  }

  .pswp__caption,
  .pswp__top-bar {
    background-color: transparent !important;
  }

  /*! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license */
  /*
	Styles for basic PhotoSwipe functionality (sliding area, open/close transitions)
*/
  /* pswp = photoswipe */
  .pswp {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    -ms-touch-action: none;
    touch-action: none;
    z-index: 1500;
    -webkit-text-size-adjust: 100%;
    /* create separate layer, to avoid paint on window.onscroll in webkit/blink */
    -webkit-backface-visibility: hidden;
    outline: none;
  }
  .pswp * {
    box-sizing: border-box;
  }
  .pswp img {
    max-width: none;
  }

  /* style is added when JS option showHideOpacity is set to true */
  .pswp--animate_opacity {
    /* 0.001, because opacity:0 doesn't trigger Paint action, which causes lag at start of transition */
    opacity: 0.001;
    will-change: opacity;
    /* for open/close transition */
    transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
  }

  .pswp--open {
    display: block;
  }

  .pswp--zoom-allowed .pswp__img {
    /* autoprefixer: off */
    cursor: -webkit-zoom-in;
    cursor: -moz-zoom-in;
    cursor: zoom-in;
  }

  .pswp--zoomed-in .pswp__img {
    /* autoprefixer: off */
    cursor: -webkit-grab;
    cursor: -moz-grab;
    cursor: grab;
  }

  .pswp--dragging .pswp__img {
    /* autoprefixer: off */
    cursor: -webkit-grabbing;
    cursor: -moz-grabbing;
    cursor: grabbing;
  }

  /*
	Background is added as a separate element.
	As animating opacity is much faster than animating rgba() background-color.
*/
  .pswp__bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    will-change: opacity;
  }

  .pswp__scroll-wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .pswp__container,
  .pswp__zoom-wrap {
    -ms-touch-action: none;
    touch-action: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  /* Prevent selection and tap highlights */
  .pswp__container,
  .pswp__img {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }

  .pswp__zoom-wrap {
    position: absolute;
    width: 100%;
    -webkit-transform-origin: left top;
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    transform-origin: left top;
    /* for open/close transition */
    transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1);
  }

  .pswp__bg {
    will-change: opacity;
    /* for open/close transition */
    transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
  }

  .pswp--animated-in .pswp__bg,
  .pswp--animated-in .pswp__zoom-wrap {
    -webkit-transition: none;
    transition: none;
  }

  .pswp__container,
  .pswp__zoom-wrap {
    -webkit-backface-visibility: hidden;
  }

  .pswp__item {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
  }

  .pswp__img {
    position: absolute;
    width: auto;
    height: auto;
    top: 0;
    left: 0;
  }

  /*
	stretched thumbnail or div placeholder element (see below)
	style is added to avoid flickering in webkit/blink when layers overlap
*/
  .pswp__img--placeholder {
    -webkit-backface-visibility: hidden;
  }

  /*
	div element that matches size of large image
	large image loads on top of it
*/
  .pswp__img--placeholder--blank {
    background: transparent;
  }

  .pswp--ie .pswp__img {
    width: 100% !important;
    height: auto !important;
    left: 0;
    top: 0;
  }

  /*
	Error message appears when image is not loaded
	(JS option errorMsg controls markup)
*/
  .pswp__error-msg {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    font-size: 14px;
    line-height: 16px;
    margin-top: -8px;
    color: rgba(52, 6, 68, 0.5);
  }

  .pswp__error-msg a {
    color: rgba(52, 6, 68, 0.5);
    text-decoration: underline;
  }

  /*! PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license */
  /*

	Contents:

	1. Buttons
	2. Share modal and links
	3. Index indicator ("1 of X" counter)
	4. Caption
	5. Loading indicator
	6. Additional styles (root element, top bar, idle state, hidden state, etc.)

*/
  /*
	
	1. Buttons

 */
  /* <button> css reset */
  .pswp__button {
    width: 44px;
    height: 44px;
    position: relative;
    background: none;
    cursor: pointer;
    overflow: visible;
    -webkit-appearance: none;
    display: block;
    border: 0;
    padding: 0;
    margin: 0;
    float: right;
    opacity: 0.75;
    transition: opacity 0.2s;
    box-shadow: none;
  }
  .pswp__button:focus,
  .pswp__button:hover {
    opacity: 1;
  }
  .pswp__button:active {
    outline: none;
    opacity: 0.9;
  }
  .pswp__button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  /* pswp__ui--over-close class it added when mouse is over element that should close gallery */
  .pswp__ui--over-close .pswp__button--close {
    opacity: 1;
  }

  .pswp__button,
  .pswp__button--arrow--left:before,
  .pswp__button--arrow--right:before {
    background: url(../images/default-skin.png) 0 0 no-repeat;
    background-size: 264px 88px;
    width: 44px;
    height: 44px;
  }

  @media (-webkit-min-device-pixel-ratio: 1.1),
    (min-resolution: 105dpi),
    (min-resolution: 1.1dppx) {
    /* Serve SVG sprite if browser supports SVG and resolution is more than 105dpi */
    .pswp--svg .pswp__button,
    .pswp--svg .pswp__button--arrow--left:before,
    .pswp--svg .pswp__button--arrow--right:before {
      background-image: url(../images/default-skin.svg);
    }
    .pswp--svg .pswp__button--arrow--left,
    .pswp--svg .pswp__button--arrow--right {
      background: none;
    }
  }

  .pswp__button--close {
    background-position: 0 -44px;
  }

  .pswp__button--share {
    background-position: -44px -44px;
  }

  .pswp__button--fs {
    display: none;
  }

  .pswp--supports-fs .pswp__button--fs {
    display: block;
  }

  .pswp--fs .pswp__button--fs {
    background-position: -44px 0;
  }

  .pswp__button--zoom {
    display: none;
    background-position: -88px 0;
  }

  .pswp--zoom-allowed .pswp__button--zoom {
    display: block;
  }

  .pswp--zoomed-in .pswp__button--zoom {
    background-position: -132px 0;
  }

  /* no arrows on touch screens */
  .pswp--touch .pswp__button--arrow--left,
  .pswp--touch .pswp__button--arrow--right {
    visibility: hidden;
  }

  /*
	Arrow buttons hit area
	(icon is added to :before pseudo-element)
*/
  .pswp__button--arrow--left,
  .pswp__button--arrow--right {
    background: none;
    top: 50%;
    margin-top: -50px;
    width: 70px;
    height: 100px;
    position: absolute;
  }

  .pswp__button--arrow--left {
    left: 0;
  }

  .pswp__button--arrow--right {
    right: 0;
  }

  .pswp__button--arrow--left:before,
  .pswp__button--arrow--right:before {
    content: "";
    top: 35px;
    background-color: rgba(0, 0, 0, 0.3);
    height: 30px;
    width: 32px;
    position: absolute;
  }

  .pswp__button--arrow--left:before {
    left: 6px;
    background-position: -138px -44px;
  }

  .pswp__button--arrow--right:before {
    right: 6px;
    background-position: -94px -44px;
  }

  /*

	2. Share modal/popup and links

 */
  .pswp__counter,
  .pswp__share-modal {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  .pswp__share-modal {
    display: block;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 10px;
    position: absolute;
    z-index: 1600;
    opacity: 0;
    transition: opacity 0.25s ease-out;
    -webkit-backface-visibility: hidden;
    will-change: opacity;
  }

  .pswp__share-modal--hidden {
    display: none;
  }

  .pswp__share-tooltip {
    z-index: 1620;
    position: absolute;
    background: #fff;
    top: 56px;
    border-radius: 2px;
    display: block;
    width: auto;
    right: 44px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
    transform: translateY(6px);
    transition: transform 0.25s;
    -webkit-backface-visibility: hidden;
    will-change: transform;
  }
  .pswp__share-tooltip a {
    display: block;
    padding: 8px 12px;
    color: #000;
    text-decoration: none;
    font-size: 14px;
    line-height: 18px;
  }
  .pswp__share-tooltip a:hover {
    text-decoration: none;
    color: #000;
  }
  .pswp__share-tooltip a:first-child {
    /* round corners on the first/last list item */
    border-radius: 2px 2px 0 0;
  }
  .pswp__share-tooltip a:last-child {
    border-radius: 0 0 2px 2px;
  }

  .pswp__share-modal--fade-in {
    opacity: 1;
  }
  .pswp__share-modal--fade-in .pswp__share-tooltip {
    transform: translateY(0);
  }

  /* increase size of share links on touch devices */
  .pswp--touch .pswp__share-tooltip a {
    padding: 16px 12px;
  }

  a.pswp__share--facebook:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: -12px;
    right: 15px;
    border: 6px solid transparent;
    border-bottom-color: #fff;
    -webkit-pointer-events: none;
    -moz-pointer-events: none;
    pointer-events: none;
  }

  a.pswp__share--facebook:hover {
    background: #3e5c9a;
    color: #fff;
  }
  a.pswp__share--facebook:hover:before {
    border-bottom-color: #3e5c9a;
  }

  a.pswp__share--twitter:hover {
    background: #55acee;
    color: #fff;
  }

  a.pswp__share--pinterest:hover {
    background: #ccc;
    color: #ce272d;
  }

  a.pswp__share--download:hover {
    background: #ddd;
  }

  /*

	3. Index indicator ("1 of X" counter)

 */
  .pswp__counter {
    position: absolute;
    left: 0;
    top: 0;
    height: 44px;
    font-size: 13px;
    line-height: 44px;
    color: #fff;
    opacity: 0.75;
    padding: 0 10px;
  }

  /*
	
	4. Caption

 */
  .pswp__caption {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    min-height: 44px;
  }
  .pswp__caption small {
    font-size: 11px;
    color: #bbb;
  }

  .pswp__caption__center {
    text-align: left;
    max-width: 420px;
    margin: 0 auto;
    font-size: 13px;
    padding: 10px;
    line-height: 20px;
    color: #ccc;
  }

  .pswp__caption--empty {
    display: none;
  }

  /* Fake caption element, used to calculate height of next/prev image */
  .pswp__caption--fake {
    visibility: hidden;
  }

  /*

	5. Loading indicator (preloader)

	You can play with it here - http://codepen.io/dimsemenov/pen/yyBWoR

 */
  .pswp__preloader {
    width: 44px;
    height: 44px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -22px;
    opacity: 0;
    transition: opacity 0.25s ease-out;
    will-change: opacity;
    direction: ltr;
  }

  .pswp__preloader__icn {
    width: 20px;
    height: 20px;
    margin: 12px;
  }

  .pswp__preloader--active {
    opacity: 1;
  }
  .pswp__preloader--active .pswp__preloader__icn {
    /* We use .gif in browsers that don't support CSS animation */
    background: url(../images/preloader.gif) 0 0 no-repeat;
  }

  .pswp--css_animation .pswp__preloader--active {
    opacity: 1;
  }
  .pswp--css_animation .pswp__preloader--active .pswp__preloader__icn {
    animation: clockwise 500ms linear infinite;
  }
  .pswp--css_animation .pswp__preloader--active .pswp__preloader__donut {
    animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite;
  }

  .pswp--css_animation .pswp__preloader__icn {
    background: none;
    opacity: 0.75;
    width: 14px;
    height: 14px;
    position: absolute;
    left: 15px;
    top: 15px;
    margin: 0;
  }

  .pswp--css_animation .pswp__preloader__cut {
    /* 
			The idea of animating inner circle is based on Polymer ("material") loading indicator 
			 by Keanu Lee https://blog.keanulee.com/2014/10/20/the-tale-of-three-spinners.html
		*/
    position: relative;
    width: 7px;
    height: 14px;
    overflow: hidden;
  }

  .pswp--css_animation .pswp__preloader__donut {
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    border: 2px solid #fff;
    border-radius: 50%;
    border-left-color: transparent;
    border-bottom-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    background: none;
    margin: 0;
  }

  @media screen and (max-width: 1024px) {
    .pswp__preloader {
      position: relative;
      left: auto;
      top: auto;
      margin: 0;
      float: right;
    }
  }

  @keyframes clockwise {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes donut-rotate {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(-140deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  /*
	
	6. Additional styles

 */
  /* root element of UI */
  .pswp__ui {
    -webkit-font-smoothing: auto;
    visibility: visible;
    opacity: 1;
    z-index: 1550;
  }

  /* top black bar with buttons and "1 of X" indicator */
  .pswp__top-bar {
    position: absolute;
    left: 0;
    top: 0;
    height: 44px;
    width: 100%;
  }

  .pswp__caption,
  .pswp__top-bar,
  .pswp--has_mouse .pswp__button--arrow--left,
  .pswp--has_mouse .pswp__button--arrow--right {
    -webkit-backface-visibility: hidden;
    will-change: opacity;
    transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
  }

  /* pswp--has_mouse class is added only when two subsequent mousemove events occur */
  .pswp--has_mouse .pswp__button--arrow--left,
  .pswp--has_mouse .pswp__button--arrow--right {
    visibility: visible;
  }

  .pswp__top-bar,
  .pswp__caption {
    background-color: rgba(0, 0, 0, 0.5);
  }

  /* pswp__ui--fit class is added when main image "fits" between top bar and bottom bar (caption) */
  .pswp__ui--fit .pswp__top-bar,
  .pswp__ui--fit .pswp__caption {
    background-color: rgba(0, 0, 0, 0.3);
  }

  /* pswp__ui--idle class is added when mouse isn't moving for several seconds (JS option timeToIdle) */
  .pswp__ui--idle .pswp__top-bar {
    opacity: 0;
  }

  .pswp__ui--idle .pswp__button--arrow--left,
  .pswp__ui--idle .pswp__button--arrow--right {
    opacity: 0;
  }

  /*
	pswp__ui--hidden class is added when controls are hidden
	e.g. when user taps to toggle visibility of controls
*/
  .pswp__ui--hidden .pswp__top-bar,
  .pswp__ui--hidden .pswp__caption,
  .pswp__ui--hidden .pswp__button--arrow--left,
  .pswp__ui--hidden .pswp__button--arrow--right {
    /* Force paint & create composition layer for controls. */
    opacity: 0.001;
  }

  /* pswp__ui--one-slide class is added when there is just one item in gallery */
  .pswp__ui--one-slide .pswp__button--arrow--left,
  .pswp__ui--one-slide .pswp__button--arrow--right,
  .pswp__ui--one-slide .pswp__counter {
    display: none;
  }

  .pswp__element--disabled {
    display: none !important;
  }

  .pswp--minimal--dark .pswp__top-bar {
    background: none;
  }

  .desc-tooltip-theme .tippy-tooltip-content {
    text-align: left;
    font-family: "Helvetica Neue", Arial, sans-serif;
    max-width: 300px;
    max-height: 50vh;
    overflow-y: scroll;
    font-size: 12px;
  }
`;
