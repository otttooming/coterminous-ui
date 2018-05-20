/// <reference types="react" />
import { FormState, withFormConsumerProps } from "coterminous-styled";
import { SelectProps } from "./Select";
export interface Props {
}
export declare type SelectFieldProps = Props & Partial<FormState> & SelectProps & withFormConsumerProps;
export declare const SelectField: (props: SelectFieldProps) => JSX.Element;
