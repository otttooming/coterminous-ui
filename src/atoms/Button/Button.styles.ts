import styled, { css } from 'styled-components';
import { theme } from '../../common/styles/theme';

export const button = css`
  background-color: ${theme.color.primary};
  color: ${theme.textColor.secondary};
  border-radius: ${theme.borderRadius.s};
  padding: 0 ${theme.space.m};
  height: ${theme.space.xl};
  line-height: ${theme.space.xl};
`;

export const link = css`
  background-color: transparent;
  text-decoration: none;
  padding: 0;
  margin: 0;

  &:visited {
    color: inherit;
  }
`;

export const IconContainer = styled.span`
  display: flex;
  margin-right: ${theme.space.s};
`;
