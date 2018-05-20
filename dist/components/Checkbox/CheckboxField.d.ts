/// <reference types="react" />
import { FormState, withFormConsumerProps } from "coterminous-styled";
import { CheckboxProps } from "./Checkbox";
export interface Props {
}
export declare type CheckboxFieldProps = Props & Partial<FormState> & CheckboxProps & withFormConsumerProps;
export declare const CheckboxField: (props: CheckboxFieldProps) => JSX.Element;
