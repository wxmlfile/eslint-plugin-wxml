---
sidebarDepth: 0
title: wxml/no-dot-this-in-wx-key
---

# wxml/no-dot-this-in-wx-key

## Background

::: tip *this

If the positions of list items dynamically change or new items are added to the list and you want the items in the list to retain their features and statuses (such as the content input in input and the selection status of switch), you must use wx:key to specify the unique identifiers of the items in the list.

The wx:key is provided in two formats:

* String: Represents a property of an item in the for loop array. The value of this property must be a unique string or number in the list and cannot dynamically change.
* Reserved keyword `*this`: Represents the item itself in the for loop. This expresses that the item itself is a unique string or number.

[Wechat Document Reference](https://developers.weixin.qq.com/miniprogram/en/dev/reference/wxml/list.html)

:::

## Motivation

This rule enforce developer use implicit `wx:key`, because not all loop array is `string[]` or `number[]`.

<eslint-code-block :rules="{'wxml/no-dot-this-in-wx-key': ['error']}" >

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
 wx:key="*this"
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
{ "wxml/no-dot-this-in-wx-key": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.2.1`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/no-dot-this-in-wx-key.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/no-dot-this-in-wx-key.js)
