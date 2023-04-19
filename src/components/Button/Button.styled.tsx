import styled, {css} from "styled-components";
import React from "react";

export interface ButtonStyledProps{
    role:string
    width:number,
    height:number,
    border_radius:number
    font_size:number
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  border: none;
  background-color: ${props => {
      switch (props.role){
        case 'Primary':
            return css`
              color: black;
              background-color: #5050ee;
            `
        case 'Danger':
            return css`
              color: white;
              background-color: #ff3a3a;
            `
      }
  }};
  width: ${props=>props.width}px;
  height: ${props => props.height}px;
  font-size: ${props => props.size}px;
  border-radius: ${props => props.border_radius}px;
`