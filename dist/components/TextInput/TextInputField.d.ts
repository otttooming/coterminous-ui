/// <reference types="react" />
import { ExternalWithFormConsumerProps } from "coterminous-styled";
import { TextInputProps } from "./TextInput";
export interface Props {
}
export declare type TextInputFieldProps = Props & TextInputProps & ExternalWithFormConsumerProps;
export declare const TextInputField: {
    Input: (props: TextInputFieldProps) => JSX.Element;
    TextArea: (props: TextInputFieldProps) => JSX.Element;
};
