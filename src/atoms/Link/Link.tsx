import * as React from 'react';
import Button from '../Button/Button.common';
import { ButtonProps } from '../Button/Button.common';

export type ButtonElement = React.HTMLAttributes<HTMLButtonElement>;

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
