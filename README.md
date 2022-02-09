<div align="center">
    <a href="https://www.npmjs.com/package/eslint-plugin-wxml" ><img src="https://funimg.pddpic.com/mobile_piggy/4d0f5a17-574b-4fbc-aee1-1b0cbb1c46dd.png.slim.c1.png" width="150" height="150"></a>
    <h1>eslint-plugin-wxml</h1>
</div>

[![npm version](https://img.shields.io/npm/v/eslint-plugin-wxml)](https://www.npmjs.com/package/eslint-plugin-wxml)
[![npmmirror version](https://npmmirror.com/badge/v/eslint-plugin-wxml.svg)](https://npmmirror.com/package/eslint-plugin-wxml)
[![CI](https://github.com/wxmlfile/eslint-plugin-wxml/actions/workflows/ci.yml/badge.svg)](https://github.com/wxmlfile/eslint-plugin-wxml/actions/workflows/ci.yml)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/wxmlfile/eslint-plugin-wxml/pulls)
[![Twitter Follow Author](https://img.shields.io/twitter/follow/s_chenlei)](https://twitter.com/s_chenlei)

### A [ESLint](https://eslint.org) plugin to lint [wxml](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml) files.

## Show Case

![vscode eslint-plugin-wxml](https://funimg.pddpic.com/mobile_piggy/3c944e77-0792-4bee-a137-aa6922d94cfb.gif)

## Installation

```bash
## npm
$ npm install eslint-plugin-wxml --save-dev

## cnpm (for china user)
$ cnpm install eslint-plugin-wxml --save-dev

## pnpm
$ pnpm add eslint-plugin-wxml -D

## yarn
$ yarn add eslint-plugin-wxml -D
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
## Missing Rule
Missing your wanted rule ? please report it as a new [github issue](https://github.com/wxmlfile/eslint-plugin-wxml/issues), thanks !

## Documentation

See [the official website](https://eslint-plugin-wxml.js.org/)

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021-present, Lei Chen
