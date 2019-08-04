import { css } from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { theme } from '../../../common/styles/theme';

export type StyleSystemSpaceProps = SpaceProps;

const topSpacing = css`
  margin-top: ${theme.space.m};

  &:first-child {
    margin-top: 0;
  }
`;

const defaultSpacing = css<StyleSystemSpaceProps>`
  ${({ m, mt }) => !Boolean(m) && !Boolean(mt) && topSpacing}
`;

export const styleSystemSpace = css`
  ${defaultSpacing}
  ${space}
`;
