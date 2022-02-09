---
sidebarDepth: 0
title: wxml/required-root-tag
---

# wxml/required-root-tag

## Background

::: tip Required Tags

Hint required tags for wxml file, sometimes we need special tag as root tag for some reason. same with `wxml/required-tags` but for root tag.

:::

## Motivation

hint developer don't forget add `required tag` as `root tag` for special wxml file

```json
{
  "wxml/required-root-tag": ["error", "page"]
}
```

<eslint-code-block :rules="{'wxml/required-root-tag': ['error', 'page']}" >

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
"wxml/required-root-tag": [<enabled>, string]
```

### Config Example

```json
{
  "wxml/required-root-tag": ["error", "page"]
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
        "wxml/required-root-tag": ["error", "page"]
      }
    }
  ]
}
```

> Only lint `*-page.wxml` and check if root tag is `<page>`.

## Version

This rule was introduced in eslint-plugin-wxml `v0.6.3`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/required-root-tag.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/required-root-tag.js)
