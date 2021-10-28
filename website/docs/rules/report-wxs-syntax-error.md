---
sidebarDepth: 0
title: wxml/report-wxs-syntax-error
---

# wxml/report-wxs-syntax-error

### Backgroud

::: tip wxs

`eslint-plugin-wxml` using `expree`(use local node_modules eslint's builtin espree) to parse inline wxs, but `espree` not support `recovery mode`, so maybe it's parse error will make you feel confused.

:::

## Motivation

hint `wxs(inline)` syntax error in development time, save developer's time.

<eslint-code-block :rules="{'wxml/report-wxs-syntax-error': ['error']}" >
```wxml
<wxs module="util" >
  funcytion ss () {

  }
</wxs>
```
</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

No special options, normal config is ok

```json
{ "wxml/report-wxs-syntax-error": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.2.1`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/report-wxs-syntax-error.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/report-wxs-syntax-error.js)
