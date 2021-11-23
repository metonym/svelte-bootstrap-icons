# svelte-bootstrap-icons

[![NPM][npm]][npm-url]

> [Bootstrap SVG icons](https://github.com/twbs/icons) as Svelte components.

<!-- REPO_URL -->

Try it in the [Svelte REPL](https://svelte.dev/repl/9a0e245df66248d59fadbbf007c06124).

---

<!-- TOC -->

## Installation

**Yarn**

```bash
yarn add -D svelte-bootstrap-icons
```

**NPM**

```bash
npm i -D svelte-bootstrap-icons
```

**pnpm**

```bash
pnpm i -D svelte-bootstrap-icons
```

## Usage

Refer to [ICON_INDEX.md](./ICON_INDEX.md) for a full list of supported icons.

### Base import

```svelte
<script>
  import {
    Alarm,
    Bank,
    CloudMoon,
    Github,
    PaintBucket,
    Wrench,
  } from "svelte-bootstrap-icons";
</script>

<Alarm />
<Bank />
<CloudMoon />
<Github />
<PaintBucket />
<Wrench />
```

### Direct import (recommended)

Import the icon directly for faster compiling during _development_.

**Note:** even if using the base import method, unused imports are still [tree shakeable](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking) by application bundlers like Rollup or webpack.

```html
<script>
  import Alarm from "svelte-bootstrap-icons/lib/Alarm";
  // OR
  import Alarm from "svelte-bootstrap-icons/lib/Alarm/Alarm.svelte";
</script>
```

## API

`$$restProps` are forwarded to the `svg` element.

### Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:keydown

## Usage with `svelte:component`

```svelte
<script>
  import * as icons from "svelte-bootstrap-icons";
</script>

{#each Object.keys(icons) as icon}
  <div>
    <svelte:component this={icons[icon]} title={icon} />
    {icon}
  </div>
{/each}
```

## TypeScript

Svelte version 3.31 or greater is required to use this library with TypeScript.

## Changelog

[Changelog](CHANGELOG.md)

## Contributing

See the [contributing guidelines](./CONTRIBUTING.md).

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-bootstrap-icons.svg?color=%237952b3&style=for-the-badge
[npm-url]: https://npmjs.com/package/svelte-bootstrap-icons
