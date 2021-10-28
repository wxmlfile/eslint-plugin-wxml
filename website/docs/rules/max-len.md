---
sidebarDepth: 0
title: wxml/max-len
---

# wxml/max-len

## Background

::: tip Max Len

Very long lines of code in any language can be difficult to read. In order to aid in readability and maintainability many coders have developed a convention to limit lines of code to X number of characters (traditionally 80 characters).same with official `eslint` rules [max-len](https://eslint.org/docs/rules/max-len), but for `wxml` code. 

:::

## Motivation

This rule enforces a maximum line length to increase code readability and maintainability. The length of a line is defined as the number of Unicode characters in the line.

### Config Example 1

```json
{ "wxml/max-len": ["error", 70] }
```

<eslint-code-block :rules="{'wxml/max-len': ['error', 70]}" >

```wxml
<!-- ✓ GOOD -->
<view depth="1"><view depth="2"><view depth="3"/></view></view>

<!-- ✗ BAD -->
<view depth="1"><view depth="2"><view depth="3"/><view depth="3"/><view depth="3"/></view></view>
```

</eslint-code-block>

### Config Example 2

```json
{ "wxml/max-len": ["error", { "code": 70, "ignoreWhitespace": true }] }
```

<eslint-code-block :rules="{'wxml/max-len': ['error', { code: 70, ignoreWhitespace: true }]}" >

```wxml
<!-- ✓ GOOD -->
                   <view depth="1"><view ><view depth="3"/></view></view>

<!-- ✗ BAD -->
<view depth="1"><view depth="2"><view depth="3"/><view depth="3"/><view depth="3"/></view></view>
```

</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

```typescript
"wxml/max-len": [<enabled>, <number | { code: number, ignoreWhitespace?: boolean }>]
```

::: warning ⚠️ warning

If you enable this rule, please provide a valid len `number` config, otherwise it not work, and `ignoreWhitespace` means `codestring.trim()` not really ignore all whitespace single line code content.

:::

## Version

This rule was introduced in eslint-plugin-wxml `v0.3.0`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/max-len.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/max-len.js)