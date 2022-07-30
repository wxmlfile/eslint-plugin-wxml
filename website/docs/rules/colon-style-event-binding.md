---
sidebarDepth: 0
title: wxml/colon-style-event-binding
---

# wxml/colon-style-event-binding

## Backgound

::: tip Colon-Style Event Binding

Key starts with `bind` or `catch`, followed by the event type, such as `bindtap` and `catchtouchstart`. As of base library version `1.5.0`, in non-`native-component`, bind and catch can be followed by a `colon` with their meaning remaining unchanged.

[Wechat Document Reference](https://developers.weixin.qq.com/miniprogram/en/dev/framework/view/wxml/event.html)

:::

## Motivation

Force everryone use colon-style event binding.

<eslint-code-block :rules="{'wxml/colon-style-event-binding': ['error']}" >

```wxml
<!-- ✓ GOOD -->
<view bind:tap="clickhandler" />
<view mut-bind:tap="clickhandler" />
<view catch:tap="clickhandler" />
<view capture-catch:tap="clickhandler" />
<view capture-bind:tap="clickhandler" />

<!-- ✗ BAD -->
<view bindtap="clickhandler" />
<view mut-bindtap="clickhandler" />
<view catchtap="clickhandler" />
<view capture-catchtap="clickhandler" />
<view capture-bindtap="clickhandler" />
```

</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

No special options, normal config is ok

```json
{ "wxml/colon-style-event-binding": "error" }
```

## History

| Version | Changes
|:---|:---|
| v0.7.4 | Deprecated, use [wxml/event-binding-style](https://eslint-plugin-wxml.js.org/rules/event-binding-style.html) instead |

## Version

This rule was introduced in eslint-plugin-wxml `v0.3.0`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/colon-style-event-binding.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/colon-style-event-binding.js)
