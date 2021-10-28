---
sidebarDepth: 0
title: wxml/wxs-must-be-top-level
---

# wxml/wxs-must-be-top-level

### Backgroud

::: tip wxs

`<wxs />` can be located at top level in `wxml`, also can be nested.

:::

## Motivation

This rule enforce every `wxs` must be top level, for better code style

<eslint-code-block :rules="{'wxml/wxs-must-be-top-level': ['error']}" >

```wxml
<!-- ✓ GOOD -->
<!-- top level wxs -->
<wxs module="util" src="../../utils.wxs" />

<!-- ✗ BAD -->
<view>
  <view>
    <!-- nested wxs -->
    <wxs module="util" src="../../../util.wxs" />
  </view>
</view>
```

</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

No special options, normal config is ok

```json
{ "wxml/wxs-must-be-top-level": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.3.0`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/wxs-must-be-top-level.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/wxs-must-be-top-level.js)
