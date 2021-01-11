# svelte-bootstrap-icons

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> [Bootstrap SVG icons](https://github.com/twbs/icons) as Svelte components.

Try it in the [Svelte REPL](https://svelte.dev/repl/9a0e245df66248d59fadbbf007c06124?version=3.24.0).

<!-- REPO_URL -->

---

<!-- TOC -->

## Install

```bash
yarn add -D svelte-bootstrap-icons
# OR
npm i -D svelte-bootstrap-icons
```

## Usage

Refer to [ICON_INDEX.md](./ICON_INDEX.md) for list of icons.

<!-- prettier-ignore-start -->
```svelte
<script>
  import { Alarm, Github, PaintBucket, Wrench, ZoomOut } from "svelte-bootstrap-icons";
</script>

<Alarm />
<Github />
<PaintBucket />
<Wrench />
<ZoomOut />
```
<!-- prettier-ignore-end -->

### Base import

Use the base import for faster compiling during development. Note that unused, direct imports should are still treeshakeable by application bundlers like Rollup or webpack.

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

## Usage with svelte:component

<!-- prettier-ignore-start -->
```svelte
<script>
  import * as icons from "svelte-bootstrap-icons";
</script>

{#each Object.keys(icons) as icon}
  <div>
    <svelte:component title="{icon}" this={icons[icon]} />
    {icon}
  </div>
{/each}
```
<!-- prettier-ignore-end -->

## Changelog

[Changelog](CHANGELOG.md)

## Development workflow

Svelte components are generated from "bootstrap-icons" SVG files using [svg-to-svelte](https://github.com/metonym/svg-to-svelte).

A single script ([build.js](build.js)) specifies the input and output folders.

The generated Svelte components are located in the `lib` folder, which is ignored by Git but published to NPM.

Documentation is generated using the list of icon module names from the source library (see [ICON_INDEX.md](./ICON_INDEX.md)).

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-bootstrap-icons.svg?color=%23ff3e00&style=for-the-badge
[npm-url]: https://npmjs.com/package/svelte-bootstrap-icons
[build]: https://img.shields.io/travis/com/metonym/svelte-bootstrap-icons?color=24a148&style=for-the-badge
[build-badge]: https://travis-ci.com/metonym/svelte-bootstrap-icons
