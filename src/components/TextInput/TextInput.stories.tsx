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
  TextInputField,
  FormContext,
} from "coterminous-styled";

storiesOf("TextInput", module)
  .addDecorator(story => <div style={{ background: "#fff" }}>{story()}</div>)
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
  ));
