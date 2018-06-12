/// <reference types="react" />
import { FormState, ExternalWithFormConsumerProps, CheckboxProps } from "coterminous-styled";
export interface Props {
}
export declare type RadioButtonFieldProps = Props & CheckboxProps & ExternalWithFormConsumerProps & Partial<FormState>;
export declare const RadioButtonField: (props: RadioButtonFieldProps) => JSX.Element;
