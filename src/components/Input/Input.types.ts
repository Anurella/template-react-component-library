import { INPUT_VARIANT } from "./constants";
import { ValueOf } from "../../helpers";
import { ComponentWithClass } from "../../common/ComponentWithClass"

interface InputBaseProps extends Omit<ComponentWithClass, 'children'>{
  isDisabled?: boolean
  variant?: InputVariantType
}

export interface InputProps extends InputBaseProps {
  name?: string
  title?: string
}



export type InputVariantType = ValueOf<typeof INPUT_VARIANT>;

export interface StyledInputProps {
  $variant: InputVariantType
}