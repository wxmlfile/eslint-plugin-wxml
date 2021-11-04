---
sidebarDepth: 0
title: wxml/no-wx-if-string
---

# wxml/no-wx-if-string

### Backgroud

::: danger

```html
<view wx:if="{{user}}"> {{user.name}}</view>
```

If you use `wx:if/wx:elif` as control flow, make sure `wx:if/wx:elif`'s value is a `boolean`, not a string (or dynamic string), otherwise the value will always be true, your code logic will be broken.

```txt
wx:if="{{show}} "  => wx:if="true " => true
wx:if="{{show}} "  => wx:if="false " => true
wx:if="{{show}}-s"  => wx:if="true-s" => true
wx:if="{{show}}-s"  => wx:if="false-s" => true
```

:::

## Motivation

Force developer using valid boolean interpolation as `wx:if/wx:elif`'s value, to avoid unexpected bug.

<eslint-code-block :rules="{'wxml/no-wx-if-string': ['error']}" >

```wxml
<!-- ✓ GOOD -->
<view wx:if="{{user}}"> {{user.name}}</view>
<view wx:elif="{{show}}">show this view</view>


<!-- ✗ BAD -->
<!-- {{}} with whitespace equals true -->
<view wx:if="{{showList}} "> I will be always show on the page </view>
<view wx:if="string"> I will be always show on the page </view>
<view wx:if="{{showSwitch}}-string"> I will be always show on the page </view>
<!-- wx:elif same with wx:if -->
<view wx:elif="string"> I will be always show on the page </view>
```

</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

No special options, normal config is ok

```json
{ "wxml/no-wx-if-string": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.4.1`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/no-wx-if-string.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/no-wx-if-string.js)
