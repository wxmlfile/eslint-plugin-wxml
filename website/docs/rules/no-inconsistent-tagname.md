---
sidebarDepth: 0
title: wxml/no-inconsistent-tagname
---

# wxml/no-inconsistent-tagname

## Motivation

Find startTag name and endTag name not equal at development stage. 

<eslint-code-block :rules="{'wxml/no-inconsistent-tagname': ['error']}" >

```wxml
<!-- ✓ GOOD -->
<view
 wx:for="{{goodsList}}"
 wx:key="goodsId"
>
 {{item.name}}
</view>
<same-name>
    {{"tag name must be equal"}}
</same-tag-name>

<!-- ✗ BAD -->
<view
 wx:for="{{goodsList}}"
 wx:key="id-{{goodsId}}"
>
 {{item.name}}
</viw>
```
</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

No special options, normal config is ok

```json
{ "wxml/no-inconsistent-tagname": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.7.2`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/no-inconsistent-tagname.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/no-inconsistent-tagname.js)
