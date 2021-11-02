---
sidebarDepth: 0
title: wxml/no-unnecessary-block
---

# wxml/no-unnecessary-block

## Background

::: tip Block with logic condition

**block wx:if**

Because wx:if is a control property, you must add it to a tag. To judge multiple component tags at once, you can use a `<block/>` tag to package multiple components together and use the wx:if control property above.

[Wechat Document Reference](https://developers.weixin.qq.com/miniprogram/en/dev/reference/wxml/conditional.html)

**block wx:for**

Similar to block wx:if, you can use wx:for on a `<block/>` tag to render a structural block containing multiple nodes.

[Wechat Document Reference](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/list.html)

:::

## Optimize

In some case, you don't need `<block />`, following code is equivalent.

```html
<block wx:for="{{list}}" wx:key="id">
  <goods name="{{item.name}}" img="{{item.imgUrl}}" />
</block>
```
equivalent to
```html
<goods
  wx:for="{{list}}"
  wx:key="id"
  name="{{item.name}}"
  img="{{item.imgUrl}}"
/>
```

less code but same effect and more clean

## Motivation

optimize code to make sense and reduce code size

::: warning

`<block/>` is not a `component`, just a `package element`. It does not perform any rendering on the page and only accepts control properties.

:::

::: tip wx:for

But in a special edge case, we allow block only contain a single child element.

```html
<block wx:if="{{showList}}">
  <view wx:for="{{list}}"> {{item.name}}</view>
</block>
```

Wechat miniprogram official disallow using `wx:for` with `wx:if|wx:elif|wx:else` at same tag, the only solution is use `<block />` to wrap the loop list.

[Wechat Document Reference](https://developers.weixin.qq.com/community/develop/doc/00082a556fcb0810a6b7e2eee5b800)

:::

<eslint-code-block :rules="{'wxml/no-unnecessary-block': ['error']}" >

```wxml
<!-- ✓ GOOD -->
<block wx:if="{{show}}"> {{title}}</block>
<block wx:if="{{show}}">
  <multi-children />
  <view>
    <sub-view />
  </view>
</block>
<!-- use <block /> to wrap loop list is official recommended -->
<block wx:if="{{showList}}">
  <view wx:for="{{list}}"> {{item.name}}</view>
</block>

<!-- ✗ BAD -->
<block wx:for="{{list}}" wx:key="id">
  <goods name="{{item.name}}" img="{{item.imgUrl}}" />
</block>
<block wx:if="{{show}}"> </block>
<block wx:if="{{show}}">
  <view>
    <sub-view />
  </view>
</block>
```

</eslint-code-block>

::: tip 💡 tips

You can edit code via online editor, it's online REPL, try to fix eslint problem !

:::

## Config

No special options, normal config is ok

```json
{ "wxml/no-unnecessary-block": "error" }
```

## History

| Version | Changes
|:---|:---|
| v0.4.0 | allow single child when loop list to avoid this [error](https://developers.weixin.qq.com/community/develop/doc/00082a556fcb0810a6b7e2eee5b800) |

## Version

This rule was introduced in eslint-plugin-wxml `v0.3.0`

## Implementation

- [Rule Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/lib/rules/no-unnecessary-block.js)
- [Test Source Code](https://github.com/wxmlfile/eslint-plugin-wxml/tree/main/tests/rules/no-unnecessary-block.js)
