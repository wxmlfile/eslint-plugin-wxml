---
sidebarDepth: 0
title: wxml/report-interpolation-error
---

# wxml/report-interpolation-error

### Backgroud

::: tip {{}} interpolation

> Mustache style [interpolation]([https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/data.html]) in wxml

`eslint-plugin-wxml` using `@wxml/parser` as parser to parse interpolation content, it provide `interpolation` syntax error message. If you think this rules contain `bug`, please report it by [github issue](https://github.com/wxmlfile/eslint-plugin-wxml/issues).

:::

## Motivation

hint interpolation syntax error in development time, save developer's time.

<eslint-code-block :rules="{'wxml/report-interpolation-error': ['error']}" >
```wxml
<view>
  <view style="idx-{{isOdd ? 'single'}}" />
  {{ a + }}
</view>
```
</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

No special options, normal config is ok

```json
{ "wxml/report-interpolation-error": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.7.0`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/report-interpolation-error.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/report-interpolation-error.js)
