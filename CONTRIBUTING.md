# Contributing

## Prerequisites

- Node
- Bun

## Fork and clone

Fork this repository and clone your fork:

```bash
git clone <YOUR_FORK>
cd svelte-bootstrap-icons
```

Set the original repo as the upstream:

```bash
git remote add upstream git@github.com:metonym/svelte-bootstrap-icons.git
```

## Install

Install the project dependencies by running `bun install`.

### Development workflow

[svelvg](https://github.com/metonym/svelvg) converts SVG files from [bootstrap-icons](https://www.npmjs.com/package/bootstrap-icons) into Svelte components.

Run `bun build:lib` to generate Svelte components from SVG source files.

The generated Svelte components are located in the `lib` folder, which is ignored by Git but published to NPM.

Documentation is auto-generated using the list of icon module names from the source library (see [ICON_INDEX.md](./ICON_INDEX.md)).

### Developing

First, run `bun build:lib` once to build the library.

Then, run `bun dev` to preview the rendered icons.

### Submitting a Pull Request

Before submitting a pull request, make sure your fork is up to date with the latest upstream changes.

```bash
git fetch upstream
git checkout master
git merge upstream/master
```

After you've pushed your changes to remote, submit your PR. Make sure you are comparing `<YOUR_USER_ID>/feature` to `origin/master`.
