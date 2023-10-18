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

const colors = ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"]
const variants = ["ghost", "outline", "link"]

export const Colors = {
  render: () => {
    return `
    <div class="flex flex-col space-y-2">
      ${[...colors].map(color => {
        return `
          <div class="flex space-x-2">
            <button class="btn is-${color}">Click Me</button>
            ${[...variants].map(variant => {
              return `
                <button class="btn is-${color} is-${variant}">Click Me</button>
              `
            })}
          </div>
        `
      })}
    </div>
    `
  }
}

export const IconButton = {
  render: () => {
    return `
    <button class="icon-btn">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5V204.7c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7V413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3V294.7c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3V92.5c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2V152.6L392 121v89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4V354.8L256 323.2v95.9l-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1V354.8L528 323.2v90.7c0 3.2-1.9 6-4.8 7.3z"/></svg>
    </button>
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