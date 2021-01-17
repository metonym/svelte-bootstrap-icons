const fs = require("fs");
const { generateFromFolder, generateIndex } = require("svg-to-svelte");
const { name: pkgName, devDependencies } = require("./package.json");

(async () => {
  const lib = "bootstrap-icons";
  const { moduleNames } = await generateFromFolder(`node_modules/${lib}/icons`);

  await generateIndex({
    moduleNames,
    pkgName,
    pkgVersion: devDependencies[lib],
    outputFile: "ICON_INDEX.md",
  });
})();
