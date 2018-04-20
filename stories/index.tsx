import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { ThemeProvider, Heading } from "coterminous-styled";

const { Button, Welcome } = require("@storybook/react/demo");

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));

storiesOf("Base", module).add("Heading", () => (
  <ThemeProvider theme={{ primaryColor: "red", primaryColorInverted: "blue" }}>
    <>
      <Heading.H1>Heading</Heading.H1>
      <Heading.H2>Heading</Heading.H2>
      <Heading.H3>Heading</Heading.H3>
      <Heading.H4>Heading</Heading.H4>
      <Heading.H5>Heading</Heading.H5>
      <Heading.H6>Heading</Heading.H6>
    </>
  </ThemeProvider>
));
