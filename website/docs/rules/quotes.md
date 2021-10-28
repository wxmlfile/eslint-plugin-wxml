---
sidebarDepth: 0
title: wxml/quotes
---

# wxml/quotes

### Backgroud

::: tip Quotes

Both `<view attr='singleQuotes'>` and `<view attr="doubleQuotes">` are valid in `wxml`.

:::

## Motivation

This rule enforce developer use same `quote` style in all wxml code base.

### Config Example 1
```json
{ "wxml/quotes": ["error", "double"] }
```
<eslint-code-block :rules="{'wxml/quotes': ['error', 'double']}" >

```wxml
<!-- ✓ GOOD -->
<component attr="{{data}}" />
<view v-if="{{show}}"> {{title}}</view>

<!-- ✗ BAD -->
<component attr='{{data}}' />
<view v-if='{{show}}'> {{title}}</view>
```

</eslint-code-block>

### Config Example 2
```json
{ "wxml/quotes": ["error", "single"] }
```

<eslint-code-block :rules="{'wxml/quotes': ['error', 'single']}" >

```wxml
<!-- ✓ GOOD -->
<component attr='{{data}}' />
<view v-if='{{show}}'> {{title}}</view>

<!-- ✗ BAD -->
<component attr="{{data}}" />
<view v-if="{{show}}"> {{title}}</view>
```

</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

config enum is `["single", "double"]`

```json
{ "wxml/quotes": ["error", "single"] }
```

::: warning config

`wxml/quotes` only accept `single` or `double` as config params currently.

:::

## Version

This rule was introduced in eslint-plugin-wxml `v0.2.1`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/quotes.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/quotes.js)
