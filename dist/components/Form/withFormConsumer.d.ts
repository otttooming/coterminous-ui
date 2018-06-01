/// <reference types="react" />
import * as React from "react";
import { Subtract } from "utility-types";
export interface ExternalWithFormConsumerProps {
    name: string;
}
export interface ComponentProps {
    onChange?: (value: any) => void;
}
export declare function withFormConsumer<P extends ExternalWithFormConsumerProps>(Component: React.ComponentType<Subtract<P, ExternalWithFormConsumerProps> & ComponentProps>): {
    new (props: P & ComponentProps, context?: any): {
        render(): JSX.Element;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: P & ComponentProps) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<P & ComponentProps>;
        state: Readonly<{}>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P & ComponentProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P & ComponentProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<P & ComponentProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P & ComponentProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P & ComponentProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P & ComponentProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P & ComponentProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
};
