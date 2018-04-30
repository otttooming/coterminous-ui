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
}
export interface FormFields {
    [key: string]: FormField;
}
export interface FormField {
    value: any;
}
export declare const FormContext: React.Context<FormState>;
export declare class FormProvider extends React.Component<FormProps, FormState> {
    constructor(props: FormProps);
    render(): JSX.Element;
    setField: (field: FormFields) => void;
}
