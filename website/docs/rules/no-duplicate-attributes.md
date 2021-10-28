---
sidebarDepth: 0
title: wxml/no-duplicate-attributes
---

# wxml/no-duplicate-attributes

## Motivation

This rule enforce developer don't write multi duplicate attributes

<eslint-code-block :rules="{'wxml/no-duplicate-attributes': ['error']}" >

```wxml
<!-- ✓ GOOD -->
<view
 title="{{title}}"
 name="{{name}}"
>
 <goods />
</view>

<!-- ✗ BAD -->
<view
 title="{{title}}"
 name="{{name}}"
 name="{{other}}"
>
 <goods />
</view>
```
</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

No special options, normal config is ok

```json
{ "wxml/no-duplicate-attributes": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.2.1`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/no-duplicate-attributes.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/no-duplicate-attributes.js)
