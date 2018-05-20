/// <reference types="react" />
import * as React from "react";
import { StyledComponentClass, CoterminousStyledThemeProps } from "coterminous-styled";
import { ControlWrapperProps } from "../ControlWrapper/ControlWrapper";
export interface Props {
    onChange?: (value: boolean) => void;
    className?: string;
    inputLabel: React.ReactNode;
}
export declare type CheckboxProps = Props & ControlWrapperProps;
export declare const Checkbox: StyledComponentClass<CheckboxProps, CoterminousStyledThemeProps, Pick<CheckboxProps, "label" | "className" | "onChange" | "isRequired" | "inputLabel"> & {
    theme?: CoterminousStyledThemeProps;
}>;
