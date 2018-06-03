import { StyledComponentClass, // Required for tsconfig declaration export
CoterminousStyledThemeProps } from "coterminous-styled";
import { ControlWrapperInternalProps, ControlWrapperProps } from "../ControlWrapper/ControlWrapper";
export declare enum TagName {
    Input = "input",
    TextArea = "textarea"
}
export interface Props {
    onChange?: (value: string) => void;
    tagName?: TagName;
    className?: string;
}
export declare type TextInputProps = Props & ControlWrapperProps;
export declare const TextInput: {
    Input: StyledComponentClass<Props & ControlWrapperInternalProps & {
        tagName: TagName;
    }, CoterminousStyledThemeProps, Pick<TextInputProps, "className" | "onChange" | "tagName" | "label" | "isRequired"> & {
        theme?: CoterminousStyledThemeProps;
    }>;
    TextArea: StyledComponentClass<Props & ControlWrapperInternalProps & {
        tagName: TagName;
    }, CoterminousStyledThemeProps, Pick<TextInputProps, "className" | "onChange" | "tagName" | "label" | "isRequired"> & {
        theme?: CoterminousStyledThemeProps;
    }>;
};
