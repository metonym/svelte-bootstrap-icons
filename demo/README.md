# demo

> Demo website showcasing `svelte-bootstrap-icons` built with [sapper](https://sapper.svelte.dev/).

## Getting Started

First, build the `svelte-bootstrap-icons` library:

```sh
# svelte-bootstrap-icons/
yarn install
yarn prepack
```

Then, link `svelte-bootstrap-icons` package:

```sh
yarn link

cd demo/
yarn link "svelte-bootstrap-icons"
```

Install the dependencies and start it in development mode:

```sh
yarn install
yarn develop
```

## Build

Run `yarn build` to build the app for production. This executes the `sapper export` script, which exports the app as a static website.

## Deploy

Deploy the app to [GitHub Pages](https://pages.github.com/):

```sh
npx gh-pages -d public/svelte-bootstrap-icons
```
