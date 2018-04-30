import * as React from "react";
import { TextInputStyle } from "./textInput.style";

// TS error if some components not explicitly imported for tsconfig declaration export
// https://github.com/styled-components/styled-components/issues/1063
// https://github.com/Microsoft/TypeScript/issues/9944
import {
  styled,
  StyledComponentClass, // Required for tsconfig declaration export
  NextStyledThemeProps, // Required for tsconfig declaration export
  Styles, // Required for tsconfig declaration export
} from "coterminous-styled";

// Enum must be exported or 'has or is using private name' error will occur
export enum TagName {
  Input = "input",
  TextArea = "h1",
}

interface Props
  extends Partial<
      React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
    > {
  onChange: (
    value: string | React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  tagName?: TagName;
  className?: string;
}

interface State {}

class TextInputBase extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {
      className,
      children,
      tagName = TagName.Input,
      ...restProps
    } = this.props;

    const attributes = { ...restProps, className };

    switch (tagName) {
      case TagName.Input:
        return (
          <input {...attributes} type="text" onChange={this.handleChange} />
        );
      case TagName.TextArea:
        return <textarea {...attributes} onChange={this.handleChange} />;
      default:
        return null;
    }
  }

  handleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = event.currentTarget.value;

    this.props.onChange(value);
  };
}

export const TextInput = {
  Input: styled(TextInputBase).attrs({
    tagName: TagName.Input,
  })`
    ${TextInputStyle};
  `,
  TextArea: styled(TextInputBase).attrs({
    tagName: TagName.TextArea,
  })`
    ${TextInputStyle};
  `,
};
