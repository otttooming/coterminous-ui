import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import {
  ThemeProvider,
  Heading,
  FormProvider,
  FormContext,
  TextInputField,
  CheckboxField,
  theme,
  Section,
  GlobalStyle,
  Button,
} from "coterminous-styled";

const { Welcome } = require("@storybook/react/demo");

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Base", module)
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
  ))
  .add("Button", () => (
    <ThemeProvider theme={theme}>
      <>
        <Button>Button</Button>
      </>
    </ThemeProvider>
  ));

storiesOf("Forms", module)
  .add("Form", () => (
    <ThemeProvider theme={theme}>
      <FormProvider>
        <FormContext.Consumer>
          {({ setField }: any) => (
            <button onClick={() => setField({ field1: Math.random() })}>
              a
            </button>
          )}
        </FormContext.Consumer>
      </FormProvider>
    </ThemeProvider>
  ))
  .add("TextInputField", () => (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <FormProvider>
          <Section>
            <Heading.H1>TextInputField</Heading.H1>

            <TextInputField.Input name="test_field" label="Label title" />
            <TextInputField.TextArea
              name="test_field_textarea"
              label="Label title"
              isRequired={true}
            />
          </Section>

          <Section>
            <Heading.H1>Submit form</Heading.H1>

            <FormContext.Consumer>
              {props => <Button onClick={props.actions.submit}>Submit</Button>}
            </FormContext.Consumer>
          </Section>
        </FormProvider>
      </>
    </ThemeProvider>
  ))
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
            />
          </Section>
        </FormProvider>
      </>
    </ThemeProvider>
  ));
