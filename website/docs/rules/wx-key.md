---
sidebarDepth: 0
title: wxml/wx-key
---

# wxml/wx-key

### Backgroud

::: tip wx:key

If `wx:key`, is not provided, a warning is reported. If you know that this list is static or the order is not important, you can ignore the warning.

[Wechat Document Reference](https://developers.weixin.qq.com/miniprogram/en/dev/reference/wxml/list.html)

:::

## Motivation

hint developer don't forget add `wx:key` when loop data in wxml.

<eslint-code-block :rules="{'wxml/wx-key': ['error']}" >

```wxml
<!-- ✓ GOOD -->
<view wx:for="{{list}}" wx:key="goodsId">
  <view>item.title</view>
</view>

<!-- ✗ BAD -->
<view wx:for="{{list}}">
  <view>item.title</view>
</view>
```

</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

No special options, normal config is ok

```json
{ "wxml/wx-key": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.3.0`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/wx-key.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/wx-key.js)
