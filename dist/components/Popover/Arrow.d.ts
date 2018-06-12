import * as React from "react";
import { StyledComponentClass, // Required for tsconfig declaration export
CoterminousStyledThemeProps } from "coterminous-styled";
interface ArrowProps {
    passedRef: (ref: HTMLElement | null) => void;
    style: React.CSSProperties;
    className?: string;
    placement: string;
}
export declare const Arrow: StyledComponentClass<ArrowProps, CoterminousStyledThemeProps, Pick<ArrowProps, "className" | "style" | "placement" | "passedRef"> & {
    theme?: CoterminousStyledThemeProps;
}>;
export {};
