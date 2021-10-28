---
sidebarDepth: 0
title: wxml/no-unexpected-string-bool
---

# wxml/no-unexpected-string-bool

## Background

::: tip boolean in data binding

Keywords (must be enclosed in double quotes)
* `True`: Boolean-type true.
* `false`: Boolean-type false.

```html
<checkbox checked="{{false}}"> </checkbox>
```

Note: Do not directly write `checked="false"`. Its computing result is a string which represents a true value when converted to a Boolean value.

[Wechat Document Reference](https://developers.weixin.qq.com/miniprogram/en/dev/reference/wxml/data.html)

:::

## Motivation

This rule enforce developer avoid using wrong `boolean` in wxml data binding

<eslint-code-block :rules="{'wxml/no-unexpected-string-bool': ['error']}" >

```wxml
<!-- ✓ GOOD -->
<checkbox checked="{{false}}"> </checkbox>
<popup showMask />

<!-- ✗ BAD -->
<checkbox checked="false"> </checkbox>
<popup showMask="true" />
```
</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

No special options, normal config is ok

```json
{ "wxml/no-unexpected-string-bool": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.2.1`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/no-unexpected-string-bool.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/no-unexpected-string-bool.js)
