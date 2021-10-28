---
sidebarDepth: 0
title: wxml/no-vue-directive
---

# wxml/no-vue-directive

### Backgroud

::: tip Directive

**wxml directives collection**

`wx:for`, `wx:for-item`, `wx:for-index`, `wx:key`

[Wechat Document Reference](https://developers.weixin.qq.com/miniprogram/en/dev/reference/wxml/list.html)

**vue directives collection**

`v-text`,`v-html`,`v-show`,`v-if`,`v-else`,`v-else-if`,`v-for`,`v-on`,`v-bind`,`v-model`,`v-slot`,`v-pre`,`v-cloak`,`v-once`,`v-memo`,`v-is`

[Vue Document Reference](https://v3.vuejs.org/api/directives.html)

:::

## Motivation

This is a funny rule, beacauce many miniprogram developers has `vuejs` development experience background, so developer will write `v-xx` directive in wxml code, that's muscle memory, this rule to avoid it.

<eslint-code-block :rules="{'wxml/no-vue-directive': ['error']}" >

```wxml
<!-- ✓ GOOD -->
<view wx:if="{{show}}"> {{title}}</view>

<!-- ✗ BAD -->
<view v-if="{{show}}"> {{title}}</view>
<view v-else-if="{{hide}}"> {{title}}</view>
```

</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

No special options, normal config is ok

```json
{ "wxml/no-vue-directive": "error" }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.2.1`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/no-vue-directive.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/no-vue-directive.js)
