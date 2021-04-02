<p align="center">
  <a href="http://runnerty.io">
    <img height="257" src="https://runnerty.io/assets/header/logo-stroked.png">
  </a>
  <p align="center">Smart Processes Management</p>
</p>

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency Status][david-badge]][david-badge-url]
<a href="#badge">
<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
</a>

# Iterable executor for [Runnerty]:

### Installation:

Through NPM

```bash
npm i @runnerty/executor-iterable
```

You can also add modules to your project with [runnerty-cli]

```bash
npx runnerty-cli add @runnerty/executor-iterable
```

This command installs the module in your project, adds example configuration in your `config.json` and creates an example plan of use.

If you have installed [runnerty-cli] globally you can include the module with this command:

```bash
rty add @runnerty/executor-iterable
```

### Configuration:

Add in [config.json]:

```json
{
  "id": "iterable_default",
  "type": "@runnerty-executor-iterable"
}
```

### Plan sample:

Add in [plan.json]:

- Object

```json
{
  "id": "iterable_default",
  "objects": [
    { "key1": "val1", "key2": "val2" },
    { "key1": "val1_1", "key2": "val2_2" },
    { "key1": "val1_2", "key2": "val2_3" }
  ]
}
```

- String

```json
{
  "id": "iterable_default",
  "objects": "@GV(VAR_JSON_STRINGIFY)"
}
```

- JSON File

```json
{
  "id": "iterable_default",
  "jsonFile": "sample.json"
}
```

[runnerty]: http://www.runnerty.io
[downloads-image]: https://img.shields.io/npm/dm/@runnerty/executor-iterable.svg
[npm-url]: https://www.npmjs.com/package/@runnerty/executor-iterable
[npm-image]: https://img.shields.io/npm/v/@runnerty/executor-iterable.svg
[david-badge]: https://david-dm.org/runnerty/executor-iterable.svg
[david-badge-url]: https://david-dm.org/runnerty/executor-iterable
[config.json]: http://docs.runnerty.io/config/
[plan.json]: http://docs.runnerty.io/plan/
[runnerty-cli]: https://www.npmjs.com/package/runnerty-cli
