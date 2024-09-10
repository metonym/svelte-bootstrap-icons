# svelte-bootstrap-icons

[![NPM][npm]][npm-url]

> [Bootstrap SVG icons](https://github.com/twbs/icons) as Svelte components with zero dependencies.

This package uses [svelvg](https://github.com/metonym/svelvg) to convert source SVG files into Svelte components.

Try it in the [Svelte REPL](https://svelte.dev/repl/9a0e245df66248d59fadbbf007c06124).

---

## Installation

```bash
# NPM
npm i svelte-bootstrap-icons

# pnpm
pnpm i svelte-bootstrap-icons

# Bun
bun add svelte-bootstrap-icons

# Yarn
yarn add svelte-bootstrap-icons
```

## Usage

See [ICON_INDEX.md](./ICON_INDEX.md) for a list of supported icons.

### Base import

```svelte
<script>
  import { Alarm, Bank, CloudMoon } from "svelte-bootstrap-icons";
</script>

<Alarm />
<Bank />
<CloudMoon />
```

### Direct import (recommended)

Import the icon directly for faster compiling during development.

```html
<script>
  import Alarm from "svelte-bootstrap-icons/lib/Alarm.svelte";
</script>
```

### Custom size

`$$restProps` are forwarded to the `svg` element.

Use the `width` and `height` attributes to customize the icon size. The default is 16px.

```svelte
<Alarm width={24} height={24} />
```

### Custom color

Use the `fill` attribute to specify a custom color.

```svelte
<Alarm fill="red" />
```

## Changelog

[Changelog](CHANGELOG.md)

## Contributing

See the [contributing guidelines](./CONTRIBUTING.md).

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-bootstrap-icons.svg?color=%237952b3&style=for-the-badge
[npm-url]: https://npmjs.com/package/svelte-bootstrap-icons
