/// <reference types="react" />
import * as React from "react";
export interface FormProps {
}
export interface FormState {
    fields: FormFields;
    actions: FormActions;
}
export interface FormActions {
    setField: (field: FormFields) => void;
    getField: (field: string) => void;
    submit: () => void;
}
export interface FormFields {
    [key: string]: FormFieldState;
}
export interface FormFieldState {
    value: any;
}
export declare const FormContext: React.Context<FormState>;
export declare class FormProvider extends React.Component<FormProps, FormState> {
    constructor(props: FormProps);
    render(): JSX.Element;
    setField: (field: FormFields) => void;
    getField: (field: string) => FormFieldState;
    submit: () => FormFields;
}
export interface withFormConsumerProps {
    name: string;
}
export declare function withFormConsumer<P extends withFormConsumerProps>(Component: React.ComponentType<P>): {
    new (props: P, context?: any): {
        render(): JSX.Element;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: P) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<P>;
        state: Readonly<{}>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<{}>, nextContext: any): void;
    };
};
