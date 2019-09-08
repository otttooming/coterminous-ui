import * as React from 'react';
import styled from 'styled-components';
import { styleSystemSpace } from '../../common/styleSystem';
import { theme } from '../../common/styles/theme';
import { StyleSystemCommonProps } from '../../common/styleSystem/molecules/common';
import { StyleSystemSpaceProps } from '../../common/styleSystem/molecules/space';
import * as styles from './Button.styles';
import { PolymorphicElement } from '../../common/polymorphicElement/polymorphicElement.types';

const Wrapper = styled.button<WrapperProps>`
  margin: 0;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  outline: none;
  justify-content: center;
  font: inherit;
  font-size: ${theme.fontSize.s};
  font-weight: ${theme.fontWeight.semiBold};
  user-select: none;

  ${({ variant }) => (variant === 'link' ? styles.link : styles.button)}
  ${styleSystemSpace}
`;

interface Props {
  /**
   * Externally sourced icon component support
   */
  icon?: React.ReactNode;
}

interface WrapperProps {
  /**
   * Add specific `button` or `a` tag styles irrespective of underlying semantic tag.
   */
  variant?: 'link' | 'button';
}

export type ButtonProps = Props &
  WrapperProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  PolymorphicElement &
  StyleSystemSpaceProps &
  StyleSystemCommonProps;

const Button: React.FC<ButtonProps> = ({ children, icon, ...restProps }) => {
  return (
    <Wrapper {...restProps}>
      {icon && <styles.IconContainer>{icon}</styles.IconContainer>}

      {children && <span>{children}</span>}
    </Wrapper>
  );
};

export default Button;
