import svelteReadme from "svelte-readme";
import pkg from "./package.json";

export default svelteReadme({
  minify: !process.env.ROLLUP_WATCH,
  svelte: { immutable: true },
  prefixUrl: `${pkg.homepage}/tree/master/`,
  style: `
    .code-fence > div {
      display: inline-flex;
      flex-direction: column;
      border: 1px solid #eaecef;
      border-radius: 4px;
      padding: 8px;
      margin: 4px;
    }

    .code-fence svg {
      margin-bottom: 4px;
    }
  `,
});
