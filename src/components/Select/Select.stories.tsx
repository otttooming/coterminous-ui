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
  SelectField,
  FormContext,
  SelectItemProps,
  Select,
} from "coterminous-styled";

const selectItems: SelectItemProps[] = [
  { label: "Apple tree", value: { pickup: "Pickup value" } },
  {
    label: "Lemon tree",
    value: { pickup: "Pickup value" },
    renderContent: <div style={{ color: "red" }}>Lemon red</div>,
  },
];

storiesOf("Select", module)
  .addDecorator(story => <div style={{ background: "#fff" }}>{story()}</div>)
  .add("Select", () => (
    <ThemeProvider theme={theme}>
      <>
        <Section>
          <Select label="Enter address" items={selectItems} />
        </Section>
      </>
    </ThemeProvider>
  ))
  .add("SelectField", () => (
    <ThemeProvider theme={theme}>
      <FormProvider>
        <Section>
          <SelectField
            name="select"
            label="Enter address"
            items={selectItems}
          />
        </Section>
      </FormProvider>
    </ThemeProvider>
  ));
