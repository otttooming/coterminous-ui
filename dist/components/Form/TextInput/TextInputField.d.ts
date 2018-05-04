/// <reference types="react" />
import { FormState } from "coterminous-styled";
import { TextInputProps, TagName } from "./TextInput";
export interface Props {
    name: string;
    tagName?: TagName;
}
export declare type TextInputFieldProps = Props & Partial<FormState> & TextInputProps;
export declare const TextInputField: {
    Input: (props: TextInputFieldProps) => JSX.Element;
    TextArea: (props: TextInputFieldProps) => JSX.Element;
};
