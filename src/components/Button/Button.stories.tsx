import * as React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider, theme, Button } from "coterminous-styled";

storiesOf("Button", module)
  .addDecorator(story => <div style={{ textAlign: "center" }}>{story()}</div>)
  .add("Button", () => (
    <ThemeProvider theme={theme}>
      <>
        <Button>Button</Button>
      </>
    </ThemeProvider>
  ));
