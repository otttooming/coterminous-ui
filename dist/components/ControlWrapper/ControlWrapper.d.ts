import * as React from "react";
import { StyledComponentClass, // Required for tsconfig declaration export
CoterminousStyledThemeProps } from "coterminous-styled";
export interface ControlWrapperInternalProps {
    label: React.ReactNode;
    isRequired?: boolean;
    className?: string;
}
export declare type ControlWrapperProps = ControlWrapperInternalProps;
export declare const ControlWrapper: StyledComponentClass<ControlWrapperInternalProps, CoterminousStyledThemeProps, Pick<ControlWrapperInternalProps, "className" | "label" | "isRequired"> & {
    theme?: CoterminousStyledThemeProps;
}>;
