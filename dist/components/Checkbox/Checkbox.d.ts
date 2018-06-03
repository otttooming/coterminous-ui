import * as React from "react";
import { StyledComponentClass, // Required for tsconfig declaration export
CoterminousStyledThemeProps } from "coterminous-styled";
import { ControlWrapperProps } from "../ControlWrapper/ControlWrapper";
export interface Props {
    onChange?: (value: boolean) => void;
    className?: string;
    inputLabel: React.ReactNode;
}
export declare type CheckboxProps = Props & ControlWrapperProps;
export declare const Checkbox: StyledComponentClass<CheckboxProps, CoterminousStyledThemeProps, Pick<CheckboxProps, "className" | "onChange" | "label" | "isRequired" | "inputLabel"> & {
    theme?: CoterminousStyledThemeProps;
}>;
