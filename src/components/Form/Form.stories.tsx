import React from "react";
import Form from "./Form"
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "Form",
    Component: Form,
  } as ComponentMeta<typeof Form>;

  // create template
const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const FormComponent = Template.bind({});
FormComponent.storyName = "Form Component";

