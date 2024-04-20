# User Guide

## :cd: Installation

Via [npm](https://www.npmjs.com):

```bash
npm install --save-dev eslint eslint-plugin-wxml
```

Via [cnpm](https://www.cnpmjs.org):

```bash
cnpm install --save-dev eslint eslint-plugin-wxml
```

Via [yarn](https://yarnpkg.com):

```bash
yarn add -D eslint eslint-plugin-wxml
```

Via [pnpm](https://pnpm.io):

```bash
pnpm add -D eslint eslint-plugin-wxml
```

::: tip Requirements

- ESLint v7.0.0 and above
- Node.js v10, v12, v14, v16 and above

:::

## :book: Usage

### Configuration (`eslint.config.mjs`)

Use `eslint.config.mjs` file to configure rules. This is the default in ESLint v9, but can be used starting from ESLint v8.57.0. See also: <https://eslint.org/docs/latest/use/configure/configuration-files-new>.

Example **eslint.config.mjs**:

```js
import wxml from "eslint-plugin-wxml";
import wxmlParser from "@wxml/parser";

export default [
  {
    files: ["**/*.wxml"],
    plugins: {
      wxml: wxml,
    },
    languageOptions: {
      parser: wxmlParser,
    },
    rules: {
      "wxml/colon-style-event-binding": "error",
    },
  },
];
```

See [the rule list](../rules/README.md) to get the `extends` &amp; `rules` that this plugin provides.

### Configuration (`.eslintrc`)

Use `.eslintrc.*` file to configure rules. See also: [https://eslint.org/docs/user-guide/configuring](https://eslint.org/docs/user-guide/configuring).

Example **.eslintrc.js**:

```js
module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.wxml"],
      rules: {
        "wxml/report-wxml-syntax-error": "error"
      },
      plugins: ["wxml"],
      processor: "wxml/wxml",
      parser: "@wxml/parser"
    },

    // all your raw config need move to anthor overrides !
    {
      files: ["*.js","*.ts","*.tsx","*.jsx"],
      parser: "babel-eslint",
      extends: [
        "eslint:recommended",
      ],
      plugins: [
        "es",
        "eslint-plugin-prettier"
      ],
      rules: {
        semi: [2, "always"],
        "no-console": 2,
        "semi-spacing": [2, { "before": false, "after": true }],
        "no-extra-semi": 2
      }
    }
  ]
}
```
::: warning
`wxml` eslint config and your raw `ts/tsx/js/jsx` eslint config must be separated, beacuse the known eslint limitations,
Releative Stackoverflow disscussion: [eslint-disable-extends-in-override](https://stackoverflow.com/questions/57107800/eslint-disable-extends-in-override)
:::


See [the rule list](../rules/README.md) to get the `extends` &amp; `rules` that this plugin provides.

### Running ESLint from the command line

If you want to run `eslint` from the command line, make sure you include the `.wxml` extension using [the `--ext` option](https://eslint.org/docs/user-guide/configuring#specifying-target-files-to-lint) or a glob pattern, because ESLint targets only `.js` files by default.

Examples:

```bash
eslint --ext .js,.wxml src
eslint "src/**/*.{js,wxml}"
```

## :computer: Editor integrations

### Visual Studio Code

Use the [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension that Microsoft provides officially.

You have to configure the `eslint.validate` option of the extension to check `.wxml` files, because the extension targets only `*.js` or `*.jsx` files by default.

Example **.vscode/settings.json**:

```diff
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
+    "wxml"
  ]
}
```

### Sublime Text

Use Package Control to install **SublimeLinter** and its ESLint extension **[SublimeLinter-eslint](https://github.com/SublimeLinter/SublimeLinter-eslint)**.

In the menu go to `Preferences > Package Settings > SublimeLinter > Settings` and paste in this:

```json
{
  "linters": {
    "eslint": {
      "selector": "text.html.wxml, source.js - meta.attribute-with-value"
    }
  }
}
```

### Atom editor

Go into `Settings -> Packages -> linter-eslint`, under the option "List of scopes to run eslint on", add `text.html.wxml`. You may need to restart Atom.

### IntelliJ IDEA / JetBrains WebStorm

In the **Settings/Preferences** dialog (`Cmd+,`/`Ctrl+Alt+S`), choose JavaScript under **Languages and Frameworks** and then choose **ESLint** under **Code Quality Tools**.
On the **ESLint page** that opens, select the *Enable* checkbox.

If your ESLint configuration is updated (manually or from your version control), open it in the editor and choose **Apply ESLint Code Style Rules** in the context menu.

read more: [JetBrains - ESLint](https://www.jetbrains.com/help/idea/eslint.html)

## :question: FAQ

### Why doesn't it work on .wxml files?

1. Make sure your tool is set to lint `.wxml` files.

    - CLI targets only `.js` files by default. You have to specify additional extensions with the `--ext` option or glob patterns. E.g. `eslint "src/**/*.{js,wxml}"` or `eslint src --ext .wxml`.
    - If you are having issues with configuring editor, please read [editor integrations](#editor-integrations)

#### Other Problems

Try searching for existing issues.
If it does not exist, you should open a new issue and share your repository to reproduce the issue.
