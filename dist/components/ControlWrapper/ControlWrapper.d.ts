/// <reference types="react" />
import * as React from "react";
import { StyledComponentClass, CoterminousStyledThemeProps } from "coterminous-styled";
export interface ControlWrapperInternalProps {
    label: React.ReactNode;
    isRequired?: boolean;
    className?: string;
}
export declare type ControlWrapperProps = ControlWrapperInternalProps;
export declare const ControlWrapper: StyledComponentClass<ControlWrapperInternalProps, CoterminousStyledThemeProps, Pick<ControlWrapperInternalProps, "label" | "className" | "isRequired"> & {
    theme?: CoterminousStyledThemeProps;
}>;
