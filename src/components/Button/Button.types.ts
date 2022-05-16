import { BUTTON_VARIANT } from "./constants";
import { ValueOf } from "../../helpers";
import { ComponentWithClass } from "../../common/ComponentWithClass";
import { FormEvent } from 'react';

interface ButtonBaseProps extends Omit<ComponentWithClass, 'children'>{
  isDisabled?: boolean
  isLoading?: boolean
  size?: string
  type?: 'button' | 'submit'
  variant?: ButtonVariantType
  // handler called when the button is clicked 
  onClick?: (event: FormEvent<HTMLButtonElement>) => void
}

export interface ButtonWithTextProps extends ButtonBaseProps {
  children?: string
  title?: string
}


/*  to do 
 1. create button with no text
 2. Button with icon 
*/


export type ButtonVariantType = ValueOf<typeof BUTTON_VARIANT>;

export interface StyledButtonProps {
  $variant: ButtonVariantType
  $size: string,
}