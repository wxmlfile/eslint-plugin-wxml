---
sidebarDepth: 0
title: wxml/required-tags
---

# wxml/required-tags

## Background

::: tip Required Tags

Hint required tags for wxml file, sometimes we need special tags for some reason. For example, our `page`.wxml need `<page></page>` to inject some common logic. This rule is for that case.

:::

## Motivation

hint developer don't forget add `required tags` for special wxml file

```json
{
  "wxml/required-tags": ["error", "observer", "page"]
}
```

<eslint-code-block :rules="{'wxml/required-tags': ['error', 'page']}" >

```wxml

<app name="e-commerce">
  <main />
  <list />
</app>

```

</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

```typescript
"wxml/required-tags": [<enabled>, ...string[]]
```

### Config Example

```json
{
  "wxml/required-tags": ["error", "page"]
}
```

```json
{
  "overrides": [
    {
      "files": ["src/**/*-page.wxml"],
      "plugins": ["wxml"],
      "processor": "wxml/wxml",
      "parser": "@wxml/parser",
      "rule": {
        "wxml/required-tags": ["error", "page"]
      }
    }
  ]
}
```

> Only lint `*-page.wxml` and check `<page />` if it exist.

## Version

This rule was introduced in eslint-plugin-wxml `v0.6.2`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/required-tags.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/required-tags.js)
