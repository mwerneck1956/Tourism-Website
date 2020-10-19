import React from "react";
import { Container } from "./styles";
import ButtonInterface from "./ButtonInterface";

export const Button: React.FC<ButtonInterface> = ({children , ...props}) => {
  return <Container outlined={props.outlined}>{children}</Container>;
};

export default Button;
