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
  RadioButtonField,
} from "coterminous-styled";

storiesOf("RadioButton", module)
  .addDecorator(story => <div style={{ background: "#fff" }}>{story()}</div>)
  .add("RadioButtonField", () => (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <FormProvider>
          <Section>
            <Heading.H1>RadioButtonField</Heading.H1>

            <RadioButtonField
              name="test_field"
              label="Label title"
              inputLabel="Input label"
              value={{ test: "value" }}
            />

            <RadioButtonField
              name="test_field"
              label="Label title 2"
              inputLabel="Input label 2"
              value="Test 1"
            />
          </Section>
        </FormProvider>
      </>
    </ThemeProvider>
  ));
