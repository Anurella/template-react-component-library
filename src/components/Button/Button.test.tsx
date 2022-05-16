import React, { FormEvent } from "react";
import "@testing-library/jest-dom";
import { render, RenderResult, fireEvent } from "@testing-library/react";

import Button from "./Button";
import { ButtonWithTextProps } from "./Button.types";

// group tests together using a describe block.

describe("Button", () => {
  let onClickSpy: (event: FormEvent<HTMLButtonElement>) => void;
  let button: HTMLElement;
  let wrapper: RenderResult;

  beforeEach(() => {
    //   create a mock function
    onClickSpy = jest.fn();
  });

  describe("primary props", () => {
    beforeEach(() => {
      wrapper = render(
        <Button onClick={onClickSpy} size="small">
          Click me
        </Button>
      );
      button = wrapper.getByLabelText("Click me");
    });

    it('should default to the type "button"', () => {
      expect(button).toHaveAttribute("type", "button");
    });

    describe("when the button is clicked", () => {
      beforeEach(() => {
        fireEvent.click(button);
      });

      it("should handle the click event", () => {
        expect(onClickSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
