export default {
  title: 'Button',
  tags: ['autodocs'],
  render: ({ ...args }) => {
    return `<button class="${args.class}">Click Me</button>`;
  },
};

export const Primary = {
  args: {
    class: "btn"
  },
};

export const PrimaryOutlined = {
  args: {
    class: "btn outline outline-pink-500"
  }
}