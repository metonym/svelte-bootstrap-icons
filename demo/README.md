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

Install the app dependencies and start it in development mode:

```sh
yarn install
yarn develop
```

## Build

To build the app for production, run `yarn build`. This executes the `sapper export` which exports the app as a static website.

## Deploy

Deploy the app to GitHub Pages:

```sh
npx gh-pages -d public/svelte-bootstrap-icons
```
