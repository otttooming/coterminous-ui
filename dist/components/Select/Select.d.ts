/// <reference types="react" />
import * as React from "react";
import { StyledComponentClass, CoterminousStyledThemeProps } from "coterminous-styled";
import { ControlWrapperProps } from "../ControlWrapper/ControlWrapper";
export interface SelectItemProps {
    label: string;
    value: any;
}
export interface Props {
    items: SelectItemProps[];
    onChange?: (value: SelectItemProps) => void;
}
export interface State {
    selected: SelectItemProps | undefined;
}
export declare type SelectProps = Props & ControlWrapperProps;
export declare class SelectBase extends React.Component<SelectProps, State> {
    state: State;
    render(): JSX.Element;
    renderControlWrapper: (element: React.ReactNode) => JSX.Element;
    renderDropdown: () => void;
    handleChange: (selected: SelectItemProps) => void;
}
export declare const Select: StyledComponentClass<SelectProps, CoterminousStyledThemeProps, Pick<SelectProps, "label" | "className" | "onChange" | "isRequired" | "items"> & {
    theme?: CoterminousStyledThemeProps;
}>;
