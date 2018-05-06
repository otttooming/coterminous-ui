import {
  ColorProps,
  BackgroundProps,
  BorderProps,
  SpacingProps,
  TypefaceProps,
  TransitionProps,
  ShadowProps,
  color,
  background,
  border,
  spacing,
  typeface,
  transition,
  shadow,
} from "./constants";

export interface CoterminousStyledThemeProps {
  color: ColorProps;
  background: BackgroundProps;
  border: BorderProps;
  spacing: SpacingProps;
  typeface: TypefaceProps;
  transition: TransitionProps;
  shadow: ShadowProps;
}

export const theme: CoterminousStyledThemeProps = {
  color: color,
  background: background,
  border: border,
  spacing: spacing,
  typeface: typeface,
  transition: transition,
  shadow: shadow,
};
