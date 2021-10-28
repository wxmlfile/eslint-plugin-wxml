---
sidebarDepth: 0
title: wxml/max-lines
---

# wxml/max-lines

## Background

::: tip Max Lines

Some people consider large files a code smell. Large files tend to do a lot of things and can make it hard following what's going. While there is not an objective maximum number of lines considered acceptable in a file, most people would agree it should not be in the thousands. Recommendations usually range from 100 to 500 lines. same with official `eslint` rules [max-lines](https://eslint.org/docs/rules/max-lines), but for `wxml`. 

:::

## Motivation

This rule enforces a maximum number of lines per file, in order to aid in maintainability and reduce complexity.

::: warning
Please note that most editors show an additional empty line at the end if the file ends with a line break. This rule does not count that extra line.
:::

### Config Example 1

```json
{ "wxml/max-lines": ["error", 6] }
```

<eslint-code-block :rules="{'wxml/max-lines': ['error', 6]}" >

```wxml
<!-- comment also will be count as lines -->
<view line="1">
  <view line="2">
    <view line="3"></view>
  </view>
  <view line="5"></view>
</view>
```

</eslint-code-block>

### Config Example 2

```json
{ "wxml/max-lines": ["error", { "max": 10, "skipBlankLines": true }]}
```

<eslint-code-block :rules="{'wxml/max-lines': ['error', { 'max': 10, 'skipBlankLines': true }]}" >

```wxml
<view line="1" />
<view line="2" />


<view line="3" />


<view line="4" />

<view line="5" />


<view line="6" />
```

</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

```typescript
"wxml/max-lines": [<enabled>, <number | { max: number, skipBlankLines?: boolean }>]
```

::: warning ⚠️ warning

If you enable this rule, please provide a valid max `number` config, otherwise it not work, because no default max-lines number

:::

## Version

This rule was introduced in eslint-plugin-wxml `v0.3.0`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/max-lines.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/max-lines.js)