export interface ColorProps {
    dark: string;
    red: string;
    warm: string;
    white: string;
    green: string;
}
export declare const color: ColorProps;
export interface BackgroundProps {
    main: string;
    input: string;
    section: string;
}
export declare const background: BackgroundProps;
export interface BorderProps {
    radius: BorderRadiusProps;
}
export interface BorderRadiusProps {
    small: string;
    medium: string;
    large: string;
}
export declare const border: BorderProps;
export interface SpacingProps {
    small: string;
    normal: string;
    medium: string;
    large: string;
}
export declare const spacing: SpacingProps;
export interface TypefaceNameProps {
    primary: string;
    secondary: string;
}
export interface TypefaceWeightProps {
    thin: number;
    light: number;
    normal: number;
    bold: number;
}
export interface TypefaceSizeProps {
    small: string;
    normal: string;
}
export interface TypefaceProps {
    name: TypefaceNameProps;
    weight: TypefaceWeightProps;
    size: TypefaceSizeProps;
}
export declare const typeface: TypefaceProps;
export interface TransitionSpeedProps {
    normal: number;
}
export interface TransitionProps {
    speed: TransitionSpeedProps;
}
export declare const transition: TransitionProps;
export interface ShadowProps {
    main: string;
}
export declare const shadow: ShadowProps;
