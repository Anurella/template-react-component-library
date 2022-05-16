import React from "react";
import Input from "./Input";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "Input",
    Component: Input,
    argTypes: {
        type: {
          control: {
            type: "select",
            options: ["text", "number"],
          },
        },
      },
  } as ComponentMeta<typeof Input>;

  // create template
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.storyName = "Input Component";
TextInput.args = {
  name: "Input",
  title: "Input",
};
