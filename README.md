<div align="center">
  <a href="https://github.com/omnious-dev/eslint-config-omnious" title="ESLint Config Omnious">
    <img alt="ESLint Config Omnious" src="https://raw.githubusercontent.com/omnious-dev/i/master/omnious-logo.png" width="240px" />
  </a>
  <br />
  <h1>eslint-config-omnious</h1>
</div>

<p align="center">
  ESLint <a href="http://eslint.org/docs/developer-guide/shareable-configs.html">shareable config</a> for the Omnious JavaScript style guide
</p>

<div align="center">
  <a href="https://opensource.org/licenses/mit-license.php">
    <img alt="MIT Licence" src="https://badges.frapsoft.com/os/mit/mit.svg?v=103" />
  </a>
  <a href="https://github.com/ellerbrock/open-source-badge/">
    <img alt="Open Source Love" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103" />
  </a>
</div>

<br />


## Installation

```
# NPM
$ npm install --save-dev eslint eslint-config-omnious
# Yarn
$ yarn add -D eslint eslint-config-omnious
```


## Usage

Once the `eslint-config-omnious` package is installed, you can use it by specifying `omnious` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "omnious",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### Using the `omnious` config with `eslint:recommended`

There are several rules in the [`eslint:recommended` ruleset](http://eslint.org/docs/rules/) that Omnious style is not opinionated about that you might want to enforce in your project.

To use Omnious style in conjunction with ESLint's recommended rule set, extend them both, making sure to list `omnious` last:

```js
{
  "extends": ["eslint:recommended", "omnious"],
  "rules": {
    // Additional, per-project rules...
  }
}
```


## License

[MIT](https://github.com/omnious-dev/eslint-config-omnious/blob/master/LICENSE) © [Omnious](http://www.omnious.com)
