import { css } from 'styled-components';
import { theme } from '../..';
import { WrapperProps } from './Heading';

export const common = css<WrapperProps>`
  margin-bottom: 0;
  font-weight: ${theme.fontWeight.bold};

  ${({ as }) => as === 'h1' && H1Style}
  ${({ as }) => as === 'h2' && H2Style}
  ${({ as }) => as === 'h3' && H3Style}
  ${({ as }) => as === 'h4' && H4Style}
  ${({ as }) => as === 'h5' && H5Style}
  ${({ as }) => as === 'h6' && H6Style}
`;

export const H1Style = css`
  font-size: ${theme.fontSize.xxl};
`;

export const H2Style = css`
  font-size: ${theme.fontSize.xl};
`;

export const H3Style = css`
  font-size: ${theme.fontSize.l};
`;

export const H4Style = css`
  font-size: ${theme.fontSize.m};
`;

export const H5Style = css`
  font-size: ${theme.fontSize.s};
`;

export const H6Style = css`
  font-size: ${theme.fontSize.xs};
`;
