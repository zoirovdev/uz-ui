import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username...",
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    placeholder: "example@mail.com",
    error: "Invalid email",
  },
};

export const FullWidth: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    fullWidth: true,
  },
};
