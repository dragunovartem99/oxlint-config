# Personal Oxlint Config

<a href="https://github.com/dragunovartem99/oxlint-config/blob/main/src/index.ts" target="_blank"><img alt="Static Badge" src="https://img.shields.io/badge/View_Configuration-red"></a>
<img alt="NPM Version" src="https://img.shields.io/npm/v/@dragunovartem99/oxlint-config?color=orange">

This configuration focuses on **correctness** and **safety**, keeping style opinions out of the linter:

- Correctness and suspicious rules as errors
- Pedantic and performance rules as warnings
- Style, restriction, and nursery rules disabled
- Broad plugin coverage (eslint, typescript, unicorn, oxc, jsdoc, node, promise, vitest, vue)

## Installation

```shell
npm install --save-dev @dragunovartem99/oxlint-config
```

## Usage

1. Create `oxlint.config.ts` in your project root:

```ts
export { default } from "@dragunovartem99/oxlint-config";
```

2. Add scripts to your project's `package.json`:

```json
{
    "scripts": {
        "lint": "oxlint --fix",
        "lint:check": "oxlint"
    }
}
```

3. Run the linter:

```shell
npm run lint
```

Or check linting without modifications:

```shell
npm run lint:check
```

## Creating your own configuration

For creating similar configurations, see:

- [oxlint's configuration docs](https://oxc.rs/docs/guide/usage/linter/config.html)
- [npm's documentation on scoped packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
