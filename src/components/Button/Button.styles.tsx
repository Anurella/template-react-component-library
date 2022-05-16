import styled, { css } from "styled-components";
import { BUTTON_VARIANT } from "./constants";
import { StyledButtonProps } from "./Button.types";

const SIZES = {
  small: {
    height: 32,
    padding: 4,
    fontSize: 12 / 16,
    borderRadius: 8,
    minWidth: 120,
  },
  regular: {
    height: 50,
    padding: 12,
    fontSize: 18 / 16,
    borderRadius: 16,
    minWidth: 250,
  },
};

const COLOR_MAP = {
  [BUTTON_VARIANT.PRIMARY]: {
    color: "#02193E",
    backgroundColor: `hsla(207, 100%, 50%, 1)`,
    hoverBackgroundColor: "",
    activeBackgroundColor: "",
  },
  [BUTTON_VARIANT.SECONDARY]: {
    color: "#1A1C1F",
    backgroundColor: `#F5F6F7`,
    hoverBackgroundColor: "",
    activeBackgroundColor: "",
  },
  [BUTTON_VARIANT.DANGER]: {
    color: "#FFFFFF",
    backgroundColor: `#C63434`,
    hoverBackgroundColor: "#DB4343",
    activeBackgroundColor: "",
  },
  [BUTTON_VARIANT.GHOST]: {
    color: "#1A1C1F",
    backgroundColor: `transparent`,
    hoverBackgroundColor: "",
    activeBackgroundColor: "",
  },
};

export function getButtonStyles({ $variant, $size }: StyledButtonProps) {
  const styles = SIZES[$size];

  return css`
    height: ${styles.height + "px"};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: ${styles.borderRadius + "px"};
    font-size: ${styles.fontSize + "rem"};
    line-height: 1.2;
    text-decoration: none;
    border: none;
    white-space: nowrap;
    padding-inline: calc(${styles.padding * 2 + "px"});
    min-width: ${styles.minWidth + "px"};
    font-weight: 600;

    &:hover {
      filter: invert(36);
    }

    &:focus {
      outline-offset: 2px;
      outline-color: currentColor;
    }

    &:focus:not(:focus-visible) {
      outline: none;
    }

    ${css`
      color: ${COLOR_MAP[$variant].color};
      background-color: ${COLOR_MAP[$variant].backgroundColor};

      &:hover {
        background-color: ${COLOR_MAP[$variant].hoverBackgroundColor};
      }

      &:active {
        background-color: ${COLOR_MAP[$variant].hoverBackgroundColor};
      }
    `}

    &:disabled {
      &,
      &:hover,
      &:active,
      &:focus {
        background-color: #f5f6f7;
        color: #b6bfc4;
        cursor: not-allowed;
        filter: initial;
      }
    }
  `;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${getButtonStyles};
`;
