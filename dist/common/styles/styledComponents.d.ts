/// <reference types="react" />
import * as React from "react";
import * as styledComponents from "styled-components";
import { Styles, StyledComponentClass, InterpolationFunction, ThemeProps } from "styled-components";
import { CoterminousStyledThemeProps } from "./theme";
declare const styled: styledComponents.ThemedBaseStyledInterface<CoterminousStyledThemeProps>, css: styledComponents.ThemedCssFunction<CoterminousStyledThemeProps>, injectGlobal: (strings: TemplateStringsArray, ...interpolations: styledComponents.SimpleInterpolation[]) => void, keyframes: (strings: TemplateStringsArray, ...interpolations: styledComponents.SimpleInterpolation[]) => string, ThemeProvider: React.ComponentClass<styledComponents.ThemeProviderProps<CoterminousStyledThemeProps>>;
export { styled, css, injectGlobal, keyframes, ThemeProvider, Styles, StyledComponentClass, InterpolationFunction, ThemeProps, CoterminousStyledThemeProps };
