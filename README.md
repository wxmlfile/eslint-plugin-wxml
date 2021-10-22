<div align="center">
    <a href="https://www.npmjs.com/package/eslint-plugin-wxml" ><img src="https://funimg.pddpic.com/mobile_piggy/4d0f5a17-574b-4fbc-aee1-1b0cbb1c46dd.png.slim.c1.png" width="150" height="150"></a>
    <h1>eslint-plugin-wxml</h1>
</div>

[![npm version](https://img.shields.io/npm/v/eslint-plugin-wxml)](https://www.npmjs.com/package/eslint-plugin-wxml)
[![cnpm version](https://cnpmjs.org/badge/v/eslint-plugin-wxml.svg)](https://cnpmjs.org/package/eslint-plugin-wxml)
[![CI](https://github.com/wxmlfile/eslint-plugin-wxml/actions/workflows/ci.yml/badge.svg)](https://github.com/wxmlfile/eslint-plugin-wxml/actions/workflows/ci.yml)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/wxmlfile/eslint-plugin-wxml/pulls)
[![Twitter Follow Author](https://img.shields.io/twitter/follow/s_chenlei)](https://twitter.com/s_chenlei)

### A [ESLint](https://eslint.org) plugin to lint [wxml](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml) files.

## Installation

```bash
## npm
$ npm install eslint-plugin-wxml --save-dev
## yarn
$ yarn add eslint-plugin-wxml --dev
## cnpm (for china user)
$ cnpm install eslint-plugin-wxml --save-dev
```

## Basic Usage

### change your eslintrc config

> .eslintrc .eslintrc.yml .eslinrc.json .eslintrc.js

```diff
+  "overrides": [
+    {
+      "files": ["*.wxml"],
+      "rules": {
+        "wxml/report-wxml-syntax-error": "error"
+      },
+      "plugins": ["wxml"],
+      "processor": "wxml/wxml",
+      "parser": "@wxml/parser"
+    }
+  ],
```

## Editor integrations

### Visual Studio Code

Use the [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension that Microsoft provides officially.

You have to configure the `eslint.validate` option of the extension to check `.wxml` files, because the extension targets only `*.js` or `*.jsx` files by default.

Example **.vscode/settings.json**:

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "wxml"
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
