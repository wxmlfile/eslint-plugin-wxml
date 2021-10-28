---
sidebarDepth: 0
title: wxml/no-const-and-let-in-wxs
---

# wxml/no-const-and-let-in-wxs

## Background

::: tip let and const

[let and const not work in wxs](https://developers.weixin.qq.com/community/develop/doc/0002a0fd3b8ca00ee9d8f13245b400?highLine=wxs%2520let)

Concepts
In WXS, all variables reference values.
* Undeclared variables that use directly assigned values are defined as global variables.
* If you declare a variable but do not assign a value, its default value is undefined.
* The var performance is consistent with JavaScript and variable hoisting is performed.

[Wechat Document Reference](https://developers.weixin.qq.com/miniprogram/en/dev/reference/wxs/02variate.html)

:::

## Motivation

This rule hint wechat miniprogram developer don't using `let` and `const` in `wxs`.

<eslint-code-block :rules="{'wxml/no-const-and-let-in-wxs': ['error']}" >

```wxml
<!-- ✓ GOOD -->
<wxs module="util" >
  var s = 100;
  module.exports = {
    data: s
  }
</wxs>

<!-- ✗ BAD -->
<wxs module="util" >
  let s = 100;

  const k = {};

  module.exports = {
    data: s,
    obj: k
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
{ "wxml/no-const-and-let-in-wxs": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.2.1`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/no-const-and-let-in-wxs.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/no-const-and-let-in-wxs.js)