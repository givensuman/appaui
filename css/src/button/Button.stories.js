export default {
  title: 'Button',
  tags: ['autodocs'],
  render: ({ ...args }) => {
    return `<button class="${args.class}">Click Me</button>`;
  },
};

export const Default = {
  args: {
    class: "btn"
  },
};

export const Static = {
  args: {
    class: "btn is-static"
  }
}

export const Size = {
  render: () => {
    return `
    <div>
      <button class="btn is-xs">Click Me</button>
      <button class="btn is-sm">Click Me</button>
      <button class="btn">Click Me</button>
      <button class="btn is-lg">Click Me</button>
    </div>
    `
  }
}

export const Variants = {
  render: () => {
    return `
    <div class="flex space-x-2">
      <button class="btn">Click Me</button>
      <button class="btn is-ghost">Click Me</button>
      <button class="btn is-outline">Click Me</button>
      <button class="btn is-link">Click Me</button>
    </div>
    `
  }
}

export const IconButton = {
  render: () => {
    return `
    <button class="icon-btn">:)</button>
    `
  }
}

export const ButtonGroup = {
  render: () => {
    return `
    <div class="btn-group">
      <button class="btn">Hello</button>
      <button class="btn is-outline">There</button>
      <button class="btn is-red is-lg">General Kenobi</button>
    </div>
    `
  }
}