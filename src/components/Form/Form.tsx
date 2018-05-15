import * as React from "react";

export interface FormProps {}
export interface FormState {
  fields: FormFields;
  actions: FormActions;
}

export interface FormActions {
  setField: (field: FormFields) => void;
  getField: (field: string) => void;
  submit: () => void;
}

export interface FormFields {
  [key: string]: FormFieldState;
}

export interface FormFieldState {
  value: any;
}

const defaultValue: FormState = {
  fields: null,
  actions: {
    setField: (field: FormFields) => {},
    getField: () => {},
    submit: () => {},
  },
};

export const FormContext = React.createContext(defaultValue);

export class FormProvider extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      ...defaultValue,
      actions: {
        setField: value => this.setField(value),
        getField: value => this.getField(value),
        submit: () => this.submit(),
      },
    };
  }

  render() {
    return (
      <FormContext.Provider value={this.state}>
        <form action="" onSubmit={event => event.preventDefault()}>
          {this.props.children}
        </form>
      </FormContext.Provider>
    );
  }

  setField = (field: FormFields): void => {
    this.setState({ fields: { ...this.state.fields, ...field } });
  };

  getField = (field: string): FormFieldState => {
    const { fields } = this.state;

    return fields[field];
  };

  submit = () => {
    const { fields } = this.state;
    console.log(fields);

    return fields;
  };
}

export interface withFormConsumerProps {
  name: string;
}

export function withFormConsumer<P extends withFormConsumerProps>(
  Component: React.ComponentType<P>,
) {
  return class FormConsumer extends React.Component<P> {
    render() {
      const props = this.props;

      return (
        <FormContext.Consumer>
          {consumerProps => <Component {...consumerProps} {...props} />}
        </FormContext.Consumer>
      );
    }
  };
}
