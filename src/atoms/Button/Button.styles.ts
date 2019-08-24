import styled, { css } from 'styled-components';
import { theme } from '../../common/styles/theme';

export const button = css`
  background-color: ${theme.color.primary};
  color: ${theme.textColor.secondary};
  border-radius: ${theme.borderRadius.s};
`;

export const link = css``;

export const IconContainer = styled.span`
  display: flex;
  margin-right: ${theme.space.s};
`;
