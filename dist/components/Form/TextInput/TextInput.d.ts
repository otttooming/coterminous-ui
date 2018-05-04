/// <reference types="react" />
import * as React from "react";
import { StyledComponentClass, NextStyledThemeProps } from "coterminous-styled";
export declare enum TagName {
    Input = "input",
    TextArea = "h1",
}
export interface Props {
    label: React.ReactNode;
    onChange?: (value: string | React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    tagName?: TagName;
    className?: string;
}
export declare type TextInputProps = Props & Partial<React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>>;
export declare const TextInput: {
    Input: StyledComponentClass<Props & {
        tagName: TagName;
    }, NextStyledThemeProps, Pick<Props, "label" | "className" | "onChange" | "tagName"> & {
        theme?: NextStyledThemeProps;
    }>;
    TextArea: StyledComponentClass<Props & {
        tagName: TagName;
    }, NextStyledThemeProps, Pick<Props, "label" | "className" | "onChange" | "tagName"> & {
        theme?: NextStyledThemeProps;
    }>;
};
