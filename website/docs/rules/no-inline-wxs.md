---
sidebarDepth: 0
title: wxml/no-inline-wxs
---

# wxml/no-inline-wxs

## Background

::: tip .wxs file and tag

WXS code can be written in `<wxs />` tags in a wxml file or in files with the extension `.wxs`.

[Wechat Document Reference](https://developers.weixin.qq.com/miniprogram/en/dev/reference/wxs/01wxs-module.html)

:::

## Motivation

This rule enforce developer use `.wxs` file instead of `<wxs />`, for better IDE support. (e.g. VSCode detect `.wxs` as `.js`, and then you can get full js language feature support)

<eslint-code-block :rules="{'wxml/no-inline-wxs': ['error']}" >

```wxml
<!-- ✓ GOOD -->
<wxs module="util" src="../../../util.wxs" />

<!-- ✗ BAD -->
<wxs module="util" >
  function util () {
    // balabala
  }
  module.exports = {
    util: util
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
{ "wxml/no-inline-wxs": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.2.1`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/no-inline-wxs.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/no-inline-wxs.js)