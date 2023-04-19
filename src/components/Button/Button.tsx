import React from 'react';
import {ButtonStyled} from "./Button.styled";

export interface ButtonProps{
    children: React.ReactNode,
    /**역할*/
    role:`Primary` | `Danger`
    width:number,
    height:number,
    border_radius:number
    font_size:number
}

const Button = ({children,role,width,height,border_radius,font_size}:ButtonProps) => {
    return (
        <ButtonStyled role={role}width={width}height={height}border_radius={border_radius}font_size={font_size}>
            {children}
        </ButtonStyled>
    );
};

export default Button;