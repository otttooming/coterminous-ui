import { css } from 'styled-components';
import { theme } from '../../common/styles/theme';

const reset = css`
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  color: inherit;
  font-size: inherit;
  &:focus {
    outline: none;
  }
`;

const common = css`
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  padding-left: ${theme.space.m};
  border-radius: ${theme.borderRadius.s};
  background-color: ${theme.backgroundColor.secondary};
`;

export const selectInputStyle = css`
  ${reset};
  ${common};
  line-height: 48px;
  height: 48px;
`;
