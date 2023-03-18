import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: string
}

export function Button({ color, children, ...props }: ButtonProps) {
    return (
        <Container {...props} color={color}>{children}</Container>
    );
}