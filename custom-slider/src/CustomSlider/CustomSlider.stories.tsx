import { ComponentStory, ComponentMeta } from "@storybook/react";

import CustomSlider from "./CustomSlider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/CustomSlider",
  component: CustomSlider,
} as ComponentMeta<typeof CustomSlider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomSlider> = () => (
  <div>
    <CustomSlider />
  </div>
);

export const Default = Template.bind({});
