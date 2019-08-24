import * as React from 'react';
import styled, { css } from 'styled-components';
import { styleSystemSpace } from '../../common/styleSystem';
import { theme } from '../../common/styles/theme';
import { Omit } from 'utility-types';
import { StyleSystemCommonProps } from '../../common/styleSystem/molecules/common';
import { StyleSystemSpaceProps } from '../../common/styleSystem/molecules/space';
import * as styles from './Button.styles';

const Wrapper = styled.button<{ variant?: string }>`
  margin: 0;
  border: 0;
  cursor: pointer;
  padding: 0 ${theme.space.l};
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  outline: none;
  min-width: ${theme.space.xl};
  justify-content: center;
  font: inherit;
  height: ${theme.space.xl};
  line-height: ${theme.space.xl};
  font-size: ${theme.fontSize.s};
  font-weight: ${theme.fontWeight.bold};
  user-select: none;

  ${({ variant }) => (variant === 'link' ? styles.link : styles.button)}
  ${styleSystemSpace}
`;

interface Props {
  onClick?: () => void;
  variant?: 'link';
}

type PartialAttributes = Omit<
  React.HTMLAttributes<HTMLButtonElement>,
  'onClick'
>;

export type ButtonProps = Props &
  PartialAttributes &
  StyleSystemSpaceProps &
  StyleSystemCommonProps;

const Button: React.FC<ButtonProps> = ({ children, onClick, ...restProps }) => {
  const handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (onClick) {
      onClick();
    }
  };

  return (
    <Wrapper {...restProps} onClick={handleClick}>
      {children}
    </Wrapper>
  );
};

export default Button;
