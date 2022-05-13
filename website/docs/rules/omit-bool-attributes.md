---
sidebarDepth: 0
title: wxml/omit-bool-attributes
---

# wxml/omit-bool-attributes

### Backgroud

In [wxml](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/), when we use boolean attriute like  `< attr={{true}} />`, we can omit it and convert to `<a sttr />` just like [jsx](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md).

## Motivation

Force developer omit `true` attributes for better coding style and save miniprogram bundle size.

<eslint-code-block :rules="{'wxml/omit-bool-attributes': ['error']}" >

```wxml
<!-- ✓ GOOD -->
<cart showBadge />
<swiper autoplay />
<virtual-list hideSpinner="{{false}}" />


<!-- ✗ BAD -->
<cart showBadge="{{true}}" />
<swiper autoplay="{{true}}" />
```

</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

No special options, normal config is ok

```json
{ "wxml/omit-bool-attributes": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.7.1`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/omit-bool-attributes.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/omit-bool-attributes.js)
