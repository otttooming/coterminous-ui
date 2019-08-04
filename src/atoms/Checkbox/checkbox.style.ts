import { visuallyHidden } from './../../common/styles/atoms/display.style';
import { theme } from '../../';
import styled, { css } from 'styled-components';
import { State } from './Checkbox';
import { styleSystemSpace } from '../../common/styleSystem';

export const CheckboxStyle = css`
  margin: 0 0 ${theme.space.m} 0;
`;

export const VisibleInput = styled.span<State>`
  display: inline-block;
  width: ${theme.space.l};
  height: ${theme.space.l};
  background-color: ${({ isChecked }) =>
    isChecked ? theme.color.primary : theme.backgroundColor.primary};
  border-radius: ${theme.borderRadius.s};
  margin-right: ${theme.space.m};
`;

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;

  ${styleSystemSpace}
`;

export const HiddenInput = styled.input`
  ${visuallyHidden};
`;
