import * as React from "react";
import { StyledComponentClass, // Required for tsconfig declaration export
CoterminousStyledThemeProps } from "coterminous-styled";
import { ControlWrapperProps } from "../ControlWrapper/ControlWrapper";
import { ControllerStateAndHelpers, DownshiftState, StateChangeOptions } from "downshift";
export interface SelectGroupProps {
    label: string;
}
export interface SelectMetaProps {
    label: string;
}
export interface SelectSearchProps {
    label: string;
}
export interface SelectItemProps {
    label: string;
    value: any;
    searchTerms?: SelectSearchProps[];
    group?: SelectGroupProps;
    meta?: SelectMetaProps[];
}
export interface Props {
    items: SelectItemProps[];
    onChange?: (value: SelectItemProps) => void;
}
export interface State {
    selected: SelectItemProps | undefined;
}
export declare type SelectProps = Props & ControlWrapperProps;
export interface SelectGroupedNodes {
    [key: string]: React.ReactNode[];
}
export declare enum SELECT_GROUP {
    NOT_GROUPED = "NOT_GROUPED"
}
export declare class SelectBase extends React.Component<SelectProps, State> {
    state: State;
    render(): JSX.Element;
    renderControlWrapper: (element: React.ReactNode) => JSX.Element;
    renderPopoverChildren(options: ControllerStateAndHelpers<any>, items: SelectItemProps[]): React.ReactNode;
    renderSelectItem(options: ControllerStateAndHelpers<any>, selectItem: SelectItemProps, index: number): JSX.Element;
    renderDropdownItem: (item: SelectItemProps) => string | JSX.Element;
    stateReducer(state: DownshiftState<any>, changes: StateChangeOptions<any>): StateChangeOptions<any>;
    handleDownshiftChange: (selected: SelectItemProps) => void;
    handleFocus: (setState: (stateToSet: Partial<StateChangeOptions<any>>, cb?: () => void) => void, clearSelection?: () => void) => () => void;
    getFilteredResults: (inputValue: string) => (item: SelectItemProps) => boolean;
}
export declare const Select: StyledComponentClass<SelectProps, CoterminousStyledThemeProps, Pick<SelectProps, "className" | "onChange" | "label" | "isRequired" | "items"> & {
    theme?: CoterminousStyledThemeProps;
}>;
