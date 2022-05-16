import React from "react";
import { ButtonWithTextProps } from "./Button.types";
import styled from "styled-components";
import { StyledButton } from "./Button.styles";
import { BUTTON_VARIANT } from "./constants";

const Button = ({
  children,
  className,
  isDisabled,
  isLoading = false,
  size,
  title,
  type = "button",
  variant = BUTTON_VARIANT.PRIMARY,
  onClick,
  ...rest
}: ButtonWithTextProps) => {
  return (
    <StyledButton
      className={className}
      $variant={variant}
      $size={size}
      type={type}
      aria-label={children}
      title={title}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      {isLoading && <StyledText>Loading</StyledText>}
      {!isLoading && <StyledText>{children}</StyledText>}
    </StyledButton>
  );
};

const StyledText = styled.span``;

Button.displayName = "Button";

export default Button;
