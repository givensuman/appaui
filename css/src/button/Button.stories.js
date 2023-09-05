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

export const ExtraSmall = {
  args: {
    class: "btn is-xs"
  }
}