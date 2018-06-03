import * as React from "react";
import * as styledComponents from "styled-components";
import { // Required for tsconfig declaration export
Styles, // Required for tsconfig declaration export
StyledComponentClass, // Required for tsconfig declaration export
InterpolationFunction, // Required for tsconfig declaration export
ThemeProps } from "styled-components";
import { CoterminousStyledThemeProps } from "./theme";
declare const styled: styledComponents.ThemedBaseStyledInterface<CoterminousStyledThemeProps>, css: styledComponents.ThemedCssFunction<CoterminousStyledThemeProps>, injectGlobal: (strings: TemplateStringsArray, ...interpolations: styledComponents.SimpleInterpolation[]) => void, keyframes: (strings: TemplateStringsArray, ...interpolations: styledComponents.SimpleInterpolation[]) => string, ThemeProvider: React.ComponentClass<styledComponents.ThemeProviderProps<CoterminousStyledThemeProps>>;
export { styled, css, injectGlobal, keyframes, ThemeProvider, Styles, StyledComponentClass, InterpolationFunction, ThemeProps, CoterminousStyledThemeProps, };
