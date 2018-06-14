import * as React from "react";
import { StyledComponentClass, // Required for tsconfig declaration export
CoterminousStyledThemeProps } from "coterminous-styled";
import { ControlWrapperProps } from "../ControlWrapper/ControlWrapper";
export interface SelectItemProps {
    label: string;
    renderContent?: JSX.Element;
    value: any;
    searchTerms?: string[];
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
    renderDropdownItem: (item: SelectItemProps) => string | JSX.Element;
    handleChange: (selected: SelectItemProps) => void;
}
export declare const Select: StyledComponentClass<SelectProps, CoterminousStyledThemeProps, Pick<SelectProps, "className" | "onChange" | "label" | "isRequired" | "items"> & {
    theme?: CoterminousStyledThemeProps;
}>;
