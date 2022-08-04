import Todo from "../components/Todo";

export default {
  title: "Components/Todo",
  component: Todo,
  argTypes: { clickHandler: { action: "handleClick" } }, // click handled with 'actions'
};

const Template = (args) => <Todo {...args} />;

export const One = Template.bind({});
One.args = {
  text: "Test One",
};

export const Two = Template.bind({});
Two.args = {
  text: "Test Two",
};
