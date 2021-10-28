---
sidebarDepth: 0
title: wxml/wxs-module-prop
---

# wxml/wxs-module-prop

### Backgroud

::: tip wxs module property

The module property is the module name of the current `<wxs>` tag. In a single wxml file, we recommend that this value be unique. In the case of duplicate module names, the value is overwritten based on the order (the latter overwrites the former). The names of wxs modules are not overwritten across different files.

The name specified by the module property value must comply with the following rules:

* The first character must be an English letter (a-z, A-Z) or underscore (_).
* The remaining characters can be English letters (a-z, A-Z), underscores (_), or numbers (0-9).

[Wechat Document Reference](https://developers.weixin.qq.com/miniprogram/en/dev/reference/wxs/01wxs-module.html)

:::

## Motivation

check missing `module` attribute and validate `module` name

<eslint-code-block :rules="{'wxml/wxs-module-prop': ['error']}" >

```wxml
<!-- ✓ GOOD -->
<wxs module="util" src="../../utils.wxs" />
<wxs module="_internel" src="../../utils.wxs" />
<wxs module="mode">
 function show () {
   return "show";
 }
 module.exports = {
   func: show
 }
</wxs>

<!-- ✗ BAD -->
<wxs module="0util" src="../../utils.wxs" />
<wxs module="-util" src="../../utils.wxs" />
<wxs module="^util" src="../../utils.wxs" />
<wxs src="../../utils.wxs" />
<wxs>
 function show () {
   return "show";
 }
 module.exports = {
   func: show
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
{ "wxml/wxs-module-prop": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.3.0`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/wxs-module-prop.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/wxs-module-prop.js)
