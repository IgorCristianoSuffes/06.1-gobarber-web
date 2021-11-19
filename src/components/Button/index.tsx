import React, { ButtonHTMLAttributes } from "react";

//import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button:  React.FC<ButtonProps> = (props) => (
        <button {...props}>teste</button>
    
);

export default Button;