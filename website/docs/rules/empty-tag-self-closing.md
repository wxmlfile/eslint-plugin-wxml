---
sidebarDepth: 0
title: wxml/empty-tag-self-closing
---

# wxml/empty-tag-self-closing

## Background

::: tip Tag Self Closing

All wechat miniprogram wxml tag can be self closing, same with `eslint-plugin-react`'s [self-closing-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md) rule, but for `wxml`.

:::

## Motivation

Reduce code size and for better code style, easy to code review.

<eslint-code-block :rules="{'wxml/empty-tag-self-closing': ['error']}" >

```wxml
<!-- ✓ GOOD -->
<view bind:tap="clickhandler" />
<view />{{interpolation}}</view>
<view />text</view>
<view /><sub /></view>

<!-- ✗ BAD -->
<view bind:tap="clickhandler" ></view>

<view>

</view>
```

</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

No special options, normal config is ok

```json
{ "wxml/empty-tag-self-closing": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.2.1`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/empty-tag-self-closing.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/empty-tag-self-closing.js)