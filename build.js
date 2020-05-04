const { cleanDir, generateFromFolder } = require("svg-to-svelte");
const fs = require("fs");
const path = require("path");
const pkg = require("./package.json");

async function build() {
  const { moduleNames } = await generateFromFolder(
    "node_modules/bootstrap-icons/icons",
    "lib",
    {
      clean: true,
    }
  );

  await cleanDir("docs");

  const docs = [
    "# docs\n",
    `> ${moduleNames.length} icons from bootstrap-icons@${pkg.devDependencies["bootstrap-icons"]}.\n`,
    "## Usage\n",
    "```html",
    `<script>
  import Icon from "svelte-bootstrap-icons/lib/{ModuleName}";
</script>

<Icon />`,
    "```\n",
    "## List of icons by `ModuleName`\n",
    moduleNames.map((moduleName) => `- ${moduleName}`).join("\n"),
  ].join("\n");

  fs.writeFileSync("docs/README.md", docs);
}

build();
