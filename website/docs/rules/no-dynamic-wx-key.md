---
sidebarDepth: 0
title: wxml/no-dynamic-wx-key
---

# wxml/no-dynamic-wx-key

## Motivation

This rule enforce developer don't set dynamic `wx:key`

<eslint-code-block :rules="{'wxml/no-dynamic-wx-key': ['error']}" >

```wxml
<!-- ✓ GOOD -->
<view
 wx:for="{{goodsList}}"
 wx:key="goodsId"
>
 {{item.name}}
</view>

<!-- ✗ BAD -->
<view
 wx:for="{{goodsList}}"
 wx:key="id-{{goodsId}}"
>
 {{item.name}}
</view>
```
</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

No special options, normal config is ok

```json
{ "wxml/no-dynamic-wx-key": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.3.0`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/no-dynamic-wx-key.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/no-dynamic-wx-key.js)
