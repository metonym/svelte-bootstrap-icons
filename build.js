const { generateFromFolder } = require("svg-to-svelte");
const fs = require("fs");
const path = require("path");
const { name, devDependencies } = require("./package.json");

async function build() {
  const input = "node_modules/bootstrap-icons/icons";
  const output = "lib";
  const { moduleNames } = await generateFromFolder(input, output, {
    clean: true,
  });

  const index = `# Icon Index\n
> ${moduleNames.length} icons from ${name}@${
    devDependencies["bootstrap-icons"]
  }.\n
## Usage\n
\`\`\`html
<script>
  import Icon from "${name}/lib/{ModuleName}";
</script>

<Icon />
\`\`\`\n
## Icons by \`ModuleName\`\n
${moduleNames.map((name) => `- ${name}`).join("\n")}`;

  fs.writeFileSync("ICON_INDEX.md", index);
}

build();
