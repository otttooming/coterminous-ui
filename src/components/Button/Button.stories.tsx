import * as React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider, theme, Button } from "coterminous-styled";
import { text, boolean, number } from "@storybook/addon-knobs";

const stories = storiesOf("Button", module);
stories.add("Button", () => {
  const groupId = "GROUP-ID1";
  const name = text("Name", "Arunoda Susiripala", groupId);

  const content = `My name is ${name}.`;

  return (
    <ThemeProvider theme={theme}>
      <>
        <Button>{content}</Button>
      </>
    </ThemeProvider>
  );
});
