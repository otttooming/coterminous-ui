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
    state: any;
}
export interface FormSubmit {
    fields: FormFields;
}
export declare const FormContext: React.Context<FormState>;
export declare class FormProvider extends React.Component<FormProps, FormState> {
    constructor(props: FormProps);
    render(): JSX.Element;
    setField: (field: FormFields) => void;
    getField: (field: string) => FormFieldState;
    submit: () => FormSubmit;
}
