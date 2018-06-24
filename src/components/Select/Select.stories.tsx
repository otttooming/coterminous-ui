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
  {
    label: "Apple tree",
    value: { pickup: "Pickup value" },
    group: { label: "second" },
    searchTerms: [{ label: "red" }],
  },
  {
    label: "Lemon tree",
    value: { pickup: "Alt value" },
    group: { label: "first" },
    searchTerms: [{ label: "red" }],
    meta: [{ label: "red" }],
  },
  {
    label: "unosrted tree",
    value: { pickup: "Alt value" },
    searchTerms: [{ label: "red" }],
    meta: [{ label: "red" }],
  },
  {
    label: "Prune tree",
    value: { pickup: "Alt value" },
    group: { label: "first" },
    searchTerms: [{ label: "red" }],
    meta: [{ label: "red" }],
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
