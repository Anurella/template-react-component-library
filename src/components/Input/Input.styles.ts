import styled, { css } from "styled-components";
import { INPUT_VARIANT } from "./constants";

const StyledInput = styled.div`
    label {
        display: block;
        color: #000000;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: -0.12px;
        margin-bottom: 10px;
        margin-left: 6px;
    }

    input {
        width: 304px;
        height: 55px;
        border-radius: 16px;
        border: transparent;
        background: #F9FAFA;
        padding-left: 24px;
        outline: 0;
        &::placeholder {
            font-weight: 500;
            font-size: 16px;
            color: #7B828E;
            letter-spacing: -0.12px;
            line-height: 23px;
        }
        &:focus {
            border: 1.5px solid #008CFF;
        }
        &:invalid {
            border: 1.5px solid #DB4343;
        }
    }
    input[type="number"] {
        width: 304px;
        height: 55px;
        border-radius: 16px;
        border: transparent;
        background: #F9FAFA;
        text-align: center;
        outline: 0;
        &::placeholder {
            font-weight: 500;
            font-size: 16px;
            color: #7B828E;
            letter-spacing: -0.12px;
            line-height: 23px;
        }
        &:focus {
            border: 1.5px solid #008CFF;
        }
        &:invalid {
            border: 1.5px solid #DB4343;
        }
    }
`;

export default StyledInput