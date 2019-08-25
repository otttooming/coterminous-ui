import * as React from 'react';
import Button from '../Button/Button.common';
import { ButtonProps } from '../Button/Button.common';

export type ButtonElement = React.HTMLAttributes<HTMLButtonElement>;

export type PartialButtonProps = Omit<ButtonProps, keyof ButtonElement>;

export type LinkProps = PartialButtonProps;

const Link: React.FC<LinkProps> = ({ ...restProps }) => {
  return <Button {...restProps} />;
};

export default Link;
