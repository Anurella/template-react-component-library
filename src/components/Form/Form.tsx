import React from "react";
import Input from "../Input/Input";
import Button from "../Button";
import StyledForm from "./Form.styles";

export default function Form() {
  return (
    <StyledForm>
      <Input type="text" name="First Name" title="First Name" />
      <Input type="text" name="Last Name" title="Last Name" />
      <Input type="text" name="Email Address" title="Email Address" />
      <Input type="number" name="Phone Number" title="Phone Number" />
      <Button size="regular" title="Submit" variant="primary" type="button">
        Submit
      </Button>
    </StyledForm>
  );
}
