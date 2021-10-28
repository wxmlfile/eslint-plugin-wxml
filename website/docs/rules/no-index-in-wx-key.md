---
sidebarDepth: 0
title: wxml/no-index-in-wx-key
---

# wxml/no-index-in-wx-key

## Background

::: tip index

In a component, by binding an array using the wx:for control property, you can use the data of the array items to re-render this component.

The subscript variable name of the current item of the default array defaults to index, and the variable name of the current item of the array defaults to item.

[Wechat Document Reference](https://developers.weixin.qq.com/miniprogram/en/dev/reference/wxml/list.html)

:::

## Motivation

This rule enforce developer use implicit `wx:key`

<eslint-code-block :rules="{'wxml/no-index-in-wx-key': ['error']}" >

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
 wx:key="index"
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
{ "wxml/no-index-in-wx-key": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.2.1`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/no-index-in-wx-key.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/no-index-in-wx-key.js)
