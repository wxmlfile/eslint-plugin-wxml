---
sidebarDepth: 0
title: wxml/max-depth
---

# wxml/max-depth

## Background

::: tip Max Depth

Many developers consider code difficult to read if tags are nested beyond a certain depth, same with official `eslint` rules [max-depth](https://eslint.org/docs/rules/max-depth), but for `wxml` tag depth. 

:::

## Motivation

This rule enforces a maximum depth that tags can be nested to reduce code complexity.

<eslint-code-block :rules="{'wxml/max-depth': ['error', 3]}" >

```wxml
<!-- ✓ GOOD -->
<view depth="1">
  <view depth="2">
    <view depth="3"></view>
  </view>
  <view depth="2"></view>
</view>

<!-- ✗ BAD -->
<view depth="1">
  <view depth="2">
    <view depth="3">
      <view depth="4">
        <view depth="5">
         <view depth="6" />
        </view>
      </view>
    </view>
  </view>
</view>
```

</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

```typescript
"wxml/max-depth": [<enabled>, number]
```

### onfig example

```json
{ "wxml/max-depth": ["error", 10] }
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.3.0`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/max-depth.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/max-depth.js)