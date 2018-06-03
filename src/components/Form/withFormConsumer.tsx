import * as React from "react";
import { FormContext, FormState } from "./Form";

export interface ExternalWithFormConsumerProps {
  name: string;
}

export interface ComponentProps {
  onChange?: (value: any) => void;
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type Subtract<T, K> = Omit<T, keyof K>;

export function withFormConsumer<P extends ExternalWithFormConsumerProps>(
  Component: React.ComponentType<
    Subtract<P, ExternalWithFormConsumerProps> & ComponentProps
  >,
) {
  return class FormConsumer extends React.Component<P & ComponentProps> {
    render() {
      const props = this.props;

      return (
        <FormContext.Consumer>
          {consumerProps => (
            <Component
              {...consumerProps}
              {...props}
              onChange={value =>
                consumerProps.actions.setField({
                  [props.name]: { state: value },
                })
              }
            />
          )}
        </FormContext.Consumer>
      );
    }
  };
}
