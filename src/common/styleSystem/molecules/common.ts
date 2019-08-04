import { css } from 'styled-components';
import {
  display,
  width,
  maxWidth,
  WidthProps,
  MaxWidthProps,
  DisplayProps,
} from 'styled-system';

export type StyleSystemCommonProps = WidthProps & MaxWidthProps & DisplayProps;

export const styleSystemCommon = css`
  ${width}
  ${maxWidth}
  ${display}
`;
