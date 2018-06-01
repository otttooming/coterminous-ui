import * as React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider, theme, Button, Heading } from "coterminous-styled";

storiesOf("Heading", module)
  .addDecorator(story => <div style={{ background: "black" }}>{story()}</div>)
  .add("Heading", () => (
    <ThemeProvider theme={theme}>
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
