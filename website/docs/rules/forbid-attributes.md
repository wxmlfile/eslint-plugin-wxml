---
sidebarDepth: 0
title: wxml/forbid-attributes
---

# wxml/forbid-attributes

## Motivation

Forbid using some attributes. For example: jsx use `className` but wxml use `class` as class name. So we can hint developer to chose right attribute when migrate from react project to wechat miniprogram.

```js
// following code use this config
{
  "wxml/forbid-attributes": [
    "error",
    {
      "forbid":
      [
        {
          "attr": "className",
          "message": "wxml use class not jsx className"
        }
      ]
    }
  ]
}
```

<eslint-code-block :rules="{'wxml/forbid-attributes': ['error', { forbid: [ { attr: 'fuck', message: 'dont use dirty words ' }, { attr: 'className', message: 'wxml use class as class name not jsx className' } ] }]}" >

```wxml
<!-- ✓ GOOD -->
<text class="text-center" >{{name}}</div>

<!-- ✗ BAD -->
<text className="text-center" >{{name}}</div>
<text fuck="true" >{{name}}</div>
```

</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

```typescript
"wxml/forbid-attributes": [<enabled>, { "forbid": [<string|{ attr: string, message: string }>] }]
```

## Version

This rule was introduced in eslint-plugin-wxml `v0.7.3`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/forbid-attributes.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/forbid-attributes.js)
