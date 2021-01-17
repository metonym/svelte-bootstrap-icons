# Contributing

## Getting Started

### Prerequisites

- [node (version >=12)](https://nodejs.org/en/download/package-manager/#macos)
- [yarn](https://yarnpkg.com/en/docs/install#mac-stable)

### Fork and clone

Fork this repository and clone your fork:

```bash
git clone <YOUR_FORK>
cd svelte-bootstrap-icons
```

Set the original repo as the upstream:

```bash
git remote add upstream git@github.com:metonym/svelte-bootstrap-icons.git
```

### Install

Install the project dependencies by running the following command at the root of the folder.

```bash
yarn install
```

## Development workflow

[svg-to-svelte](https://github.com/metonym/svg-to-svelte) makes SVG files from the [bootstrap-icons](https://www.npmjs.com/package/bootstrap-icons) package consumable as Svelte components.

A single script ([build.js](./build.js)) specifies the input and output folders.

The generated Svelte components are located in the `lib` folder, which is ignored by Git but published to NPM.

Documentation is auto-generated using the list of icon module names from the source library (see [ICON_INDEX.md](./ICON_INDEX.md)).

### Developing

Run `yarn prepack` once to first build the library.

Then, run `yarn dev` to preview the rendered icons.

### Building

Run `yarn prepack` to build the library.

## Submitting a Pull Request

### Sync Your Fork

Before submitting a pull request, make sure your fork is up to date with the latest upstream changes.

```bash
git fetch upstream
git checkout master
git merge upstream/master
```

### Submit a PR

After you've pushed your changes to remote, submit your PR. Make sure you are comparing `<YOUR_USER_ID>/feature` to `origin/master`.
