import * as React from 'react';
import Button from '../Button/Button.common';
import { ButtonProps } from '../Button/Button.common';

/**
 * Contains only attributes that are available to button element,
 * and not generic HTMLAttributes.
 * Prevents any Omit usage from removing standard HTMLAttributes
 */
export type ButtonElement = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  keyof React.HTMLAttributes<HTMLButtonElement>
>;

/**
 * Remove button element attributes to only support generic anchor.
 */
export type PartialButtonProps = Omit<ButtonProps, keyof ButtonElement>;

export type LinkProps = PartialButtonProps;

const Link: React.FC<LinkProps> = ({
  variant = 'link',
  as = 'a',
  ...restProps
}) => {
  return <Button {...restProps} as={as} variant={variant} />;
};

export default Link;
