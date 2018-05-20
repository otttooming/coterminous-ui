/// <reference types="react" />
import * as React from "react";
export declare type RefHandler = (ref: HTMLElement | null) => void;
export interface ReferenceChildrenProps {
    ref: RefHandler;
}
export interface Props {
    children: (props: ReferenceChildrenProps) => React.ReactNode;
    popoverChildren: () => React.ReactNode;
    isOpen: boolean;
}
export interface State {
}
export declare type PopoverProps = Props;
export declare class PopoverBase extends React.Component<PopoverProps, State> {
    constructor(props: PopoverProps);
    render(): JSX.Element;
}
export declare const Popover: typeof PopoverBase;
