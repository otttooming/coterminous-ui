import * as React from "react";
import { storiesOf } from "@storybook/react";
import {
  GlobalStyle,
  ThemeProvider,
  FormProvider,
  theme,
  Button,
  Heading,
  Section,
  CheckboxField,
  FormContext,
} from "coterminous-styled";

storiesOf("Checkbox", module)
  .addDecorator(story => <div style={{ background: "#fff" }}>{story()}</div>)
  .add("CheckboxField", () => (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <FormProvider>
          <Section>
            <Heading.H1>CheckboxField</Heading.H1>

            <CheckboxField
              name="test_field"
              label="Label title"
              inputLabel="Input label"
              value="test value"
            />
          </Section>
        </FormProvider>
      </>
    </ThemeProvider>
  ));
