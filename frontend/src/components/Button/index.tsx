import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <Container {...rest}>{children}</Container>;
};

export default Button;
