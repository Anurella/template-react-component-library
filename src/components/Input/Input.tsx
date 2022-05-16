import React from "react";
import StyledInput from "./Input.styles";

export default function Input ({type, name, title}) {
    return (
        <StyledInput>
            <label htmlFor={name}>{title}</label>
            <input name={name} type={type} placeholder="Placeholder" pattern="[aA-zZ]" />
        </StyledInput>
    )
}