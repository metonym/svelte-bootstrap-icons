# svelte-bootstrap-icons

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> [Bootstrap SVG icons](https://github.com/twbs/icons) as Svelte components.

## Install

```bash
yarn add -D svelte-bootstrap-icons
```

## Usage

```html
<script>
  import Ad from "svelte-bootstrap-icons/lib/Ad";
</script>

<Ad />
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
