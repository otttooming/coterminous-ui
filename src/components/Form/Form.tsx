import * as React from "react";

export interface FormProps {}
export interface FormState {
  fields: FormFields;
  actions: FormActions;
}

export interface FormActions {
  setField: (field: FormFields) => void;
  getField: (field: string) => void;
}

export interface FormFields {
  [key: string]: FormField;
}

export interface FormField {
  value: any;
}

const defaultValue: FormState = {
  fields: null,
  actions: {
    setField: (field: FormFields) => {},
    getField: () => {},
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

  getField = (field: string): FormField => {
    const { fields } = this.state;

    return fields[field];
  };
}

export interface withFormConsumerProps {}

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
