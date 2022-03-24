---
sidebarDepth: 0
title: wxml/report-wxml-syntax-error
---

# wxml/report-wxml-syntax-error

### Backgroud

::: tip wxml

`eslint-plugin-wxml` using `@wxml/parser` as parser to parse `wxml` source code, it provide `wxml` syntax error message. If you think this rules contain `bug`, please report it by [github issue](https://github.com/wxmlfile/eslint-plugin-wxml/issues).

:::

## Motivation

hint wxml syntax error in development time, save developer's time.

<eslint-code-block :rules="{'wxml/report-wxml-syntax-error': ['error']}" >
```wxml
<view>
  <view />
  {{
</view>
```
</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

No special options, normal config is ok

```json
{ "wxml/report-wxml-syntax-error": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.2.1`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/report-wxml-syntax-error.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/report-wxml-syntax-error.js)
