import React from "react";
import Modal from "./Modal"
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "Modal",
    Component: Modal,
  } as ComponentMeta<typeof Modal>;

  // create template
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalComponent = Template.bind({});
ModalComponent.storyName = "Modal Component";

