/// <reference types="react" />
import { FormState, withFormConsumerProps } from "coterminous-styled";
import { TextInputProps, TagName } from "./TextInput";
export interface Props {
    tagName?: TagName;
}
export declare type TextInputFieldProps = Props & Partial<FormState> & TextInputProps & withFormConsumerProps;
export declare const TextInputField: {
    Input: (props: TextInputFieldProps) => JSX.Element;
    TextArea: (props: TextInputFieldProps) => JSX.Element;
};
