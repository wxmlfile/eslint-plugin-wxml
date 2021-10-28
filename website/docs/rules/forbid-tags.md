---
sidebarDepth: 0
title: wxml/forbid-tags
---

# wxml/forbid-tags

## Background

::: tip Forbid Tags

This rule checks all wxml tags and verifies that no forbidden tags are used. This rule is off by default. If on, no tags are forbidden by default. same with `eslint-plugin-react`'s [forbid-elements](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md) rule, but for `wxml`.

:::

## Motivation

You may want to forbid usage of certain tags in favor of others, (e.g. forbid all `<div />` and use `<view />` instead). This rule allows you to configure a list of forbidden tags and to specify their desired replacements.

```js
// following code use this config
{
  "wxml/forbid-tags": [
    "error",
    {
      "forbid":
      [
        "div",
        "span",
        {
          "tag": "p",
          "message": "please use <text />"
        }
      ]
    }
  ]
}
```

<eslint-code-block :rules="{'wxml/forbid-tags': ['error', { forbid: [ 'div', 'span', { tag: 'p', message: 'please use <text />' } ] }]}" >

```wxml
<!-- ✓ GOOD -->
<view />text</view>
<view /><sub /></view>

<!-- ✗ BAD -->
<div>{{name}}</div>
<span>{{title}}</span>
<!-- hint use <text />  -->
<p>{{title}}</p>
```

</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

```typescript
"wxml/forbid-tags": [<enabled>, { "forbid": [<string|{ tag: string, message: string }>] }]
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.2.1`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/forbid-tags.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/forbid-tags.js)