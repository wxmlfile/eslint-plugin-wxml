---
sidebarDepth: 0
title: wxml/event-binding-style
---

# wxml/event-binding-style

## Motivation

Force some style for event bidning.

1. Force everryone use `colon` style event binding.

<eslint-code-block :rules="{'wxml/event-binding-style': ['error', 'colon']}" >

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

2. Force everryone use `no-colon` style event binding.

<eslint-code-block :rules="{'wxml/event-binding-style': ['error', 'no-colon']}" >

```wxml
<!-- ✓ GOOD -->
<view bindtap="clickhandler" />
<view mut-bindtap="clickhandler" />
<view catchtap="clickhandler" />
<view capture-catchtap="clickhandler" />
<view capture-bindtap="clickhandler" />

<!-- ✗ BAD -->
<view bind:tap="clickhandler" />
<view mut-bind:tap="clickhandler" />
<view catch:tap="clickhandler" />
<view capture-catch:tap="clickhandler" />
<view capture-bind:tap="clickhandler" />
```

</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

You must set second params as one of ["`colon`", "`no-colon`"]

```json
{ "wxml/colon-style-event-binding": ["error", "colon"]}
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.7.4`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/event-binding-style.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/event-binding-style.js)
