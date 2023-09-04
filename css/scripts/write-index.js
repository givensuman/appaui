const fs = require("fs");

const components = fs.readdirSync("build/jss").map((fileName) => {
  let componentName = fileName.slice(0, fileName.length - 3);

  if (componentName === "switch") componentName = "_switch";

  return {
    name: componentName,
    path: fileName,
  };
});

fs.writeFileSync(
  "build/index.js",
  `
const plugin = require("tailwindcss/plugin");

${components
  .map(
    (component) =>
`const ${component.name} = require("./jss/${component.path}")`
  )
  .join(";\n")};

module.exports = plugin(({ addComponents }) => {
  addComponents({
    ${components.map((component) => `...${component.name}`).join(",\n")}
  });
});
  `,
  (err) => {
    if (err) throw err;
  }
);