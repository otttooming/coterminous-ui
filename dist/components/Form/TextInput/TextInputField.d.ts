/// <reference types="react" />
import { TagName } from "./TextInput";
export interface Props {
    name: string;
    tagName?: TagName;
}
export declare const TextInputField: {
    Input: (props: Props) => JSX.Element;
    TextArea: (props: Props) => JSX.Element;
};
