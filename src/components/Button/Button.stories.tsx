import React from "react";
import Button from "./Button";
import { BUTTON_VARIANT } from "./constants";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Button",
  Component: Button,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "regular"],
      },
    },
    variant: {
      control: {
        type: "radio",
        options: ["primary", "secondary", "danger", "ghost"],
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Button>;

// create template
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.storyName = "Primary With Text";
Primary.args = {
  children: "I am a boss",
  variant: BUTTON_VARIANT.PRIMARY,
  size: "regular",
};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/gUKcyfUmicjwC2ROFZTstW/%E2%9C%85-Atoms-%2F-Buttons?node-id=21%3A321",
  },
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.storyName = "Primary Disabled";
PrimaryDisabled.args = {
  children: "I am a boss",
  variant: BUTTON_VARIANT.PRIMARY,
  size: "regular",
  isDisabled: true,
};

export const Secondary = Template.bind({});
Secondary.storyName = "Secondary With Text";
Secondary.args = {
  children: "I am strong",
  variant: BUTTON_VARIANT.SECONDARY,
  size: "regular",
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.storyName = "Secondary Disabled";
SecondaryDisabled.args = {
  children: "I am strong",
  variant: BUTTON_VARIANT.SECONDARY,
  size: "regular",
  isDisabled: true,
};

export const SecondaryLoading = Template.bind({});
SecondaryLoading.storyName = "Secondary Loading";
SecondaryLoading.args = {
  children: "I am strong",
  variant: BUTTON_VARIANT.SECONDARY,
  size: "regular",
  isLoading: true,
};

export const Ghost = Template.bind({});
Ghost.storyName = "Ghost With Text";
Ghost.args = {
  children: "I am Ghost",
  variant: BUTTON_VARIANT.GHOST,
  size: "regular",
};

export const Danger = Template.bind({});
Danger.storyName = "Danger With Text";
Danger.args = {
  children: "I am Dangerous",
  variant: BUTTON_VARIANT.DANGER,
  size: "regular",
};

export const Small = Template.bind({});
Small.storyName = "Small with Text";
Small.args = {
  children: "I am small",
  variant: BUTTON_VARIANT.PRIMARY,
  size: "small",
};

export const SmallLoading = Template.bind({});
SmallLoading.storyName = "Small Loading";
SmallLoading.args = {
  children: "I am small",
  variant: BUTTON_VARIANT.PRIMARY,
  size: "small",
  isLoading: true,
};
