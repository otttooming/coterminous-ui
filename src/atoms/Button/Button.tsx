import * as React from 'react';
import Common from './Button.common';
import { ButtonProps as CommonProps } from './Button.common';

/**
 * Contains only attributes that are available to anchor element,
 * and not generic HTMLAttributes.
 * Prevents any Omit usage from removing standard HTMLAttributes
 */
export type AnchorElement = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof React.HTMLAttributes<HTMLAnchorElement>
>;

/**
 * Remove anchor element attributes to only support generic button.
 */
export type PartialCommonProps = Omit<CommonProps, keyof AnchorElement>;

export type ButtonProps = PartialCommonProps;

const Link: React.FC<ButtonProps> = ({ ...restProps }) => {
  return <Common {...restProps} />;
};

export default Link;
