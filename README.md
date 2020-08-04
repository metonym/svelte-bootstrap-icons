# svelte-bootstrap-icons

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> [Bootstrap SVG icons](https://github.com/twbs/icons) as Svelte components.

Try it in the [Svelte REPL](https://svelte.dev/repl/9a0e245df66248d59fadbbf007c06124?version=3.24.0).

## [Icon Preview](https://metonym.github.io/svelte-bootstrap-icons/)

## Install

This library requires svelte version 3.20.x or greater due to use of the `$$restProps` API.

```bash
yarn add -D svelte-bootstrap-icons
```

## Usage

```html
<script>
  import Alarm from "svelte-bootstrap-icons/lib/Alarm";
</script>

<Alarm />
```

Refer to [docs/README.md](docs/README.md) for a full list of supported icons.

## API

`$$restProps` are forwarded to the `svg` element.

### Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:keydown

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-bootstrap-icons.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-bootstrap-icons
[build]: https://travis-ci.com/metonym/svelte-bootstrap-icons.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-bootstrap-icons
