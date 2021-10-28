---
sidebarDepth: 0
title: wxml/required-attributes
---

# wxml/required-attributes

## Background

::: tip Required Attributes

Hint required attributes for config wxml tags, same with `eslint-plugin-react`'s [require-default-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md) rule, but for `wxml` and exist difference.

:::

## Motivation

hint developer don't forget add `required attributes` in config wxml tag.

```json
{
  "wxml/required-attributes": [
    "warn",
    { "tag": "popup", "attrs": ["showModal", "popupId"] },
    { "tag": "img", "attrs": ["src", { "key": "width", "value": "100px" }] }
  ]
}
```

<eslint-code-block :rules="{'wxml/required-attributes': ['warn',{ 'tag': 'popup', 'attrs': ['showModal', 'popupId'] },{ 'tag': 'img', 'attrs': ['src', { 'key': 'width', 'value': '100px' }] }]}" >

```wxml

<popup name="welcome">


  <img useWebp >


</popup>

```

</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

```typescript
"wxml/required-attributes": [<enabled>, <{ tag: string, attrs: <string | { key: string, value: string }>[] }>] }]
```

### Config Example

```json
{
  "wxml/required-attributes": [
    "warn",
    { "tag": "popup", "attrs": ["showModal", "popupId"] },
    { "tag": "img", "attrs": ["src", { "key": "width", "value": "100px" }] }
  ]
}
```

::: tip High Level Usage

Challenge: Check all missing `showMask` property `<popup />` in your `.wxml` code base.

Solution
* Wirte `eslintrc` config as follow

```json
{
  "wxml/required-attributes": [
    "error",
    { "tag": "popup", "attrs": ["showMask"] }
  ]
}
```

* run `eslint` cli

```bash
$ eslint src/**/*.wxml --quiet
```

* and then all wrong popup wxml file will log in your terminal

```bash
D:\\miniprogram\\src\\pages\\home\\main.wxml
 1:2 error <popup> missing these attributes -> ["showMask"] wxml/required-attributes

x 1 problems (1 errors, 0 warnings)
```

:::

## Version

This rule was introduced in eslint-plugin-wxml `v0.2.1`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/required-attributes.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/required-attributes.js)
