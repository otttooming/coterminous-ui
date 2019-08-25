import * as React from 'react';
import Common from './Button.common';
import { ButtonProps as CommonProps } from './Button.common';

export type AnchorElement = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type PartialCommonProps = Omit<CommonProps, keyof AnchorElement>;

export type ButtonProps = PartialCommonProps;

const Link: React.FC<ButtonProps> = ({ ...restProps }) => {
  return <Common {...restProps} />;
};

export default Link;
