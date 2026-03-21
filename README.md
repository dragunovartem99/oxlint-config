# Personal Oxlint Config

<a href="https://github.com/dragunovartem99/oxlint-config/blob/main/.oxlintrc.json" target="_blank"><img alt="Static Badge" src="https://img.shields.io/badge/View_Configuration-red"></a>
<img alt="NPM Version" src="https://img.shields.io/npm/v/@dragunovartem99/oxlint-config?color=orange">

## Installation

```shell
npm install --save-dev @dragunovartem99/oxlint-config
```

## Usage

The `.oxlintrc.json` configuration file is automatically symlinked into your project root via a `postinstall` script — no manual setup needed.

1. Add scripts to your project's `package.json`:

```json
{
    "scripts": {
        "lint": "oxlint --fix",
        "lint:check": "oxlint"
    }
}
```

2. Run the linter:

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
