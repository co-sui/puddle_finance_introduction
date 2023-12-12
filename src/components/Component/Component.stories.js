import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["component-22", "component-21"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "component-22",
    className: {},
    frameSubtract: "/img/subtract-4.svg",
    frameEllipse: "/img/ellipse-4-1.svg",
  },
};
