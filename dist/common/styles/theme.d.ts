import { ColorProps, BackgroundProps, BorderProps, SpacingProps, TypefaceProps, TransitionProps, ShadowProps } from "./constants";
export interface CoterminousStyledThemeProps {
    color: ColorProps;
    background: BackgroundProps;
    border: BorderProps;
    spacing: SpacingProps;
    typeface: TypefaceProps;
    transition: TransitionProps;
    shadow: ShadowProps;
}
export declare const theme: CoterminousStyledThemeProps;
